import type { Prisma, Role } from '@prisma/client';

import type { HttpMethod } from '@/app/api/v1/[route]/route';

import type * as Schemas from '../../../prisma/generated/zod';

export type PrismaModels = Prisma.ModelName;
export type RouteName = Lowercase<PrismaModels>;
export type SchemaKey = keyof typeof Schemas;
export type RouteConfigType = Partial<Record<PrismaModels, RouteConfig>>;

// type for the input of the constructor, without schema as it is automatically generated when the RouteController is instantiated since it is based on the model name
export type RouteConfigInputType = Partial<
  Record<PrismaModels, Omit<RouteConfig, 'schema'>>
>;

export const METHODS = {
  GET: 'read',
  POST: 'create',
  PUT: 'update',
  DELETE: 'delete',
} as const;
/**
 * Manages API route configurations and permissions for Prisma models
 */
export class RouteController {
  private routes: RouteConfigType;

  /**
   * Creates a new RouteController instance
   * @param routes - Object mapping Prisma model names to their route configurations
   */
  constructor(routes: RouteConfigInputType) {
    this.routes = Object.fromEntries(
      Object.entries(routes).map(([modelName, config]) => [
        modelName,
        {
          schema: `${modelName}Schema` as SchemaKey,
          ...config,
        },
      ]),
    );
  }

  /**
   * Gets the Zod schema name for a given Prisma model
   * @param modelName - The Prisma model name
   * @returns The corresponding Zod schema name
   * @private
   */
  private getSchemaName(modelName: PrismaModels): SchemaKey {
    return `${modelName}Schema` as SchemaKey;
  }

  /**
   * Gets the model name from either a string or route config object
   * @param input - Either a Prisma model name or route config object
   * @returns The schema name as a string
   */
  public getModelName(input: PrismaModels | any): string {
    if (typeof input === 'string') {
      return this.routes[input as PrismaModels]?.schema ?? '';
    }
    return input.schema;
  }

  /**
   * Checks if a role has permission to perform a specific action on a route
   * @param route - The Prisma model name
   * @param role - The user role
   * @param method - The HTTP method (maps to create/read/update/delete)
   * @returns Boolean indicating if the action is permitted
   */
  public checkRoutePermission(
    route: PrismaModels,
    role: Role,
    method: HttpMethod,
  ): boolean {
    const routeConfig = this.routes[route];
    if (!routeConfig) {
      return false;
    }
    return routeConfig.permissions[role][METHODS[method]];
  }

  /**
   * Gets the route configuration for a specific Prisma model based on the route name
   * @param routeName - The route name
   * @returns The route configuration or undefined if not found
   */
  public getRouteConfigByRouteName(routeName: string): RouteConfig | undefined {
    return Object.values(this.routes).find(
      routeConfig => routeConfig.routeName === routeName,
    );
  }

  /**
   * Gets the route configuration for a specific Prisma model
   * @param route - The Prisma model name
   * @returns The route configuration or undefined if not found
   */
  public getRouteConfig(route: PrismaModels): RouteConfig | undefined {
    return this.routes[route];
  }

  /**
   * Gets the route name for a specific Prisma model
   * @param route - The Prisma model name
   * @returns The route name or undefined if not found
   */
  public getRouteName(route: PrismaModels): string | undefined {
    return this.routes[route]?.routeName;
  }

  /**
   * Gets all route configurations
   * @returns Object containing all route configurations
   */
  public getRoutes(): Partial<Record<PrismaModels, RouteConfig>> {
    return this.routes;
  }
}

export type RoutePermissions = {
  [K in Role]: {
    read: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  };
};

export interface RouteConfig {
  routeName: string;
  permissions: RoutePermissions;
  schema: SchemaKey;
}
