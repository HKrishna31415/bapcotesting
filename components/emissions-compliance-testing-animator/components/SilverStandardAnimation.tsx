
import React, { useState, useEffect } from 'react';

const SilverStandardAnimation: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Reset animation on re-render if needed, though it's stable here
    setStep(0);
    const timers = [
      setTimeout(() => setStep(1), 200),  // Start calibration
      setTimeout(() => setStep(2), 3200), // Calibration done, switch to proxy
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Source Facility */}
      <path d="M10 110 V50 H30 V110" fill="#4a5568" />
      <path d="M20 50 L40 30 H60 L40 50 H20 Z" fill="#718096" />
      <text x="20" y="75" fill="#e2e8f0" fontSize="10" textAnchor="middle">Site</text>

      {/* --- Phase 1: Calibration --- */}
      <g className={`transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        {/* Analyzer */}
        <g className={`transition-opacity duration-500 ${step === 1 ? 'opacity-100' : 'opacity-30'}`}>
            <rect x="80" y="15" width="50" height="30" rx="3" fill="#374151" stroke="#fBBF24" strokeWidth="1"/>
            <text x="105" y="33" fill="#fBBF24" fontSize="8" textAnchor="middle" fontWeight="bold">TVA2020</text>
        </g>
        
        {/* Data flow to Analyzer */}
        <path d="M 30 60 C 40 60, 60 30, 80 30" fill="none" stroke="#718096" strokeWidth="2" strokeDasharray="3 3" className="animate-flow"/>

        {/* Proxy Model Box */}
        <rect x="150" y="45" width="80" height="30" rx="3" fill="#1f2937" stroke="#9ca3af" strokeWidth="1"/>
        <text x="190" y="63" fill="#9ca3af" fontSize="8" textAnchor="middle">Proxy Model</text>

        {/* Calibration Link & Progress Bar */}
        <path d="M 130 30 C 140 30, 140 50, 150 60" fill="none" stroke="#fBBF24" strokeWidth="1" strokeDasharray="2 2" />
        <g>
          <rect x="155" y="52" width="70" height="6" rx="2" fill="#374151" />
          <rect x="155" y="52" width="70" height="6" rx="2" fill="#60a5fa" className={`${step === 1 ? 'animate-progress-fill' : ''}`} />
          <text x="190" y="40" fill="#60a5fa" fontSize="7" textAnchor="middle" className={`transition-opacity duration-300 ${step === 1 ? 'opacity-100' : 'opacity-0'}`}>
            Calibrating...
          </text>
        </g>
      </g>
      
      {/* --- Phase 2: Proxy Measurement --- */}
      <g className={`transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
        {/* Cheaper sensors */}
        <rect x="50" y="85" width="40" height="20" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        <text x="70" y="98" fill="#9ca3af" fontSize="7" textAnchor="middle">Sensor</text>
        
        {/* Data flow from cheap sensors to model */}
        <path d="M 90 95 C 120 95, 140 75, 150 65" fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="3 3" className="animate-flow" style={{ animationDelay: '0.5s' }}/>

        {/* Output from model to chart */}
        <path d="M 230 60 H 245" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" className="animate-flow"/>
      </g>

      {/* Chart/Result */}
      <g transform="translate(245, 40)" className={`transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        <rect x="0" y="0" width="50" height="40" rx="3" fill="#1f2937" stroke="#9ca3af" strokeWidth="1"/>
        <path d="M5 35 q 10 -20 20 0 t 20 -15" fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="3 2" />
        <text x="25" y="55" fill="#9ca3af" fontSize="8" textAnchor="middle">Estimated Data</text>
      </g>
    </svg>
  );
};

export default SilverStandardAnimation;
