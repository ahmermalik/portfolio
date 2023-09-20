import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "../styles/testimonials.module.scss";



const Testimonials: React.FC = () => {
  return <Box component={"div"} className={styles.testimonials}>

        <Typography
              variant="h5"
              sx={{
                color: "#2C2C2C",
                fontSize: ["24px", "32px", "50px"],
                fontStyle: "normal",
                textAlign: "center",
              }}
            >
   See What Collaborators and Colleagues Have to Say About My Work
            </Typography>

            <Typography
          variant="body2"
          sx={{
            color: "#787878",
            fontSize: ["15px", "17px", "18px"],
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "30px",
            marginBottom: "20px",
            marginTop: "10px",
            textAlign: "center"
          }}
        >
        Coming Soon....
        </Typography>

  </Box>;
};

export default Testimonials;
