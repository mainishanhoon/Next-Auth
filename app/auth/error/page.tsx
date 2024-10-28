import AuthError from '@/components/auth/AuthError';
import PageContainer from '@/components/PageContainer';
import { LockKeyhole } from 'lucide-react';

export default function AuthErrorPage() {
  return (
    <AuthError />
    // <>
    //   <PageContainer>
    //     <div className="flex items-center justify-center">
    //       <span className="flex h-[640px] w-[1280px] items-center justify-center space-x-10 border bg-gradient-to-b from-background to-blue-300 dark:to-blue-500">
    //         <LockKeyhole
    //           strokeWidth={3}
    //           className="size-48 rounded-3xl bg-primary p-8 text-white"
    //         />
    //         <p className="text-[150px] font-bold tracking-wider">
    //           Next<span className="text-primary">Auth</span>
    //         </p>
    //       </span>
    //     </div>
    //   </PageContainer>
    // </>
  );
}
