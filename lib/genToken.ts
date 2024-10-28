import { v4 as uuidv4 } from 'uuid';
import { prisma } from '@/utils/prisma';
import { getVerificationTokenByEmail } from '@/utils/getToken';

export async function generateVerificationToken(email: string) {
  const token = uuidv4();
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
