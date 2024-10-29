import NewPasswordForm from '@/components/forms/NewPasswordForm';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default function NewPasswordPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <NewPasswordForm />
    </Suspense>
  );
}
