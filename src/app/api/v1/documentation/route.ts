import { ApiReference } from '@scalar/nextjs-api-reference';

const config = {
  spec: {
    url: '/api/v1/openapi',
  },
  config: {},
  defaultHttpClient: {
    targetKey: 'js',
    clientKey: 'fetch',
  },
  hideClientButton: true,
};

export const GET = ApiReference(config);
