import { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import ArrowButton from "./ArrowButton";
import Image from "next/image";
import Box from "@mui/material/Box";

const Portfolio: React.FC = () => {
  const projects = [
    {
      name: "Shish Kabob Cafe",
      technologies: ["JavaScript", "Google Analytics", "jQuery"],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/image/path",
      url: "github.com/projecturl",
      summary:
        "This project leverages JavaScript, Google Analytics, and jQuery to provide an exceptional user experience while boosting the restaurant's delivery service.",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
    {
      name: "CAI Storefront",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "Charts",
        "Amazon Web Services",
        "Jest",
        "Enzyme",
      ],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/image/path",
      url: "github.com/projecturl",
      summary:
        "This project leverages JavaScript, Google Analytics, and jQuery to provide an exceptional user experience while boosting the restaurant's delivery service.",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
    {
      name: "Najumi",
      technologies: ["Typescript", "Google Analytics", "jQuery"],
      description:
        "Spearheaded the launch of three pivotal product features, achieving an 18% increase in subscription rates by crypto traders.",
      image: "/image/path",
      url: "github.com/projecturl",
      summary:
        "This project leverages JavaScript, Google Analytics, and jQuery to provide an exceptional user experience while boosting the restaurant's delivery service.",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
    {
      name: "Technician Chat App",
      technologies: ["React", "Google Analytics", "jQuery"],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/image/path",
      url: "github.com/projecturl",
      summary:
        "This project leverages JavaScript, Google Analytics, and jQuery to provide an exceptional user experience while boosting the restaurant's delivery service.",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
    {
      name: "Cryptotistics",
      technologies: ["Python", "Google Analytics", "jQuery"],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/image/path",
      url: "github.com/projecturl",
      summary:
        "This project leverages JavaScript, Google Analytics, and jQuery to provide an exceptional user experience while boosting the restaurant's delivery service.",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
    {
      name: "Bull Bear Buddies",
      technologies: ["JavaScript", "Google Analytics", "jQuery"],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/image/path",
      url: "github.com/projecturl",
      summary:
        "This project leverages JavaScript, Google Analytics, and jQuery to provide an exceptional user experience while boosting the restaurant's delivery service.",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
    {
      name: "Ahmer Malik",
      technologies: ["Next.js", "Mix Panel", "jQuery"],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/image/path",
      url: "github.com/projecturl",
      summary:
        "This project leverages JavaScript, Google Analytics, and jQuery to provide an exceptional user experience while boosting the restaurant's delivery service.",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
  ];
  const nonprofitProjects = [
    {
      name: "Water, Water Everywhere!",
      technologies: ["JavaScript", "Google Analytics", "jQuery"],
      description: "NASA.",
      image: "/image/path",
      url: "github.com/projecturl",
      summary: "Utilizing Watson's A.I. to detect floods in an image",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
    {
      name: "Houston Helps",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "Charts",
        "Amazon Web Services",
        "Jest",
        "Enzyme",
      ],
      description: "Craigslist scrapper",
      image: "/image/path",
      url: "github.com/projecturl",
      summary: "Grabbed free stuff from Craigslist",
      keyFeatures: [
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
      ],
    },
  ];
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div>
      <Grid container spacing={2}>
        {/* 1st Grid */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <Typography
            variant="h2"
            className={""}
            sx={{ fontSize: "56px", marginBottom: "20px" }}
          >
            Portfolio
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "26px", fontWeight: "600", marginBottom: "60px" }}
          >
            Explore my Digital Creations
          </Typography>
          <Box
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
            <Box sx={{ marginBottom: "10px" }}>
              {projects.map((project) => (
                <Typography
                  key={project.name}
                  onClick={() => setActiveProject(project)}
                  sx={{
                    fontSize: "20px",
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
            <Box>
              {nonprofitProjects.map((project) => (
                <Typography
                  key={project.name}
                  onClick={() => setActiveProject(project)}
                  sx={{
                    fontSize: "20px",
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
        <Grid item xs={12} md={9}>
          <Typography variant="h5">{activeProject.name}</Typography>
          <ArrowButton btnName={"View Project"} />
          <Typography variant="body1">
            {activeProject.technologies.join(", ")}
          </Typography>
          <Typography variant="body2">{activeProject.description}</Typography>
          <Image
            src={activeProject.image}
            alt={activeProject.name}
            width="100"
            height="100"
            style={{ maxWidth: "600px" }}
          />
          <Typography variant="body1">{activeProject.summary}</Typography>
          <Typography variant="body2">Key Features:</Typography>
          <ul>
            {activeProject.keyFeatures.map((feature) => (
              <li key={feature}>
                <Typography variant="body2">{feature}</Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
