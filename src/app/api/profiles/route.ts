import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import { authenticateRequest } from '@/lib/auth-middleware';
import prisma from '@/lib/prisma';

// GET /api/profiles - Get all profiles
export async function GET(request: NextRequest): Promise<Response> {
  const authResult = await authenticateRequest(request);
  if ('error' in authResult)
    return NextResponse.json(authResult, { status: 401 });

  try {
    const profiles = await prisma.profile.findMany({
      include: {
        account: true,
        ViewingHistory: true,
        Watchlist: true,
      },
    });

    return NextResponse.json({
      data: profiles,
      message: 'Profiles fetched successfully',
    });
  }
  catch (error) {
    console.error('Failed to fetch profiles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch profiles' },
      { status: 500 },
    );
  }
}

// POST /api/profiles - Create a new profile
export async function POST(request: NextRequest): Promise<Response> {
  const authResult = await authenticateRequest(request);
  if ('error' in authResult)
    return NextResponse.json(authResult, { status: 401 });

  try {
    const body = await request.json();

    const account = await prisma.account.findFirst({
      where: {
        id: body.accountId,
      },
    });

    if (!account) {
      return NextResponse.json(
        { error: 'Invalid account ID' },
        { status: 403 },
      );
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

    return NextResponse.json(
      { data: profile, message: 'Profile created successfully' },
      { status: 201 },
    );
  }
  catch (error) {
    console.error('Failed to create profile:', error);
    return NextResponse.json(
      { error: 'Failed to create profile' },
      { status: 500 },
    );
  }
}
