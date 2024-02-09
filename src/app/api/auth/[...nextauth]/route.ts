import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
  providers: [],
});

export { handler as GET, handler as POST };
