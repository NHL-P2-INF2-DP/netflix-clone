import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

// GET /api/content-metadata/{id} - Get specific metadata
export async function GET(request: NextRequest) {
  try {
    const { id } = await request.json();
    return NextResponse.json(
      { message: `Get metadata with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch metadata' },
      { status: 500 },
    );
  }
}

// PUT /api/content-metadata/{id} - Update metadata
export async function PUT(request: NextRequest) {
  try {
    const { id, ...body } = await request.json();
    return NextResponse.json(
      { message: `Update metadata with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to update metadata' },
      { status: 500 },
    );
  }
}

// DELETE /api/content-metadata/{id} - Delete metadata
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    return NextResponse.json(
      { message: `Delete metadata with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete metadata' },
      { status: 500 },
    );
  }
}
