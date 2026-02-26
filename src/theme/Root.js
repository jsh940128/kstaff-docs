import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({children}) {
  const location = useLocation();
  const isKorean = location.pathname.startsWith('/ko');
  
  // Strip '/ko' if present to get the base path, fallback to '/' if empty
  const currentPath = location.pathname.replace(/^\/ko/, '') || '/';
  const targetPath = isKorean ? currentPath : `/ko${currentPath}`;

  return (
    <>
      {children}
      <a 
        href={targetPath} 
        className="floating-lang-switcher"
        onClick={(e) => {
          // Force a hard browser reload, completely bypassing the React SPA router
          e.preventDefault();
          window.location.href = targetPath;
        }}
      >
        <span className="icon">🌐</span>
        <span className="text">{isKorean ? 'EN / English' : 'KO / 한국어'}</span>
      </a>
    </>
  );
}