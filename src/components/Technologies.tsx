import React from "react";
import Image from "next/image";
import styles from "../styles/technologies.module.scss";
import experienceData from "../data/experienceData";
import { Grid, Typography, Box, useTheme } from "@mui/material";


const LoadBar = () => {
  return (
    <Grid className={styles.technames}>
      {experienceData.map((exp) => (
        <div key={exp.techName}>
          <Box
            component={"div"}
            sx={{
              width: "125px",
              height: exp.height,
              position: "relative",
              overflow: "hidden",
              border: "1px solid #ccc",
              borderTop: "none",
              borderRadius: "15px",
              marginBottom: "25px",
            }}
          >
            <span className={styles.years}>{`${exp.years} yrs`}</span>
            <Box
              component="img"
              src={exp.src}
              alt={exp.techName}
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            component={"div"}
            className={styles.imageContainer}
            sx={{ marginTop: "25px", paddingBottom: "25px" }}
          >
            <Image
              src={exp.image}
              alt={exp.techName}
              height={100}
              width={100}
            />
          </Box>
        </div>
      ))}
    </Grid>
  );
};

const Technologies: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      className={styles.tech}
      component={"div"}
      sx={{
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(to bottom, #ffffff, #f5f5f5)"
            : theme.palette.background.default,
      }}
    >
      <div className={styles.heading}>
        <Typography
          variant="h2"
          className={styles.name}
          sx={{ fontSize: ["35px", "56px"] }}
        >
          Technologies
        </Typography>
        <Typography
          component="p"
          className={styles.loc}
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: ["15px", "21px"],
            fontWeight: "400",
          }}
        >
          Leveraging Tech to Explore New Horizons
        </Typography>
      </div>

      <LoadBar />
    </Box>
  );
};

export default Technologies;
