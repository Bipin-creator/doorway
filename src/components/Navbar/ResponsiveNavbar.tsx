'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const ResponsiveNavbar: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    // Function to check if the viewport is desktop (>= 768px, matching Tailwind's `md` breakpoint)
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    // Run on mount
    checkViewport();

    // Add resize event listener with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkViewport, 250);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return isDesktop ? <Navbar /> : <NavbarMobile />;
};

export default ResponsiveNavbar;