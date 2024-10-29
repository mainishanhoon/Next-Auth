'use server';

import { prisma } from '@/utils/prisma';
import { getUserByEmail } from '@/utils/user';
import { getVerificationTokenByToken } from '@/utils/verificationToken';

export default async function Verification(token: string) {
  const tokenExists = await getVerificationTokenByToken(token);

  if (!tokenExists) {
    return { error: 'Token does not exist!' };
  }

  const tokenExpired = new Date(tokenExists.expires) < new Date();

  if (tokenExpired) {
    return { error: 'Token has Expired!' };
  }

  const userExists = await getUserByEmail(tokenExists.email);

  if (!userExists) {
    return { error: 'Email does not exists' };
  }

  await prisma.user.update({
    where: { id: userExists.id },
    data: { emailVerified: new Date(), email: tokenExists.email },
  });

  await prisma.verificationToken.delete({
    where: { id: tokenExists.id },
  });

  return { success: 'Email has been Verified!' };
}
