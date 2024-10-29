import { prisma } from '@/utils/prisma';

export async function getTwoFactorTokenByToken(token: string) {
  try {
    const twoFactorToken = await prisma.twoFactorToken.findFirst({
      where: { token },
    });
    return twoFactorToken;
  } catch {
    return null;
  }
}

export async function getTwoFactorTokenByEmail(email: string) {
  try {
    const twoFactorToken = await prisma.twoFactorToken.findFirst({
      where: { email },
    });
    return twoFactorToken;
  } catch {
    return null;
  }
}
