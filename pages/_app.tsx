import "../styles/scss/base/_index.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Provider } from "../context/state";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
