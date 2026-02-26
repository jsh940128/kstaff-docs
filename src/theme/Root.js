import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function Root({children}) {
  const location = useLocation();
  const isKorean = location.pathname.startsWith('/ko');
  
  // This ensures the user stays on the exact same page when they switch languages
  const currentPath = location.pathname.replace(/^\/ko/, '') || '/';
  const targetPath = isKorean ? currentPath : `/ko${currentPath}`;

  return (
    <>
      {children}
      <Link to={targetPath} className="floating-lang-switcher">
        <span className="icon">🌐</span>
        <span className="text">{isKorean ? 'EN / English' : 'KO / 한국어'}</span>
      </Link>
    </>
  );
}