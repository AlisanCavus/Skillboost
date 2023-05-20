import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      iat: number;
      exp: number;
      roles: string[];
      id: number;
      userName: string;
      name: string;
      email: string;
      address: string;
      zip: string;
      role: string;
      token: string;
    };
  }
}