import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "a41aab1790f8ee163edf",
      clientSecret: "d0b4f5a35777996e09b41c46050a452338cac719",
    }),
  ],
  secret: "su@135794",
};

export default NextAuth(authOptions);
