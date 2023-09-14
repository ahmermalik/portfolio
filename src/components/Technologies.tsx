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
      techName: "Node.js",
      years: 6,
      height: "200px",
      image: "/images/nodejs.svg",
      src: "/images/wavered.svg",
    },
    {
      techName: "React",
      years: 7,
      height: "250px",
      image: "/images/react.svg",
      src: "/images/wavered.svg",
    },
    {
      techName: "JavasSript",
      years: 8,
      height: "325px",
      image: "/images/javascript.svg",
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
    {
      techName: "HTML",
      years: 8,
      height: "325px",
      image: "/images/html.svg",
      src: "/images/waveorange.svg",
    },
    {
      techName: "CSS",
      years: 8,
      height: "325px",
      image: "/images/css.svg",
      src: "/images/waveorange.svg",
    },
    {
        techName: "AWS",
        years: 4,
        height: "175px",
        image: "/images/aws.svg",
        src: "/images/waveorange.svg",
      },
];

  return (
<div className={styles.technames}>
  {experience.map((exp) => (
    <div key={exp.techName} >

      <Box
        sx={{
          width: "125px",
          height: exp.height,
          position: "relative",
          overflow: "hidden",
          border: '1px solid #ccc',
          borderRadius: '15px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          marginBottom: "25px"
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
            objectFit: "cover"
          }}
        />
      </Box>

      <Box className={styles.imageContainer}>
        <Image src={exp.image} alt={exp.techName} className={""} height={100} width={100} />
      </Box>
    </div>
  ))}
</div>



  );
}

const Technologies: React.FC = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.heading}>
        <Typography variant="h2" className={styles.name}>
          Technologies
        </Typography>
        <Typography component="p" className={styles.loc}>
          Leveraging Tech to Explore New Horizons
        </Typography>
      </div>

      <WavyRectangle />
    </div>
  );
};

export default Technologies;
