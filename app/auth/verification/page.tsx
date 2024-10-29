import VerificationForm from '@/components/forms/VerificationForm';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function VerificationPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <VerificationForm />
    </Suspense>
  );
}
