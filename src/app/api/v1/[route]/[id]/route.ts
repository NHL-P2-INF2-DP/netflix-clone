import type { NextRequest } from 'next/server';

import { ApiRouteHandler } from '@/lib/classes/api-handler';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ route: string; id: string }> },
) {
  const { route, id } = await params;

  const handler = new ApiRouteHandler(request, route, 'PUT', id);
  return handler.handleRequest();
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ route: string; id: string }> },
) {
  const { route, id } = await params;

  const handler = new ApiRouteHandler(request, route, 'DELETE', id);
  return handler.handleRequest();
}
