import { Cog, ServerCog, UserRoundCog, UsersRound } from 'lucide-react';

export const NavItems = [
  {
    name: 'Server',
    href: '/server',
    icon: ServerCog,
  },
  {
    name: 'Client',
    href: '/client',
    icon: UsersRound,
  },
  {
    name: 'Admin',
    href: '/admin',
    icon: UserRoundCog,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Cog,
  },
];
