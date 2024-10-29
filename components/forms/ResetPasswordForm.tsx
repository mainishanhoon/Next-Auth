'use client';

import PageContainer from '@/components/PageContainer';
import AuthWrapper from '@/components/auth/AuthWrapper';
import { useState, useTransition } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form as ShadcnForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MailIcon } from 'lucide-react';
import FormError from '@/components/auth/FormError';
import FormSuccess from '@/components/auth/FormSuccess';
import { ResetPasswordSchema } from '@/schema/zod';
import { ResetPassword } from '@/actions/resetPassword';
export default function ResetPasswordForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof ResetPasswordSchema>) {
    setError('');
    setSuccess('');

    startTransition(() => {
      ResetPassword(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  }

  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center md:w-dvw">
        <AuthWrapper
          headerLabel="Forgot Your Password?"
          backButtonLabel="Back to SignIn"
          backButtonHref="/auth/signUp"
        >
          <ShadcnForm {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold text-foreground">
                        Email
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            disabled={isPending}
                            type="email"
                            placeholder="lorem@ipsum.com"
                            className="pl-10 tracking-wider placeholder:tracking-wide"
                          />
                          <MailIcon className="absolute left-3 top-2 size-5 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <div className="flex justify-center">
                <Button
                  disabled={isPending}
                  type="submit"
                  className="px-8 text-xl"
                >
                  Send Email
                </Button>
              </div>
            </form>
          </ShadcnForm>
        </AuthWrapper>
      </div>
    </PageContainer>
  );
}
