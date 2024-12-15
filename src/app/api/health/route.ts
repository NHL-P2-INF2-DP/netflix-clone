import type { NextRequest } from 'next/server';

import { ResponseFormatter } from '@/lib/classes/api-responses';

export function GET(request: NextRequest) {
  return ResponseFormatter.formatResponse(
    { message: 'OK' },
    request.headers.get('Accept') || 'application/json',
    200,
  );
}
