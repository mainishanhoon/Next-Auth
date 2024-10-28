'use server';

import * as z from 'zod';
import { SignInSchema } from '@/schema/zod';
import { getUserByEmail } from '@/utils/user';
import { signIn } from '@/auth';
import { SIGNIN_REDIRECT_ROUTE } from '@/routes';
import { AuthError } from 'next-auth';
import { generateVerificationToken } from '@/lib/genToken';
import { sendVerificationEmail } from '@/app/api/send/route';

export async function SignIn(values: z.infer<typeof SignInSchema>) {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' };
  }

  const { email, password } = validatedFields.data;

  const userExists = await getUserByEmail(email);

  if (!userExists || !userExists.email || !userExists.password) {
    return { error: 'Email does not exists' };
  }

  if (!userExists.emailVerified) {
    const verificationToken = await generateVerificationToken(userExists.email);

    await sendVerificationEmail(
      userExists.name,
      verificationToken.email,
      verificationToken.token,
    );

    return { success: 'Confirmation email sent!' };
  }

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
