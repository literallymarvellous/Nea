import "../styles/scss/base/_index.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Provider } from "../context/state";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider>
      <SessionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
