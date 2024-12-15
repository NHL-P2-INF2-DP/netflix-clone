import type { NextRequest } from 'next/server';

import { headers } from 'next/headers';

import { auth } from '@/lib/auth';

import { ResponseFormatter } from './classes/api-responses';
import { logger } from './pinologger';

export async function authenticateRequest(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      const jwtAuth = await fetch('/api/auth/token', {
        headers: await headers(),
      });

      if (!jwtAuth.ok) {
        return ResponseFormatter.formatError(
          { message: 'Unauthorized' },
          request.headers.get('Accept') || 'application/json',
          401,
        );
      }
    }

    if (!session || !session.user) {
      return ResponseFormatter.formatError(
        { message: 'Unauthorized' },
        request.headers.get('Accept') || 'application/json',
        401,
      );
    }

    return session;
  }
  catch (error) {
    logger.debug('Authentication error:', error);
    return ResponseFormatter.formatError(
      { message: 'Authentication failed' },
      request.headers.get('Accept') || 'application/json',
      401,
    );
  }
}
