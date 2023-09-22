import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/testimonials.module.scss";
import { testimonials, Testimonial } from "@/data/testimonialsData";
import {
  Box,
  Typography,
  Avatar,
  Card,
  Collapse,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useTheme } from "@mui/material/styles";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const snippet = testimonial.statement.slice(0, 150);
  const remaining = testimonial.statement.slice(150);

  return (
    <Box
      component={"div"}
      sx={{
        padding: 2,
        marginRight: 3,
        background:
          theme.palette.mode === "light"
            ? "#F5F5F5"
            : theme.palette.background.default,
      }}
      className={styles.tcard}
    >
      <Avatar
        src={testimonial.photo}
        alt={testimonial.name}
        sx={{ width: 60, height: 60, marginBottom: 2 }}
      />
      <Typography component={"p"} variant="h6" className={styles.cardName}>
        {testimonial.name}
      </Typography>
      <Typography
        component={"p"}
        variant="body2"
        className={styles.cardTestimony}
        sx={{
          fontColor:
            theme.palette.mode === "light"
              ? "#2c2c2c"
              : theme.palette.background.default,
        }}
      >
        {snippet}
        <Collapse in={expanded}>{remaining}</Collapse>
        {remaining && (
          <IconButton
            onClick={() => setExpanded(!expanded)}
            size="small"
            sx={{ marginLeft: 1 }}
          >
            {expanded ? (
              <ExpandLessIcon fontSize="inherit" />
            ) : (
              <ExpandMoreIcon fontSize="inherit" />
            )}
          </IconButton>
        )}
      </Typography>
    </Box>
  );
};

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const scroll = (direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? -240 : 240;
    scrollRef.current?.scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component={"div"}
      className={styles.testimonials}
      sx={{
        background:
          theme.palette.mode === "light"
            ? "#F5F5F5"
            : theme.palette.background.default,
      }}
    >
      <Typography
        sx={{
          paddingBottom: "20px",
          fontSize: ["35px", "50px"],
          fontColor:
            theme.palette.mode === "light"
              ? "#2c2c2c"
              : theme.palette.background.default,
        }}
        className={styles.testitle}
      >
        See What Clients and Collaborators Have to Say About My Work
      </Typography>

      <Box className={styles.iconLeft} component={"div"}>
        <IconButton onClick={() => scroll("left")}>
          <ChevronLeft />
        </IconButton>
      </Box>

      <Box ref={scrollRef} component={"div"} className={styles.testicard}>
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </Box>

      <Box className={styles.iconRight} component={"div"}>
        <IconButton onClick={() => scroll("right")}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials;
