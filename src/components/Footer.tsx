import { Box } from "@mui/material";
import styles from "../styles/footer.module.scss";
import { Typography, IconButton, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionSharpIconRounded from "@mui/icons-material/DescriptionSharp";
import Image from "next/image";
import logo from "../images/logo.png";
import { useTheme } from "@mui/material/styles";

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
          >
            <IconButton color="primary" sx={{ color: "#787878" }}>
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmermalikm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="large" color="primary" sx={{ color: "#787878" }}>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href="https://medium.com/@ahmermalikm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="large" color="primary" sx={{ color: "#787878" }}>
              <DescriptionSharpIconRounded />
            </IconButton>
          </a>
        </Grid>

        <Grid item md={6} className={styles.footItemsTwo}>
          <Typography className={styles.copyright}>
            © 2023 AHMER MALIK, ALL RIGHTS RESERVED.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
