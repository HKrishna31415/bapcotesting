import React from 'react';

const VruIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-slate-500"/>
    <path d="M9 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cyan-400/70" />
    <path d="M9 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cyan-400/70" />
    <rect x="8" y="14" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
  </svg>
);

export default VruIcon;