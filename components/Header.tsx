'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Menu, ShieldCheck } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import NavBar from '@/components/NavBar';
import DynamicBreadcrumb from './Breadcrumb';

export default function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background px-2 py-2 sm:px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost"  className="mr-2 lg:hidden p-2">
                <Menu size={30} />
                <span className="sr-only">Open menu</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-2xl text-center max-sm:max-w-[300px] sm:max-w-[500px]">
              <NavBar onNavItemClick={closeDialog} />
            </DialogContent>
          </Dialog>

          <Link
            href={'https://github.com/mainishanhoon/next-auth'}
            className="flex items-center gap-2 text-2xl"
          >
            <ShieldCheck
              size={35}
              // color="hsl(var(--background))"
              strokeWidth={3}
              className="rounded-sm bg-primary p-1.5 text-white"
            />
            <p className="font-bold tracking-wider">
              Next<span className="text-primary">Auth</span>
            </p>
          </Link>
        </div>
        {/* {<DynamicBreadcrumb />} */}
        <div className="hidden flex-1 justify-center lg:flex">
          <NavBar onNavItemClick={() => {}} />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-5">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
