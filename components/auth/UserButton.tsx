import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';

export function UserButton(){
  return(
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage>
            <AvatarFallback>
              <CircleUserRound className=''/>
            </AvatarFallback>
          </AvatarImage>
        </Avatar>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
