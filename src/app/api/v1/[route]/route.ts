import type { Role } from '@prisma/client';
import type { NextRequest } from 'next/server';

import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import type { RouteKey } from '@/lib/routes';

import { ResponseFormatter } from '@/lib/classes/api-responses';
import { AuthenticationService } from '@/lib/classes/authentication-service';
import { logger } from '@/lib/pinologger';
import prisma from '@/lib/prisma';
import { checkRoutePermission, getModelName, Routes } from '@/lib/routes';
import * as Schemas from '@/lib/schemas';

// Define allowed HTTP methods and their corresponding permission checks
const METHOD_PERMISSION_MAP = {
  GET: 'read',
  POST: 'create',
  PUT: 'update',
  DELETE: 'delete',
} as const;

// Mapping of routes to their Zod schemas
const ROUTE_SCHEMA_MAP = {
  genre: Schemas.genreSchema,
  contentRating: Schemas.contentRatingSchema,
  content: Schemas.contentSchema,
  language: Schemas.languageSchema,
  subtitle: Schemas.subtitleSchema,
  contentMetadata: Schemas.contentMetadataSchema,
  netflixAccount: Schemas.netflixAccountSchema,
  previousPasswordHash: Schemas.previousPasswordHashSchema,
  profile: Schemas.profileSchema,
  subscriptionType: Schemas.subscriptionTypeSchema,
  subscription: Schemas.subscriptionSchema,
  invoice: Schemas.invoiceSchema,
  viewingHistory: Schemas.viewingHistorySchema,
  watchlist: Schemas.watchlistSchema,
};

// Type for Prisma model methods
type PrismaModelMethod =
  | 'findMany'
  | 'findUnique'
  | 'create'
  | 'update'
  | 'delete';

// Mapping of HTTP methods to Prisma model methods
const METHOD_TO_PRISMA_METHOD: Record<string, PrismaModelMethod> = {
  GET: 'findMany',
  POST: 'create',
  PUT: 'update',
  DELETE: 'delete',
};

// UUID validation schema
const UUIDSchema = z.string().uuid();

// Add these type definitions at the top of the file
interface PaginationParams {
  page?: number;
  limit?: number;
}

interface SearchParams {
  [key: string]: string | undefined;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> },
) {
  const { route } = await params;
  logger.info(`Received GET request for route: ${route}`);
  const response = await handleRequest(request, { params }, 'GET');
  logger.info(`Successfully handled GET request for route: ${route}`);
  return response;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> },
) {
  const { route } = await params;
  logger.info(`Received POST request for route: ${route}`);
  const response = await handleRequest(request, { params }, 'POST');
  logger.info(`Successfully handled POST request for route: ${route}`);
  return response;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> },
) {
  const { route } = await params;
  logger.info(`Received PUT request for route: ${route}`);
  const response = await handleRequest(request, { params }, 'PUT');
  logger.info(`Successfully handled PUT request for route: ${route}`);
  return response;
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> },
) {
  const { route } = await params;
  logger.info(`Received DELETE request for route: ${route}`);
  const response = await handleRequest(request, { params }, 'DELETE');
  logger.info(`Successfully handled DELETE request for route: ${route}`);
  return response;
}

/**
 * Handle a request to the API.
 * @param request The request to handle
 * @param context The request context
 * @param method The HTTP method used for the request
 * @returns A response to the request
 */

