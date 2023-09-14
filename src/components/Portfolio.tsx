import { useState } from "react";
import { Grid, Typography, Button } from '@mui/material';
import Image from "next/image";

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
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <div>
    <Grid container spacing={3}>
        {/* 1st Grid */}
        <Grid item xs={12} md={6}>
            <Typography variant="h4">Portfolio</Typography>
            <Typography variant="h6">Explore my Digital Creations</Typography>
            <Typography variant="subtitle1">Projects</Typography>
            <div>
                {projects.map((project) => (
                    <Typography 
                        key={project.name}
                        onClick={() => setActiveProject(project)}
                        sx={{cursor: 'pointer'}}
                    >
                        {project.name}
                    </Typography>
                ))}
            </div>
        </Grid>

        {/* 2nd Grid */}
        <Grid item xs={12} md={6}>
            <Typography variant="h5">{activeProject.name}</Typography>
            <Button variant="contained">View Project</Button>
            <Typography variant="body1">{activeProject.technologies.join(', ')}</Typography>
            <Typography variant="body2">{activeProject.description}</Typography>
            <Image 
                src={activeProject.image} 
                alt={activeProject.name} 
                width="100" 
                height="100"
                style={{  maxWidth: '600px' }}
            />
            <Typography variant="body1">{activeProject.summary}</Typography>
            <Typography variant="body2">Key Features:</Typography>
            <ul>
                {activeProject.keyFeatures.map((feature) => (
                    <li key={feature}><Typography variant="body2">{feature}</Typography></li>
                ))}
            </ul>
        </Grid>
    </Grid>
</div>
  )
};

export default Portfolio;
