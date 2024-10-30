import { currentRole } from '@/lib/actions';
import { Role } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const role = await currentRole();

  if (role === Role.Admin) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
