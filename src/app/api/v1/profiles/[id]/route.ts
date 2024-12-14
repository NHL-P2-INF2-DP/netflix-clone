import type { NextRequest } from 'next/server';

import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { authenticateRequest } from '@/lib/auth-middleware';
import { logger } from '@/lib/pinologger';
import prisma from '@/lib/prisma';
import { createResponse } from '@/lib/utils';

const log = logger.child({ module: 'totoro' });

// Validation schemas
const ProfileUpdateSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  dateOfBirth: z
    .string()
    .refine(val => !Number.isNaN(Date.parse(val)), 'Invalid date'),
  language: z.string().optional(),
  profileImage: z.string().url().optional(),
});

const ProfileIdSchema = z.object({
  id: z.string().min(1, 'Profile ID is required'),
});

export async function GET(request: NextRequest) {
  try {
    const authResult = await authenticateRequest(request);
    if ('error' in authResult) {
      return createResponse(authResult, request.headers.get('Accept'), 401);
    }

    const body = await request.json();
    const validation = ProfileIdSchema.safeParse(body);
    if (!validation.success) {
      return createResponse(
        { error: 'Invalid request body', details: validation.error },
        request.headers.get('Accept'),
        400,
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { id: validation.data.id },
    });

    if (!profile) {
      return createResponse(
        { error: 'Profile not found' },
        request.headers.get('Accept'),
        404,
      );
    }

    return createResponse(profile, request.headers.get('Accept'));
  }
  catch (error) {
    log.error({ error }, 'Error in GET /api/profiles/profile');
    return createResponse(
      { error: 'Internal server error' },
      request.headers.get('Accept'),
      500,
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authResult = await authenticateRequest(request);
    if ('error' in authResult) {
      return createResponse(authResult, request.headers.get('Accept'), 401);
    }

    const body = await request.json();
    const idValidation = ProfileIdSchema.safeParse(body);
    if (!idValidation.success) {
      return createResponse(
        { error: 'Invalid request body', details: idValidation.error },
        request.headers.get('Accept'),
        400,
      );
    }

    const updateValidation = ProfileUpdateSchema.safeParse(body);
    if (!updateValidation.success) {
      return createResponse(
        { error: 'Invalid request body', details: updateValidation.error },
        request.headers.get('Accept'),
        400,
      );
    }

    const updatedProfile = await prisma.profile.update({
      where: { id: idValidation.data.id },
      data: updateValidation.data,
    });

    return createResponse(updatedProfile, request.headers.get('Accept'));
  }
  catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return createResponse(
          { error: 'Profile not found' },
          request.headers.get('Accept'),
          404,
        );
      }
    }

    log.error({ error }, 'Error in PUT /api/profiles/profile');
    return createResponse(
      { error: 'Internal server error' },
      request.headers.get('Accept'),
      500,
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const authResult = await authenticateRequest(request);
    if ('error' in authResult) {
      return createResponse(authResult, request.headers.get('Accept'), 401);
    }

    const body = await request.json();
    const validation = ProfileIdSchema.safeParse(body);
    if (!validation.success) {
      return createResponse(
        { error: 'Invalid request body', details: validation.error },
        request.headers.get('Accept'),
        400,
      );
    }

    await prisma.profile.delete({
      where: { id: validation.data.id },
    });

    return new NextResponse(null, { status: 204 });
  }
  catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return createResponse(
          { error: 'Profile not found' },
          request.headers.get('Accept'),
          404,
        );
      }
    }

    log.error({ error }, 'Error in DELETE /api/profiles/profile');
    return createResponse(
      { error: 'Internal server error' },
      request.headers.get('Accept'),
      500,
    );
  }
}
