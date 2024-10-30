'use server';

import { signOut } from '@/auth';
import { auth } from '@/auth';

export async function SignOut() {
  await signOut();
}

export async function currentUser() {
  const session = await auth();

  return session?.user;
}

export async function currentRole() {
  const session = await auth();

  return session?.user?.role;
}
