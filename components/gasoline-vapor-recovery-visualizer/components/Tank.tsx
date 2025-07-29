
import React from 'react';

interface TankProps {
  label: string;
  level: number;
  liquidColorClass: string;
}

const Tank: React.FC<TankProps> = ({ label, level, liquidColorClass }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-slate-400 font-semibold mb-2 text-center text-sm h-10">{label}</p>
      <div className="relative w-40 h-56 bg-slate-700 border-4 border-slate-600 rounded-t-lg shadow-inner overflow-hidden">
        <div
          className={`absolute bottom-0 left-0 right-0 ${liquidColorClass} transition-all duration-150 ease-linear`}
          style={{ height: `${level}%` }}
        >
          {/* Wave effect */}
          <div className="absolute -top-1 left-0 w-full h-3 bg-black/10 rounded-full"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white text-3xl font-bold" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>{Math.floor(level)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Tank;
