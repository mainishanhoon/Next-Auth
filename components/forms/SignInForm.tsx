'use client';

import PageContainer from '@/components/PageContainer';
import CardWrapper from '@/components/auth/AuthWrapper';
import { useState, useTransition } from 'react';
import * as z from 'zod';
import { SignInSchema } from '@/schema/zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from 'next/form';
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
import { LockIcon, MailIcon } from 'lucide-react';
import FormError from '@/components/auth/FormError';
import FormSuccess from '../auth/FormSuccess';
import { SignIn } from '@/utils/actions';

export default function SignInForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    setError('');
    setSuccess('');

    startTransition(() => {
      SignIn(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  }

  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center sm:mt-16">
        <CardWrapper
          headerLabel="Access your Account"
          backButtonLabel="Don't have an account?"
          backButtonHref="/auth/signUp"
          showSocial
        >
          <ShadcnForm {...form}>
            <Form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold text-foreground">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            disabled={isPending}
                            type="password"
                            placeholder="Password"
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
              <Button
                disabled={isPending}
                type="submit"
                className="w-full text-xl"
              >
                Login
              </Button>
            </Form>
          </ShadcnForm>
        </CardWrapper>
      </div>
    </PageContainer>
  );
}
