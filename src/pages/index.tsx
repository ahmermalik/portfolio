import Hero from "@/components/Hero";
import Techonologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Work from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import {
  createTheme,
  ThemeProvider,
  Switch,
  CssBaseline,
} from "@mui/material";

export default function Home() {

  const theme = createTheme({
    typography: {
      h4: {
        color: "#2C2C2C",
        fontFamily: "AllRoundGothicW01-Book, Arial",
        fontSize: "56px",
        fontWeight: 300,
      },

      h2: {
        color: "#FF9B50",
        fontFamily: "Poppins, Arial",
        fontSize: "86px",
        fontWeight: 700,
      },
      body1: {
        color: "#787878",
        fontFamily: "Poppins, Arial",
        fontSize: "22px",
        fontWeight: 400,
        lineHeight: "35px",
      },
    },

  });

  return (
    <ThemeProvider theme={theme}>
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
      </main>
    </ThemeProvider>
  );
}
