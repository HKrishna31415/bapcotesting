import React from 'react';

export const STAGE_CONTENT = [
  {
    title: 'Understanding Vapor Loss',
    description: 'Fuel stored in tanks naturally evaporates, creating vapor. "Breathing Loss" occurs as daily temperature changes cause tanks to "breathe" this vapor in and out.',
  },
  {
    title: 'Step 1: Diurnal Heating (Day)',
    description: 'As the sun heats the tank, the fuel evaporates, increasing vapor pressure inside. To prevent over-pressurization, the tank vents this valuable, combustible vapor into the atmosphere.',
  },
  {
    title: 'Step 2: Diurnal Cooling (Night)',
    description: 'At night, the tank cools, and the vapors inside contract. This creates a vacuum, and the tank "breathes in" fresh air. This prepares the tank for the next day\'s cycle of loss.',
  },
  {
    title: 'Problem: Manifolded Tanks',
    description: 'When tanks are linked (manifolded), filling one tank displaces vapor into the others. If the system is full of vapor, it creates a much larger release of pollutants and lost product.',
  },
  {
    title: 'Solution: Vapor Recovery Unit (VRU)',
    description: 'A VRU connects to the manifolded tanks. Instead of venting to the atmosphere, it captures the vapors, cools them, and condenses them back into liquid fuel, which is returned to the tanks.',
  },
  {
    title: 'The Benefits of a VRU',
    description: 'A VRU provides significant environmental and economic advantages, turning a waste stream into a revenue stream while protecting the environment.',
  },
  {
    title: 'Smarter, Cleaner, More Profitable',
    description: 'By implementing a VRU, facilities can reduce emissions, comply with regulations, improve safety, and recover thousands of dollars in otherwise lost product.',
  },
  {
    title: 'Extra Considerations',
    description: "It's crucial that the VRU is sized correctly for the facility's specific needs. An improperly sized unit may not keep up, or could even increase vapor loss if it creates excessive vacuum.",
  },
];

export const MAX_STAGES = STAGE_CONTENT.length - 1;

export const SunIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
        <defs>
            <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g style={{ filter: 'url(#sunGlow)' }}>
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g className="animate-spin" style={{ transformOrigin: 'center', animationDuration: '20s' }}>
                {[...Array(8)].map((_, i) => (
                    <line
                        key={i}
                        x1="12"
                        y1="1"
                        x2="12"
                        y2="4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        transform={`rotate(${i * 45}, 12, 12)`}
                    />
                ))}
            </g>
        </g>
    </svg>
);

export const MoonIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
         <defs>
            <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <path fill="currentColor" style={{ filter: 'url(#moonGlow)' }} d="M12.54 2.22a.75.75 0 0 1 .714 1.064 8.25 8.25 0 0 0 9.227 9.227.75.75 0 0 1 1.064.714 10.5 10.5 0 1 1-11.005-11.005Z"/>
    </svg>
);

export const ArrowLeftIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

export const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

export const LeafIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="earthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
            <filter id="envGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                <feFlood floodColor="#34d399" result="floodColor" />
                <feComposite in="floodColor" in2="blur" operator="in" result="glow" />
                <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g style={{ filter: 'url(#envGlow)' }}>
            {/* Earth segment */}
            <path d="M12,48 A 20 20, 0, 0, 1, 52 48" stroke="url(#earthGrad)" strokeWidth="8" strokeLinecap="round" fill="none"/>
            {/* Sprout */}
            <path d="M32,44 V24" stroke="#dcfce7" strokeWidth="5" strokeLinecap="round" />
            <path d="M32,28 C 24,24 24,14 32,12 A 8 8 0 0 1 40 20 C 40,28 32,28 32,28 Z" fill="#34d399" />
            <path d="M32,28 C 40,24 40,14 32,12 A 8 8 0 0 0 24 20 C 24,28 32,28 32,28 Z" fill="#6ee7b7" transform="scale(-1, 1) translate(-64, 0)" />
        </g>
    </svg>
);


export const DollarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.826-1.106-2.156 0-2.982C10.544 8.219 11.272 8 12 8c.725 0 1.45.22 2.003.659" />
    </svg>
);

export const VruIcon = ({ className, isRunning }: { className?: string, isRunning?: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
        <defs>
            <linearGradient id="vruBody" x1="0" x2="1" y1="0.5" y2="0.5">
                <stop offset="0%" stopColor="#4a5568"/>
                <stop offset="50%" stopColor="#718096"/>
                <stop offset="100%" stopColor="#4a5568"/>
            </linearGradient>
            <filter id="vruGlow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
                <feFlood floodColor="#f6e05e" result="floodColor"/>
                <feComposite in="floodColor" in2="blur" operator="in" result="glow"/>
                <feMerge>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        {/* Main Body */}
        <rect width="60" height="40" x="2" y="16" fill="url(#vruBody)" rx="4" ry="4" stroke="#2d3748" strokeWidth="1" />
        {/* Top structure */}
        <rect width="20" height="8" x="22" y="8" fill="#4a5568" rx="2" ry="2"/>
        <path d="M 28 16 v -8" stroke="#a0aec0" strokeWidth="4" />
        <path d="M 36 16 v -8" stroke="#a0aec0" strokeWidth="4" />
        {/* Side Panel */}
        <rect x="6" y="24" width="16" height="24" fill="#2d3748" rx="2" ry="2" />
        {/* Status Light */}
        <circle cx="14" cy="36" r="5" fill="#1a202c" />
        <circle cx="14" cy="36" r="3" fill={isRunning ? "#68d391" : "#f56565"} className={isRunning ? 'animate-pulse' : ''} style={{ filter: isRunning ? 'drop-shadow(0 0 3px #68d391)' : 'none' }}/>

        {/* Cooling Fins / Vents */}
        <g transform="translate(30, 24)">
            {[0, 1, 2, 3, 4].map(i => 
                <rect key={i} x={i * 5} y="0" width="3" height="24" fill="#2d3748" />
            )}
        </g>
        {/* Internal glowing part */}
        {isRunning && (
            <rect x="30" y="24" width="25" height="24" fill="#f6e05e" style={{ filter: 'url(#vruGlow)', opacity: 0.6 }} rx="2" ry="2" className="animate-pulse"/>
        )}
    </svg>
);

export const InfoIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);