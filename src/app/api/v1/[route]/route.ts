import type { NextRequest } from 'next/server';

import { ApiRouteHandler } from '@/lib/classes/api-handler';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Route handler factory
function createHandler(method: HttpMethod) {
  return async (
    request: NextRequest,
    { params }: { params: Promise<{ route: string }> },
  ) => {
    const { route } = await params;
    const handler = new ApiRouteHandler(request, route, method);
    return handler.handleRequest();
  };
}

export const GET = createHandler('GET');
export const POST = createHandler('POST');
export const PUT = createHandler('PUT');
export const DELETE = createHandler('DELETE');
