import { useState, useRef } from "react";
import { Grid, Typography, Button } from "@mui/material";
import ArrowButton from "./ArrowButton";
import Image from "next/image";
import Box from "@mui/material/Box";
import styles from "../styles/portfolio.module.scss";
import { projects, nonprofitProjects } from "../data/projectsData";

const Portfolio: React.FC = () => {
  const detailsRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState(projects[3]);

  return (
    <Grid className={styles.portfolio} container spacing={2}>
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
            marginLeft: "5px",
            marginTop: "4px",
          }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="h4"
          className={styles.explore}
          sx={{
            fontSize: ["15px", "20px"],
            fontWeight: "600",
            lineHeight: "30px",
            marginBottom: "30px",
            marginLeft: "5px",
            paddingTop: "4px",
          }}
        >
          Explore my Digital Creations
        </Typography>
        <Box
          component={"div"}
          sx={{
            backgroundColor: "white",
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
              variant="h5"
              sx={{
                color: "#2C2C2C",
                fontSize: ["24px", "32px", "56px"],
                fontStyle: "normal",
                textAlign: "left",
                flexGrow: 1,
              }}
            >
              {activeProject.name}
            </Typography>
            <Box
              component={"div"}
              className={styles.viewProject}
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
                <ArrowButton btnName={"View Project"} marginRight={"10px"} />
              </a>
            </Box>
          </Box>
          <Typography
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
          variant="body2"
          sx={{
            color: "#787878",
            fontSize: ["15px", "17px", "18px"],
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "30px",
            marginBottom: "20px",
            marginTop: "10px",
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
                variant="body2"
                sx={{
                  color: "#000000",
                  fontSize: ["15px", "17px", "18px"],
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
