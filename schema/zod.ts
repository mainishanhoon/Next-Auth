import * as z from 'zod';

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string(),
});

export const SignUpSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(6, { message: 'Atleast 6 characters required' }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});
