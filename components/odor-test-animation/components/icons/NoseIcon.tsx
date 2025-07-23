
import React from 'react';

const NoseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4" />
    <path d="M12 6h.01" />
    <path d="M16 2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4" />
    <path d="M16 6h.01" />
    <path d="M8 2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4" />
    <path d="M8 6h.01" />
    <path d="M12 12c-2 2-4 4-6 4" />
    <path d="M12 12c2 2 4 4 6 4" />
    <path d="M12 12v8" />
  </svg>
);

export default NoseIcon;
