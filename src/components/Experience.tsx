import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/experience.module.scss";
import companies, { Company } from "../data/companiesData";
import {
  Box,
  Typography,
  useMediaQuery,
  Tooltip,
  useTheme,
  List,
  ListItem,
  Grid,
  ListItemText,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type CompanyBoxProps = {
  company: Company;
};

const AstronautMobile = dynamic(() => import("./AstronautMobile"), {
  ssr: false,
  loading: () => (
    <Image src="/images/rocket.gif" alt="Loading..." width={400} height={300} />
  ),
});

const Astronaut = dynamic(() => import("./Astronaut"), {
  ssr: false,
  loading: () => (
    <Image src="/images/rocket.gif" alt="Loading..." width={400} height={300} />
  ),
});

const CompanyBox: React.FC<CompanyBoxProps> = ({ company }) => {
  const theme = useTheme();
  return (
    <Box
      className={styles.comBox}
      component="div"
      sx={{
        borderRadius: 5,
        border: "1px solid #ffff",
        background: theme.palette.mode === "light" ? "#FFFFFF" : "#000000",
        marginBottom: 4,
        padding: 2,
        boxShadow:
          theme.palette.mode === "light"
            ? ["-0px 15px 25px rgba(0, 0, 0, 0.3)"].join(", ")
            : ["-0px 15px 25px rgba(255, 255, 255, 0.1)"].join(", "),
      }}
    >
      <Typography fontWeight="bold" className={styles.comRole}>
        {company.role}
      </Typography>

      <Box
        component={"div"}
        display="flex"
        justifyContent="start"
        alignItems="center"
        gap={2}
      >
        <Typography className={styles.comName} style={{ marginRight: 8 }}>
          {company.name}
        </Typography>

        <Typography className={styles.comDate}>
          {company.dates[0]} - {company.dates[1]}
        </Typography>
      </Box>

      <List>
        {company.accomplishments.map((achievement, index) => (
          <ListItem
            key={index}
            disablePadding
            dense
            className={styles.comAchievements}
          >
            <ListItemText primary={`🏅 ${achievement}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const Experience: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isVisible, setIsVisible] = useState(false);
  const refVisible = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (refVisible.current) {
      observer.observe(refVisible.current);
    }

    return () => {
      if (refVisible.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <Box
      component={"div"}
      className={styles.work}
      sx={{
        background:
          theme.palette.mode === "light"
            ? "#F5F5F5"
            : theme.palette.background.default,
      }}
    >
      <Box component={"div"} className={styles.titlecontainer}>
        <Typography
          variant="h2"
          className={styles.title}
          sx={{ fontSize: ["35px", "56px"] }}
        >
          Crafting Immersive Web Experiences
        </Typography>
        <Typography
          component="p"
          className={styles.subtitle}
          sx={{
            fontSize: ["15px", "21px"],
            fontWeight: "600",
            fontColor:
              theme.palette.mode === "light"
                ? "#2C2C2C"
                : theme.palette.background.default,
          }}
        >
          Pushing Boundaries & Elevating User Engagement
          {isMobile && (
            <Tooltip
              title="Experience enhanced features of this section on a desktop."
              arrow
              className={styles.toolTip}
              sx={{ display: "inline-flex", marginLeft: "8px" }}
            >
              <InfoOutlinedIcon style={{ fontSize: "15px" }} />
            </Tooltip>
          )}
        </Typography>
      </Box>

     
        <Box component={"span"} className={styles.astro}>
          {" "}
          {!isMobile && isVisible && <Astronaut companies={companies} />}
        </Box>
        <Box component={"div"}  ref={refVisible} className={styles.astromobilecontainer}>
        <Box component={"span"}>
          {isMobile &&
            isVisible &&
            companies?.length &&
            companies.map((company, index) => (
              <CompanyBox key={index} company={company} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
