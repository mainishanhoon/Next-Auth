'use server';

import * as z from 'zod';
import { SignInSchema, SignUpSchema } from '@/schema/zod';
import bcrypt from 'bcrypt';
import prisma from '@/utils/db';
import { getUserByEmail } from '@/utils/user';

export async function signIn(values: z.infer<typeof SignInSchema>) {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' };
  }

  return { success: 'Email Sent' };
}

export async function signUp(values: z.infer<typeof SignUpSchema>) {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const userExists = await getUserByEmail(email);

  if (userExists) {
    return { error: 'User exists with this Email' };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: 'User Created' };
}
