import React from 'react';

const WavesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 v2c-.6-.5-1.2-1-2.5-1-2.5 0-2.5 2-5 2s-2.5-2-5-2c-1.3 0-1.9.5-2.5 1Z" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2c2.5 0 2.5-2 5-2v2c-.6-.5-1.2-1-2.5-1-2.5 0-2.5 2-5 2s-2.5-2-5-2c-1.3 0-1.9.5-2.5 1Z" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2c2.5 0 2.5-2 5-2v2c-.6-.5-1.2-1-2.5-1-2.5 0-2.5 2-5 2s-2.5-2-5-2c-1.3 0-1.9.5-2.5 1Z" />
  </svg>
);

export default WavesIcon;
