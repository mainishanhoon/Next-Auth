import UserInfo from '@/components/UserInfo';
import { currentUser } from '@/lib/actions';
import CardWrapper from '@/components/CardWrapper';
import PageContainer from '@/components/PageContainer';

export default async function ServerPage() {
  const user = await currentUser();
  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center">
        <CardWrapper label="Server Component">
          <UserInfo user={user} />
        </CardWrapper>
      </div>
    </PageContainer>
  );
}
