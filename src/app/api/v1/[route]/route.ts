import type { NextRequest } from 'next/server';

import { ApiRouteHandler } from '@/lib/classes/api-handler';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> },
) {
  const { route } = await params;

  const handler = new ApiRouteHandler(request, route, 'GET');
  return handler.handleRequest();
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> },
) {
  const { route } = await params;

  const handler = new ApiRouteHandler(request, route, 'POST');
  return handler.handleRequest();
}
