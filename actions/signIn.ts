'use server';

import * as z from 'zod';
import { SignInSchema } from '@/schema/zod';
import { getUserByEmail } from '@/utils/user';
import { signIn } from '@/auth';
import { SIGNIN_REDIRECT_ROUTE } from '@/routes';
import { AuthError } from 'next-auth';
import { POST } from '@/app/api/send/route';
import {
  generateVerificationToken,
  generateTwoFactorToken,
} from '@/lib/genToken';
import { prisma } from '@/utils/prisma';
import { getTwoFactorConfirmationByUserId } from '@/actions/twoFactor';
import { getTwoFactorTokenByEmail } from '@/utils/twoFactorToken';

export async function SignIn(
  values: z.infer<typeof SignInSchema>,
  callbackUrl?: string | null,
) {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' };
  }

  const { email, password, code } = validatedFields.data;

  const userExists = await getUserByEmail(email);

  if (!userExists || !userExists.email || !userExists.password) {
    return { error: 'Email does not exists' };
  }

  if (!userExists.emailVerified) {
    const verificationToken = await generateVerificationToken(userExists.email);

    await POST(
      new Request('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'verification',
          name: userExists.name,
          email: verificationToken.email,
          token: verificationToken.token,
        }),
      }),
    );

    return { success: 'Verification Email Sent!' };
  }

  if (userExists.isTwoFactorEnabled && userExists.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(userExists.email);

      if (!twoFactorToken) {
        return { error: 'Invalid OTP' };
      }
      if (twoFactorToken.token !== code) {
        return { error: 'Invalid OTP' };
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date();

      if (hasExpired) {
        return { error: 'OTP has Expired!' };
      }

      await prisma.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        userExists.id,
      );

      if (existingConfirmation) {
        await prisma.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }

      await prisma.twoFactorConfirmation.create({
        data: { userId: userExists.id },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(userExists.email);

      await POST(
        new Request('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'twoFactorAuth',
            name: userExists.name,
            email: twoFactorToken.email,
            token: twoFactorToken.token,
          }),
        }),
      );

      return { twoFactor: true };
    }
  }
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: callbackUrl || SIGNIN_REDIRECT_ROUTE,
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

  return { success: 'Welcome to the Next-Auth' };
}
