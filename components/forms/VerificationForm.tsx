'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import PageContainer from '@/components/PageContainer';
import Verification from '@/actions/verification';
import FormError from '@/components/auth/FormError';
import FormSuccess from '../auth/FormSuccess';

export default function VerificationForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError('Missing token!');
      return;
    }

    Verification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went Wrong!!');
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center md:w-dvw">
        <AuthWrapper
          headerLabel="Verifying Your Email"
          backButtonHref="/auth/signIn"
          backButtonLabel="Back to SignIn"
        >
          <div className="flex w-full items-center justify-center">
            {!success && !error && <BeatLoader />}
            <FormSuccess message={success} />
            <FormError message={error} />
          </div>
        </AuthWrapper>
      </div>
    </PageContainer>
  );
}
