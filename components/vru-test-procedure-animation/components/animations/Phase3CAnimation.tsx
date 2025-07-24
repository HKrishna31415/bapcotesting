
import React, { useState, useEffect } from 'react';
import TankIcon from '../icons/TankIcon';
import VruIcon from '../icons/VruIcon';
import TruckIcon from '../icons/TruckIcon';

const Phase3CAnimation: React.FC = () => {
  const [isStressing, setIsStressing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsStressing(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-800/50 rounded-lg p-4 relative overflow-hidden">
      <div className="text-sm font-semibold text-sky-300 absolute top-2 left-2">Phase 3C: Continuous Operation & Stress Test</div>
      
      {/* Vapors to VRU Path (normal) */}
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <path d="M 50% 40 Q 58% 30 66% 50" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" className="animate-flow" />
      </svg>
      {/* Recovered Liquid Path */}
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <path d="M 66% 50 Q 75% 70 50% 60" stroke="#22c55e" strokeWidth="2" strokeDasharray="4" className="animate-flow-reverse" />
      </svg>

      {/* Tanker and stress vapor path */}
      <div className={`absolute left-[10%] top-[45%] transition-all duration-1000 ${isStressing ? 'opacity-100' : 'opacity-0'}`}>
        <TruckIcon className="w-20 h-20 text-slate-400" />
        <p className="text-center text-xs text-rose-400 font-bold">STRESS TEST</p>
      </div>

       <svg className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isStressing ? 'opacity-100' : 'opacity-0'}`} fill="none">
        <path d="M 25% 50 C 35% 20, 55% 20, 66% 50" stroke="#ef4444" strokeWidth="4" strokeDasharray="6" className="animate-flow" />
        <text x="35%" y="28%" className="fill-rose-400 text-xs font-bold">HIGH-VOLUME VAPOR</text>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TankIcon className="w-24 h-24" />
        <p className="text-center text-xs mt-1 text-slate-300">Main USTs</p>
      </div>

      <div className="absolute left-[66%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <VruIcon className="w-24 h-24" isPulsing={true} />
        <p className="text-center text-xs mt-1 text-sky-300">VRU Continuous</p>
      </div>

      <p className="absolute bottom-2 text-center text-xs text-slate-400">Continuous operation with recovered fuel returned to UST. Stress test simulates fuel delivery.</p>
      <style>{`
        @keyframes flow {
          to { stroke-dashoffset: -12; }
        }
        .animate-flow { animation: flow 0.8s linear infinite; }

        @keyframes flow-reverse {
          to { stroke-dashoffset: 8; }
        }
        .animate-flow-reverse { animation: flow-reverse 1s linear infinite; }
      `}</style>
    </div>
  );
};

export default Phase3CAnimation;
