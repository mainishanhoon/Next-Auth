'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ListTodo, Menu, Salad } from 'lucide-react';
import NavBar from '@/components/NavBar';

export default function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background px-2 py-2 sm:px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
                <Menu size={30} />
                <span className="sr-only">Open menu</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-2xl text-center max-sm:max-w-[300px] sm:max-w-[500px]">
              <NavBar onNavItemClick={closeDialog} />
            </DialogContent>
          </Dialog>

          <Link
            href={'https://github.com/mainishanhoon/RasoiGhar'}
            className="flex items-center gap-2 text-2xl"
          >
            <Salad
              size={35}
              color="hsl(var(--background))"
              className="rounded-sm bg-primary p-0.5"
            />
            <p className="font-bold tracking-wider">
              Rasoi<span className="text-primary">Ghar</span>
            </p>
          </Link>
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <NavBar onNavItemClick={() => {}} />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-5">
          <Button variant="outline" className="flex items-center space-x-2 py-1 sm:px-2 px-0 max-sm:aspect-square">
            <ListTodo size={25} color="hsl(var(--primary))" />
            <p className="text-xl text-primary max-sm:hidden">Todo</p>
          </Button>
        </div>
      </div>
    </header>
  );
}
