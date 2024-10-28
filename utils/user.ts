import { prisma } from '@/utils/prisma';

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
}

export async function getUserById(id: string | undefined) {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
}
