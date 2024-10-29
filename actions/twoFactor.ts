import { prisma } from '@/utils/prisma';

export async function getTwoFactorConfirmationByUserId(userId: string) {
  try {
    const getTwoFactorConfirmation =
      await prisma.twoFactorConfirmation.findUnique({ where: { userId } });

    return getTwoFactorConfirmation;
  } catch {
    return null;
  }
}
