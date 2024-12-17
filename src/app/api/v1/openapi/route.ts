import type { OpenAPIV3 } from 'openapi-types';

import { NextResponse } from 'next/server';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { Routes } from '@/lib/routes';

export async function GET() {
  const openApiSpec: OpenAPIV3.Document = {
    openapi: '3.0.0',
    info: {
      title: 'Netflix Clone API',
      version: '1.0.0',
      description: 'API documentation for Netflix Clone application',
    },
    servers: [
      {
        url: '/api/v1',
        description: 'API V1',
      },
    ],
    tags: generateTags(),
    paths: generatePaths(),
    components: {
      schemas: generateSchemas(),
    },
  };

  return NextResponse.json(openApiSpec);
}

function generateTags(): OpenAPIV3.TagObject[] {
  return Object.entries(Routes).map(([_, config]) => ({
    name: config.modelName,
    description: `Operations about ${config.modelName.toLowerCase()}s`,
  }));
}

function generatePaths(): OpenAPIV3.PathsObject {
  const paths: OpenAPIV3.PathsObject = {};

  // Simplified error response schema
  const errorResponseSchema: OpenAPIV3.SchemaObject = {
    type: 'object',
    properties: {
      error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Error message',
          },
        },
        required: ['message'],
      },
    },
  };

  // Helper function to generate content object with both JSON and XML
  const generateContentTypes = (schema: OpenAPIV3.SchemaObject) => ({
    'application/json': {
      schema,
    },
    'application/xml': {
      schema,
    },
  });

  Object.entries(Routes).forEach(([route, config]) => {
    const routePath = `/${route}`;
    paths[routePath] = {
      get: {
        tags: [config.modelName],
        summary: `Get ${config.modelName} list`,
        parameters: [
          {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', minimum: 1 },
            description: 'Page number for pagination',
          },
          {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', minimum: 1 },
            description: 'Number of items per page',
          },
          {
            name: 'Accept',
            in: 'header',
            schema: {
              type: 'string',
              enum: ['application/json', 'application/xml'],
            },
            description: 'Response format',
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: generateContentTypes({
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  items: {
                    $ref: `#/components/schemas/${config.modelName}`,
                  },
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
            }),
          },
          400: {
            description: 'Bad Request',
            content: generateContentTypes(errorResponseSchema),
          },
          401: {
            description: 'Unauthorized',
            content: generateContentTypes(errorResponseSchema),
          },
          403: {
            description: 'Forbidden',
            content: generateContentTypes(errorResponseSchema),
          },
          404: {
            description: 'Not Found',
            content: generateContentTypes(errorResponseSchema),
          },
          422: {
            description: 'Unprocessable Entity',
            content: generateContentTypes(errorResponseSchema),
          },
        },
      },
      post: {
        tags: [config.modelName],
        summary: `Create new ${config.modelName}`,
        parameters: [
          {
            name: 'Accept',
            in: 'header',
            schema: {
              type: 'string',
              enum: ['application/json', 'application/xml'],
            },
            description: 'Response format',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: `#/components/schemas/${config.modelName}`,
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Successfully created',
            content: generateContentTypes({
              type: 'object',
              allOf: [
                {
                  $ref: `#/components/schemas/${config.modelName}`,
                },
              ],
            }),
          },
          400: {
            description: 'Bad Request - Invalid input',
            content: generateContentTypes(errorResponseSchema),
          },
          401: {
            description: 'Unauthorized',
            content: generateContentTypes(errorResponseSchema),
          },
          403: {
            description: 'Forbidden - Insufficient permissions',
            content: generateContentTypes(errorResponseSchema),
          },
          422: {
            description: 'Unprocessable Entity',
            content: generateContentTypes(errorResponseSchema),
          },
        },
      },
      put: {
        tags: [config.modelName],
        summary: `Update ${config.modelName}`,
        parameters: [
          {
            name: 'id',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description: 'ID of the resource to update',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: `#/components/schemas/${config.modelName}`,
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
                  $ref: `#/components/schemas/${config.modelName}`,
                },
              },
            },
          },
          400: {
            description: 'Bad Request - Invalid input or ID',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          401: {
            description: 'Unauthorized - Invalid or missing token',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          403: {
            description: 'Forbidden - Insufficient permissions',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          404: {
            description: 'Not Found - Resource not found',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          422: {
            description: 'Unprocessable Entity - Database constraint violation',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
        },
      },
      delete: {
        tags: [config.modelName],
        summary: `Delete ${config.modelName}`,
        parameters: [
          {
            name: 'id',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description: 'ID of the resource to delete',
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
                    message: {
                      type: 'string',
                      example: 'Resource successfully deleted',
                    },
                  },
                },
              },
            },
          },
          400: {
            description: 'Bad Request - Invalid ID',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          401: {
            description: 'Unauthorized - Invalid or missing token',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          403: {
            description: 'Forbidden - Insufficient permissions',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          404: {
            description: 'Not Found - Resource not found',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          422: {
            description: 'Unprocessable Entity - Database constraint violation',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
        },
      },
    };
  });

  return paths;
}

function generateSchemas(): { [key: string]: OpenAPIV3.SchemaObject } {
  const schemas: { [key: string]: OpenAPIV3.SchemaObject } = {};

  Object.entries(Routes).forEach(([_, config]) => {
    if (config.schema) {
      const jsonSchema = zodToJsonSchema(config.schema);
      schemas[config.modelName] = jsonSchema as OpenAPIV3.SchemaObject;
    }
  });

  return schemas;
}
