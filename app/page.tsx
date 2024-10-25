import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { LockKeyhole, LogIn } from 'lucide-react';
import LoginButton from '../components/auth/LoginButton';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-gradient-to-b from-blue-50 to-blue-400 dark:from-teal-800 dark:to-blue-800">
      <div className="flex items-center justify-center gap-2 p-3 text-2xl">
        <LockKeyhole
          strokeWidth={3}
          className="size-16 p-3 rounded-2xl md:rounded-3xl bg-primary md:size-24 md:p-4 text-white"
        />
        <p className="text-6xl md:text-8xl font-bold tracking-wider">
          Next<span className="text-primary">Auth</span>
        </p>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-5">
            <h1 className="font-bold text-primary max-sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="text-foreground">
                Enter your&nbsp;
                <span className="rounded-xl bg-muted px-2 text-primary">
                  credentials
                </span>
                &nbsp;to access your account
              </span>
            </h1>
            <p className="mx-auto max-w-[850px] font-bold tracking-wide text-foreground md:text-2xl">
              Protect your users and data with our robust, easy-to-implement
              authentication services.
            </p>
          </div>
          <div className="space-x-4">
            <LoginButton>
              <Button variant="default" size="lg" className="gap-2 p-5 text-xl">
                <LogIn size={25} strokeWidth={3} />
                <p>Sign In</p>
              </Button>
            </LoginButton>
            <Button variant="outline" size="lg" className="gap-2 p-5 text-xl">
              <GitHubLogoIcon className="size-6" />
              <p>GitHub</p>
            </Button>
          </div>
          <div className="flex space-x-2 text-3xl font-bold">
            <p>Prisma</p>
            <p>Prisma</p>
            <p>Prisma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
