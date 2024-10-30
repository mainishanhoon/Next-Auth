'use server';

import * as z from 'zod';
import { ResetPasswordSchema } from '@/schema/zod';
import { getUserByEmail } from '@/utils/user';
import { generateResetPasswordToken } from '@/lib/genToken';
import { POST } from '@/app/api/send/route';

export async function ResetPassword(
  values: z.infer<typeof ResetPasswordSchema>,
) {
  const validateFields = ResetPasswordSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid Email' };
  }

  const { email } = validateFields.data;

  const userExists = await getUserByEmail(email);

  if (!userExists) {
    return { error: 'Email not Found!!' };
  }

  const passwordResetToken = await generateResetPasswordToken(email);

  await POST(
    new Request('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'resetPassword',
        name: userExists.name,
        email: passwordResetToken.email,
        token: passwordResetToken.token,
      }),
    }),
  );

  return { success: 'Email Sent!' };
}
