import { useState, useEffect } from 'react';

export const getViewportInfo = () => {
  const [windowSizeWidth, setWindowSizeWidth] = useState(window.innerWidth);
  const [windowSizeHeight, setWindowSizeHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSizeWidth(window.innerWidth);
      setWindowSizeHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return {
    windowSizeWidth,
    windowSizeHeight
  }
}