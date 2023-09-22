import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/theme-provider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <meta
          property="og:image"
          content="https://ahmermalik.com/images/ahmermalik.png"
        />
        <meta property="og:title" content="Ahmer Malik Portfolio" />
        <meta
          property="og:description"
          content="Software Engineering leader, Web3 enthusiast, Bitcoin and Space lover. This is the portal to all things Ahmer, welcome!"
        />
        <meta property="og:url" content="https://ahmermalik.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
