'use client';

import { Settings } from '@/actions/settings';
import { Button } from '@/components/ui/button';
import useCurrentUser from '@/hooks/UseCurrentUser';
import { SettingsSchema } from '@/schema/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Form from 'next/form';
import {
  Form as ShadcnForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { MailIcon, UserRound } from 'lucide-react';
import FormError from '@/components/auth/FormError';
import FormSuccess from '@/components/auth/FormSuccess';
import PageContainer from '@/components/PageContainer';
import CardWrapper from '@/components/CardWrapper';
import { Role } from '@prisma/client';

export default function SettingsPage() {
  const { update } = useSession();
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  function onSubmit(values: z.infer<typeof SettingsSchema>) {
    startTransition(() => {
      Settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError('Something went Wrong'));
    });
  }

  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center">
        <CardWrapper label="Update Account Details">
          <ShadcnForm {...form}>
            <Form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md font-bold text-foreground sm:text-lg">
                        Name
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            disabled={isPending}
                            type="text"
                            placeholder="Lorem Ipsum"
                            className="pl-10 tracking-wider placeholder:tracking-wide"
                          />
                          <UserRound className="absolute left-3 top-2 size-5 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {user?.isOAuth === false && (
                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-md font-bold text-foreground sm:text-lg">
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
                  </>
                )}
                <div className="grid flex-wrap gap-4 sm:grid-cols-3">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem className="col-span-1 rounded-lg border px-3 pb-2 shadow-sm dark:border-muted-foreground">
                        <div className="flex items-center justify-center space-x-5 pt-2">
                          <FormLabel className="text-md pl-1 font-bold text-foreground sm:text-lg">
                            Role
                          </FormLabel>
                          <div className="w-[150px]">
                            <Select
                              disabled={isPending}
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value={Role.Admin}>
                                  Admin
                                </SelectItem>
                                <SelectItem value={Role.User}>User</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {user?.isOAuth === false && (
                    <FormField
                      control={form.control}
                      name="isTwoFactorEnabled"
                      render={({ field }) => (
                        <FormItem className="col-span-1 rounded-lg border px-3 shadow-sm dark:border-muted-foreground sm:col-span-2">
                          <div className="flex items-center justify-around space-x-5 py-3">
                            <FormLabel className="text-md pl-1 font-bold text-foreground sm:text-lg">
                              Two Factor Authentication
                            </FormLabel>
                            <FormControl>
                              <Switch
                                disabled={isPending}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <div className="flex justify-center">
                <Button
                  disabled={isPending}
                  type="submit"
                  className="px-8 text-xl"
                >
                  Update
                </Button>
              </div>
            </Form>
          </ShadcnForm>
        </CardWrapper>
      </div>
    </PageContainer>
  );
}
