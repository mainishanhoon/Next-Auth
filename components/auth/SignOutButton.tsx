'use client';

import SignOut from '@/actions/signOut';

export default function SignOutButton({
  children,
}: {
  children: React.ReactNode;
}) {
  function onSubmit() {
    SignOut();
  }

  return <span onClick={onSubmit} className="cursor-pointer">
    {children}
  </span>;
}
