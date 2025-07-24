import React from 'react';
import TankIcon from '../icons/TankIcon';
import { ChartBarSquareIcon } from '@heroicons/react/24/outline';

const Phase1Animation: React.FC = () => {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-800/50 rounded-lg p-4 relative overflow-hidden">
      <div className="text-sm font-semibold text-sky-300 absolute top-2 left-2">Phase 1: Pre-Modification Baseline</div>
      
      {/* Logger Icon */}
      <div className="absolute top-2 right-2 flex flex-col items-center text-xs text-slate-400 animate-pulse">
        <ChartBarSquareIcon className="h-8 w-8 text-emerald-400" />
        <span>Logging Data</span>
      </div>

      {/* Tanks and Vents */}
      <div className="flex justify-center items-end gap-32 w-full">
        {/* Tank 1 */}
        <div className="relative">
          {/* VOC emissions */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-16">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-1 h-1 bg-amber-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  animation: `floatUpP1 5s ${i * 1.5}s ease-in-out infinite`,
                  opacity: 0,
                }}
              ></div>
            ))}
          </div>
          {/* Vent Stack */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-12 bg-slate-600"></div>
          <TankIcon className="w-24 h-24" />
        </div>

        {/* Tank 2 */}
        <div className="relative">
           {/* VOC emissions */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-16">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-1 h-1 bg-amber-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  animation: `floatUpP1 5s ${i * 1.7}s ease-in-out infinite`,
                  opacity: 0,
                }}
              ></div>
            ))}
          </div>
          {/* Vent Stack */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-12 bg-slate-600"></div>
          <TankIcon className="w-24 h-24" />
        </div>
      </div>
      
      <p className="absolute bottom-2 text-center text-xs text-slate-400">VOC emissions and pressure measured from each individual tank vent.</p>
      
      <style>{`
        @keyframes floatUpP1 {
          0% { transform: translateY(0); opacity: 1; }
          90%, 100% { transform: translateY(-60px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Phase1Animation;
