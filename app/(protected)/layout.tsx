import Header from '@/components/Header';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-background to-blue-400 dark:to-blue-500">
      <Header />
      <main className='p-2 sm:p-3 w-screen'>{children}</main>
    </div>
  );
}
