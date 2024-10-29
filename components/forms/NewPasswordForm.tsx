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
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LockIcon } from 'lucide-react';
import FormError from '@/components/auth/FormError';
import FormSuccess from '@/components/auth/FormSuccess';
import { NewPasswordSchema } from '@/schema/zod';
import { NewPassword } from '@/actions/newPassword';
export default function NewPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof NewPasswordSchema>) {
    setError('');
    setSuccess('');

    startTransition(() => {
      NewPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  }

  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center md:w-dvw">
        <AuthWrapper
          headerLabel="Enter New Password"
          backButtonLabel="Back to SignIn"
          backButtonHref="/auth/signUp"
        >
          <ShadcnForm {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold text-foreground">
                        New Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            disabled={isPending}
                            type="password"
                            placeholder="New Password"
                            className="pl-10 tracking-wider placeholder:tracking-wide"
                          />
                          <LockIcon className="absolute left-3 top-2 size-5 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <div className='flex justify-center'>
              <Button
                disabled={isPending}
                type="submit"
                className="px-8 text-xl"
              >
                Reset
              </Button>
              </div>
            </form>
          </ShadcnForm>
        </AuthWrapper>
      </div>
    </PageContainer>
  );
}
