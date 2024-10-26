'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
  label: string;
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button
      variant="link"
      className="w-full text-md font-bold hover:underline decoration-2 decoration-dashed underline-offset-4"
      size="sm"
      asChild
    >
      <Link href={href} className="font-bold">
        {label}
      </Link>
    </Button>
  );
}
