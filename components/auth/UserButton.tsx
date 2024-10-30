import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound, LogOut } from 'lucide-react';
import useCurrentUser from '@/hooks/UseCurrentUser';
import SignOutButton from '@/components/auth/SignOutButton';

export default function UserButton() {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ''}>
            <AvatarFallback className="bg-sky-500">
              <CircleUserRound
                size={25}
                color="hsl(var(--foreground))"
                className="bg-primary"
              />
            </AvatarFallback>
          </AvatarImage>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <SignOutButton>
          <DropdownMenuItem>
            <LogOut size={20} strokeWidth={3} className="mr-2" />
            Sign Out
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
