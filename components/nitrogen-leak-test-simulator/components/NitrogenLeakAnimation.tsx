import React from 'react';
import { AnimationStage } from '../types';

interface NitrogenLeakAnimationProps {
  stage: AnimationStage;
}

const moleculeData = [
  { id: 1, cx: 120, cy: 220 }, { id: 2, cx: 140, cy: 120 }, { id: 3, cx: 180, cy: 160 },
  { id: 4, cx: 210, cy: 200 }, { id: 5, cx: 240, cy: 180 }, { id: 6, cx: 270, cy: 150 },
  { id: 7, cx: 100, cy: 180 }, { id: 8, cx: 200, cy: 130 }, { id: 9, cx: 300, cy: 170 },
  { id: 10, cx: 330, cy: 140 }, { id: 11, cx: 160, cy: 230 }, { id: 12, cx: 80, cy: 150 },
  { id: 13, cx: 190, cy: 110, leak: true }, { id: 14, cx: 220, cy: 125, leak: true }, { id: 15, cx: 250, cy: 115, leak: true },
];

const NitrogenLeakAnimation: React.FC<NitrogenLeakAnimationProps> = ({ stage }) => {
  const isTesting = stage === AnimationStage.TestingLeaky || stage === AnimationStage.TestingSealed || stage === AnimationStage.PerfectlySealed;
  const isLeaking = stage === AnimationStage.TestingLeaky;
  const isSealed = stage === AnimationStage.TestingSealed;
  const isPerfect = stage === AnimationStage.PerfectlySealed;
  
  const gaugeRotation = isTesting ? (isLeaking ? 100 : 120) : 0;

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Background Gradient */}
      <defs>
        <radialGradient id="grad-bg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#1a202c', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#grad-bg)" />

      {/* Tank and Pipes */}
      <g stroke="#4a5568" strokeWidth="3" fill="#2d3748">
        <rect x="50" y="70" width="100" height="180" rx="5" />
        <path d="M 50 70 C 50 50, 150 50, 150 70 Z" />
        <path d="M 50 250 C 50 270, 150 270, 150 250 Z" />
        <rect x="150" y="110" width="200" height="40" />
      </g>
      
      {/* Crack visual */}
      <path 
        d="M 210 108 L 215 104 L 220 108 L 225 104 L 230 108"
        stroke="#fefefe"
        strokeWidth="1"
        fill="none"
        className={`transition-opacity duration-500 delay-500 ${isLeaking ? 'opacity-60' : 'opacity-0'}`}
      />

      {/* Pressure Gauge */}
      <g transform="translate(30 30)">
        <circle cx="0" cy="0" r="25" fill="#111827" stroke="#4a5568" strokeWidth="2"/>
        <text x="-16" y="15" fill="#9ca3af" fontSize="8">PSI</text>
        <path d="M -15 0 A 15 15 0 0 1 15 0" stroke="#f87171" strokeWidth="2" fill="none"/>
        <line x1="0" y1="0" x2="0" y2="-20" stroke="#e5e7eb" strokeWidth="1.5" strokeLinecap="round" 
              style={{ 
                transform: `rotate(${gaugeRotation}deg)`, 
                transition: 'transform 1.5s ease-in-out', 
                transformOrigin: '0 0' // Fixes the pivot point
              }} />
        <circle cx="0" cy="0" r="2" fill="#e5e7eb"/>
      </g>

      {/* Seal Patch */}
      <rect x="180" y="105" width="80" height="50" fill="#34d399" rx="3" stroke="#10b981" strokeWidth="1.5"
            className={`transition-opacity duration-500 delay-500 ${isSealed ? 'opacity-70' : 'opacity-0'}`} />

      {/* Nitrogen Molecules - Keyed to reset animation on stage change */}
      <g key={stage}>
        {moleculeData.map(({ id, cx, cy, leak }) => {
          const baseClasses = 'fill-cyan-400 transition-all ease-in-out';
          let dynamicClasses = '';

          if (!isTesting) {
            dynamicClasses = 'opacity-0 transform scale-50';
          } else {
             if (leak && isLeaking) {
               // Animate leaking dots outwards
               dynamicClasses = 'opacity-0 transform translate-x-12 -translate-y-12 duration-[2000ms] delay-500';
             } else if (leak && (isSealed || isPerfect)) {
               // Hide the "leaking" dots when the system is sealed to prevent a "sucked back in" effect.
               dynamicClasses = 'opacity-0';
             }
             else {
               // Default state for dots inside the tank
               dynamicClasses = 'opacity-60 transform scale-100 duration-[1500ms]';
             }
          }

          return <circle key={id} cx={cx} cy={cy} r="3" className={`${baseClasses} ${dynamicClasses}`} />;
        })}
      </g>
    </svg>
  );
};

export default NitrogenLeakAnimation;
