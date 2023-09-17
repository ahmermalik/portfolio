import React from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionSharpIconRounded from '@mui/icons-material/DescriptionSharp';
import Image from "next/image";
import success from "../images/successfulahmer.png";
import styles from "../styles/hero.module.scss";
import ArrowButton from "./ArrowButton";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";


type HeroProps = {
  section: string; 
  setSection: React.Dispatch<React.SetStateAction<string>>; 
};


const Hero: React.FC<HeroProps> = ({ section, setSection }) => {
  return (
    <Grid container spacing={3} className={styles.mainGrid}>
      <Grid item xs={12}>
        <Navbar
          item
          xs={12}
            section={section}
            setSection={setSection}
        />
      </Grid>

      <Grid
        item
        xs={12} sm={12} md={4} lg={4}  xl={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        className={styles.gridOne}
      >
        <div>
          <Typography variant="h4" className={styles.intro}>
            Hello, I&apos;m
          </Typography>
          <Typography variant="h2" className={styles.name}>
            Ahmer Malik
          </Typography>
          <Typography component="p" className={styles.loc}>
            I&apos;m a fullstack developer living in Texas
          </Typography>
          <ArrowButton btnName={"Let's Code!"} marginRight={"1px"}/>

        </div>
        <span>
          <a
            href="https://github.com/ahmermalik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              color="primary"
              sx={{ color: "#FF9B50", marginTop: "40px" }}
            >
              <GitHubIcon />
            </IconButton>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmermalikm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              size="large"
              color="primary"
              sx={{ color: "#FF9B50", marginTop: "40px" }}
            >
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href="https://medium.com/@ahmermalikm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              size="large"
              color="primary"
              sx={{ color: "#FF9B50", marginTop: "40px" }}
            >
              <DescriptionSharpIconRounded />
            </IconButton>
          </a>
        </span>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4}  xl={5} className={styles.gridTwo}>
        <Image
          src={success}
          alt="Your image description"
          className={styles.spilloverImage}
        />
      </Grid>
      <Grid
       item xs={12} sm={12} md={4} lg={4} xl={5}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        className={styles.gridthree}
      >

          <Typography component="p" className={styles.subhead}>
           `Exploring the cosmos of code`
          </Typography>
          <Typography component="p" className={styles.subpar}>
            {" "}
            A passionate developer with a futuristic mindset. When I&apos;m not busy
            coding, you can find me gazing at the stars, diving into the world
            of cryptocurrencies, or analyzing charts. I love turning ideas into
            reality through lines of code, and I&apos;m excited to share my journey
            with you.
          </Typography>
 
        <Button
          sx={{
            marginBottom: "50px",
            alignSelf: "flex-end",
            backgroundColor: "transparent",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              color: "#FF9B50",
              fontSize: "26px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "35px",
              borderBottom: "1px solid #FF9B50",
              paddingBottom: "1px", // Adjusting space between text and underline
            }}
          >
            Download Resume
          </Box>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Hero;

// xs: 0px and up (extra-small devices, phones)
// sm: 600px and up (small devices, tablets in portrait mode)
// md: 900px and up (medium devices, tablets in landscape mode and some small laptop screens)
// lg: 1200px and up (large devices, most laptops, and desktops)
// xl: 1536px and up (extra-large devices, large desktops)
