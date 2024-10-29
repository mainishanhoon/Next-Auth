'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { NewPasswordSchema } from '@/schema/zod';
import { getResetPasswordTokenByToken } from '@/utils/passwordResetToken';
import { getUserByEmail } from '@/utils/user';
import { prisma } from '@/utils/prisma';

export async function NewPassword(
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null,
) {
  if (!token) {
    return { error: 'Token does not Exist!' };
  }
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' };
  }

  const { password } = validatedFields.data;

  const tokenExists = await getResetPasswordTokenByToken(token);

  if (!tokenExists) {
    return { error: 'Invalid Token!' };
  }

  const hasExpired = new Date(tokenExists.expires) < new Date();

  if (hasExpired) {
    return { error: 'Token has Expired!' };
  }

  const userExists = await getUserByEmail(tokenExists.email);

  if (!userExists) {
    return { error: 'Email does not Exists!' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { id: userExists.id },
    data: { password: hashedPassword },
  });

  await prisma.passwordResetToken.delete({
    where: { id: tokenExists.id },
  });

  return { success: 'Password Successfully Updated!' };
}
