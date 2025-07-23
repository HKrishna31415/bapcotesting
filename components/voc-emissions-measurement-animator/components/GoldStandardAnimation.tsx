import React, { useState, useEffect } from 'react';

const Dot = ({ delay, path }: { delay: number; path: string; }) => (
  <div
    className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-flow-dots"
    style={{
      animationDelay: `${delay}s`,
      offsetPath: `path("${path}")`,
    }}
  ></div>
);

const GoldStandardAnimation: React.FC = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),   // Show analyzers & flow
      setTimeout(() => setPhase(2), 1500),  // Show data lines and calculation
      setTimeout(() => setPhase(3), 2500),  // Show result
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const pathToUpper = "M 60,200 H 256 V 120 H 550";
  const pathToLower = "M 60,200 H 256 V 280 H 550";

  return (
    <div className="w-full h-full relative font-mono text-xs">
      {/* Source Vent */}
      <div className="absolute left-0 top-[188px] w-16 h-8 bg-gray-600 rounded-r-md flex items-center justify-center z-10">
        <span className="text-gray-300">VENT</span>
      </div>
      
      {/* SVG Pipes */}
      <svg width="100%" height="100%" className="absolute top-0 left-0">
        <path d={pathToUpper} stroke="#4A5568" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        <path d={pathToLower} stroke="#4A5568" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      </svg>
      
      {/* Flow Dots */}
      {phase >= 1 && [...Array(10)].map((_, i) => <Dot key={`p1-${i}`} delay={i * 0.15} path={pathToUpper} />)}
      {phase >= 1 && [...Array(10)].map((_, i) => <Dot key={`p2-${i}`} delay={i * 0.15} path={pathToLower} />)}

      {/* Analyzers */}
      <div className={`absolute top-[96px] left-[192px] transition-all duration-500 ease-out ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="w-32 h-12 bg-yellow-600/80 border border-yellow-400 rounded-lg flex flex-col items-center justify-center p-1">
          <p className="font-bold text-yellow-100">TVA2020</p>
          <p className="text-yellow-200">VOC Analyzer</p>
        </div>
      </div>
      
      <div className={`absolute top-[256px] left-[192px] transition-all duration-500 ease-out ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{transitionDelay: '200ms'}}>
        <div className="w-32 h-12 bg-yellow-600/80 border border-yellow-400 rounded-lg flex flex-col items-center justify-center p-1">
          <p className="font-bold text-yellow-100">Flow Meter</p>
          <p className="text-yellow-200">Ultrasonic</p>
        </div>
      </div>

      {/* Data Lines & Calculation Engine */}
      <div className={`absolute top-[120px] left-[340px] transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
        <svg width="150" height="160">
            <path d="M 0,0 C 50,0 50,80 100,80" stroke="#6b7280" strokeWidth="2" strokeDasharray="3 3" fill="none"/>
        </svg>
      </div>
       <div className={`absolute top-[280px] left-[340px] transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
        <svg width="150" height="160">
            <path d="M 0,0 C 50,0 50,-80 100,-80" stroke="#6b7280" strokeWidth="2" strokeDasharray="3 3" fill="none"/>
        </svg>
      </div>

      <div className={`absolute top-[180px] right-24 transition-all duration-500 ease-out ${phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="w-36 h-20 bg-gray-700 border border-gray-500 rounded-lg flex flex-col items-center justify-center p-2 text-center">
            <p className="text-gray-300">Real-time</p>
            <p className="font-bold text-white">Calculation</p>
            <p className="text-gray-300">Engine</p>
        </div>
      </div>

      {/* Result */}
       <div className={`absolute top-[188px] right-4 transition-all duration-500 ease-out ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{transitionDelay: '200ms'}}>
        <div className="w-40 h-16 bg-green-800/80 border border-green-500 rounded-lg flex flex-col items-center justify-center p-2 text-center">
            <p className="font-bold text-green-200 text-base">Mass Emissions</p>
            <p className="text-green-300">(kg/day)</p>
        </div>
      </div>
      <svg className={`absolute right-[94px] top-[200px] transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`} width="40" height="1">
        <line x1="0" y1="0" x2="40" y2="0" stroke="#6b7280" strokeWidth="2" strokeDasharray="3 3"/>
      </svg>
      <svg className={`absolute right-0 top-[200px] transition-opacity duration-500 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`} width="16" height="1">
        <line x1="0" y1="0" x2="16" y2="0" stroke="#6b7280" strokeWidth="2" strokeDasharray="3 3"/>
      </svg>


      {/* Timeline */}
      <div className="absolute bottom-4 left-4 right-4 h-6 bg-gray-700 rounded-full p-1 border border-gray-600">
        <div className={`h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full ${phase >= 1 ? 'animate-fill-bar' : 'w-0'}`} style={{animationDuration: '8s'}}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-black mix-blend-lighten">Project Duration (Continuous Measurement)</span>
        </div>
      </div>
    </div>
  );
};

export default GoldStandardAnimation;
