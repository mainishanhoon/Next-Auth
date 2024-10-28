import { AlertTriangle, LogIn, NotepadText, Users2 } from 'lucide-react';

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
    name: 'Error',
    href: '/auth/error',
    icon: AlertTriangle,
  },
  {
    name: 'Food Planner',
    href: '/dashboard/planner',
    icon: NotepadText,
  },
];
