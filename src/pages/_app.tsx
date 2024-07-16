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

        <title>
          Ahmer Malik - Leading AI Specialist & Solutions Engineer in Houston,
          Texas
        </title>
        <meta
          name="description"
          content="Ahmer Malik's portfolio as a leading AI Specialist and Solutions Engineer. Discover AI projects, software development skills, and a track record of driving success."
        />
        <meta
          name="keywords"
          content="Ahmer Malik, AI Specialist, Solutions Engineer, technology sales, software development, AI projects, financial acumen, operational efficiency, user engagement"
        />
        <meta property="og:url" content="https://ahmermalik.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ahmer Malik - Leading AI Specialist & Solutions Engineer"
        />
        <meta
          property="og:description"
          content="Explore Ahmer Malik's portfolio, showcasing his expertise in AI, Solutions Engineering, and technology sales. Discover his innovative projects and professional achievements."
        />
        <meta
          property="og:image"
          content="https://ahmermalik.com/images/profile.jpg"
        />
        <meta name="author" content="Ahmer Malik" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
