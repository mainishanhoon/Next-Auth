import AuthTabs from '@/components/auth/AuthTabs';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default function page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <AuthTabs />
    </Suspense>
  );
}
