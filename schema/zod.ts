import { Role } from '@prisma/client';
import * as z from 'zod';

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is Required' }),
  code: z.optional(z.string()),
});

export const SignUpSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(6, { message: 'Atleast 6 characters required' }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: 'Atleast 6 characters required' }),
});

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  email: z.optional(z.string().email()),
  role: z.enum([Role.Admin, Role.User]),
  isTwoFactorEnabled: z.optional(z.boolean()),
});
