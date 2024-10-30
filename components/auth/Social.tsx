'use client';

import { signIn } from '@/auth';
import { FcGoogle } from 'react-icons/fc';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { SIGNIN_REDIRECT_ROUTE } from '@/routes';
import { useSearchParams } from 'next/navigation';

export default function Social() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || SIGNIN_REDIRECT_ROUTE,
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full hover:border-2 hover:border-muted-foreground"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full hover:border-2 hover:border-muted-foreground"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <GitHubLogoIcon className="size-5" />
      </Button>
    </div>
  );
}
