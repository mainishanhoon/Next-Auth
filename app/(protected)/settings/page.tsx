'use client';

import { Button } from '@/components/ui/button';
import SignOut from '@/actions/signOut';
import { useCurrentUser } from '@/hooks/UserContext';

export default function SettingsPage() {
  const user = useCurrentUser();

  function onSubmit() {
    SignOut();
  }

  return (
    <div>
      {JSON.stringify(user)}
      <Button onClick={onSubmit} variant="destructive" type="submit">
        Sign Out
      </Button>
    </div>
  );
}
