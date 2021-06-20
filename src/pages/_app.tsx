import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"
import { theme } from "../styles/theme";

import "@fontsource/roboto/900.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <ToastContainer />
        <Component {...pageProps} />
      </ChakraProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
