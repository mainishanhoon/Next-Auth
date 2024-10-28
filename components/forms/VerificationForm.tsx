import AuthWrapper from '@/components/auth/AuthWrapper';
import { BeatLoader } from 'react-spinners';
export default function VerificationForm() {
  return (
    <AuthWrapper
      headerLabel="Confirming your Verification"
      backButtonHref="Back to SignIn"
      backButtonLabel="/auth/signIn"
    >
      <div className="flex w-full items-center justify-center">
        <BeatLoader />
      </div>
    </AuthWrapper>
  );
}
