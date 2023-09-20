import React, { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../images/logo.png";

interface Props {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>; // we can always import it up top from React, but instead we're just going to call it as React.NameYourImport for now
  window?: () => Window;
  item: boolean;
  xs: number;
}
const drawerWidth = 240;
const navItems = [
  "Home",
  "Technologies",
  "Portfolio",
  "Work",
  "Testimonials",
  "Contact",
];

const Navbar: React.FC<Props> = ({
  section,
  setSection,
  window,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box component={"div"} onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        className="flex justify-center items-center h-[desiredHeight]"
      >
        <Image src={logo} alt="Description" width={150} height={100} />
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link to={item.toLowerCase()} smooth={true} key={item}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} onClick={() => setSection(item)} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex"}} component={"div"} >
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          paddingLeft: "10px",
          paddingRight: "10px",
          "@media (max-width: 1536px)": {
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          "@media (max-width: 1200px)": {
            paddingLeft: "15px",
            paddingRight: "15px",
          },
          "@media (max-width: 900px)": {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
          "@media (max-width: 650px)": {
            paddingLeft: "7px",
            paddingRight: "7px",
          },
          "@media (max-width: 450px)": {
            paddingLeft: "5px",
            paddingRight: "5px",
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: "block", sm: "block", md: "block", lg: "block" },
              "& svg": {
                color: "#0F9FA3",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Image src={logo} alt="Description" width={150} height={100}  />
          <Box
           component={"div"} 
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "block" },
            }}
          >
            {/* {"modeSwitch"} */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
