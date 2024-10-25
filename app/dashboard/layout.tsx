'use client';

import { ReactNode } from 'react';
import Header from '@/components/Header';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-screen min-w-full flex-col">
      <Header />
      <main className="mx-auto flex flex-col p-3">{children}</main>
    </section>
  );
}
