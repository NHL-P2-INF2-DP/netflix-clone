import type { NextRequest } from 'next/server';

import { headers } from 'next/headers';

import { logger } from '@/lib/pinologger';

import type { Session } from '../auth-client';

import { auth } from '../auth';

export abstract class AuthenticationService {
  /**
   * Get the current session
   * @param headers - Request headers
   * @returns Promise resolving to session or null
   */
  static async getSession(headers: Headers): Promise<Session | null> {
    const session = await auth.api.getSession({ headers });
    // return session;

    // mock Authentication

    return {
      user: {
        id: '1',
        email: '1',
        name: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        emailVerified: true,
      },
      session: {
        id: '1',
        expiresAt: new Date(),
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        token: 'adwald',
        ipAddress: '127.0.0.1',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.101.76 Safari/537.36',
      },
    };
  }

  /**
   * Validate a JWT token
   * @param headers - Request headers
   * @returns Promise resolving to boolean indicating token validity
   */
  private static async validateJwtToken(headers: Headers): Promise<boolean> {
    // TODO: Implement JWT token validation
    return false;
  }

  /**
   * Authenticate an incoming request
   * @param request - Next.js request object
   * @returns Session data or error response
   */
  static async authenticateRequest(
    request: NextRequest,
  ): Promise<Session | { message: string }> {
    try {
      // Get current request headers
      const requestHeaders = await headers();

      // Attempt to get session
      const session = await this.getSession(requestHeaders);

      // If no session, attempt JWT authentication
      if (!session) {
        const isValidToken = await this.validateJwtToken(requestHeaders);

        if (!isValidToken) {
          return {
            message: 'Unauthorized',
          };
        }
      }

      const result = session;
      if (result === null) {
        return {
          message: 'Unauthorized',
        };
      }
      return result;
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
