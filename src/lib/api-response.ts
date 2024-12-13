import { NextResponse } from 'next/server';

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

export function successResponse<T>(data: T, message?: string, status = 200) {
  return NextResponse.json({ data, message } satisfies ApiResponse<T>, {
    status,
  });
}

export function errorResponse(error: string, status = 500) {
  return NextResponse.json({ error } satisfies ApiResponse, { status });
}
