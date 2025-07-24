
import React, { useMemo } from 'react';
import { MAX_VOLUME } from '../constants';

interface WaterTankProps {
  label: string;
  volume: number;
  salinity: number;
  isAnimating?: boolean;
}

interface SaltParticle {
  id: number;
  top: string;
  left: string;
}

const WaterTank: React.FC<WaterTankProps> = ({ label, volume, salinity, isAnimating = false }) => {
  const waterHeight = `${(volume / MAX_VOLUME) * 100}%`;
  const waterColor = salinity > 5 ? 'bg-sky-600' : 'bg-blue-500';

  const saltParticles = useMemo<SaltParticle[]>(() => {
    if (salinity === 0) return [];
    const count = Math.floor(volume * (salinity / 100) * 20);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 95}%`,
      left: `${Math.random() * 95}%`,
    }));
  }, [volume, salinity]);

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="relative w-48 h-64 bg-slate-700/50 border-2 border-slate-600 rounded-b-lg rounded-t-md overflow-hidden">
        <div
          className={`absolute bottom-0 left-0 right-0 ${waterColor} ${isAnimating ? 'transition-all duration-1000 ease-in-out' : ''}`}
          style={{ height: waterHeight }}
        >
          {saltParticles.map((p) => (
            <div
              key={p.id}
              className="absolute w-1 h-1 bg-white/80 rounded-full"
              style={{ top: p.top, left: p.left }}
            />
          ))}
        </div>
        <div className="absolute top-2 right-2 text-xs font-mono bg-slate-900/50 px-2 py-1 rounded">
          {label}
        </div>
      </div>
      <div className="text-center font-semibold">
        <p>Volume: {volume.toFixed(0)} units</p>
        <p>Salinity: {salinity.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default WaterTank;
