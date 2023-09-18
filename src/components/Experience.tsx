import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import { Grid, Typography, Button } from "@mui/material";
import styles from "../styles/experience.module.scss";
import ArrowButton from "./ArrowButton";

const Astronaut = dynamic(() => import("./Astronaut"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});
const Experience: React.FC = () => {
  const companies = [{
    name: "Buffalo Bayou",
    role: "Software Engineer",
    dates: ["02/2021", "08/2023"],
    accomplishments: ["18% Subscripition increase", "Tech Upgrade", "Debt Reduction"]
  },{
    name: "E9 Labs",
    role: "Software Engineer",
    dates: ["01/2019", "03/2019"],
    accomplishments: ["Slashing response time by 75%", " Real-time chat", "chat history"]
  },{
    name: "Cox Enterprises Inc.",
    role: "Software Engineer",
    dates: ["03/2019", "02/2021"],
    accomplishments: ["Raising conversion rates by 11%.", "API Portal Launch", "FCP Improvement"]
  },{
    name: "Emerson Electric",
    role: "Analyst",
    dates: ["05/2015", "01/2017"],
    accomplishments: ["Raising conversion rates by 11%.", "API Portal Launch", "FCP Improvement"]
  }]
  return (
    <Box component={"div"} className={styles.work}>
      <div className={styles.titlecontainer}>
        <Typography
          variant="h2"
          className={styles.title}
          sx={{ fontSize: ["35px", "56px"] }}
        >
         Crafting Immersive Web Experiences
        </Typography>
        <Typography
          component="p"
          className={styles.subtitle}
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: ["15px", "21px"],
            fontWeight: "400",
          }}
        >
          Pushing Boundaries and Elevating User Engagement
        </Typography>
      </div>
      <Astronaut companies={companies} />
      <div>
        test test test test 
      </div>
      <span>

        more test test test
      </span>
    </Box>
  );
};

export default Experience;
