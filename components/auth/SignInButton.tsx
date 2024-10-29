'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export default function SignInButton({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) {
  const router = useRouter();

  function login() {
    router.push('/auth/signIn');
  }

  if (mode === "modal"){
    return(
      <span>
        Todo
      </span>
    )
  }

  return (
    <span onClick={login} className="cursor-pointer">
      {children}
    </span>
  );
}
