import type { NextRequest } from 'next/server';

import { Prisma } from '@prisma/client';
import { z } from 'zod';

import { authenticateRequest } from '@/lib/auth-middleware';
import { logger } from '@/lib/pinologger';
import prisma from '@/lib/prisma';
import { createResponse } from '@/lib/utils';

// Validation schema for profile creation
const ProfileCreateSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  accountId: z.string().min(1, 'Account ID is required'),
  dateOfBirth: z
    .string()
    .refine(val => !Number.isNaN(Date.parse(val)), 'Invalid date'),
  language: z.string().optional(),
  profileImage: z.string().url().optional(),
});

// GET /api/profiles - Get all profiles
export async function GET(request: NextRequest): Promise<Response> {
  const log = logger.child({ module: 'totoro' });

  try {
    const authResult = await authenticateRequest(request);
    if ('error' in authResult) {
      return createResponse(authResult, request.headers.get('Accept'), 401);
    }

    // Pagination and selective fetching
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get('page') || '1', 10);
    const limit = Number.parseInt(searchParams.get('limit') || '10', 10);

    const profiles = await prisma.profile.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Get total count for pagination metadata
    const totalProfiles = await prisma.profile.count();

    const response = {
      data: profiles,
      meta: {
        page,
        limit,
        total: totalProfiles,
        totalPages: Math.ceil(totalProfiles / limit),
      },
    };

    return createResponse(response, request.headers.get('Accept'));
  }
  catch (error) {
    log.debug('Failed to fetch profiles', { error });
    return createResponse(
      { error: 'Failed to fetch profiles' },
      request.headers.get('Accept'),
      500,
    );
  }
}

// POST /api/profiles - Create a new profile
export async function POST(request: NextRequest): Promise<Response> {
  const log = logger.child({ module: 'totoro' });

  try {
    const authResult = await authenticateRequest(request);
    if ('error' in authResult) {
      return createResponse(authResult, request.headers.get('Accept'), 401);
    }

    const body = await request.json();

    // Validate input
    const validatedData = ProfileCreateSchema.parse(body);

    // Verify account exists
    const account = await prisma.account.findUnique({
      where: { id: validatedData.accountId },
      select: { id: true },
    });

    if (!account) {
      return createResponse(
        { error: 'Invalid account ID' },
        request.headers.get('Accept'),
        403,
      );
    }

    // Check if profile already exists for this account
    const existingProfile = await prisma.profile.findFirst({
      where: {
        accountId: validatedData.accountId,
      },
    });

    if (existingProfile) {
      return createResponse(
        { error: 'Profile already exists for this account' },
        request.headers.get('Accept'),
        409,
      );
    }

    // Create profile
    const profile = await prisma.profile.create({
      data: {
        name: validatedData.name,
        accountId: validatedData.accountId,
        dateOfBirth: new Date(validatedData.dateOfBirth),
        language: validatedData.language,
        profileImage: validatedData.profileImage,
      },
    });

    return createResponse(
      {
        data: profile,
        message: 'Profile created successfully',
      },
      request.headers.get('Accept'),
      201,
    );
  }
  catch (error) {
    // Handle specific error types
    if (error instanceof z.ZodError) {
      return createResponse(
        {
          error: 'Invalid input',
          details: error.errors,
        },
        request.headers.get('Accept'),
        400,
      );
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle unique constraint violations
      if (error.code === 'P2002') {
        return createResponse(
          { error: 'A profile with these details already exists' },
          request.headers.get('Accept'),
          409,
        );
      }
    }

    // Log the error for internal tracking
    log.debug('Failed to create profile', { error });

    return createResponse(
      { error: 'Failed to create profile' },
      request.headers.get('Accept'),
      500,
    );
  }
}
