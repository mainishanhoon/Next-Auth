'use client';

import { Admin } from '@/actions/admin';
import FormSuccess from '@/components/auth/FormSuccess';
import RoleGate from '@/components/auth/RoleGate';
import CardWrapper from '@/components/CardWrapper';
import PageContainer from '@/components/PageContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Role } from '@prisma/client';
import { toast } from 'sonner';

export default function AdminPage() {
  function onServerActionClick() {
    Admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  }

  function onApiRouteClick() {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        toast.success('Allowed API Route');
      } else {
        toast.error('Forbidden API Route');
      }
    });
  }

  return (
    <PageContainer scrollable>
      <div className="flex items-center justify-center">
        <CardWrapper label="Admin Actions">
          <div className='space-y-6'>
          <RoleGate allowedRole={Role.Admin}>
            <FormSuccess message="You are allowed to see this content" />
          </RoleGate>
          <Card className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-bold">Admin-only API Route</p>
            <Button onClick={onApiRouteClick}>Click to Test</Button>
          </Card>
          <Card className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-bold">Admin-only Server Action</p>
            <Button onClick={onServerActionClick}>Click to Test</Button>
          </Card>
          </div>
        </CardWrapper>
      </div>
    </PageContainer>
  );
}
