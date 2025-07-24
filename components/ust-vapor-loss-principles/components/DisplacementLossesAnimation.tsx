
import React from 'react';

const DisplacementLossesAnimation: React.FC = () => {
  return (
    <div className="p-4 flex justify-center items-center h-64 text-gray-700 dark:text-gray-300">
      <style>{`
        @keyframes fill-tanker {
          0%, 45%, 100% { height: 20px; }
          95% { height: 45px; }
        }
        @keyframes vapor-return {
          0%, 50%, 100% { opacity: 0; }
          75% { opacity: 1; }
        }
        @keyframes fill-car {
          0%, 45%, 100% { width: 0px; }
          95% { width: 40px; }
        }
        @keyframes vapor-to-ust {
          0%, 50%, 100% { opacity: 0; }
          75% { opacity: 1; }
        }
        .flow-dot {
            animation: flow 1s linear infinite;
            stroke-dasharray: 1 3;
            stroke-dashoffset: 4;
        }
        @keyframes flow {
            to { stroke-dashoffset: 0; }
        }
      `}</style>
      <svg viewBox="0 0 400 180" className="w-full h-full">
        {/* Stage I: Tanker Unloading */}
        <g transform="translate(0, 0)">
          <text x="75" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-current">Stage I: Tanker Unloading</text>
          {/* Tanker */}
          <rect x="10" y="30" width="70" height="40" rx="5" className="fill-sky-300 dark:fill-sky-700" />
          <text x="45" y="55" textAnchor="middle" fontSize="10" className="fill-current">Tanker</text>
          {/* UST */}
          <rect x="110" y="90" width="80" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="112" y="120" width="76" height="20" className="fill-orange-300 dark:fill-orange-600" style={{ animation: `fill-tanker 5s infinite ease-in-out` }} />
          <text x="150" y="115" textAnchor="middle" fontSize="10" className="fill-current">UST</text>
          {/* Hoses */}
          <path d="M80 50 C 90 50, 100 100, 120 100" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M80 50 C 90 50, 100 100, 120 100" fill="none" className="stroke-orange-400 stroke-2 flow-dot" />
          
          <path d="M160 90 C 150 50, 110 50, 90 50" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M160 90 C 150 50, 110 50, 90 50" fill="none" className="stroke-sky-400 stroke-2 flow-dot" style={{ animation: `vapor-return 5s infinite`, animationDelay: '1s' }} />
          <text x="50" y="90" fontSize="9" className="fill-current">Vapor Return</text>
        </g>
        
        {/* Stage II: Vehicle Refueling */}
        <g transform="translate(200, 0)">
          <text x="100" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-current">Stage II: Vehicle Refueling</text>
          {/* Pump */}
          <rect x="10" y="60" width="20" height="50" className="fill-gray-400 dark:fill-gray-600" />
          {/* Car */}
          <rect x="100" y="80" width="50" height="30" rx="5" className="fill-red-400 dark:fill-red-600" />
          <rect x="105" y="85" width="40" height="20" className="fill-orange-300 dark:fill-orange-600" style={{ animation: `fill-car 5s infinite ease-in-out` }}/>
          <text x="125" y="100" textAnchor="middle" fontSize="10" className="fill-current">Car</text>
          {/* UST */}
          <rect x="30" y="130" width="50" height="30" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="55" y="150" textAnchor="middle" fontSize="10" className="fill-current">UST</text>
           {/* Hoses */}
          <path d="M30 80 C 40 80, 80 95, 100 95" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M30 80 C 40 80, 80 95, 100 95" fill="none" className="stroke-orange-400 stroke-2 flow-dot" />
          <path d="M100 95 C 80 115, 60 130, 55 130" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M100 95 C 80 115, 60 130, 55 130" fill="none" className="stroke-sky-400 stroke-2 flow-dot" style={{ animation: `vapor-to-ust 5s infinite`, animationDelay: '1s' }} />
        </g>
      </svg>
    </div>
  );
};

export default DisplacementLossesAnimation;
