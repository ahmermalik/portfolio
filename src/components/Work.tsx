import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import { Grid, Typography, Button } from "@mui/material";
import styles from "../styles/work.module.scss";
import ArrowButton from "./ArrowButton";

const Astronaut = dynamic(() => import("../components/Astronaut"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});
const Work: React.FC = () => {
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
      <Astronaut />
    </Box>
  );
};

export default Work;
