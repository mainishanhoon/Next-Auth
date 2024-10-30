'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LockKeyhole } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ThemeToggle from '@/components/ThemeToggle';

interface CardWrapperProps {
  children: React.ReactNode;
  label: string;
}

export default function CardWrapper({ children, label }: CardWrapperProps) {
  return (
    <Card className="border-2 shadow-md w-full bg-muted sm:max-w-2xl">
      <div className="flex items-center justify-between p-3 px-4">
        <div className="flex items-center space-x-1">
          <LockKeyhole
            strokeWidth={3}
            className="size-8 rounded-xl bg-primary p-1.5 text-white sm:size-10"
          />
          <p className="text-2xl font-bold tracking-wider sm:text-3xl">
            Next<span className="text-primary">Auth</span>
          </p>
        </div>
        <ThemeToggle />
      </div>

      <Separator />
      <CardHeader className="text-center text-2xl md:text-3xl">
        {label}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
