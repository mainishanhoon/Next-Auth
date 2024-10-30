import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import authConfig from '@/auth.config';
import { prisma } from '@/utils/prisma';
import { getUserById } from './utils/user';
import { getTwoFactorConfirmationByUserId } from '@/actions/twoFactor';
import { Role } from '@prisma/client';
import { getAccountByUserId } from './actions/account';

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/signIn',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log({ user, account });
      // Allow OAuth without email verification
      if (account?.provider !== 'credentials') return true;

      const userExists = await getUserById(user.id);
      // Prevent signIn without email verification
      if (!userExists?.emailVerified) return false;

      if (userExists.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          userExists.id,
        );

        if (!twoFactorConfirmation) return false;

        // Delete two factor confirmation for next Sign In
        await prisma.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async session({ token, session }) {
      console.log({ sessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name ?? '';
        session.user.email = token.email ?? '';
        session.user.isOAuth = token.isOAuth as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const userExists = await getUserById(token.sub);

      if (!userExists) return token;

      const accountExists = await getAccountByUserId(userExists.id);

      token.isOAuth = !!accountExists;
      token.name = userExists.name;
      token.email = userExists.email;
      token.role = userExists.role;
      token.isTwoFactorEnabled = userExists.isTwoFactorEnabled;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
});
