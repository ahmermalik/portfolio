import React, { useState, useContext } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
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
import logo from "../images/logo.png";
import { ThemeContext } from "../context/theme-context";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightTwoToneIcon from "@mui/icons-material/NightlightTwoTone";
import { useTheme } from "@mui/material/styles";

interface Props {
  window?: () => Window;
  item: boolean;
  xs: number;
}
const drawerWidth = 240;
const navItems = [
  { label: "Home", id: "home" },
  { label: "Technologies", id: "technologies" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Work", id: "work" },
  { label: "Testimonials", id: "testimonials" },
  // { label: "Contact", id: "contact" },
];

const Navbar: React.FC<Props> = ({ window }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const toggleTheme = useContext(ThemeContext);

  const drawer = (
    <Box
      component={"div"}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
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
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              component="a"
              href={`#${item.id}`}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} component={"div"}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
      >
        <Toolbar
          sx={{
            background: theme.palette.mode === "light" ? "#ffffff" : "#000000",
          }}
        >
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
          <Image src={logo} alt="Description" width={150} height={100} />
          <Box
            component={"div"}
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "block" },
            }}
          >
            {theme.palette.mode === "dark" ? (
              <NightlightTwoToneIcon
                onClick={toggleTheme}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <LightModeIcon
                onClick={toggleTheme}
                style={{ cursor: "pointer" }}
                sx={{ color: "black" }}
              />
            )}
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
