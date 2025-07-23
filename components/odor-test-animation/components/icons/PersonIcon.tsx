
import React from 'react';

const PersonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 2a4 4 0 100 8 4 4 0 000-8zM8 10a2 2 0 00-2 2v1.5a2.5 2.5 0 002.5 2.5h7A2.5 2.5 0 0018 13.5V12a2 2 0 00-2-2h-1.5a.5.5 0 01-.5-.5V10h-3v1.5a.5.5 0 01-.5.5H8zM5 18a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default PersonIcon;
