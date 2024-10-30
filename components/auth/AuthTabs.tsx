'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignUpForm from '@/components/forms/SignUpForm';
import SignInForm from '@/components/forms/SignInForm';
import PageContainer from '@/components/PageContainer';
import NewPasswordForm from '@/components/forms/NewPasswordForm';
import ResetPasswordForm from '@/components/forms/ResetPasswordForm';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import AuthWrapper from '@/components/auth/AuthWrapper';

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
                <TabsTrigger value="resetPassword">Reset</TabsTrigger>
                <TabsTrigger value="newPassword">New</TabsTrigger>
                <TabsTrigger value="otp">OTP</TabsTrigger>
              </TabsList>
            </div>
            <div className="w-full flex-grow overflow-auto">
              <TabsContent value="signIn" className="h-full">
                <div className="flex justify-center">
                  <SignInForm />
                </div>
              </TabsContent>
              <TabsContent value="signUp" className="h-full w-full px-0">
                <div className="flex w-full justify-center px-0">
                  <SignUpForm />
                </div>
              </TabsContent>
              <TabsContent value="resetPassword" className="p-2">
                <div className="flex h-full items-center justify-center">
                  <ResetPasswordForm />
                </div>
              </TabsContent>
              <TabsContent value="newPassword" className="p-2">
                <NewPasswordForm />
              </TabsContent>
              <TabsContent value="otp" className="p-2">
                <AuthWrapper
                  headerLabel="Verify your Account"
                  backButtonLabel="Don't have an account?"
                  backButtonHref="/auth/signUp"
                  showSocial
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="space-y-6 text-center">
                      <p className="text-md font-bold tracking-wide text-muted-foreground">
                        Enter the verification code sent to your email
                      </p>
                      <div className="text-center">
                        <label className="text-xl font-bold text-foreground">
                          Verification Code
                        </label>
                        <div className="mt-5 flex justify-center">
                          <InputOTP maxLength={6}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </div>
                      </div>
                    </div>
                  </div>
                </AuthWrapper>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </PageContainer>
  );
}
