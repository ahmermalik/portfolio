import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import { Typography } from "@mui/material";
import styles from "../styles/experience.module.scss";
import { useMediaQuery } from "@mui/material";
import companiesData from "../data/companiesData";
import Image from "next/image";

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

const Experience: React.FC = () => {
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
    <Box component={"div"} className={styles.work}>
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
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: ["15px", "21px"],
            fontWeight: "400",
          }}
        >
          Pushing Boundaries and Elevating User Engagement
        </Typography>
      </Box>

      <Box component={"div"} className={styles.astro} ref={refVisible}>
        {isMobile && isVisible && <AstronautMobile />}

        {!isMobile && isVisible && <Astronaut companies={companiesData} />}
      </Box>
    </Box>
  );
};

export default Experience;
