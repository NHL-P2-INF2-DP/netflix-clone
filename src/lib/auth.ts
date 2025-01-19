import { Role } from '@prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';

import prisma from './prisma';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: 'string',
        enum: Role,
      },
    },
  },

  trustedOrigins: ['http://localhost:3000'],

  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;

export type User = typeof auth.$Infer.Session['user'];
