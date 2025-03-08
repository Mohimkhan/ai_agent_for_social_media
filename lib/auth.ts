import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/utils/db";

export const { auth, signIn, signOut, handlers } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: { scope: "read:user repo" }, // 👈 Add "repo" scope for private repositories
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token?.accessToken as string;
      session.user.name = token.name as string;
      session.user.image = (token.picture as string) || (token.image as string);
      session.user.email = token.email as string;
      return session;
    },
  },
});
