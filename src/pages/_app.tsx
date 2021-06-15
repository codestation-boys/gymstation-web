import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";

import "../styles/global.scss";

// O NextAuthProvider é o contexto de alguma sessão de autênticação futura.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
