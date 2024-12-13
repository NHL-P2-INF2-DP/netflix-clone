import type { NextRequest } from 'next/server';

import { headers } from 'next/headers';

import { auth } from '@/lib/auth';

import { errorResponse } from './api-response';

export async function authenticateRequest(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return errorResponse('Unauthorized', 401);
    }

    return session;
  }
  catch (error) {
    console.error('Authentication error:', error);
    return errorResponse('Authentication failed', 401);
  }
}
