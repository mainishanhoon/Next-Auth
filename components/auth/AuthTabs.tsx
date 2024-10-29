'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignUpForm from '@/components/forms/SignUpForm';
import SignInForm from '@/components/forms/SignInForm';
import AuthError from '@/components/auth/AuthError';
import PageContainer from '@/components/PageContainer';
import NewPasswordForm from '@/components/forms/NewPasswordForm';
import ResetPasswordForm from '@/components/forms/ResetPasswordForm';

export default function AuthTabs() {
  return (
    <PageContainer>
      <div className="flex min-h-lvh flex-col">
        <div className="flex flex-grow flex-col bg-transparent">
          <Tabs defaultValue="signIn" className="flex flex-grow flex-col">
            <div className="flex justify-center bg-transparent pt-2 md:pt-4">
              <TabsList>
                <TabsTrigger value="signIn">Sign In</TabsTrigger>
                <TabsTrigger value="signUp">Sign Up</TabsTrigger>
                <TabsTrigger value="error">Error</TabsTrigger>
                <TabsTrigger value="resetPassword">Reset</TabsTrigger>
                <TabsTrigger value="newPassword">New</TabsTrigger>
              </TabsList>
            </div>
            <div className="w-full flex-grow overflow-auto">
              <TabsContent value="signIn" className="h-full">
                <div className="flex h-fit justify-center gap-4 rounded-2xl bg-transparent">
                  <SignInForm />
                </div>
              </TabsContent>
              <TabsContent value="signUp" className="h-full">
                <div className="flex justify-center">
                  <SignUpForm />
                </div>
              </TabsContent>
              <TabsContent value="error" className="h-full">
                <div className="flex h-full items-center justify-center">
                  <AuthError />
                </div>
              </TabsContent>
              <TabsContent value="resetPassword" className="h-full">
                <div className="flex h-full items-center justify-center">
                  <ResetPasswordForm />
                </div>
              </TabsContent>
              <TabsContent value="newPassword" className="h-full">
                <div className="flex h-full items-center justify-center">
                  <NewPasswordForm />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </PageContainer>
  );
}
