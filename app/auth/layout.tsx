import Header from '@/components/Header';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-gradient-to-b from-background to-blue-400 dark:to-blue-500">
      <Header />
      <main className="min-w-full">{children}</main>
    </section>
  );
}
