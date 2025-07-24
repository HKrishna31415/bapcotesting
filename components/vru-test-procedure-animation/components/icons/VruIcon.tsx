
import React from 'react';

interface VruIconProps {
  className?: string;
  isPulsing?: boolean;
}

const VruIcon: React.FC<VruIconProps> = ({ className = '', isPulsing = false }) => (
  <div className={`relative ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full">
      <rect x="8" y="12" width="48" height="40" rx="4" className="fill-slate-800 stroke-sky-400" strokeWidth="2" />
      <path d="M16 20h12M16 28h20M16 36h16M16 44h8" className="stroke-slate-500" strokeWidth="2" />
      <circle cx="44" cy="32" r="8" className="fill-slate-700 stroke-sky-500" strokeWidth="2" />
      <path d="M44 26v12M40 32h8" className={`stroke-sky-300 transition-transform duration-500 ${isPulsing ? 'animate-spin' : ''}`} style={{ transformOrigin: '44px 32px' }} strokeWidth="1.5" />
    </svg>
    {isPulsing && (
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-16 h-16 rounded-full bg-emerald-400/50 animate-ping"></div>
       </div>
    )}
  </div>
);

export default VruIcon;
