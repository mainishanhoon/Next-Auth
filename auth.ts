import NextAuth, { type DefaultSession } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import authConfig from '@/auth.config';
import { prisma } from '@/utils/prisma';
import { getUserById } from './utils/user';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}

declare module 'next-auth' {
  interface Session {
    user: { role: string } & DefaultSession['user'];
  }
}
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

      return true;
    },
    async session({ token, session }) {
      console.log({ sessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const userExists = await getUserById(token.sub);
      if (userExists) {
        token.role = userExists.role;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
});
