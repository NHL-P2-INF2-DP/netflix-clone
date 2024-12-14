import type { NextRequest } from 'next/server';

import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';

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
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return session;
  }
  catch (error) {
    logger.error('Authentication error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 },
    );
  }
}
