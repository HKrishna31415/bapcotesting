
import React from 'react';
import TankIcon from '../icons/TankIcon';
import VruIcon from '../icons/VruIcon';

const Phase3AAnimation: React.FC = () => {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-800/50 rounded-lg p-4 relative overflow-hidden">
      <div className="text-sm font-semibold text-sky-300 absolute top-2 left-2">Phase 3A: System Stabilization</div>
      
      {/* Vapors to VRU Path */}
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <path d="M 33% 35 Q 50% 25 50% 50" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" className="animate-flow" />
      </svg>
      
      {/* Recovered Liquid to Temp Tank Path */}
       <svg className="absolute inset-0 w-full h-full" fill="none">
        <path d="M 50% 50 Q 50% 75 75% 75" stroke="#22c55e" strokeWidth="2" strokeDasharray="4" className="animate-flow-reverse" />
      </svg>
      
      <div className="absolute left-[33%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TankIcon className="w-24 h-24" />
        <p className="text-center text-xs mt-1 text-slate-300">Main USTs</p>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <VruIcon className="w-24 h-24" isPulsing={true} />
        <p className="text-center text-xs mt-1 text-sky-300">VRU Running</p>
      </div>

      <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-[40%]">
        <TankIcon className="w-20 h-20" />
        <p className="text-center text-xs mt-1 text-slate-300">"Neat" Fuel Sample</p>
      </div>

      <p className="absolute bottom-2 text-center text-xs text-slate-400">VRU captures vapor and diverts recovered liquid to a temporary tank.</p>
      <style>{`
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

export default Phase3AAnimation;
