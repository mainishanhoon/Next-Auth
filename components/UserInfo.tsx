import { ExtendedUser } from '@/next-auth';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function UserInfo({ user }: { user?: ExtendedUser }) {
  return (
    <div className="space-y-2">
      <UserDetail label="ID" user={user} value="id" />
      <UserDetail label="Name" user={user} value="name" />
      <UserDetail label="Email" user={user} value="email" />
      <UserDetail label="Role" user={user} value="role" />
      <Card className="flex flex-row items-center justify-between rounded-lg border py-2 pl-4 pr-2 shadow-sm">
        <p className="text-sm font-bold md:text-lg">
          Two Factor Authentication
        </p>
        <Badge
          variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}
          className="md:text-lg md:font-bold"
        >
          {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
        </Badge>
      </Card>
    </div>
  );
}

interface UserDetailsProps {
  label: string;
  user?: ExtendedUser;
  value: keyof ExtendedUser;
}

export function UserDetail({ label, user, value }: UserDetailsProps) {
  return (
    <Card>
      <CardContent className="space-y-2 p-0">
        <div className="flex items-center justify-between py-2 pl-4 pr-2">
          <p className="text-sm font-bold sm:text-lg">{label}</p>
          <Badge
            variant="secondary"
            className="text-sm sm:text-lg sm:font-bold"
          >
            {user?.[value] ?? 'N/A'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
