import { StatusCodes } from 'http-status-codes';
import { type NextRequest, NextResponse } from 'next/server';

import { routeConfigurations } from '@/lib/routes';

export async function GET(request: NextRequest) {
  const baseUrl = request.nextUrl.origin;
  const requestHeader = request.headers.get('Accept') ?? undefined;

  // Common error responses for all endpoints
  const commonErrorResponses = {
    [StatusCodes.BAD_REQUEST]: {
      description: 'Bad Request - Validation Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                  details: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        code: { type: 'string' },
                        message: { type: 'string' },
                        path: {
                          type: 'array',
                          items: { type: 'string' },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        'application/xml': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                  details: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        code: { type: 'string' },
                        message: { type: 'string' },
                        path: {
                          type: 'array',
                          items: { type: 'string' },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    [StatusCodes.UNAUTHORIZED]: {
      description: 'Unauthorized - Authentication Required',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Authentication required',
                  },
                },
              },
            },
          },
        },
        'application/xml': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Authentication required',
                  },
                },
              },
            },
          },
        },
      },
    },
    [StatusCodes.FORBIDDEN]: {
      description: 'Forbidden - Insufficient Permissions',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'You are not authorized to perform this action',
                  },
                },
              },
            },
          },
        },
        'application/xml': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'You are not authorized to perform this action',
                  },
                },
              },
            },
          },
        },
      },
    },
    [StatusCodes.NOT_FOUND]: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'Resource not found' },
                },
              },
            },
          },
        },
        'application/xml': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'Resource not found' },
                },
              },
            },
          },
        },
      },
    },
    [StatusCodes.UNPROCESSABLE_ENTITY]: {
      description: 'Unprocessable Entity - Database Operation Failed',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        'application/xml': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
    [StatusCodes.INTERNAL_SERVER_ERROR]: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'Internal Server Error' },
                },
              },
            },
          },
        },
        'application/xml': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'Internal Server Error' },
                },
              },
            },
          },
        },
      },
    },
  };

  // Group routes by tags
  const routeTags = Object.entries(routeConfigurations).reduce(
    (acc, [key, config]) => {
      const tag = key.charAt(0).toUpperCase() + key.slice(1);
      if (!acc[tag]) {
        acc[tag] = [];
      }
      acc[tag].push({ key, config });
      return acc;
    },
    {} as Record<string, Array<{ key: string; config: any }>>,
  );

  const paths: Record<string, any> = {};
  const schemas: Record<string, any> = {};

  // Generate paths and schemas for each route
  Object.entries(routeTags).forEach(([tag, routes]) => {
    routes.forEach(({ key, config }) => {
      const routePath = `/api/v1/${config.routeName}`;
      paths[routePath] = {
        get: {
          tags: [tag],
          summary: `Get ${key} list`,
          description: `Retrieve a paginated list of ${key} items`,
          parameters: [
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer', default: 1, minimum: 1 },
              description: 'Page number for pagination',
            },
            {
              name: 'limit',
              in: 'query',
              schema: {
                type: 'integer',
                default: 10,
                minimum: 1,
                maximum: 100,
              },
              description: 'Number of items per page',
            },
            {
              name: 'Accept',
              in: 'header',
              schema: {
                type: 'string',
                default: 'application/json',
                enum: ['application/json', 'application/xml'],
              },
              description:
                'Response format (defaults to JSON if not specified)',
            },
          ],
          responses: {
            [StatusCodes.OK]: {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    required: ['data', 'pagination'],
                    properties: {
                      data: {
                        type: 'array',
                        items: {
                          $ref: `#/components/schemas/${config.schema}`,
                        },
                      },
                      pagination: {
                        type: 'object',
                        required: [
                          'currentPage',
                          'totalPages',
                          'totalItems',
                          'itemsPerPage',
                        ],
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
                'application/xml': {
                  schema: {
                    type: 'object',
                    required: ['data', 'pagination'],
                    properties: {
                      data: {
                        type: 'array',
                        items: {
                          $ref: `#/components/schemas/${config.schema}`,
                        },
                      },
                      pagination: {
                        type: 'object',
                        required: [
                          'currentPage',
                          'totalPages',
                          'totalItems',
                          'itemsPerPage',
                        ],
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
            ...commonErrorResponses,
          },
        },
        post: {
          tags: [tag],
          summary: `Create new ${key}`,
          description: `Create a new ${key} item`,
          parameters: [
            {
              name: 'Accept',
              in: 'header',
              schema: { type: 'string', default: 'application/json' },
              description: 'Accepted response format',
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: `#/components/schemas/${config.schema}`,
                },
              },
            },
          },
          responses: {
            [StatusCodes.CREATED]: {
              description: 'Successfully created',
              content: {
                'application/json': {
                  schema: {
                    $ref: `#/components/schemas/${config.schema}`,
                  },
                },
                'application/xml': {
                  schema: {
                    $ref: `#/components/schemas/${config.schema}`,
                  },
                },
              },
            },
            ...commonErrorResponses,
          },
        },
      };

      // Add individual item routes
      paths[`${routePath}/{id}`] = {
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Resource identifier',
          },
        ],
        put: {
          tags: [tag],
          summary: `Update ${key}`,
          description: `Update an existing ${key} item`,
          parameters: [
            {
              name: 'Accept',
              in: 'header',
              schema: { type: 'string', default: 'application/json' },
              description: 'Accepted response format',
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: `#/components/schemas/${config.schema}`,
                },
              },
            },
          },
          responses: {
            [StatusCodes.OK]: {
              description: 'Successfully updated',
              content: {
                'application/json': {
                  schema: {
                    $ref: `#/components/schemas/${config.schema}`,
                  },
                },
                'application/xml': {
                  schema: {
                    $ref: `#/components/schemas/${config.schema}`,
                  },
                },
              },
            },
            ...commonErrorResponses,
          },
        },
        delete: {
          tags: [tag],
          summary: `Delete ${key}`,
          description: `Delete an existing ${key} item`,
          parameters: [
            {
              name: 'Accept',
              in: 'header',
              schema: { type: 'string', default: 'application/json' },
              description: 'Accepted response format',
            },
          ],
          responses: {
            [StatusCodes.OK]: {
              description: 'Successfully deleted',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    required: ['message'],
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Resource deleted successfully',
                      },
                    },
                  },
                },
                'application/xml': {
                  schema: {
                    type: 'object',
                    required: ['message'],
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Resource deleted successfully',
                      },
                    },
                  },
                },
              },
            },
            ...commonErrorResponses,
          },
        },
      };

      // Add schema reference
      schemas[config.schema] = {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      };
    });
  });

  // Add health check endpoint
  paths['/api/health'] = {
    get: {
      tags: ['Health'],
      summary: 'API Health Check',
      description: 'Check if the API is up and running',
      parameters: [
        {
          name: 'Accept',
          in: 'header',
          schema: { type: 'string', default: 'application/json' },
          description: 'Accepted response format',
        },
      ],
      responses: {
        [StatusCodes.OK]: {
          description: 'API is healthy',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['status', 'timestamp'],
                properties: {
                  status: { type: 'string', example: 'healthy' },
                  timestamp: { type: 'string', format: 'date-time' },
                },
              },
            },
            'application/xml': {
              schema: {
                type: 'object',
                required: ['status', 'timestamp'],
                properties: {
                  status: { type: 'string', example: 'healthy' },
                  timestamp: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        },
        [StatusCodes.INTERNAL_SERVER_ERROR]:
          commonErrorResponses[StatusCodes.INTERNAL_SERVER_ERROR],
      },
    },
  };

  const openApiSpec = {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description:
        'Complete API documentation with authentication, pagination, and CRUD operations',
    },
    servers: [
      {
        url: baseUrl,
        description: 'API Server',
      },
    ],
    tags: [
      ...Object.keys(routeTags).map(tag => ({
        name: tag,
        description: `Operations related to ${tag}`,
      })),
      {
        name: 'Health',
        description: 'API health monitoring endpoints',
      },
    ],
    paths,
    components: {
      schemas,
    },
  };

  return NextResponse.json(openApiSpec, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
