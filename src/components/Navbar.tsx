import React, { useState } from "react";
import Image from 'next/image';
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
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from  "../images/logo.png"

interface Props {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Technologies", "Portfolio", "Work", "Testimonials", "Contact"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* <img
          src={logo}
          alt=""
          style={{ maxHeight: "100px", marginRight: "10px" }}
        /> */}
        <Image src={logo} alt="Description" width={500} height={500} />
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link to={item.toLowerCase()} smooth={true} key={item}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={item}
                  onClick={() => props.setSection(item)}
                />
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          paddingLeft: "250px",
          paddingRight: "250px",
          "@media (max-width: 1536px)": {
            paddingLeft: "150px",
            paddingRight: "150px",
          },
          "@media (max-width: 1200px)": {
            paddingLeft: "125px",
            paddingRight: "125px",
          },
          "@media (max-width: 900px)": {
            paddingLeft: "100px",
            paddingRight: "100px",
          },
          "@media (max-width: 650px)": {
            paddingLeft: "75px",
            paddingRight: "75px",
          },
          "@media (max-width: 450px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
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
              display: { xs: "block", sm: "block", md: "block", lg: "none" },
              "& svg": {
                color: "#0F9FA3",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <img
            src={logo}
            alt="Logo"
            style={{ maxHeight: "100px", marginRight: "10px" }}
          /> */}

<Image src={logo} alt="Description" width={500} height={100} />
          <Typography
            color="#0F9FA3"
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
           Ahmer Malik
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.toLowerCase()} smooth={true} key={item}>
                <Button
                  key={item}
                  disableRipple
                  sx={{
                    mr: 2,
                    color: "#65B20A",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:active": {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    },
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                  onClick={() => props.setSection(item)}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
          <Box flexGrow={1}></Box>
          <IconButton
            color="info"
            edge="end"
            href="https://twitter.com/bbx_erc20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
        </Toolbar>

      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
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
}