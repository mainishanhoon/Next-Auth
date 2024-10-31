'use client';

import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import NavBar from '@/components/NavBar';
import UserButton from '@/components/auth/UserButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background px-2 py-2 sm:px-4">
      <div className="flex items-center justify-between">
        <div className="ml-2 flex items-center">
          <Link
            href={'https://github.com/mainishanhoon/RasoiGhar'}
            className="flex items-center gap-2 text-2xl"
          >
            <ShieldCheck
              size={35}
              color="hsl(var(--background))"
              className="rounded-sm bg-primary p-1"
            />

          </Link>
        </div>

        <div className="flex flex-1 justify-center">
          <NavBar />
        </div>

        <div className="mr-2 flex items-center rounded-full bg-primary">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
