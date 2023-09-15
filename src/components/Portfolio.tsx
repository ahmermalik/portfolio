import { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import ArrowButton from "./ArrowButton";
import Image from "next/image";
import Box from "@mui/material/Box";

const Portfolio: React.FC = () => {
  const projects = [
    {
      name: "Najumi",
      technologies: ["Typescript", "Google Analytics", "jQuery"],
      description:
        "Spearheaded the launch of three pivotal product features, achieving an 18% increase in subscription rates by crypto traders.",
      image: "/images/projects/najumi.png",
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
      image: "/images/projects/caistore.png",
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
      name: "Shish Kabob Cafe",
      technologies: ["JavaScript", "Google Analytics", "jQuery"],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/images/projects/shishkabob.png",
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
      image: "/images/projects/chatapp2.png",
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
      image: "/images/projects/cryptotistics.png",
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
      image: "/images/projects/bullbearbuddies.png",
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
      image: "/images/projects/ahmermalik.png",
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
      image: "/images/projects/waterwater.png",
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
      image: "/images/projects/houstonhelps.png",
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
    <Grid
      container
      spacing={2}
      sx={{ marginTop: "40px", marginBottom: "40px" }}
    >
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
      <Grid item xs={12} md={9} sx={{marginLeft:"50px"}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#2C2C2C",
              fontSize: ["24px", "32px", "56px"],
              fontStyle: "normal",
            }}
          >
            {activeProject.name}
          </Typography>
          <ArrowButton btnName={"View Project"} marginRight={"10px"}/>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "#FF9B50",
            fontSize: ["16px", "20px", "24px"],
          }}
        >
          {activeProject.technologies.join(", ")}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#787878",
            fontSize: ["15px", "17px", "18px"],
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "50px",
          }}
        >
          {activeProject.description}
        </Typography>

        <Image
          src={activeProject.image}
          alt={activeProject.name}
          width={600}
          height={600}
          style={{
            width: "100%", // Will take up the full width of its container up to 600px
            maxWidth: "1000px",
            maxHeight: "700px",
            borderRadius: "20px",
            background: `url(${activeProject.image}), lightgray -249.484px -6px / 144.156% 100.75% no-repeat`,
            boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
            marginBottom: "25px",
          }}
        />

        <Typography
          variant="body1"
          sx={{
            color: "#787878",
            fontSize: ["15px", "17px", "18px"],
          }}
        >
          {activeProject.summary}
        </Typography>

        <Typography variant="body2">Key Features:</Typography>
        <ul>
          {activeProject.keyFeatures.map((feature) => (
            <li key={feature}>
              <Typography
                variant="body2"
                sx={{
                  color: "#787878",
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
