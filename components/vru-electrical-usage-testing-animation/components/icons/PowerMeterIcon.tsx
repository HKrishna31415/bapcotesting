import React from 'react';

const PowerMeterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 55" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path 
        d="M 5 50 A 45 45 0 0 1 95 50" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="10" 
        strokeLinecap="round"
        className="text-slate-700/50"
    />
    <path 
        d="M 5 50 A 45 45 0 0 1 35.28 7.7"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="10"
        strokeLinecap="round"
        className="text-blue-500"
    />
     <path 
        d="M 35.28 7.7 A 45 45 0 0 1 64.72 7.7"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="10"
        strokeLinecap="round"
        className="text-green-500"
    />
    <path 
        d="M 64.72 7.7 A 45 45 0 0 1 95 50"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="10"
        strokeLinecap="round"
        className="text-red-500"
    />
    <circle cx="50" cy="50" r="6" fill="currentColor" className="text-slate-400"/>
  </svg>
);

export default PowerMeterIcon;