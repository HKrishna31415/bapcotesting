import React, { useState, useEffect } from 'react';

const GasDot = ({ delay, path, className = 'bg-cyan-400' }: { delay: number; path: string; className?: string }) => (
  <div
    className={`absolute w-2 h-2 rounded-full animate-flow-dots ${className}`}
    style={{
      animationDelay: `${delay}s`,
      offsetPath: `path("${path}")`,
    }}
  ></div>
);

const DataDot = ({ delay, path }: { delay: number; path: string; }) => (
  <div
    className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-flow-dots"
    style={{
      animationDelay: `${delay}s`,
      offsetPath: `path("${path}")`,
      animationDuration: '2s'
    }}
  ></div>
);

const SilverStandardAnimation: React.FC = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),   // Correlation phase starts
      setTimeout(() => setPhase(2), 2500),  // Correlation ends, TVA disappears
      setTimeout(() => setPhase(3), 3000),  // Proxy model appears
      setTimeout(() => setPhase(4), 4000),  // Result appears
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const gasPathToProxy = "M 60,64 H 250 V 200";
  const gasPathToTVA = "M 60,64 H 400 V 120";
  const dataPath = "M 280,64 Q 420,0 550,100";

  const isCorrelationPhase = phase === 1;

  return (
    <div className="w-full h-full relative font-mono text-xs text-gray-300">
      
      {/* SVG Paths */}
      <svg width="100%" height="100%" className="absolute top-0 left-0">
        <path d={gasPathToProxy} stroke="#4A5568" strokeWidth="2" strokeDasharray="4 4" fill="none" className={`transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`} />
        <path d={gasPathToTVA} stroke="#4A5568" strokeWidth="2" strokeDasharray="4 4" fill="none" className={`transition-opacity duration-500 ${isCorrelationPhase ? 'opacity-100' : 'opacity-0'}`} />
        <path d={dataPath} stroke="#4A5568" strokeWidth="2" strokeDasharray="4 4" fill="none" className={`transition-opacity duration-500 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`} />
      </svg>
      
      {/* Animated Dots */}
      {phase >= 1 && [...Array(8)].map((_, i) => <GasDot key={`gas-proxy-${i}`} delay={i * 0.2} path={gasPathToProxy} />)}
      {isCorrelationPhase && [...Array(8)].map((_, i) => <GasDot key={`gas-tva-${i}`} delay={i * 0.2} path={gasPathToTVA} className="bg-yellow-400" />)}
      {phase >= 3 && [...Array(5)].map((_, i) => <DataDot key={`data-${i}`} delay={i * 0.4} path={dataPath} />)}

      {/* Components */}
      <div className={`absolute top-12 left-0 w-16 h-8 bg-gray-600 rounded-r-md flex items-center justify-center z-10 transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        VENT
      </div>

      <div className={`absolute top-48 left-[226px] transition-all duration-500 ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{transitionDelay: '100ms'}}>
        <div className="w-36 h-12 bg-gray-700 border border-gray-500 rounded-lg flex flex-col items-center justify-center p-1 text-center">
            <p className="font-bold">Proxy Sensors</p>
            <p className="text-gray-400">(Pressure, Flow)</p>
        </div>
      </div>

       <div className={`absolute top-[96px] right-[148px] transition-all duration-500 ease-out ${isCorrelationPhase ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="w-32 h-12 bg-yellow-600/80 border border-yellow-400 rounded-lg flex flex-col items-center justify-center p-1">
          <p className="font-bold text-yellow-100">TVA2020</p>
          <p className="text-yellow-200">(Correlation)</p>
        </div>
      </div>
      
      <div className={`absolute top-32 right-32 w-48 h-24 bg-cyan-900/30 border border-cyan-700 rounded-lg flex items-end justify-center p-2 text-cyan-400 transition-all duration-500 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '200ms'}}>
        Calibrated Proxy Model
      </div>

      <div className={`absolute top-16 right-16 transition-all duration-500 ${phase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{transitionDelay: '300ms'}}>
         <div className="w-44 h-16 bg-green-800/80 border border-green-500 rounded-lg flex flex-col items-center justify-center p-2 text-center">
            <p className="font-bold text-green-200 text-base">Est. Emissions</p>
            <p className="text-green-300">(kg/day)</p>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="absolute bottom-4 left-4 right-4 h-6 bg-gray-700 rounded-full p-1 border border-gray-600 overflow-hidden">
        <div className="flex w-full h-full">
          {/* Correlation Phase Bar */}
          <div 
            className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-l-full transition-[width] ease-linear duration-[2000ms]"
            style={{ width: phase >= 1 ? '25%' : '0%' }}
          ></div>
          {/* Proxy Modeling Phase Bar */}
          <div 
            className="h-full bg-gradient-to-r from-gray-500 to-gray-300 rounded-r-full transition-[width] ease-linear duration-[6000ms]"
            style={{ width: phase >= 2 ? '75%' : '0%' }}
          ></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
            <div className="w-1/4 flex justify-center">
              <span className={`text-sm font-semibold text-black mix-blend-lighten transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>Correlation</span>
            </div>
            <div className="w-3/4 flex justify-center">
              <span className={`text-sm font-semibold text-black mix-blend-lighten transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>Proxy Modeling</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SilverStandardAnimation;