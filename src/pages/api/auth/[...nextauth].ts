import NextAuth from "next-auth";

import Providers from "next-auth/providers";

interface CredentialsProps {
  email: string;
  password: string;
}

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: CredentialsProps) {
        const { email, password } = credentials;
        const parseCredentialsToBasicAuth = Buffer.from(
          `${email}:${password}`
        ).toString("base64");

        const response = await fetch("http://localhost:3333/accounts/login", {
          method: "POST",
          headers: { authorization: `Basic ${parseCredentialsToBasicAuth}` },
        });

        const { user_data } = await response.json();

        if (response.ok && user_data) {
          return user_data;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async session(session) {

      return session;
    },

    async signIn(user, account, profile) {
      console.log({ user, account, profile });
      return true;
    },

    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
});
