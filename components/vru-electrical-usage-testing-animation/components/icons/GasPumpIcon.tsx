import React from 'react';

const GasPumpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 3h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
    <path d="M16 13h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1"></path>
    <path d="M11 12H8"></path>
  </svg>
);

export default GasPumpIcon;