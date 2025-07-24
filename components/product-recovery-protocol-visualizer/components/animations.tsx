import React from 'react';

export const Phase1Animation: React.FC = () => (
  <div className="relative h-24 w-24">
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
      {/* Beaker */}
      <path d="M25 20 H75 V85 H25 Z" fill="none" stroke="#60a5fa" strokeWidth="2" />
      <path d="M20 20 H80" fill="none" stroke="#60a5fa" strokeWidth="2" />

      {/* Liquid */}
      <rect x="26" y="45" width="48" height="40" fill="#38bdf8" className="animate-fill-up" />

      {/* Bubbles */}
      <circle cx="40" cy="85" r="2" fill="white" className="animate-bubble-rise" style={{ animationDelay: '0s' }} />
      <circle cx="50" cy="85" r="3" fill="white" className="animate-bubble-rise" style={{ animationDelay: '0.5s' }} />
      <circle cx="60" cy="85" r="2.5" fill="white" className="animate-bubble-rise" style={{ animationDelay: '1s' }} />
    </svg>
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
        {/* Graph */}
        <path d="M5 80 L25 70 L45 50 L65 40 L85 20" fill="none" stroke="#34d399" strokeWidth="3" strokeDasharray="150" strokeDashoffset="150" className="animate-draw-line" />
    </svg>
  </div>
);

export const Phase2Animation: React.FC = () => (
  <div className="h-24 w-40">
    <svg viewBox="0 0 150 100" className="w-full h-full" aria-hidden="true">
      <defs>
        <path id="beaker-path" d="M0 0 H30 V40 H0 Z" />
      </defs>
      
      {/* Center Beaker */}
      <g transform="translate(60 50)">
        <path d="M0 0 H40 V40 H0 Z" stroke="#a78bfa" strokeWidth="2" fill="#312e81" />
        <rect x="1" y="1" width="38" height="38" fill="#a78bfa" className="animate-fill-up" style={{ animationDuration: '2s', animationDelay: '1s'}} />
      </g>

      {/* Left Beaker */}
      <g transform="translate(10 30)" className="animate-pour-left" style={{ transformOrigin: '25px 45px' }}>
        <use href="#beaker-path" stroke="#60a5fa" strokeWidth="2" fill="#1e3a8a" />
        <path d="M25 40 V55" stroke="#60a5fa" strokeWidth="2" className="animate-stream-flow" style={{ transformOrigin: 'top' }} />
      </g>

      {/* Right Beaker */}
       <g transform="translate(110 30)" className="animate-pour-right" style={{ transformOrigin: '5px 45px' }}>
        <use href="#beaker-path" stroke="#60a5fa" strokeWidth="2" fill="#1e3a8a" />
        <path d="M5 40 V55" stroke="#60a5fa" strokeWidth="2" className="animate-stream-flow" style={{ animationDelay: '0.2s', transformOrigin: 'top' }} />
      </g>

       <text x="80" y="30" fontSize="12" fill="white" className="animate-fade-in" style={{ animationDelay: '2.5s' }}>95:5</text>
    </svg>
  </div>
);


export const Phase3Animation: React.FC = () => (
    <div className="h-24 w-48">
        <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden="true">
            <defs>
                <clipPath id="flow-mask">
                    <rect x="0" y="0" width="120" height="15" className="animate-flow-right" />
                </clipPath>
            </defs>

            {/* Pipe */}
            <rect x="0" y="42.5" width="120" height="15" rx="5" fill="none" stroke="#2dd4bf" strokeWidth="2" />
            <rect x="0" y="42.5" width="120" height="15" rx="5" fill="#14b8a6" clipPath="url(#flow-mask)" />
            
            {/* Tank */}
            <rect x="120" y="20" width="60" height="60" rx="5" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" />
            <rect x="121" y="21" width="58" height="58" rx="4" fill="#115e59" />
            <rect x="121" y="45" width="58" height="34" className="animate-fill-up" style={{ animationDelay: '1.5s' }} fill="#14b8a6" />

            {/* Checklist */}
            <g transform="translate(10, 10)">
                <path d="M0 5 L5 10 L10 0" stroke="#34d399" strokeWidth="2" fill="none" className="animate-check-mark" strokeDasharray="20" strokeDashoffset="20" style={{ animationDelay: '2.5s' }}/>
                <text x="15" y="10" fontSize="8" fill="white" className="animate-fade-in" style={{ animationDelay: '2.7s' }}>Weekly Test</text>
            </g>
             <g transform="translate(70, 10)">
                <path d="M0 5 L5 10 L10 0" stroke="#34d399" strokeWidth="2" fill="none" className="animate-check-mark" strokeDasharray="20" strokeDashoffset="20" style={{ animationDelay: '3s' }}/>
                <text x="15" y="10" fontSize="8" fill="white" className="animate-fade-in" style={{ animationDelay: '3.2s' }}>Confirmation</text>
            </g>
        </svg>
    </div>
);
