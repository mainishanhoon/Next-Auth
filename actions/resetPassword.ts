'use server';

import * as z from 'zod';
import { ResetPasswordSchema } from '@/schema/zod';
import { getUserByEmail } from '@/utils/user';
import { generateResetPasswordToken } from '@/lib/genToken';
import { sendResetPasswordEmail } from '@/app/api/send/route';

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

  await sendResetPasswordEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return { success: 'Email Sent!' };
}
