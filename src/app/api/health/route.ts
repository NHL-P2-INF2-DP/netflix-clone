import type { NextRequest } from 'next/server';

import { StatusCodes } from 'http-status-codes';

import { ResponseFormatter } from '@/lib/classes/reponse-formatter';

export async function GET(request: NextRequest) {
  const requestHeader = request.headers.get('Accept') ?? undefined;

  return ResponseFormatter.formatResponse(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
    },
    requestHeader,
    StatusCodes.OK,
  );
}
