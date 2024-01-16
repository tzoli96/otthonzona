import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export const useIsBiggerScreen = () => {
  const [isBiggerScreen, setIsBiggerScreen] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsBiggerScreen(window.innerWidth >= 1920);
    };
    updateSize();
    window.addEventListener('resize', debounce(updateSize, 50));
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isBiggerScreen;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateSize();
    window.addEventListener('resize', debounce(updateSize, 50));
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
