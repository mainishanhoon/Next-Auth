'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { NavItems } from '@/constants/NavItems';

interface NavBarProps {
  onNavItemClick: () => void;
}

export default function NavBar({ onNavItemClick }: NavBarProps) {
  const pathname = usePathname();
  return (
    <>
      {NavItems.map((label) => (
        <Link
          href={label.href}
          key={label.name}
          className={cn(
            pathname == label.href
              ? 'bg-muted text-primary'
              : 'bg-none text-muted-foreground',
            'text-md flex items-center gap-2 rounded-lg px-3 py-2 font-bold tracking-wide transition-all hover:text-primary/70',
          )}
          onClick={onNavItemClick}
        >
          <label.icon size={25} strokeWidth={2} />
          {label.name}
        </Link>
      ))}
    </>
  );
}
