type Project = {
  name: string;
  technologies: string[];
  description: string;
  image: string;
  url: string;
  summary: string;
  keyFeatures: string[];
};

export const projects: Project[] = [
  {
    name: "Buffalo Bayou Funds Analytics",
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
    url: "https://www.buffalobayoufunds.com/",
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
    technologies: ["React v16", "Redux", "C#", "NoSQL", "Amazon Web Services"],
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
    technologies: ["Next.js", "SQL", "Mix Panel", "Three.js"],
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

export const nonprofitProjects: Project[] = [
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
