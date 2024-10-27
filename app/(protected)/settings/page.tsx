import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import Form from 'next/form';

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <Form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </Form>
    </div>
  );
}
