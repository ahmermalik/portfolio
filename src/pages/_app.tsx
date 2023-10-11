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
          content="Software Engineering Leader immersed in Web3. Avid about Bitcoin and the cosmos. Explore Ahmer's digital universe!"
        />
        <meta property="og:url" content="https://ahmermalik.com" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Ahmer Malik"></meta>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />


      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
