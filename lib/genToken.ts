import crypto from 'crypto';
import { prisma } from '@/utils/prisma';
import { getVerificationTokenByEmail } from '@/utils/verificationToken';
import { getResetPasswordTokenByEmail } from '@/utils/passwordResetToken';
import { getTwoFactorTokenByEmail } from '@/utils/twoFactorToken';

export async function generateTwoFactorToken(email: string) {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const tokenExists = await getTwoFactorTokenByEmail(email);

  if (tokenExists) {
    await prisma.twoFactorToken.delete({
      where: {
        id: tokenExists.id,
      },
    });
  }

  const twoFactorToken = await prisma.twoFactorToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return twoFactorToken;
}

export async function generateVerificationToken(email: string) {
  const token = crypto.randomBytes(8).toString('hex');
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const tokenExists = await getVerificationTokenByEmail(email);

  if (tokenExists) {
    await prisma.verificationToken.delete({
      where: {
        id: tokenExists.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
}

export async function generateResetPasswordToken(email: string) {
  const token = crypto.randomBytes(8).toString('hex');
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const tokenExists = await getResetPasswordTokenByEmail(email);

  if (tokenExists) {
    await prisma.passwordResetToken.delete({
      where: {
        id: tokenExists.id,
      },
    });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
}
