import { type ClassValue, clsx } from 'clsx';
import { toXML } from 'jstoxml';
import { NextResponse } from 'next/server';
import { twMerge } from 'tailwind-merge';

import { XMLConfig } from './xml';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createResponse(
  data: any,
  acceptHeader: string | null,
  status: number = 200,
) {
  if (acceptHeader === 'application/xml') {
    return new NextResponse(toXML(data, XMLConfig), { status });
  }
  return NextResponse.json(data, { status });
}
