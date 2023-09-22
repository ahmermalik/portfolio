import { useEffect } from "react";
import mixpanel from 'mixpanel-browser';

import Hero from "@/components/Hero";
import Techonologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Work from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

import { CssBaseline } from "@mui/material";

const { NEXT_PUBLIC_MIXPANEL_ID } = process.env;
mixpanel.init(NEXT_PUBLIC_MIXPANEL_ID as string, { ignore_dnt: true });


export default function Home() {
  useEffect(() => {
    if ((window as any).mixpanel) {
      mixpanel.track("Page Visited", {
        "Home": "Landed on ahmermalik.com"
      });
    }
  }, []);
  
  return (
    <>
      <CssBaseline />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="technologies">
          <Techonologies />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="work">
          <Work />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact"></section>
        <Footer/>
        <ScrollToTopBtn/>
      </main>
    </>
  );
}
