import { SessionProvider } from "@/context/SessionContext"

import "@/styles/App.scss";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider>
      <Head>
        <title> SupplyCare | Gestión de insumos médicos </title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
