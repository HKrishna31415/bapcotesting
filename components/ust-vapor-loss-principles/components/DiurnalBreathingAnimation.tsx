
import React from 'react';

const DiurnalBreathingAnimation: React.FC = () => {
  return (
    <div className="p-4 flex justify-center items-center h-64 text-gray-700 dark:text-gray-300">
      <style>{`
        @keyframes day-night-cycle {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          45% { transform: translate(0, 0); opacity: 1; }
          50% { transform: translate(0, 10px); opacity: 0; }
          55% { transform: translate(0, 10px); opacity: 0; }
        }
        @keyframes night-day-cycle {
          0%, 100% { transform: translate(0, 10px); opacity: 0; }
          50% { transform: translate(0, 0); opacity: 1; }
          95% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(0, 10px); opacity: 0; }
        }
        @keyframes vapor-breathe {
          0%, 100% { transform: scaleY(0.8); }
          50% { transform: scaleY(1.1); }
        }
        @keyframes vent-out {
          0%, 40%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-10px); }
          60% { opacity: 0; transform: translateY(-20px); }
        }
        @keyframes vent-in {
          0%, 90% { opacity: 0; transform: translateY(-20px); }
          95% { opacity: 1; transform: translateY(-10px); }
          100% { opacity: 0; transform: translateY(0); }
        }
      `}</style>
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <defs>
          <path id="vent-arrow" d="M-2,5 L0,0 L2,5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </defs>

        {/* Sun/Day */}
        <g transform="translate(40, 40)">
          <g style={{ animation: `day-night-cycle 10s infinite ease-in-out` }}>
            <circle cx="0" cy="0" r="15" fill="#FBBF24" />
            <text x="0" y="30" textAnchor="middle" fontSize="10" className="fill-current">Day</text>
          </g>
          {/* Moon/Night */}
          <g style={{ animation: `night-day-cycle 10s infinite ease-in-out` }}>
            <path d="M0,-15 A15,15 0 1,0 0,15 A10,10 0 1,1 0,-15 Z" fill="#60A5FA" />
            <text x="0" y="30" textAnchor="middle" fontSize="10" className="fill-current">Night</text>
          </g>
        </g>
        
        {/* Ground */}
        <line x1="80" y1="90" x2="280" y2="90" stroke="currentColor" strokeWidth="1" />
        <text x="85" y="85" fontSize="8" className="fill-current">Ground</text>

        {/* UST */}
        <rect x="120" y="90" width="120" height="60" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="125" y="95" width="110" height="20" fill="#FDBA74" opacity="0.5" />
        <text x="170" y="110" fontSize="8" className="fill-current">Gasoline</text>
        
        {/* Vapor Space */}
        <g style={{ transformOrigin: 'center 115px', animation: `vapor-breathe 10s infinite ease-in-out` }}>
            <path d="M125 115 C150 125, 190 125, 235 115 V 95 H 125 Z" fill="#38BDF8" opacity="0.3" />
            <text x="170" y="102" fontSize="8" className="fill-current font-semibold">Vapor</text>
        </g>

        {/* Vent Pipe */}
        <path d="M220,90 V60 H240" fill="none" stroke="currentColor" strokeWidth="2" />
        <g className="stroke-red-500" style={{ animation: `vent-out 10s infinite ease-in-out` }}>
            <use href="#vent-arrow" x="240" y="60"/>
        </g>
        <g className="stroke-green-500" style={{ animation: `vent-in 10s infinite ease-in-out` }}>
            <use href="#vent-arrow" transform="translate(240, 60) rotate(180)" />
        </g>
        <text x="245" y="65" fontSize="8" className="fill-current">Vent</text>
      </svg>
    </div>
  );
};

export default DiurnalBreathingAnimation;
