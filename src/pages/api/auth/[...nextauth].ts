import NextAuth, { User } from "next-auth";

import Providers from "next-auth/providers";
import { refreshAccessToken } from "../../../services/refreshAcessToken";

interface CredentialsProps {
  email: string;
  password: string;
}

interface UserData extends User {
  access_token?: string;
  refresh_token?: string;
  user?: User;
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

        const user = await response.json();


        if(!response.ok) {
          throw user
        }

        if (response.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    // async redirect(url, baseUrl) {
    //   return url.startsWith(baseUrl) ? url : baseUrl;
    // },

    async signIn(user: UserData, account, profile) {
      account.expires_in = 60;
      account.access_token = user.access_token;
      account.refresh_token = user.refresh_token;

      if (account) {
        return true;
      }

      console.log("Siging after account return")

      return "/login";
    },

    async jwt(token, user, account, profile, isNewUser) {
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_in * 1000,
          refreshToken: account.refresh_token,
          user: user.user_data,
        };
      }
      return token

      // Return previous token if the access token has not expired yet
      // if (Date.now() < token.accessTokenExpires) {
      //   return token;
      // }
      // Access token has expired, try to update it
      return await refreshAccessToken(token);
    },

    async session(session, token) {
      if (token) {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.error = token.error;
      }
      return session;
    },
  },
});
