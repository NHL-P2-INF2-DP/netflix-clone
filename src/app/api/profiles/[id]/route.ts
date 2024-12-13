import type { NextRequest } from 'next/server';

import { errorResponse, successResponse } from '@/lib/api-response';
import { authenticateRequest } from '@/lib/auth-middleware';
import prisma from '@/lib/prisma';

// GET /api/profiles/{id} - Get specific profile
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const authResult = await authenticateRequest(request);
  if ('error' in authResult)
    return authResult;

  try {
    const profileWithDetails = await prisma.profile.findUnique({
      where: { id: params.id },
      include: {
        account: true,
        ViewingHistory: true,
        Watchlist: true,
      },
    });

    return successResponse(profileWithDetails);
  }
  catch (error) {
    console.error('Failed to fetch profile:', error);
    return errorResponse('Failed to fetch profile');
  }
}

// PUT /api/profiles/{id} - Update profile
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const authResult = await authenticateRequest(request);
  if ('error' in authResult)
    return authResult;

  try {
    const body = await request.json();

    const updatedProfile = await prisma.profile.update({
      where: { id: params.id },
      data: {
        name: body.name,
        dateOfBirth: new Date(body.dateOfBirth),
        language: body.language,
        profileImage: body.profileImage,
      },
    });

    return successResponse(updatedProfile, 'Profile updated successfully');
  }
  catch (error) {
    console.error('Failed to update profile:', error);
    return errorResponse('Failed to update profile');
  }
}

// DELETE /api/profiles/{id} - Delete profile
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const authResult = await authenticateRequest(request);
  if ('error' in authResult)
    return authResult;

  try {
    await prisma.profile.delete({
      where: { id: params.id },
    });

    return successResponse(null, 'Profile deleted successfully');
  }
  catch (error) {
    console.error('Failed to delete profile:', error);
    return errorResponse('Failed to delete profile');
  }
}