async function handleRequest(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> },
  method: string,
) {
  try {
    const { route } = await params;
    const routeKey = route as RouteKey;
    const requestHeader = request.headers.get('Accept') ?? undefined;

    const auth = await AuthenticationService.authenticateRequest(request);

    if ('message' in auth) {
      return ResponseFormatter.formatError(
        { message: auth.message },
        requestHeader,
        StatusCodes.UNAUTHORIZED,
      );
    }

    if (!(routeKey in Routes)) {
      return ResponseFormatter.formatError(
        { message: 'Invalid route' },
        requestHeader,
        StatusCodes.NOT_FOUND,
      );
    }

    const permissionType
      = METHOD_PERMISSION_MAP[method as keyof typeof METHOD_PERMISSION_MAP];
    if (!checkRoutePermission(routeKey, auth.user.role as Role)) {
      return ResponseFormatter.formatError(
        { message: 'You are not authorized to perform this action' },
        requestHeader,
        StatusCodes.FORBIDDEN,
      );
    }

    const modelName = getModelName(routeKey);
    const prismaMethod = METHOD_TO_PRISMA_METHOD[method];
    const body
      = method !== 'GET' && method !== 'DELETE' ? await request.json() : null;

    // validate the body
    const bodySchema
      = ROUTE_SCHEMA_MAP[routeKey as keyof typeof ROUTE_SCHEMA_MAP];
    if (body && bodySchema) {
      const parsedBody = bodySchema.safeParse(body);
      if (!parsedBody.success) {
        return ResponseFormatter.formatError(
          { message: 'Validation Failed', details: parsedBody.error.errors },
          requestHeader,
          StatusCodes.BAD_REQUEST,
        );
      }
    }

    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const id
      = pathParts[pathParts.length - 1] !== route
        ? pathParts[pathParts.length - 1]
        : undefined;

    if (id) {
      const uuidValidation = UUIDSchema.safeParse(id);
      if (!uuidValidation.success) {
        return ResponseFormatter.formatError(
          { message: 'Invalid UUID format' },
          requestHeader,
          StatusCodes.BAD_REQUEST,
        );
      }
    }

    // Extract pagination and search parameters from URL
    const searchParams = Object.fromEntries(url.searchParams.entries());

    // Parse pagination parameters
    const pagination: PaginationParams = {
      page: searchParams.page ? Number.parseInt(searchParams.page, 10) : 1,
      limit: searchParams.limit ? Number.parseInt(searchParams.limit, 10) : 10,
    };

    // Remove pagination params from search params
    delete searchParams.page;
    delete searchParams.limit;

    // Validate pagination parameters
    if (
      pagination.page
      && (Number.isNaN(pagination.page) || pagination.page < 1)
    ) {
      return ResponseFormatter.formatError(
        { message: 'Invalid page number' },
        requestHeader,
        StatusCodes.BAD_REQUEST,
      );
    }

    if (
      pagination.limit
      && (Number.isNaN(pagination.limit) || pagination.limit < 1)
    ) {
      return ResponseFormatter.formatError(
        { message: 'Invalid limit number' },
        requestHeader,
        StatusCodes.BAD_REQUEST,
      );
    }

    let result;
    let statusCode = StatusCodes.OK; // Default status for successful operations
    type PrismaModel = keyof typeof prisma;

    switch (prismaMethod) {
      case 'findMany': {
        // Build the where clause for searching
        const where: any = {};

        // Process search parameters
        Object.entries(searchParams).forEach(([key, value]) => {
          if (value) {
            where[key] = {
              contains: value,
              mode: 'insensitive', // Case-insensitive search
            };
          }
        });

        // Get total count for pagination
        const totalCount = await (
          prisma[modelName as PrismaModel] as any
        ).count({
          where,
        });

        // Calculate pagination values
        const skip = (pagination.page! - 1) * pagination.limit!;
        const totalPages = Math.ceil(totalCount / pagination.limit!);

        // Execute the query with pagination and search
        result = await (prisma[modelName as PrismaModel] as any).findMany({
          where,
          skip,
          take: pagination.limit,
        });

        // Return paginated response, even if empty
        return ResponseFormatter.formatResponse(
          {
            data: result,
            pagination: {
              currentPage: pagination.page,
              totalPages: Math.ceil(totalCount / pagination.limit!),
              totalItems: totalCount,
              itemsPerPage: pagination.limit,
            },
          },
          requestHeader,
          StatusCodes.OK,
        );
      }

      case 'findUnique':
        if (!id) {
          return ResponseFormatter.formatError(
            { message: 'ID is required for findUnique' },
            requestHeader,
            StatusCodes.BAD_REQUEST,
          );
        }
        result = await (prisma[modelName as PrismaModel] as any).findUnique({
          where: { id },
        });
        break;
      case 'create':
        result = await (prisma[modelName as PrismaModel] as any).create({
          data: { ...body, createdAt: new Date(), updatedAt: new Date() },
        });
        statusCode = StatusCodes.CREATED; // Return 201 for creation
        break;
      case 'update':
        if (!id) {
          return ResponseFormatter.formatError(
            { message: 'ID is required for update' },
            requestHeader,
            StatusCodes.BAD_REQUEST,
          );
        }
        result = await (prisma[modelName as PrismaModel] as any).update({
          where: { id },
          data: { ...body, updatedAt: new Date() },
        });
        break;
      case 'delete':
        if (!id) {
          return ResponseFormatter.formatError(
            { message: 'ID is required for delete' },
            requestHeader,
            StatusCodes.BAD_REQUEST,
          );
        }
        result = await (prisma[modelName as PrismaModel] as any).delete({
          where: { id },
        });
        break;
      default:
        return ResponseFormatter.formatError(
          { message: 'Unsupported method' },
          requestHeader,
          StatusCodes.METHOD_NOT_ALLOWED,
        );
    }

    if (result.length === 0) {
      return ResponseFormatter.formatError(
        { message: 'No data found' },
        requestHeader,
        StatusCodes.NOT_FOUND,
      );
    }

    logger.info(`Successfully handled ${method} request for route: ${route}`);
    return ResponseFormatter.formatResponse(result, requestHeader, statusCode);
  }
  catch (error) {
    const { route } = await params;
    logger.error(`Error handling ${method} request for route: ${route}`, error);

    const status
      = error instanceof Error && error.message.includes('Prisma')
        ? StatusCodes.UNPROCESSABLE_ENTITY
        : StatusCodes.INTERNAL_SERVER_ERROR;

    return ResponseFormatter.formatError(
      {
        message:
          (error instanceof Error ? error.message : 'Unknown error occurred')
          || 'Internal Server Error',
      },
      request.headers.get('Accept') ?? 'application/json',
      status,
    );
  }
}
