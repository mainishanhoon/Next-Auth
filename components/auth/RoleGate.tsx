'use client';

import useCurrentRole from '@/hooks/UseCurrentRole';
import { Role } from '@prisma/client';
import FormError from '@/components/auth/FormError';

interface RoleGAteProps {
  children: React.ReactNode;
  allowedRole: Role;
}

export default function RoleGate({ children, allowedRole }: RoleGAteProps) {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You don't have the permission to View this Content!" />
    );
  }

  return <>{children}</>;
}
