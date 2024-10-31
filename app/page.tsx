import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { LockKeyhole, LogIn } from 'lucide-react';
import SignInButton from '@/components/auth/SignInButton';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-gradient-to-b from-background to-blue-400 dark:to-blue-500">
      <div className="flex items-center justify-center gap-2 p-3 text-2xl">
        <LockKeyhole
          strokeWidth={3}
          className="size-14 rounded-2xl bg-primary p-3 text-white md:size-24 md:rounded-3xl md:p-4"
        />
        <p className="text-5xl font-bold tracking-wider md:text-8xl">
          Next<span className="text-primary">Auth</span>
        </p>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-5">
            <h1 className="font-bold text-primary max-sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="text-foreground">
                Enter your&nbsp;
                <span className="rounded-xl bg-muted px-2 text-primary/50">
                  credentials
                </span>
                &nbsp;to access your account
              </span>
            </h1>
            <p className="mx-auto max-w-[850px] font-bold tracking-wide text-foreground md:text-2xl">
              Welcome to Next-Auth. This is a public route showcasing the
              authentication system.
            </p>
          </div>
          <div className="flex space-x-4">
            <SignInButton asChild>
              <Button
                variant="default"
                size="lg"
                className="gap-2 p-5 text-xl text-white"
              >
                <LogIn className="size-6" strokeWidth={3} />
                <p>Sign In</p>
              </Button>
            </SignInButton>
            <Link href={'https://github.com/mainishanhoon/Next-Auth'}>
              <Button variant="outline" size="lg" className="gap-2 p-5 text-xl">
                <GitHubLogoIcon className="size-6" />
                <p>GitHub</p>
              </Button>
            </Link>
          </div>
          <ThemeToggle />
          <div className="flex flex-wrap justify-center gap-5 py-10 lg:gap-10 text-3xl font-bold">
            <div className="flex items-center space-x-2">
              <Image
                src="/NextJS.webp"
                alt=""
                width={50}
                height={50}
                className="size-8 lg:size-12"
              />
              <p className="text-xl lg:text-3xl">Next.js</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/postgreSQL.webp"
                alt=""
                width={50}
                height={50}
                className="size-8 lg:size-12"
              />
              <p className="text-xl lg:text-3xl">postgreSQL</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/Prisma.webp"
                alt=""
                width={45}
                height={45}
                className="size-8 lg:size-12"
              />
              <p className="text-xl lg:text-3xl">Prisma</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/Neon.webp"
                alt=""
                width={45}
                height={45}
                className="size-8 lg:size-12"
              />
              <p className="text-xl lg:text-3xl">Neon</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/AuthJS.webp"
                alt=""
                width={45}
                height={45}
                className="size-8 lg:size-12"
              />
              <p className="text-xl lg:text-3xl">Auth.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
