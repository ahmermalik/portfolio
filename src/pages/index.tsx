import Hero from "@/components/Hero";
import Techonologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Work from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import {
  CssBaseline,
} from "@mui/material";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
import mixpanel from 'mixpanel-browser';
const {  NEXT_PUBLIC_MIXPANEL_ID } = process.env;
mixpanel.init(NEXT_PUBLIC_MIXPANEL_ID as string, { ignore_dnt: true });

export default function Home() {

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
