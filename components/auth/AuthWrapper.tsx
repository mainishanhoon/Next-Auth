'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Social from './Social';
import BackButton from './BackButton';
import { LockKeyhole } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ThemeToggle from '@/components/ThemeToggle';

interface AuthWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export default function AuthWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: AuthWrapperProps) {
  return (
    <Card className="w-full max-w-md bg-muted shadow-md md:max-w-xl">
      <div className="flex items-center justify-between p-3 px-4">
        <div className='flex space-x-1 items-center'>
          <LockKeyhole
            strokeWidth={3}
            className="size-10 rounded-xl bg-primary p-1.5 text-white"
          />
          <p className="text-3xl font-bold tracking-wider">
            Next<span className="text-primary">Auth</span>
          </p>
        </div>
        <ThemeToggle />
      </div>

      <Separator />
      <CardHeader className="text-center text-xl md:text-3xl">
        {headerLabel}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
