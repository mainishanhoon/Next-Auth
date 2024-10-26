'use client';

import { FcGoogle } from 'react-icons/fc';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

export default function Social() {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full hover:border-2 hover:border-muted-foreground"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full hover:border-2 hover:border-muted-foreground"
        variant="outline"
        onClick={() => {}}
      >
        <GitHubLogoIcon className="size-5" />
      </Button>
    </div>
  );
}
