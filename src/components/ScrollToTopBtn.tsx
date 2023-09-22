import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box } from '@mui/system';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Check if button should be visible
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box 
      component={"div"}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000, // This ensures the button is on top of most elements
      }}
    >
      {isVisible && (
        <Fab style={{ backgroundColor: '#0F9FA3' }} onClick={scrollToTop}>
        <ArrowUpwardIcon sx={{ color: '#ffffff' }} />
      </Fab>
      )}
    </Box>
  );
}

export default ScrollToTopButton;