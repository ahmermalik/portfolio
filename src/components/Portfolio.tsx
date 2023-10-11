import { useState, useRef } from "react";
import Image from "next/image";
import { Grid, Typography, Button, Box, useTheme } from "@mui/material";
import ArrowButton from "./ArrowButton";
import styles from "../styles/portfolio.module.scss";
import { projects, nonprofitProjects } from "../data/projectsData";
import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.mixPanelToken as string, { ignore_dnt: true });



const Portfolio: React.FC = () => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <Grid
      className={styles.portfolio}
      container
      spacing={2}
      sx={{
        background:
          theme.palette.mode === "light"
            ? "#F5F5F5"
            : theme.palette.background.default,
      }}
    >
      {/* 1st Grid */}
      <Grid
        className={styles.gridOne}
        item
        xs={12}
        md={2}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
      >
        <Typography
          variant="h2"
          className={styles.title}
          sx={{
            fontSize: ["35px", "56px"],
            marginLeft: "15px",
            marginTop: "4px",
          }}
        >
          Portfolio
        </Typography>
        <Typography
          className={styles.explore}
          sx={{
            fontSize: ["15px", "20px"],
            fontWeight: "600",
            lineHeight: "30px",
            marginBottom: "30px",
            marginLeft: "15px",
            paddingTop: "4px",
            fontColor:
              theme.palette.mode === "light"
                ? "#2C2C2C"
                : theme.palette.background.default,
          }}
        >
          Explore my Digital Creations
        </Typography>
        <Box
          component={"div"}
          sx={{
            background:
              theme.palette.mode === "light"
                ? "#ffffff"
                : theme.palette.background.default,
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "24px", fontWeight: "600" }}
          >
            Projects
          </Typography>
          <Box sx={{ marginBottom: "10px" }} component={"div"}>
            {projects.map((project) => (
              <Typography
                key={project.name}
                onClick={() => {
                  setActiveProject(project);
                  if (window.innerWidth <= 900) {
                    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
                  };
                  mixpanel.track('Project Button', {
                    'Type': project.name,
                  });
                }}
                sx={{
                  fontSize: ["16px", "20px"],
                  lineHeight: "30px",
                  fontWeight: "400",
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor:
                    activeProject?.name === project.name
                      ? "#FF9B501A"
                      : "transparent",
                  color:
                    activeProject?.name === project.name
                      ? "#FF9B50"
                      : "#787878",
                }}
              >
                {project.name}
              </Typography>
            ))}
          </Box>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}
          >
            Nonprofit Projects
          </Typography>
          <Box component={"div"}>
            {nonprofitProjects.map((project) => (
              <Typography
                key={project.name}
                onClick={() => {
                  setActiveProject(project);
                  if (window.innerWidth <= 768) {
                    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                sx={{
                  fontSize: ["16px", "20px"],
                  lineHeight: "30px",
                  fontWeight: "400",
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor:
                    activeProject?.name === project.name
                      ? "#FF9B501A"
                      : "transparent",
                  color:
                    activeProject?.name === project.name
                      ? "#FF9B50"
                      : "#787878",
                }}
              >
                {project.name}
              </Typography>
            ))}
          </Box>
        </Box>
      </Grid>
      {/* 2nd Grid */}
      <Grid item xs={12} md={9} className={styles.gridTwo} ref={detailsRef}>
        <Box
          component={"div"}
          sx={{
            flexDirection: ["column", "column", "column"],
            alignItems: "start",
            gap: 2,
          }}
        >
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: ["column", "column", "row"],
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: 2,
            }}
          >
            <Typography
              className={styles.projectName}
              variant="h5"
              sx={{
                fontSize: ["24px", "32px", "56px"],
                fontColor:
                  theme.palette.mode === "light"
                    ? "#2C2C2C"
                    : theme.palette.background.default,
              }}
            >
              {activeProject.name}
            </Typography>
            <Box
              component={"div"}
              className={styles.viewProjectBtn}
              sx={{
                alignSelf: ["center", "center", "center"],
                marginLeft: [0, 0, "auto"],
              }}
            >
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <ArrowButton btnName={"View Project"} marginRight={"10px"} onClick={() => {

                  mixpanel.track('View Project Button', {
                    'Type': activeProject.name,
                  });
                }} />
              </a>
            </Box>
          </Box>
          <Typography
            className={styles.techNames}
            variant="body1"
            sx={{
              color: "#FF9B50",
              fontSize: ["14px", "20px"],
              marginRight: "10px",
              textAlign: "left",
              width: "100%",
              lineHeight: "30px",
            }}
          >
            {activeProject.technologies.join(", ")}
          </Typography>
        </Box>
        <Typography
          className={styles.projDescrip}
          variant="body2"
          sx={{
            color: "#787878",
            fontSize: ["15px", "17px", "18px"],
          }}
        >
          {activeProject.description}
        </Typography>
        <div className={styles.imageDiv}>
          <Image
            src={activeProject.image}
            alt={activeProject.name}
            width={600}
            height={600}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "1000px",
              maxHeight: "1000px",
              borderRadius: "20px",
              background: `url(${activeProject.image}), lightgray -249.484px -6px / 144.156% 100.75% no-repeat`,
              boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
              marginBottom: "35px",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <Typography
          className={styles.summary}
          variant="body1"
          sx={{
            color: "#787878",
            fontSize: ["15px", "17px", "18px"],
            lineHeight: "30px",
          }}
        >
          {activeProject.summary}
        </Typography>

        <Typography
          className={styles.featitle}
          variant="body2"
          sx={{
            color: "#787878",
            fontSize: ["15px", "17px", "18px"],
            marginBottom: "-15px",
            marginTop: "20px",
          }}
        >
          Key Features:
        </Typography>
        <ul>
          {activeProject.keyFeatures.map((feature) => (
            <li key={feature}>
              <Typography
                className={styles.features}
                variant="body2"
                sx={{
                  fontSize: ["15px", "17px", "18px"],
                  fontColor:
                    theme.palette.mode === "light"
                      ? "#000000"
                      : theme.palette.background.default,

                }}
              >
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
