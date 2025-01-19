import type { User as PrismaUser, User } from '@prisma/client';
import type { NextRequest } from 'next/server';

import { headers } from 'next/headers';

import type { User as BetterAuthUser } from '@/lib/auth';

import { logger } from '@/lib/pinologger';

import type { Session } from '../auth';

import { auth } from '../auth';
import prisma from '../prisma';

export abstract class AuthenticationService {
  /**
   * Get the current session
   * @param headers - Request headers
   * @returns Promise resolving to session or null
   */
  static async getSession(headers: Headers): Promise<Session | null> {
    const session = await auth.api.getSession({ headers });
    return session;
  }

  /**
   * Validate a JWT token
   * @param headers - Request headers
   * @returns Promise resolving to boolean indicating token validity
   */
  private static async validateAPIKey(headers: Headers): Promise<User | null> {
    const apiKey = headers.get('Authorization');

    const bearerToken = apiKey?.split(' ')[1];

    if (!bearerToken) {
      return null;
    }

    const user = await prisma.user.findFirst({
      where: {
        apiKey: {
          apiKey: bearerToken,
        },
      },
    });

    return user;
  }

  /**
   * Authenticate an incoming request
   * @param request - Next.js request object
   * @returns Session data or error response
   */
  static async authenticateRequest(
    request: NextRequest,
  ): Promise<PrismaUser | BetterAuthUser | { message: string }> {
    try {
      // Get current request headers
      const requestHeaders = await headers();

      // Attempt to get session
      const session = await this.getSession(requestHeaders);

      // If no session, attempt API key authentication
      if (!session) {
        const user = await this.validateAPIKey(requestHeaders);

        if (!user) {
          return {
            message: 'Unauthorized',
          };
        }
        else {
          return user;
        }
      }

      const result = session;
      if (result === null) {
        return {
          message: 'Unauthorized',
        };
      }
      return result.user;
    }
    catch (error) {
      // Log debug information
      logger.debug('Authentication error:', error);

      // Return error response
      return {
        message: 'Unauthorized',
      };
    }
  }
}
