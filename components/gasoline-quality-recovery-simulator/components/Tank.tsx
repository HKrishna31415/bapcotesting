
import React from 'react';

interface TankProps {
  label: string;
  fuelLevel: number; // 0-100
  isContaminated: boolean;
  isSampling?: boolean;
}

export const Tank: React.FC<TankProps> = ({ label, fuelLevel, isContaminated, isSampling }) => {
  const fuelColor = isContaminated ? 'bg-yellow-800' : 'bg-yellow-500';
  const fuelHeight = `${fuelLevel}%`;

  return (
    <div className="flex flex-col items-center">
      <p className="font-orbitron text-lg mb-2">{label}</p>
      <div className="relative w-40 h-64 bg-slate-700 rounded-t-lg border-2 border-slate-500 overflow-hidden">
        {/* Fuel liquid */}
        <div
          className={`absolute bottom-0 left-0 right-0 ${fuelColor} transition-all duration-1000 ease-in-out`}
          style={{ height: fuelHeight }}
        ></div>
        
        {/* Fuel surface reflection */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-white/10" style={{ bottom: `calc(${fuelHeight} - 4px)` }}></div>

        {/* Sampling animation */}
        {isSampling && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-blue-500/50 animate-ping"></div>
            </div>
        )}
      </div>
      <div className="w-48 h-4 bg-slate-600 rounded-b-md"></div>
    </div>
  );
};
