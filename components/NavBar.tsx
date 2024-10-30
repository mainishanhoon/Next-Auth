'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { NavItems } from '@/constants/NavItems';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      {NavItems.map((label) => (
        <Link
          href={label.href}
          key={label.name}
          className={cn(
            pathname == label.href
              ? 'bg-primary/20 text-primary'
              : 'bg-muted text-muted-foreground',
            'text-md flex items-center mx-1 gap-2 rounded-lg px-3 py-2 font-bold tracking-wide transition-all hover:text-primary/70',
          )}
        >
          <label.icon size={25} strokeWidth={3} />
          <p className='hidden sm:block'>{label.name}</p>
        </Link>
      ))}
    </>
  );
}
