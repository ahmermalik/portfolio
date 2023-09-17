import { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import ArrowButton from "./ArrowButton";
import Image from "next/image";
import Box from "@mui/material/Box";

const Portfolio: React.FC = () => {
  const projects = [
    {
      name: "Buffalo Bayou Funds Najumi",
      technologies: [
        "Node.js",
        "React v18",
        "TypeScript",
        "PostgreSQL",
        "Mix Panel",
        "Docker",
        "Web3.js",
      ],
      description:
        "A crypto analysis dashboard that employs metrics like RSI, volume, MACD, price, and market cap, enabling traders to customize configurations for informed trades and effective risk management.",
      image: "/images/projects/najumi.png",
      url: "github.com/projecturl",
      summary:
        "This project leverages Typescript both front-end and backend, utilizing React 18 and Material UI V5 within a Docker container, with user activity and performance tracked via Mix Panel integrations.",
      keyFeatures: [
        "Tailored Analysis",
        "Predictive Algorithm",
        "Modern Tech Stack",
        "Containerized Deployment",
        "Comprehensive Metrics",
      ],
    },
    {
      name: "Cox Automotive API Storefront",
      technologies: [
        "React v16",
        "Redux",
        "C#",
        "NoSQL",
        "Amazon Web Services",
      ],
      description: `A storefront to sell APIs, featuring a user dashboard for API performance analytics, key, and environment management, an "API Try It" functionality for pre-signup testing, and comprehensive Swagger documentation for all available API products.`,
      image: "/images/projects/caistore.png",
      url: "https://developer.coxautoinc.com/",
      summary:
        "The project transitioned from classical React components to functional ones, leveraging React hooks for API calls and state management. Its serverless backend, built with the .NET framework in C# using the MVC pattern, was deployed on Amazon Web Services, with Google Analytics monitoring activity and performance.",
      keyFeatures: [
        "Robust .NET Backend Architecture",
        "Cloud Integration",
        "Real-time Analytics",
        "API as a Service (AaaS)",
        "Enhanced State Management",
      ],
    },
    {
      name: "Bull Bear Buddies",
      technologies: [
        "React v18",
        "TypeScript",
        "SQL",
        "SCSS",
        "Mix Panel",
        "Material UI v5",
        "Midjourney",
      ],
      description:
        "A visually engaging modern web app designed for an NFT and Coin crypto trading group, aiming to convert visitors into club members by effectively presenting presale updates, dApp announcements, and the product roadmap in a sales-oriented format.",
      image: "/images/projects/bullbearbuddies.png",
      url: "http://bullbearbuddies.club/",
      summary:
        "This project leverages advanced sales driven front-end techniques to deliver an intuitive, visually engaging interface, showcasing roadmaps and proof of gains to entice user participation in the presale and dApp activities. It features high-quality imagery and is seamlessly hosted on Netlify, with data operations handled by Supabase.",
      keyFeatures: [
        "Visually Engaging Content",
        "Mobile-First Design",
        "Responsive Layout",
        "Interactive Menu",
        "Interactive Presale Participation",
        "Communicates with Human Psychology",
      ],
    },
    {
      name: "Ahmer Malik",
      technologies: ["Next.js", "SQL", "Mix Panel"],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/images/projects/ahmermalik.png",
      url: "https://github.com/ahmermalik/portfolio_latest",
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
      technologies: ["HTML5", "JavaScript", "Google Analytics", "jQuery"],
      description:
        "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
      image: "/images/projects/shishkabob.png",
      url: "https://shishkabobkaty.com/",
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
      technologies: [
        "React v16",
        "Node.js",
        "MongoDB",
        "AG Grid",
        "Amazon Web Services",
      ],
      description:
        "Meticulously crafted for an HVAC company to enhance their accessibility and responsiveness to client needs, whether in the office or on-the-move with features such as pre-filled texts and the ability for clients to send images of their HVAC units, technicians could swiftly diagnose issues.",
      image: "/images/projects/chatapp2.png",
      url: "https://optimistic-goldberg-65009a.netlify.app/",
      summary:
        "A full-stack CRUD web app developed for an HVAC company. Built using React, MongoDB, and Material UI, the app enables quick diagnosis and response through pre-filled texts and client photo submissions. Notably utilized during Hurricane Harvey, the app expedited response times, especially during crisis scenarios, marking a significant improvement in the company's service delivery in Austin and Houston, TX since 2018.",
      keyFeatures: [
        "Efficient contact and response system",
        "Mobile-friendly accessibility",
        "Proven reduction in communication lag",
      ],
    },
    {
      name: "Cryptotistics",
      technologies: ["Python", "Google Analytics", "Jinja", "SQL"],
      description:
        "A comprehensive cryptocurrency platform developed collaboratively as a group project that enables users  to search, display, and delve into a variety of metrics associated with cryptocurrencies.",
      image: "/images/projects/cryptotistics.png",
      url: "https://github.com/ahmermalik/cryptotistics",
      summary:
        "A collaborative group project offering users an intuitive platform for cryptocurrency research, utilizing Python's Tornado, Google Analytics, OAuth login, Jinja templating, and a PostgreSQL backend for seamless CRUD operations.",
      keyFeatures: [
        "Comprehensive metrics research",
        "User-friendly interface allowing for easy search and display",
        "OAuth login for secured access",
      ],
    },
  ];
  const nonprofitProjects = [
    {
      name: "Houston Helps",
      technologies: [
        "Python",
        "Express",
        "MongoDB",
        "Embedded JavaScript templates (EJS)",
      ],
      description:
        "Conceived during a Houston city-wide hackathon, the app employs a headless browser web-scraper to identify free items on Craigslist, streamlining the process for nonprofit organizations to locate and collect donations efficiently.",
      image: "/images/projects/houstonhelps.png",
      url: "https://github.com/ahmermalik/HoustonHelps",
      summary: "",
      keyFeatures: [
        "Efficient Item Location",
        "Hackathon Origin",
        "Headless Browser Webscapper",
        "Dedicated to Non-Profit Organizations",
      ],
    },
    // {
    //   name: "Water, Water Everywhere!",
    //   technologies: ["JavaScript", "Google Analytics", "jQuery"],
    //   description:
    //     "2nd place winner in NASA's Space App Challenge. Used the IBM Watson Visual Recognition engine to identify whether photographs/images indicate a flood risk situation.",
    //   image: "/images/projects/waterwater.png",
    //   url: "github.com/projecturl",
    //   summary:
    //     "Through machine learning, IBM Watson identified whether a number of selected images suggest a flood-risk, and the resulting image score will be augmented by data returned from the weather.com API.",
    //   keyFeatures: ["Machine Learning", "Mobile-First Design"],
    // },
  ];
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <Grid
      container
      spacing={1}
      sx={{marginBottom: "40px" }}
    >
      {/* 1st Grid */}
      <Grid
        item
        xs={12}
        md={2}
        sx={{ marginLeft: "10px", marginRight: "10px",  marginTop: "40px",  }}
      >
        <Typography
          variant="h2"
          className={""}
          sx={{ fontSize: "56px", }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontSize: "21px", fontWeight: "600",lineHeight: "50px",  marginBottom: "40px" }}
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
      <Grid item xs={12} md={9} sx={{ marginLeft: "50px",  marginTop: "40px" }}>
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

          <a href={activeProject.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
          <ArrowButton btnName={"View Project"} marginRight={"10px"}/>

          </a>
        
        
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
            width: "100%",
            maxWidth: "1000px",
            maxHeight: "700px",
            borderRadius: "20px",
            background: `url(${activeProject.image}), lightgray -249.484px -6px / 144.156% 100.75% no-repeat`,
            boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
            marginBottom: "25px",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
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

        <Typography
          variant="body2"
          sx={{
            color: "#787878",
            fontSize: ["15px", "17px", "18px"],
            marginBottom: "-15px",
            marginTop: "20px"
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
