import CardWrapper from '@/components/auth/AuthWrapper';
import { BadgeAlert } from 'lucide-react';
import PageContainer from '@/components/PageContainer';

export default function AuthError() {
  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center">
        <div className="flex justify-center">
          <CardWrapper
            headerLabel="Oops! Something went WRONG!!"
            backButtonHref="/auth/signIn"
            backButtonLabel="Back to SignIn"
          >
            <div className="flex items-center justify-center">
             <div className='size-20 aspect-square flex justify-center rounded-2xl items-center bg-destructive/20'>
              <BadgeAlert
                color="hsl(var(--destructive))"
                size={50}
                strokeWidth={3}
              />
             </div>
            </div>
          </CardWrapper>
        </div>
      </div>
    </PageContainer>
  );
}
