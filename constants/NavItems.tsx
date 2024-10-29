import { Cog, OctagonAlert, ServerCog, UsersRound } from 'lucide-react';

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
    icon: OctagonAlert,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Cog,
  },
];
