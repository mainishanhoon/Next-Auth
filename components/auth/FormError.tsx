import { BadgeAlert } from 'lucide-react';

export default function FormError({ message }: { message: string | undefined }) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-red-500/20 py-2 px-4 text-sm text-red-500">
      <BadgeAlert size={25} strokeWidth={3} />
      <p className="font-bold tracking-wide">{message}</p>
    </div>
  );
}
