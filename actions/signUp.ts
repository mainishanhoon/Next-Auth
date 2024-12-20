'use server';

import * as z from 'zod';
import { SignUpSchema } from '@/schema/zod';
import bcrypt from 'bcryptjs';
import { prisma } from '@/utils/prisma';
import { getUserByEmail } from '@/utils/user';
import { POST } from '@/app/api/send/route';
import { generateVerificationToken } from '@/lib/genToken';

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

  const verificationToken = await generateVerificationToken(email);

  await POST(
    new Request('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'verification',
        name: values.name,
        email: verificationToken.email,
        token: verificationToken.token,
      }),
    }),
  );
  return { success: 'Confirmation Email Sent!!' };
}
