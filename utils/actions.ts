'use server';

import * as z from 'zod';
import { SignInSchema, SignUpSchema } from '@/schema/zod';
import bcrypt from 'bcryptjs';
import { prisma } from '@/prisma/prisma';
import { getUserByEmail } from '@/utils/user';
import { signIn } from '@/auth';
import { SIGNIN_REDIRECT_ROUTE } from '../routes';
import { AuthError } from 'next-auth';

export async function SignIn(values: z.infer<typeof SignInSchema>) {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: SIGNIN_REDIRECT_ROUTE,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: 'Something went wrong' };
      }
    }
  }

  return { success: 'Email Sent' };
}

export async function SignUp(values: z.infer<typeof SignUpSchema>) {
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
