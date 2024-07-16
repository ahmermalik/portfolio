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
    name: "Swift Sage A.I.",
    technologies: [
      "GPT-4",
      "Node.js",
      "React v18",
      "TypeScript",
      "Mix Panel",
      "Docker",
      "Web3.js",
      "AWS (Lambda, SQL Server, S3, CI/CD)"
    ],
    description:
    "Advanced A.I. driven analytics, where GPT is at the wheel. Continuously monitoring market conditions and selecting the appropriate mixture of algorithms to produce real-time insights allows traders to make predictable outcomes and maintain effective risk management.",
    image: "/images/projects/swiftsage.png",
    url: "https://www.swiftsage.ai/",
    summary:
      "This project leverages React 18 to curate a seamless user experience, with user activity and performance tracked via Mix Panel integrations.",
    keyFeatures: [
      "Tailored Analysis",
      "Predictive Algorithm",
      "Modern Tech Stack",
      "Containerized Deployment",
      "Comprehensive Metrics",
    ],
  },  {
    name: "Almond Cow",
    technologies: [
      "Gatsby.js",
      "Open AI",
      "Semrush",
      "Ahrefs",
      "Sanity.io",
      "Shopify",
      "Node.js",
      "Google Tag Manager",
      "Netlify",
      "Debug Bear"
    ],
    description:
    "Almond Cow is an almond milk machine manufacturer and a healthier lifestyle brand, promoting sustainable choices for drinks, desserts, and meals.",
    image: "/images/projects/almondcow.png",
    url: "https://www.almondcow.co/",
    summary:
      "This project leverages Open A.I.'s GPT-4 to leverage content creation and refreshes, Sanity.io's CMS, and a Shopify to provide a robust shopping experience in React.",
    keyFeatures: [
      "Open A.I. GPT-4",
      "Modern Tech Stack",
      "Seamless Retail Experience",
      "Customer Journey Analytics",
    ],
  },
  {
    name: "CAI API Storefront",
    technologies: ["React v16", "Redux", "C#", "NoSQL", "AWS (Lambda, CI/CD, CloudFront, DynamoDB, S3, API Gateway)"],
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
    name: "Ahmer Malik",
    technologies: ["Next.js", "OpenAI GPT-4o", "Typescript", "Mix Panel", "Three.js", "Vercel"],
    description:
      "A cutting-edge front-end web application that demonstrates the power of modern web technologies. Focused on responsive design, the app employs Three.js to deliver distinct visual experiences for both mobile and desktop users. Draped in a theme appealing to crypto enthusiasts and space admirers, it subtly intertwines personal hobbies with professional showcases.",
    image: "/images/projects/ahmermalik.png",
    url: "https://github.com/ahmermalik/portfolio_latest",
    summary:
      "This portfolio project epitomizes the forefront of web development, embracing server-side rendering with Next.js for optimized performance. With a unique cosmic-crypto theme, it offers a visually captivating and personalized user journey.",
    keyFeatures: [
      "Cutting-Edge Visuals",
      "GPT-4o Chatbot",
      "Crypto-Cosmic Theme",
      "Server-Side Rendering"
    ],
  },
  {
    name: "Shish Kabob Cafe",
    technologies: ["HTML5", "JavaScript", "Google Analytics", "jQuery", "Netlify"],
    description:
      "Shish Kabob Cafe is a local restaurant known for its mouthwatering Mediterranean cuisine. To enhance its online presence and streamline the ordering process, we developed a mobile-first, responsive web application and integrated a seamless delivery system.",
    image: "/images/projects/shishkabob.png",
    url: "https://shishkabobkaty.com/",
    summary:
      "This project leverages JavaScript, Google Analytics, and jQuery to provide an exceptional user experience while boosting the restaurant's delivery service.",
    keyFeatures: [
      "Mobile-First Design",
      "Responsive Layout",
      "Online Ordering",
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
    technologies: ["Python", "Google Analytics", "Jinja", "SQL", "Amazon Web Services"],
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
  {
    name: "Water, Water Everywhere!",
    technologies: ["JavaScript", "Google Analytics", "jQuery"],
    description:
      "2nd place winner in NASA's Space App Challenge. Used IBM Watson's AI Visual Recognition engine to identify whether photographs/images indicate a flood risk situation.",
    image: "/images/projects/waterwater.png",
    url: "github.com/projecturl",
    summary:
      "Through machine learning, IBM Watson identified whether a number of selected images suggest a flood-risk, and the resulting image score will be augmented by data returned from the weather.com API.",
    keyFeatures: ["Machine Learning", "Mobile-First Design"],
  },
];
