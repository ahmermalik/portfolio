import React, { ReactNode } from 'react';
import { ThemeContext } from './theme-context';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {

  

  const [mode, setMode] = React.useState(
    typeof window !== 'undefined' && window.localStorage.getItem('theme-mode') || 'light'
  );

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme-mode', newMode);
    }
  };

  const theme = createTheme({
    palette: {
      mode: mode as 'light' | 'dark',
    },
  });

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
