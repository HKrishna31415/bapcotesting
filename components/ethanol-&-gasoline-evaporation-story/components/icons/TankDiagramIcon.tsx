
import React from 'react';

const TankDiagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" {...props}>
    <style>
      {`
        .tank-label { font-size: 10px; font-family: sans-serif; fill: white; text-anchor: middle; }
        .pipe { fill: none; stroke: #718096; stroke-width: 4; }
        .arrow { fill: #f56565; }
        .arrow-path { animation: flow 2s infinite; }
        @keyframes flow {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
      `}
    </style>
    
    {/* Tanks */}
    <rect x="20" y="50" width="60" height="80" rx="5" ry="5" fill="#4A5568"/>
    <text x="50" y="40" className="tank-label">E0</text>
    
    <rect x="120" y="50" width="60" height="80" rx="5" ry="5" fill="#4A5568"/>
    <text x="150" y="40" className="tank-label">E20</text>
    
    <rect x="220" y="50" width="60" height="80" rx="5" ry="5" fill="#4A5568"/>
    <text x="250" y="40" className="tank-label">E50</text>
    
    {/* Manifold Pipe */}
    <path d="M 50 110 H 250" className="pipe" />
    
    {/* Contamination Arrows */}
    <g transform="translate(100 110)">
      <path d="M 0 0 L -10 -5 V 5 Z" className="arrow" />
      <path d="M 0 0 L 10 -5 V 5 Z" className="arrow" />
    </g>
     <g transform="translate(200 110)">
      <path d="M 0 0 L -10 -5 V 5 Z" className="arrow" />
      <path d="M 0 0 L 10 -5 V 5 Z" className="arrow" />
    </g>
    
    <text x="150" y="20" className="tank-label" fill="#f56565" fontSize="12px" fontWeight="bold">
      Risk of Contamination
    </text>
  </svg>
);

export default TankDiagramIcon;
