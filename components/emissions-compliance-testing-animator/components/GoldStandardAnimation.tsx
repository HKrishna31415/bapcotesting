
import React from 'react';

const GoldStandardAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Source Facility */}
      <path d="M10 110 V50 H30 V110" fill="#4a5568" />
      <path d="M20 50 L40 30 H60 L40 50 H20 Z" fill="#718096" />
      <text x="20" y="75" fill="#e2e8f0" fontSize="10" textAnchor="middle">Site</text>

      {/* Pipe */}
      <line x1="30" y1="60" x2="80" y2="60" stroke="#718096" strokeWidth="6" />

      {/* Data Flow Line */}
      <path 
        d="M 80 60 C 100 60, 100 60, 120 60"
        fill="none" 
        stroke="#fBBF24" 
        strokeWidth="2" 
        strokeDasharray="5 5"
        className="animate-flow"
      />
      <path 
        d="M 170 60 C 190 60, 190 60, 210 60"
        fill="none" 
        stroke="#fBBF24" 
        strokeWidth="2"
      />
      
      {/* Analyzer */}
      <rect x="120" y="45" width="50" height="30" rx="3" fill="#374151" stroke="#fBBF24" strokeWidth="1" />
      <text x="145" y="63" fill="#fBBF24" fontSize="8" textAnchor="middle" fontWeight="bold">TVA2020</text>
      
      {/* Chart/Result */}
      <g transform="translate(210, 40)">
        <rect x="0" y="0" width="60" height="40" rx="3" fill="#1f2937" stroke="#9ca3af" strokeWidth="1"/>
        <polyline points="5,35 15,20 25,25 35,10 45,15 55,5" fill="none" stroke="#34d399" strokeWidth="2" />
        <text x="30" y="55" fill="#9ca3af" fontSize="8" textAnchor="middle">Real-time Data</text>
      </g>
    </svg>
  );
};

export default GoldStandardAnimation;
