import { ApiReference } from '@scalar/nextjs-api-reference';

const config = {
  spec: {
    url: '/api/v1/openapi',
  },
  defaultHttpClient: {
    targetKey: 'javascript',
    clientKey: 'fetch',
  },
};

export const GET = ApiReference(config);
