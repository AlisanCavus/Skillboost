import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'your email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.API_BASE_URL}/login_check`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();
        console.log(user)
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
