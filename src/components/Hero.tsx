import React from "react";
import Image from "next/image";
import mixpanel from 'mixpanel-browser';
import styles from "../styles/hero.module.scss";
import success from "../images/successfulahmer.png";

import {
  Grid,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowButton from "./ArrowButton";
import Navbar from "./Navbar";


mixpanel.init(process.env.mixPanelToken as string, { ignore_dnt: true });

const Hero: React.FC = ({ }) => {
  const theme = useTheme();
  return (
    <Grid container spacing={3} className={styles.mainGrid}>
      <Grid item xs={12}>
        <Navbar item xs={12} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box component={"div"} className={styles.gridOne}>
          <Typography
            className={styles.intro}
            sx={{
              fontSize: ["35px", "56px"],
              fontColor:
                theme.palette.mode === "light"
                  ? "#fffff"
                  : theme.palette.background.default,
            }}
          >
            Hello, I&apos;m
          </Typography>
          <Typography
            variant="h2"
            className={styles.name}
            sx={{ fontSize: ["56px", "86px"] }}
          >
            Ahmer Malik
          </Typography>
          <Typography component="p" className={styles.loc}>
            I&apos;m a Solutions Engineer specializing in AI solutions in Texas.
          </Typography>
          <ArrowButton
            btnName={"Let's Explore!"}
            marginRight={"1px"}
            onClick={() => {
              const element = document.getElementById("portfolio");
              element?.scrollIntoView({ behavior: "smooth" });
              mixpanel.track('Lets Code Button', {
                'Type': "Lets Code  Button",
              });
            }}
          />
        </Box>
        <span className={styles.icons}>
          <a
            href="https://github.com/ahmermalik/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mixpanel.track('Github Button', {
              'Type': "Github Button",
            })}
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
            onClick={() => mixpanel.track('Linkedin Button', {
              'Type': "Linkedin Button",
            })}
          >
            <IconButton
              size="large"
              color="primary"
              sx={{ color: "#FF9B50", marginTop: "40px" }}
            >
              <LinkedInIcon />
            </IconButton>
          </a>
          {/* <a
            href="https://medium.com/@ahmermalikm"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mixpanel.track('Medium Button', {
              'Type': "Medium Button",
            })}
          >
            <IconButton
              size="large"
              color="primary"
              sx={{ color: "#FF9B50", marginTop: "40px" }}
            >
              <DescriptionSharpIconRounded />
            </IconButton>
          </a> */}
        </span>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={5}
        className={styles.gridTwo}
      >
        <Image
          src={success}
          alt="Your image description"
          className={styles.spilloverImage}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        lg={4}
        xl={5}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        className={styles.gridthree}
      >
        <Typography component="p" className={styles.subhead}>
          {` "Engineering the future with AI-driven solutions." `}
        </Typography>
        <Typography component="p" className={styles.subpar}>
          {" "}
          A passionate Solutions Engineer with a futuristic mindset. Using cutting-edge AI technologies, 
          I turn complex problems into innovative solutions that drive business success. When not architecting AI systems, 
          I explore the latest tech trends, dive into cryptocurrencies, or analyze market trends. 
          I love turning ideas into impactful solutions and am excited to share my journey with you.
        </Typography>

        <Button
          onClick={() => {
            window.open("/resume/Resume.pdf", "_blank");
            mixpanel.track('Resume Button', {
              'Type': "Resume Button",
            });
          }}
          className={styles.resContainer}
          sx={{
            marginBottom: "50px",
            paddingRight: "50px",
            alignSelf: "center",
            backgroundColor: "transparent",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box
            className={styles.resbutton}
            component="span"
            sx={{
              display: "inline-block",
              color: "#FF9B50",
              fontSize: "26px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "35px",
              borderBottom: "1px solid #FF9B50",
              paddingBottom: "1px",
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