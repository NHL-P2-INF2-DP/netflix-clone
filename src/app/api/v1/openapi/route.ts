import type { NextRequest } from 'next/server';

import { StatusCodes } from 'http-status-codes';
import { NextResponse } from 'next/server';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { ResponseFormatter } from '@/lib/classes/reponse-formatter';
import { RouteController } from '@/lib/classes/route-manager';
import { routeConfigurations } from '@/lib/routes';

// Define OpenAPI types since the module doesn't export them
interface OpenAPIObject {
  openapi: string;
  info: {
    title: string;
    version: string;
    description?: string;
    contact?: {
      name?: string;
      email?: string;
    };
    license?: {
      name: string;
      url?: string;
    };
  };
  servers?: Array<{
    url: string;
    description?: string;
  }>;
  security?: Array<{
    BearerAuth: Array<string>;
  }>;
  tags?: Array<{
    name: string;
    description?: string;
  }>;
  paths: Record<string, any>;
  components?: {
    schemas?: Record<string, any>;
    responses?: Record<string, any>;
  };
}

interface OpenAPIError {
  message: string;
  details?: Array<{
    code: string;
    message: string;
    path: string[];
  }>;
}

const routeController = new RouteController(routeConfigurations);

async function generateOpenAPISpec(): Promise<OpenAPIObject> {
  // Import all Zod schemas
  const schemas = await import('@/prisma/generated/zod');

  const spec: OpenAPIObject = {
    openapi: '3.0.0',
    info: {
      title: 'Netflix Clone API',
      version: '1.0.0',
      description:
        'API documentation for the Netflix Clone build by the students of NHL Stenden University of Applied Sciences in Emmen, The Netherlands',
      contact: {
        name: 'API Support',
        email: 'support@example.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: '/api/v1',
        description: 'API v1',
      },
    ],
    security: [
      {
        BearerAuth: [],
      },
    ],
    tags: [
      ...Object.entries(routeConfigurations)
        .filter(([modelName]) => modelName !== 'Models')
        .map(([modelName, config]) => ({
          name: modelName.replace(/(?!^)[A-Z]/g, ' $&'),
          description: `Operations about ${config.routeName}`,
        })),
      {
        name: 'Health',
        description: 'API health check operations',
      },
    ],
    paths: {
      '/health': {
        get: {
          tags: ['Health'],
          summary: 'Check API health status',
          parameters: [
            {
              name: 'Accept',
              in: 'header',
              description: 'Response format (json/xml)',
              required: false,
              schema: {
                type: 'string',
                enum: ['application/json', 'application/xml'],
                default: 'application/json',
              },
            },
          ],
          responses: {
            200: {
              description: 'API is healthy',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      data: {
                        type: 'object',
                        properties: {
                          status: {
                            type: 'string',
                            example: 'healthy',
                          },
                          timestamp: {
                            type: 'string',
                            format: 'date-time',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            500: { $ref: '#/components/responses/ServerError' },
          },
        },
      },
    },
    components: {
      schemas: {},
      responses: {
        UnauthorizedError: {
          description: 'Authentication information is missing or invalid',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'Unauthorized',
                  },
                },
              },
            },
          },
        },
        ValidationError: {
          description: 'Validation failed',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'Validation Failed',
                  },
                  details: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        code: { type: 'string' },
                        message: { type: 'string' },
                        path: { type: 'array', items: { type: 'string' } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        ForbiddenError: {
          description: 'User does not have required permissions',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'You are not authorized to perform this action',
                  },
                },
              },
            },
          },
        },
        NotFoundError: {
          description: 'Resource not found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'Resource not found',
                  },
                },
              },
            },
          },
        },
        ServerError: {
          description: 'Internal server error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'Internal server error',
                  },
                },
              },
            },
          },
        },
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  };

  // Generate paths for each route configuration
  for (const [modelName, config] of Object.entries(routeConfigurations)) {
    if (modelName === 'Models')
      continue; // Skip the Models entry

    const routePath = `/${config.routeName}`;
    const schemaName = `${modelName}Schema`;
    const zodSchema = schemas[schemaName as keyof typeof schemas];
    const jsonSchema = zodToJsonSchema(zodSchema, { name: modelName });

    // Add schema to components
    spec.components!.schemas![modelName] = jsonSchema.definitions![modelName];

    // Common parameters for all routes
    const commonParameters = [
      {
        name: 'Accept',
        in: 'header',
        description: 'Response format (json/xml)',
        required: false,
        schema: {
          type: 'string',
          enum: ['application/json', 'application/xml'],
          default: 'application/json',
        },
      },
    ];

    // Generate path operations based on permissions
    spec.paths[routePath] = {
      get: {
        tags: [modelName],
        summary: `Get all ${config.routeName}`,
        security: [{ BearerAuth: [] }],
        parameters: [
          ...commonParameters,
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            required: false,
            schema: { type: 'integer', default: 1 },
          },
          {
            name: 'limit',
            in: 'query',
            description: 'Items per page',
            required: false,
            schema: { type: 'integer', default: 10 },
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'object',
                      properties: {
                        result: {
                          type: 'array',
                          items: { $ref: `#/components/schemas/${modelName}` },
                        },
                        pagination: {
                          type: 'object',
                          properties: {
                            currentPage: { type: 'integer' },
                            totalPages: { type: 'integer' },
                            totalItems: { type: 'integer' },
                            itemsPerPage: { type: 'integer' },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          400: { $ref: '#/components/responses/ValidationError' },
          401: { $ref: '#/components/responses/UnauthorizedError' },
          403: { $ref: '#/components/responses/ForbiddenError' },
          500: { $ref: '#/components/responses/ServerError' },
        },
      },
    };

    // Add POST endpoint
    spec.paths[routePath].post = {
      tags: [modelName],
      summary: `Create new ${config.routeName}`,
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                ...Object.fromEntries(
                  Object.entries(
                    spec.components!.schemas![modelName].properties,
                  ).filter(
                    ([key]) => !['id', 'createdAt', 'updatedAt'].includes(key),
                  ),
                ),
              },
              required: spec.components!.schemas![modelName].required?.filter(
                (field: string) =>
                  !['id', 'createdAt', 'updatedAt'].includes(field),
              ),
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Successfully created',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: { $ref: `#/components/schemas/${modelName}` },
                },
              },
            },
          },
        },
        400: { $ref: '#/components/responses/ValidationError' },
        401: { $ref: '#/components/responses/UnauthorizedError' },
        403: { $ref: '#/components/responses/ForbiddenError' },
        500: { $ref: '#/components/responses/ServerError' },
      },
    };

    // Add individual resource endpoints
    spec.paths[`${routePath}/{id}`] = {
      get: {
        tags: [modelName],
        summary: `Get ${config.routeName} by ID`,
        security: [{ BearerAuth: [] }],
        parameters: [
          ...commonParameters,
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID of the resource to retrieve',
          },
        ],
        responses: {
          200: {
            description: 'Successfully retrieved',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: { $ref: `#/components/schemas/${modelName}` },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/UnauthorizedError' },
          403: { $ref: '#/components/responses/ForbiddenError' },
          404: { $ref: '#/components/responses/NotFoundError' },
          500: { $ref: '#/components/responses/ServerError' },
        },
      },
      put: {
        tags: [modelName],
        summary: `Update ${config.routeName}`,
        security: [{ BearerAuth: [] }],
        parameters: [
          ...commonParameters,
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  ...Object.fromEntries(
                    Object.entries(
                      spec.components!.schemas![modelName].properties,
                    ).filter(
                      ([key]) =>
                        !['id', 'createdAt', 'updatedAt'].includes(key),
                    ),
                  ),
                },
                required: spec.components!.schemas![modelName].required?.filter(
                  (field: string) =>
                    !['id', 'createdAt', 'updatedAt'].includes(field),
                ),
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Successfully updated',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: { $ref: `#/components/schemas/${modelName}` },
                  },
                },
              },
            },
          },
          400: { $ref: '#/components/responses/ValidationError' },
          401: { $ref: '#/components/responses/UnauthorizedError' },
          403: { $ref: '#/components/responses/ForbiddenError' },
          404: { $ref: '#/components/responses/NotFoundError' },
          500: { $ref: '#/components/responses/ServerError' },
        },
      },
      delete: {
        tags: [modelName],
        summary: `Delete ${config.routeName}`,
        security: [{ BearerAuth: [] }],
        parameters: [
          ...commonParameters,
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'Successfully deleted',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: { $ref: `#/components/schemas/${modelName}` },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/UnauthorizedError' },
          403: { $ref: '#/components/responses/ForbiddenError' },
          404: { $ref: '#/components/responses/NotFoundError' },
          500: { $ref: '#/components/responses/ServerError' },
        },
      },
    };
  }

  return spec;
}

export async function GET(request: NextRequest) {
  try {
    const spec = await generateOpenAPISpec();
    const requestHeader = request.headers.get('Accept') ?? undefined;

    return NextResponse.json(spec, { status: StatusCodes.OK });
  }
  catch (error) {
    return ResponseFormatter.formatError(
      { message: 'Failed to generate OpenAPI documentation' },
      request.headers.get('Accept') ?? undefined,
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
