import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { api } from '@/lib/axiosInst';


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        }
        const res = await api.post('/login_check', {
          email: email,
          password: password,
        });
        const user = await res.data;
        // If no error and we have user data, return it
        if (user) {
          return user;  
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }:any) {
      return { ...token, ...user };
    },
    async session({ session, token, user }:any) {
        session.user = token;
        return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
