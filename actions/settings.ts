'use server';

import * as z from 'zod';
import { prisma } from '@/utils/prisma';
import { SettingsSchema } from '@/schema/zod';
import { getUserByEmail, getUserById } from '@/utils/user';
import { currentUser } from '@/lib/actions';
import { generateVerificationToken } from '@/lib/genToken';
import { POST } from '@/app/api/send/route';

export async function Settings(values: z.infer<typeof SettingsSchema>) {
  const user = await currentUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: 'Unauthorized' };
  }

  if (!user.isOAuth) {
    values.email = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const userExists = await getUserByEmail(values.email);

    if (userExists && userExists.id !== user.id) {
      return { error: 'Account with this Email already exists!' };
    }

    const verificationToken = await generateVerificationToken(values.email);

    await POST(user.name, verificationToken.email, verificationToken.token);
  }

  await prisma.user.update({
    where: { id: dbUser.id },
    data: { ...values },
  });

  return { success: 'Settings Updated!' };
}
