
import React from 'react';

interface TankIconProps {
  className?: string;
}

const TankIcon: React.FC<TankIconProps> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d="M12 10 C12 4 52 4 52 10 L52 58 C52 62 12 62 12 58 Z"
      className="fill-slate-700 stroke-slate-400"
    />
    <ellipse cx="32" cy="10" rx="20" ry="4" className="fill-slate-600 stroke-slate-400" />
    <path d="M12 18 H 52" className="stroke-slate-500" />
    <path d="M12 26 H 52" className="stroke-slate-500" />
    <path d="M12 34 H 52" className="stroke-slate-500" />
    <path d="M12 42 H 52" className="stroke-slate-500" />
    <path d="M12 50 H 52" className="stroke-slate-500" />
  </svg>
);

export default TankIcon;
