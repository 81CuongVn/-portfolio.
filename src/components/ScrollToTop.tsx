import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ window }: { window?: () => Window }) => {
  const { pathname } = useLocation();

  const target = window ? window() : undefined;

  useEffect(() => {
    if (target) target.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return <></>;
};

export default ScrollToTop;
