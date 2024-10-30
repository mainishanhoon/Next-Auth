'use server';

import { currentRole } from '@/lib/actions';
import { Role } from '@prisma/client';

export async function Admin() {
  const role = await currentRole();

  if (role === Role.Admin) {
    return { success: 'Allowed Server Action' };
  }

  return { error: 'Forbidden Server Action !!' };
}
