import {
  LogIn,
  NotepadText,
  Users2,
  Warehouse,
} from 'lucide-react';

export const NavItems = [
  {
    name: 'Sign In',
    href: '/auth/signIn',
    icon: LogIn,
  },
  {
    name: 'Sign Up',
    href: '/auth/signUp',
    icon: Users2,
  },
  {
    name: 'Inventory',
    href: '/dashboard/inventory',
    icon: Warehouse,
  },
  {
    name: 'Food Planner',
    href: '/dashboard/planner',
    icon: NotepadText,
  },
];
