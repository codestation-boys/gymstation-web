import { JWT } from "next-auth/jwt";

export async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const url = "http://localhost:3333/accounts/refresh-token";

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: token.refreshToken }),

      method: "POST",
    });

    const refreshedTokens = await response.json();
    console.log(refreshedTokens);

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + 60 * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
