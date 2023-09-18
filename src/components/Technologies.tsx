import React from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import Image from "next/image";
import styles from "../styles/technologies.module.scss";
import ArrowButton from "./ArrowButton";
import Box from "@mui/material/Box";

type Experience = {
  techName: string;
  years: number;
  height: string;
  image: string;
  src: string;
};

function WavyRectangle() {
  const experience: Experience[] = [
    {
        techName: "Next.js",
        years: 3,
        height: "150px",
        image: "/images/nextjs.svg",
        src: "/images/wavered.svg",
      },
    {
      techName: "Node.js",
      years: 6,
      height: "200px",
      image: "/images/nodejs.svg",
      src: "/images/wavered.svg",
    },
    {
        techName: "HTML",
        years: 8,
        height: "325px",
        image: "/images/html.svg",
        src: "/images/wavered.svg",
      },
    {
      techName: "React",
      years: 7,
      height: "250px",
      image: "/images/react.svg",
      src: "/images/waveblue.svg",
    },

    {
      techName: "TypeScript",
      years: 3,
      height: "150px",
      image: "/images/typescript.svg",
      src: "/images/waveblue.svg",
    },
    {
      techName: "SQL",
      years: 7,
      height: "250px",
      image: "/images/sql.svg",
      src: "/images/waveblue.svg",
    },
    // {
    //     techName: "CSS",
    //     years: 8,
    //     height: "325px",
    //     image: "/images/css.svg",
    //     src: "/images/waveblue.svg",
    //   },

    {
      techName: "AWS",
      years: 4,
      height: "175px",
      image: "/images/aws.svg",
      src: "/images/waveorange.svg",
    },
    {
        techName: "JavasSript",
        years: 8,
        height: "325px",
        image: "/images/javascript.svg",
        src: "/images/waveorange.svg",
      }
  ];

  return (
    <Box className={styles.technames}  component={"div"}>
      {experience.map((exp) => (
        <div key={exp.techName}>
          <Box
            sx={{
              width: "125px",
              height: exp.height,
              position: "relative",
              overflow: "hidden",
              border: "1px solid #ccc",
              borderTop: "none", 
              borderRadius: "15px",
              marginBottom: "25px",
              '&:active': {
                transform: "scale(0.78)" // Slightly scale down when clicked
              },
              boxShadow: [
                "-0px 25px 35px rgba(0, 0, 0, 0.3)", 
                "0px 25px 10px rgba(0, 0, 0, 0.3)", 
                "0px 7px rgba(0, 0, 0, 0.3)", 
              ].join(", "),
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

          <Box className={styles.imageContainer} sx={{marginTop:"25px", paddingBottom:"25px"}}>
            <Image
              src={exp.image}
              alt={exp.techName}
              className={""}
              height={100}
              width={100}
            />
          </Box>
        </div>
      ))}
    </Box>
  );
}

const Technologies: React.FC = () => {
  return (
    <Box className={styles.tech} component={"div"}>
      <div className={styles.heading}>
        <Typography
          variant="h2"
          className={styles.name}
          sx={{ fontSize: ["35px","56px"] }}
        >
          Technologies
        </Typography>
        <Typography
          component="p"
          className={styles.loc}
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: ["15px","21px"],
            fontWeight: "400",
          }}
        >
          Leveraging Tech to Explore New Horizons
        </Typography>
      </div>

      <WavyRectangle />
    </Box>
  );
};

export default Technologies;
