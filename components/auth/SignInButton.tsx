'use client';

import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SignInForm from '@/components/forms/SignInForm';

interface LoginButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export default function SignInButton({ children, asChild }: LoginButtonProps) {
  const router = useRouter();

  function signIn() {
    router.push('/auth/signIn');
  }

  return (
    <span onClick={signIn} className="cursor-pointer">
      {children}
    </span>
  );
}
