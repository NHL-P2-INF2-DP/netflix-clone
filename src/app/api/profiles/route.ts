import type { NextRequest } from 'next/server';

import { errorResponse, successResponse } from '@/lib/api-response';
import { authenticateRequest } from '@/lib/auth-middleware';
import prisma from '@/lib/prisma';

// GET /api/profiles - Get all profiles
export async function GET(request: NextRequest) {
  const authResult = await authenticateRequest(request);
  if ('error' in authResult)
    return authResult;

  try {
    const profiles = await prisma.profile.findMany({
      include: {
        account: true,
        ViewingHistory: true,
        Watchlist: true,
      },
    });

    return successResponse(profiles);
  }
  catch (error) {
    console.error('Failed to fetch profiles:', error);
    return errorResponse('Failed to fetch profiles');
  }
}

// POST /api/profiles - Create a new profile
export async function POST(request: NextRequest) {
  const authResult = await authenticateRequest(request);
  if ('error' in authResult)
    return authResult;

  try {
    const body = await request.json();

    const account = await prisma.account.findFirst({
      where: {
        id: body.accountId,
      },
    });

    if (!account) {
      return errorResponse('Invalid account ID', 403);
    }

    const profile = await prisma.profile.create({
      data: {
        name: body.name,
        accountId: body.accountId,
        dateOfBirth: new Date(body.dateOfBirth),
        language: body.language,
        profileImage: body.profileImage,
      },
      include: {
        account: true,
      },
    });

    return successResponse(profile, 'Profile created successfully', 201);
  }
  catch (error) {
    console.error('Failed to create profile:', error);
    return errorResponse('Failed to create profile');
  }
}
