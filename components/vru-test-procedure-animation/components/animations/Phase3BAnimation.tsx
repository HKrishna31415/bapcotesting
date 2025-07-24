
import React, { useState, useEffect } from 'react';
import TankIcon from '../icons/TankIcon';
import VruIcon from '../icons/VruIcon';

const Phase3BAnimation: React.FC = () => {
  const [isVruOn, setIsVruOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVruOn(prev => !prev);
    }, 4000); // Toggle every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-800/50 rounded-lg p-4 relative overflow-hidden">
      <div className="text-sm font-semibold text-sky-300 absolute top-2 left-2">Phase 3B: Alternating Interval Test</div>
      
      {/* Status Indicator */}
      <div className="absolute top-2 right-2 text-center">
          <p className="text-sm font-bold">VRU Status:</p>
          <p className={`text-lg font-black transition-colors duration-500 ${isVruOn ? 'text-emerald-400' : 'text-rose-500'}`}>
              {isVruOn ? 'ON' : 'OFF'}
          </p>
      </div>

      {/* VOC emissions path (when OFF) */}
      <div className={`absolute top-0 left-[33%] -translate-x-[45%] w-24 h-24 transition-opacity duration-500 ${isVruOn ? 'opacity-0' : 'opacity-100'}`}>
         <div className="absolute top-0 w-2 h-10 bg-slate-600"></div>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-1 h-1 bg-amber-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 20}%`,
              animation: `floatUp3B 3s ${i * 0.5}s ease-in-out infinite`,
              opacity: 0,
            }}
          ></div>
        ))}
      </div>
      
      {/* Vapors to VRU Path (when ON) */}
      <svg className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isVruOn ? 'opacity-100' : 'opacity-0'}`} fill="none">
        <path d="M 33% 40 Q 40% 30 50% 50" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" className="animate-flow" />
      </svg>
       {/* Recovered Liquid Path (when ON) */}
       <svg className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isVruOn ? 'opacity-100' : 'opacity-0'}`} fill="none">
        <path d="M 50% 50 Q 60% 70 33% 60" stroke="#22c55e" strokeWidth="2" strokeDasharray="4" className="animate-flow-reverse" />
      </svg>
      
      <div className="absolute left-[33%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TankIcon className="w-24 h-24" />
        <p className="text-center text-xs mt-1 text-slate-300">Main USTs</p>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <VruIcon className="w-24 h-24" isPulsing={isVruOn} />
      </div>

      <p className="absolute bottom-2 text-center text-xs text-slate-400">System alternates between 24hrs VRU ON and 24hrs VRU OFF.</p>
      <style>{`
        @keyframes floatUp3B {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
        @keyframes flow {
          to { stroke-dashoffset: -8; }
        }
        .animate-flow { animation: flow 1s linear infinite; }
        @keyframes flow-reverse {
          to { stroke-dashoffset: 8; }
        }
        .animate-flow-reverse { animation: flow-reverse 1s linear infinite; }
      `}</style>
    </div>
  );
};

export default Phase3BAnimation;
