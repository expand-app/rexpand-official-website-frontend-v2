import { useState, useEffect } from 'react';

const useScreen = () => {
  const [screenType, setScreenType] = useState<string>();

  useEffect(() => {
    setScreenType(getScreenType());
    function handleResize() {
      setScreenType(getScreenType());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getScreenType() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      return 'sm';
    } else if (screenWidth < 768) {
      return 'md';
    } else if (screenWidth < 1024) {
      return 'lg';
    } else if (screenWidth < 1280) {
      return 'xl';
    } else if (screenWidth < 1536) {
      return '2xl';
    } else {
      return '3xl or larger';
    }
  }

  function isMobile() {
    if (screenType && (screenType === 'md' || screenType === 'sm')) {
      return true;
    }
    return false;
  }
  return { screenType, isMobile };
};

export default useScreen;
