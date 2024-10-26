import { BadgeCheck, TriangleAlert } from 'lucide-react';

export default function FormSuccess({
  message,
}: {
  message: string | undefined;
}) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/20 px-4 py-2 text-sm text-emerald-500">
      <BadgeCheck size={25} strokeWidth={3} />
      <p className="font-bold tracking-wide">{message}</p>
    </div>
  );
}
