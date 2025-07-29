import React from 'react';

const IntakeParticle = ({
  delay,
  duration,
  tx,
  ty,
}: {
  delay: string;
  duration: string;
  tx: string;
  ty: string;
}) => (
  <div
    className="absolute top-0 left-0 w-2 h-2 bg-purple-400/60 rounded-full shadow-[0_0_10px_4px_rgba(192,132,252,0.5)] animate-vapor-suck-in"
    style={
      {
        '--tx': tx,
        '--ty': ty,
        animationDelay: delay,
        animationDuration: duration,
      } as React.CSSProperties
    }
  />
);

const VaporIntake = () => {
  const particles = Array.from({ length: 40 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 80 + Math.random() * 80;
    const tx = `${Math.cos(angle) * radius}px`;
    const ty = `${Math.sin(angle) * radius}px`;
    return {
      tx,
      ty,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`,
    };
  });

  return (
    <div className="absolute top-[55%] left-[-0.5rem] w-1 h-1 pointer-events-none">
      {particles.map((p, i) => (
        <IntakeParticle key={i} {...p} />
      ))}
    </div>
  );
};

export const VruMachine = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="relative w-56 sm:w-64 h-72 sm:h-80 flex-shrink-0">
      {/* Main Machine Body */}
      <svg
        viewBox="0 0 160 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="machineBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="50%" stopColor="#718096" />
            <stop offset="100%" stopColor="#4A5568" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor={isActive ? '#68D391' : '#F56565'} result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Back part */}
        <rect x="10" y="10" width="140" height="180" rx="10" fill="url(#machineBody)" stroke="#2D3748" strokeWidth="2" />
        
        {/* Front Panel */}
        <rect x="20" y="20" width="120" height="160" rx="5" fill="#2D3748" />
        
        {/* Top Section */}
        <path d="M 10 20 H 150 V 10 H 10 Z" fill="#718096" />
        <rect x="10" y="10" width="140" height="10" rx="5" fill="url(#machineBody)" />
        
        {/* Control Panel */}
        <rect x="30" y="30" width="100" height="70" rx="3" fill="#1A202C" />
        {/* Screen */}
        <rect x="35" y="35" width="90" height="40" rx="2" fill={isActive ? "#C6F6D5" : "#4A5568"} className="transition-colors duration-500" />
        {isActive && <text x="80" y="58" fontFamily="monospace" fontSize="12" fill="#2F855A" textAnchor="middle">ACTIVE</text>}
        {!isActive && <text x="80" y="58" fontFamily="monospace" fontSize="12" fill="#A0AEC0" textAnchor="middle">IDLE</text>}
        
        {/* Status Light */}
        <circle cx="80" cy="85" r="8" fill="#1A202C" />
        <circle cx="80" cy="85" r="6" fill={isActive ? '#68D391' : '#F56565'} style={{filter: 'url(#glow)'}} className="transition-colors duration-500" />

        {/* Vents */}
        <g transform="translate(45, 115)">
            {[0, 1, 2, 3, 4, 5].map(i => (
                 <rect key={i} y={i * 10} width="70" height="5" fill="#4A5568" />
            ))}
        </g>
        
        {/* Intake Pipe */}
        <path d="M 10 100 C -10 100 -10 120 10 120" stroke="#718096" strokeWidth="12" fill="none" />
        <path d="M 10 105 H -5" stroke="#4A5568" strokeWidth="6" />
        
        {/* Outlet Pipe */}
        <path d="M 150 160 C 170 160 170 180 150 180" stroke="#718096" strokeWidth="8" fill="none" />
        <path d="M 150 164 H 158" stroke="#4A5568" strokeWidth="4" />
      </svg>

      {/* Vapor Intake Animation */}
      {isActive && <VaporIntake />}
    </div>
  );
};
