'use client';

import CardWrapper from '@/components/CardWrapper';
import PageContainer from '@/components/PageContainer';
import UserInfo from '@/components/UserInfo';
import useCurrentUser from '@/hooks/UseCurrentUser';

export default function ClientPage() {
  const user = useCurrentUser();
  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center">
        <CardWrapper label="Client Component">
          <UserInfo user={user} />
        </CardWrapper>
      </div>
    </PageContainer>
  );
}
