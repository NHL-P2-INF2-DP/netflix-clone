import type { NextRequest } from 'next/server';

import { createResponse } from '@/lib/utils';

export function GET(request: NextRequest) {
  return createResponse(
    {
      status: 'ok',
    },
    request.headers.get('Accept'),
    200,
  );
}
