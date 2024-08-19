import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
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
  EmailProvider({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,
    // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
  }),
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    // name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.

    // 登入提交的字段
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      console.log("credentials:", credentials);

      // 查询用户
      const user = await prisma.user.findFirst({
        where: { email: credentials?.email },
      });

      // 用户不存在
      if (!user) {
        return null;
      }

      console.info("user:", user);

      const passwordCorrect = await compare(
        credentials?.password,
        user?.password
      );

      if (passwordCorrect) {
        return user;
      } else {
        // 密码不正确
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
  // export const { handlers, signIn, signUp, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/sign-in",
    // signUp: '/sign-up',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
  },
  providers,
  callbacks: {
    async session({ session, token, user }) {
      // user表更新之后，会自动调用当前回调，更新剩余credits
      // 通过useSession获取最新数据
      session.user = {
        ...session.user,
        ...user,
      };
      return session;
    },

    async jwt({ token, user }) {
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  // 通过 prisma 使用数据库
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
};

export const handlers = NextAuth(authOptions);

export const getServerAuthSession = () => getServerSession(authOptions);
