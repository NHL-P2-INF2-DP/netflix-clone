import { ApiReference } from '@scalar/nextjs-api-reference';

const config = {
  spec: {
    url: '/api/v1/openapi',
  },
  config: {
    parameters: {
      global: [
        {
          name: 'extend',
          in: 'query',
          description:
            'Comma-separated list of relations to include in the response',
          required: false,
          schema: {
            type: 'string',
            example: 'relation1,relation2',
          },
        },
      ],
    },
  },
  hiddenClients: [
    'libcurl',
    'clj_http',
    'httpclient',
    'restsharp',
    'native',
    'http1.1',
    'asynchttp',
    'nethttp',
    'okhttp',
    'unirest',
    'xhr',
    'axios',
    'ofetch',
    'jquery',
    'okhttp',
    'native',
    'request',
    'unirest',
    'axios',
    'nsurlsession',
    'cohttp',
    'curl',
    'guzzle',
    'http1',
    'http2',
    'webrequest',
    'restmethod',
    'python3',
    'requests',
    'httr',
    'native',
    'httpie',
    'wget',
    'nsurlsession',
    'undici',
  ],
  hideClientButton: true,
};

export const GET = ApiReference(config);
