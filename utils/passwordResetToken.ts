import { prisma } from '@/utils/prisma';

export async function getResetPasswordTokenByToken(token: string) {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findFirst({
      where: { token },
    });
    return passwordResetToken;
  } catch {
    return null;
  }
}

export async function getResetPasswordTokenByEmail(email: string) {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findFirst({
      where: { email },
    });
    return passwordResetToken;
  } catch {
    return null;
  }
}
