
import React from 'react';
import TankIcon from '../icons/TankIcon';

const Phase2Animation: React.FC = () => {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-800/50 rounded-lg p-4 relative overflow-hidden">
      <div className="text-sm font-semibold text-sky-300 absolute top-2 left-2">Phase 2: Establish New Baseline</div>
      {/* VOC emissions */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-1 h-1 bg-amber-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `floatUp 4s ${i * 0.4}s ease-in-out infinite`,
              opacity: 0,
            }}
          ></div>
        ))}
      </div>
      
      {/* Vent Stack */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-16 bg-slate-600"></div>
      
      {/* Manifold Pipe */}
      <div className="absolute top-16 left-1/4 w-1/2 h-2 bg-slate-600"></div>

      {/* Tanks */}
      <div className="flex justify-center items-end gap-24 w-full">
        <div className="relative">
          <TankIcon className="w-24 h-24" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-24 bg-slate-600"></div>
           <div className="absolute top-16 left-1/2 w-1/4 h-2 bg-slate-600"></div>
        </div>
        <div className="relative">
          <TankIcon className="w-24 h-24" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-24 bg-slate-600"></div>
          <div className="absolute top-16 right-1/2 w-1/4 h-2 bg-slate-600"></div>
        </div>
      </div>
      <p className="absolute bottom-2 text-center text-xs text-slate-400">Tanks manifolded to common vent stack, increasing VOC emissions.</p>
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-90px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Phase2Animation;
