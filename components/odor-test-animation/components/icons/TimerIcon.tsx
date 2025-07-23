import React from 'react';

const TimerIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <line x1="10" x2="14" y1="2" y2="2" />
    <line x1="12" x2="12" y1="14" y2="18" />
    <path d="M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    <path d="M12 6v4" />
  </svg>
);

export default TimerIcon;
