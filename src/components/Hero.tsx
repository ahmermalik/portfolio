import React from 'react';
import { Grid, Typography, Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import success from "../images/successfulahmer.png"
import styles from "../styles/hero.module.scss";
import ArrowButton from './Button';

const Hero: React.FC = () => {
  return (
    <Grid container spacing={0} className={styles.mainGrid} >
   <Grid item xs={12} md={4.35} display="flex" flexDirection="column" justifyContent="space-between">
    <div>
        <Typography variant="h4">Hello, I'm</Typography>
        <Typography variant="h2">Ahmer Malik</Typography>
        <Typography component="p">I'm a developer living in Texas</Typography>
        <ArrowButton variant="contained" color="primary" className={styles.button}>Lets code</ArrowButton>
    </div>
    <div>
        <IconButton color="primary">
            <GitHubIcon />
        </IconButton>
        <IconButton color="primary">
            <LinkedInIcon />
        </IconButton>
    </div>
</Grid>
<Grid item xs={12} md={2.15}  className={styles.orangeBackground}>
    <Image src={success} alt="Your image description" width={500} height={650}  className={styles.spilloverImage} />
</Grid>
<Grid item xs={12} md={4.35} display="flex" flexDirection="column" justifyContent="space-between">
    <div className={styles.gridthree}>
        <Typography component="p" className={styles.subhead}>"Exploring the cosmos of code"</Typography>
        <Typography component="p" className={styles.subpar}> A passionate developer with a futuristic mindset. When I'm not busy coding, you can find me gazing at the stars, diving into the world of cryptocurrencies, or analyzing charts. I love turning ideas into reality through lines of code, and I'm excited to share my journey with you.</Typography>
    </div>
    <Button variant="contained" color="secondary" className={styles.resbutton}>Download Resume</Button>
</Grid>

</Grid>
);
}

export default Hero;
