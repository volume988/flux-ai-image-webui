import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { getServerSession, type NextAuthOptions } from "next-auth";
import { compare } from "bcrypt";

const providers: any[] = [
  GithubProvider({
    clientId: process.env.GITHUB_ID || "",
    clientSecret: process.env.GITHUB_SECRET || "",
    httpOptions: {
      timeout: 10000,
    },
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_ID || "",
    clientSecret: process.env.GOOGLE_SECRET || "",
    httpOptions: {
      timeout: 10000,
    },
  }),
  CredentialsProvider({
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      const user = await prisma.user.findFirst({
        where: { email: credentials?.email },
      });

      if (!user) {
        return null;
      }

      const passwordCorrect = await compare(
        credentials?.password,
        user?.password
      );

      if (passwordCorrect) {
        return user;
      } else {
        return null;
      }
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/sign-in",
  },
  providers,
  callbacks: {
    async session({ session, user }) {
      session.user = {
        ...session.user,
        ...user,
      };
      return session;
    },
  },
  session: {
    maxAge: 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
};

export const handlers = NextAuth(authOptions);

export const getServerAuthSession = () => getServerSession(authOptions);
