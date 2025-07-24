
import React from 'react';

const IdealGasLawAnimation: React.FC = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center h-80 text-gray-700 dark:text-gray-300">
      <style>{`
        @keyframes heat-cycle {
          0%, 45%, 100% { fill: #60A5FA; } /* Blue for cold */
          55%, 95% { fill: #F59E0B; } /* Amber for hot */
        }
        @keyframes pressure-gauge {
          0%, 45%, 100% { transform: rotate(-45deg); }
          55%, 95% { transform: rotate(45deg); }
        }
        @keyframes temp-text-cold {
          0%, 45%, 100% { opacity: 1; }
          50%, 95% { opacity: 0; }
        }
        @keyframes temp-text-hot {
          0%, 50% { opacity: 0; }
          55%, 95% { opacity: 1; }
          96%, 100% { opacity: 0; }
        }

        .particle {
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        @keyframes move-1 { 0% {transform: translate(0px, 0px);} 25% {transform: translate(15px, -20px);} 50% {transform: translate(-10px, 15px);} 75% {transform: translate(20px, 10px);} 100% {transform: translate(0px, 0px);} }
        @keyframes move-2 { 0% {transform: translate(0px, 0px);} 25% {transform: translate(-20px, 15px);} 50% {transform: translate(15px, -15px);} 75% {transform: translate(-10px, -20px);} 100% {transform: translate(0px, 0px);} }
        
        .particles-hot .particle { animation-duration: 2s; }
        .particles-cold .particle { animation-duration: 5s; }

        @keyframes particle-group-visibility-cold {
            0%, 45%, 100% { opacity: 1; }
            45.1%, 95% { opacity: 0; }
        }
        
        @keyframes particle-group-visibility-hot {
            0%, 54.9% { opacity: 0; }
            55%, 95% { opacity: 1; }
            95.1%, 100% { opacity: 0; }
        }

        @keyframes vent-out-pressure {
          0%, 59%, 100% { opacity: 0; transform: translateY(0); }
          65% { opacity: 1; transform: translateY(-8px); }
          75% { opacity: 0; transform: translateY(-16px); }
        }

      `}</style>
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <defs>
            <path id="vent-arrow-up-sm" d="M-2,5 L0,0 L2,5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </defs>
        
        {/* Title */}
        <text x="150" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-current">PV=nRT Experiment</text>

        {/* Container */}
        <rect x="50" y="50" width="100" height="100" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="100" y="165" textAnchor="middle" fontSize="10" className="fill-current">Fixed Volume (V)</text>
        
        {/* Vent Pipe */}
        <path d="M130,50 V40" stroke="currentColor" strokeWidth="2" />
        <g className="stroke-red-500" style={{ animation: `vent-out-pressure 8s infinite ease-in-out` }}>
            <use href="#vent-arrow-up-sm" transform="translate(130, 40) rotate(180)" />
        </g>
        <text x="135" y="38" fontSize="8" className="fill-current">Vent</text>

        {/* Gas Particles - two groups with different speeds, toggled by opacity */}
        <g className="particles-cold" style={{animation: `particle-group-visibility-cold 8s infinite ease-in-out`}}>
            <circle cx="80" cy="80" r="3" className="fill-current particle" style={{ animationName: 'move-1', animationDelay: '0s' }} />
            <circle cx="120" cy="120" r="3" className="fill-current particle" style={{ animationName: 'move-2', animationDelay: '-1s' }} />
            <circle cx="100" cy="100" r="3" className="fill-current particle" style={{ animationName: 'move-1', animationDelay: '-2s' }} />
            <circle cx="70" cy="130" r="3" className="fill-current particle" style={{ animationName: 'move-2', animationDelay: '-3s' }} />
            <circle cx="130" cy="70" r="3" className="fill-current particle" style={{ animationName: 'move-1', animationDelay: '-4s' }} />
        </g>
        <g className="particles-hot" style={{animation: `particle-group-visibility-hot 8s infinite ease-in-out`}}>
            <circle cx="80" cy="80" r="3" className="fill-current particle" style={{ animationName: 'move-1', animationDelay: '0s' }} />
            <circle cx="120" cy="120" r="3" className="fill-current particle" style={{ animationName: 'move-2', animationDelay: '-0.5s' }} />
            <circle cx="100" cy="100" r="3" className="fill-current particle" style={{ animationName: 'move-1', animationDelay: '-1s' }} />
            <circle cx="70" cy="130" r="3" className="fill-current particle" style={{ animationName: 'move-2', animationDelay: '-1.5s' }} />
            <circle cx="130" cy="70" r="3" className="fill-current particle" style={{ animationName: 'move-1', animationDelay: '-2s' }} />
        </g>
        
        {/* Temperature Control */}
        <g transform="translate(225, 60)">
            <text x="0" y="-15" textAnchor="middle" fontSize="10" className="fill-current">Temperature (T)</text>
            <circle cx="0" cy="0" r="10" style={{ animation: `heat-cycle 8s infinite ease-in-out` }} />
            <text x="0" y="5" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">T</text>
            <text x="0" y="25" textAnchor="middle" fontSize="10" className="fill-current font-semibold" style={{ animation: `temp-text-cold 8s infinite ease-in-out` }}>Cold</text>
            <text x="0" y="25" textAnchor="middle" fontSize="10" className="fill-current font-semibold" style={{ animation: `temp-text-hot 8s infinite ease-in-out` }}>Hot</text>
        </g>

        {/* Pressure Gauge */}
        <g transform="translate(225, 130)">
            <text x="0" y="-25" textAnchor="middle" fontSize="10" className="fill-current">Pressure (P)</text>
            <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M -12 -12 L 0 0 L 12 -12" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="-10" y="15" fontSize="8" className="fill-current">Low</text>
            <text x="10" y="15" fontSize="8" textAnchor="end" className="fill-current">High</text>
            <line x1="0" y1="0" x2="0" y2="-15" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" style={{ transformOrigin: '0px 0px', animation: 'pressure-gauge 8s infinite ease-in-out' }} />
            <circle cx="0" cy="0" r="2" className="fill-current" />
        </g>
      </svg>
      <p className="text-xs text-center italic mt-2 px-4">As Temperature (T) increases, particles move faster, raising Pressure (P). When pressure is high enough, vapor is vented.</p>
    </div>
  );
};

export default IdealGasLawAnimation;
