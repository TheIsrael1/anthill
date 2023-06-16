import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const myRef = useRef<null | HTMLDivElement>(null);
  const location = useLocation();

  const executeScroll = () => {
    myRef?.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    });
  };

  useEffect(() => {
    executeScroll();
  }, [location]);

  return <div ref={myRef} className='absolute top-0 w-0 h-0'></div>;
};

export default ScrollToTop;
