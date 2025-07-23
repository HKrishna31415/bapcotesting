import React from 'react';

const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 19.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 19.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 15.5h1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15.5h1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.68 15.5h14.64a.5.5 0 00.48-.64l-2.04-7.14a.5.5 0 00-.48-.36H6.72a.5.5 0 00-.48.36L4.2 14.86a.5.5 0 00.48.64z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 7.5l2.5-4h6l2.5 4" />
  </svg>
);

export default CarIcon;