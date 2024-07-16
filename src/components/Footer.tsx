import { Box, Typography, IconButton, Grid, useTheme } from "@mui/material";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, DescriptionSharp as DescriptionSharpIconRounded } from "@mui/icons-material";
import Image from "next/image";

import styles from "../styles/footer.module.scss";
import logo from "../images/logo.png";
import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.mixPanelToken as string, { ignore_dnt: true });



const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component={"div"}
      className={styles.footCont}
      sx={{
        background:
          theme.palette.mode === "light"
            ? "#FFFFFF"
            : theme.palette.background.default,
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={6} className={styles.footItemsOne}>
          <Box
            component={"div"}
            display="flex"
            alignItems="center"
            sx={{ paddingBottom: "25px", paddingLeft: "10px" }}
          >
            <Image src={logo} alt="Description" width={150} height={100} />
          </Box>
          <a
            href="https://github.com/ahmermalik/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mixpanel.track('Github Button', {
              'Type': "Github Button Footer",
            })}
          >
            <IconButton color="primary" sx={{ color: "#787878" }}>
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmermalikm/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mixpanel.track('Linkedin Button', {
              'Type': "Linkedin Button Footer",
            })}
          >
            <IconButton size="large" color="primary" sx={{ color: "#787878" }}>
              <LinkedInIcon />
            </IconButton>
          </a>
          {/* <a
            href="https://medium.com/@ahmermalikm"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mixpanel.track('Medium Button', {
              'Type': "Medium Button Footer",
            })}
          >
            <IconButton size="large" color="primary" sx={{ color: "#787878" }}>
              <DescriptionSharpIconRounded />
            </IconButton>
          </a> */}
        </Grid>

        <Grid item md={6} className={styles.footItemsTwo}>
          <Typography className={styles.copyright}>
            © 2024 AHMER MALIK, ALL RIGHTS RESERVED.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
