import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

// GET /api/genres/{id} - Get specific genre
export async function GET(request: NextRequest) {
  try {
    const { id } = await request.json();
    return NextResponse.json(
      { message: `Get genre with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch genre' },
      { status: 500 },
    );
  }
}

// PUT /api/genres/{id} - Update genre
export async function PUT(request: NextRequest) {
  try {
    const { id, ...body } = await request.json();
    return NextResponse.json(
      { message: `Update genre with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to update genre' },
      { status: 500 },
    );
  }
}

// DELETE /api/genres/{id} - Delete genre
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    return NextResponse.json(
      { message: `Delete genre with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete genre' },
      { status: 500 },
    );
  }
}
