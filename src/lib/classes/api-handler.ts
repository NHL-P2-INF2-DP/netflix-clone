import type { Role } from '@prisma/client';
import type { NextRequest } from 'next/server';
import type { z } from 'zod';

import { StatusCodes } from 'http-status-codes';

import type { HttpMethod } from '@/app/api/v1/[route]/route';

import { logger } from '../pinologger';
import prisma from '../prisma';
import { routeConfigurations } from '../routes';
import { AuthenticationService } from './authentication-service';
import { ResponseFormatter } from './reponse-formatter';
import { RouteController } from './route-manager';

interface PaginationParams {
  page?: number;
  limit?: number;
}

interface ValidationResult {
  error?: Response;
  routeConfig?: any;
  auth?: any;
  modelKey?: string;
}

type PrismaModelMethod = 'findMany' | 'create' | 'update' | 'delete';

export class ApiRouteHandler {
  private readonly request: NextRequest;
  private readonly route: string;
  private readonly method: HttpMethod;
  private readonly routeController: RouteController;
  private readonly requestHeader: string | undefined;
  private readonly id?: string;

  constructor(
    request: NextRequest,
    route: string,
    method: HttpMethod,
    id?: string,
  ) {
    this.request = request;
    this.route = route;
    this.method = method;
    this.routeController = new RouteController(routeConfigurations);
    this.requestHeader = request.headers.get('Accept') ?? undefined;
    this.id = id;
  }

  private async validateRequest(): Promise<ValidationResult> {
    const routeConfig = this.routeController.getRouteConfigByRouteName(
      this.route,
    );

    if (!routeConfig) {
      return {
        error: ResponseFormatter.formatError(
          { message: 'Invalid route' },
          this.requestHeader,
          StatusCodes.NOT_FOUND,
        ),
      };
    }

    const auth = await AuthenticationService.authenticateRequest(this.request);
    if ('message' in auth) {
      return {
        error: ResponseFormatter.formatError(
          { message: auth.message },
          this.requestHeader,
          StatusCodes.UNAUTHORIZED,
        ),
      };
    }

    const modelKey = Object.keys(routeConfigurations).find(
      key =>
        routeConfigurations[key as keyof typeof routeConfigurations]
          ?.routeName === this.route,
    );

    if (!modelKey || !(modelKey in routeConfigurations)) {
      return {
        error: ResponseFormatter.formatError(
          { message: 'Invalid route configuration' },
          this.requestHeader,
          StatusCodes.NOT_FOUND,
        ),
      };
    }

    const hasPermission = this.routeController.checkRoutePermission(
      modelKey as keyof typeof routeConfigurations,
      auth.user.role as Role,
      this.method,
    );

    if (!hasPermission) {
      return {
        error: ResponseFormatter.formatError(
          { message: 'You are not authorized to perform this action' },
          this.requestHeader,
          StatusCodes.FORBIDDEN,
        ),
      };
    }

    return { routeConfig, auth, modelKey };
  }

  private async handlePaginatedQuery(
    modelName: string,
    searchParams: Record<string, string>,
    pagination: PaginationParams,
  ) {
    const where = Object.entries(searchParams).reduce(
      (acc: Record<string, unknown>, [key, value]) => {
        if (value) {
          acc[key] = { contains: value, mode: 'insensitive' };
        }
        return acc;
      },
      {},
    );

    const model = prisma[modelName as keyof typeof prisma] as any;
    const totalCount = await model.count({ where });
    const skip = ((pagination.page ?? 1) - 1) * (pagination.limit ?? 10);

    const result = await model.findMany({
      where,
      skip,
      take: pagination.limit,
    });

    return {
      result,
      pagination: {
        currentPage: pagination.page,
        totalPages: Math.ceil(totalCount / (pagination.limit ?? 10)),
        totalItems: totalCount,
        itemsPerPage: pagination.limit,
      },
    };
  }

  private async executeOperation(
    modelName: string,
    searchParams: Record<string, string>,
    body: unknown,
  ) {
    const model = prisma[modelName as keyof typeof prisma] as any;

    switch (this.method) {
      case 'GET':
        return model.findUnique({
          where: { id: this.id },
        });
      case 'POST':
        return model.create({
          data: body as Record<string, unknown>,
        });
      case 'PUT':
        if (!this.id)
          throw new Error('ID is required for update');
        return model.update({
          where: { id: this.id },
          data: body as Record<string, unknown>,
        });
      case 'DELETE':
        if (!this.id)
          throw new Error('ID is required for delete');
        return model.delete({
          where: { id: this.id },
        });
      default:
        throw new Error('Unsupported method');
    }
  }

  private handleError(error: unknown) {
    logger.error('API Error:', error);

    const status
      = error instanceof Error && error.message.includes('Prisma')
        ? StatusCodes.UNPROCESSABLE_ENTITY
        : StatusCodes.INTERNAL_SERVER_ERROR;

    return ResponseFormatter.formatError(
      {
        message:
          error instanceof Error ? error.message : 'Internal Server Error',
      },
      this.requestHeader,
      status,
    );
  }

  public async handleRequest(): Promise<Response> {
    try {
      const validation = await this.validateRequest();

      if ('error' in validation) {
        return validation.error as Response;
      }

      const { routeConfig } = validation;
      const modelName = routeConfig.schema.replace('Schema', '');
      const url = new URL(this.request.url);
      const searchParams = Object.fromEntries(url.searchParams.entries());

      const pagination = {
        page: searchParams.page ? Number(searchParams.page) : 1,
        limit: searchParams.limit ? Number(searchParams.limit) : 10,
      };
      delete searchParams.page;
      delete searchParams.limit;

      if (this.method === 'GET') {
        if (this.id) {
          const result = await this.executeOperation(
            modelName,
            searchParams,
            this.id,
          );
          if (result === null) {
            return ResponseFormatter.formatError(
              { message: 'Resource not found' },
              this.requestHeader,
              StatusCodes.NOT_FOUND,
            );
          }
          return ResponseFormatter.formatResponse(
            result,
            this.requestHeader,
            StatusCodes.OK,
          );
        }
        else {
          const result = await this.handlePaginatedQuery(
            modelName,
            searchParams,
            pagination,
          );
          return ResponseFormatter.formatResponse(
            result,
            this.requestHeader,
            StatusCodes.OK,
          );
        }
      }

      let body = null;
      if (['POST', 'PUT'].includes(this.method)) {
        body = await this.request.json();
        const schemas = await import('@/prisma/generated/zod');
        const schema = schemas[
          routeConfig.schema as keyof typeof schemas
        ] as z.ZodObject<any>;

        const validationSchema = schema.omit({ id: true });

        const parsedBody = validationSchema.safeParse(body);

        if (!parsedBody.success) {
          return ResponseFormatter.formatError(
            { message: 'Validation Failed', details: parsedBody.error.errors },
            this.requestHeader,
            StatusCodes.BAD_REQUEST,
          );
        }
        body = parsedBody.data;
      }

      const result = await this.executeOperation(modelName, searchParams, body);
      return ResponseFormatter.formatResponse(
        result,
        this.requestHeader,
        this.method === 'POST' ? StatusCodes.CREATED : StatusCodes.OK,
      );
    }
    catch (error) {
      return this.handleError(error);
    }
  }
}
