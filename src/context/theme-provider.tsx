import React, { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [key, etKey] = useState(0);
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme-mode", newMode);
    }
  };

  useEffect(() => {
    const savedMode = window.localStorage.getItem("theme-mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const typographySettings = {
    h4: {
      color: "#2C2C2C",
      fontFamily: "AllRoundGothicW01-Book, Arial",
      fontSize: "56px",
      fontWeight: 300,
    },
    h2: {
      color: "#FF9B50",
      fontFamily: "Poppins, Arial",
      fontSize: "86px",
      fontWeight: 700,
    },
    body1: {
      color: "#787878",
      fontFamily: "Poppins, Arial",
      fontSize: "22px",
      fontWeight: 400,
      lineHeight: "35px",
    },
  };

  const theme = createTheme({
    palette: {
      mode: mode as "light" | "dark",
      background: {
        default: mode === 'light' ? '#ffffff' : '#000000',
      },
    },
    typography: typographySettings,
  });

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
