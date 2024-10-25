import {
  Cog,
  HandCoins,
  LayoutGrid,
  NotepadText,
  Warehouse,
} from 'lucide-react';

export const NavItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutGrid,
  },
  {
    name: 'Budgetary',
    href: '/dashboard/budgetary',
    icon: HandCoins,
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
