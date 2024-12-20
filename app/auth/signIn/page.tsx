import SignInForm from '@/components/forms/SignInForm';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default function SignInPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <SignInForm />
    </Suspense>
  );
}
