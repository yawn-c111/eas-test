import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Web3Provider from "@/providers/Web3Provider";
import UIProvider from "@/providers/UIProvider";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3Provider>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </Web3Provider>
  )
}

export default App;
