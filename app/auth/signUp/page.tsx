import SignUpForm from '@/components/forms/SignUpForm';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default function SignUpPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <SignUpForm />
    </Suspense>
  );
}
