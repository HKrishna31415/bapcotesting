import React from 'react';
import type { Particle } from '../types';

interface TankProps {
  particles: Particle[];
  isLeaking: boolean;
  pressure: number;
  dimensions: {
    width: number;
    height: number;
    leakSize: number;
  };
}

const TankIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);

const getPressureColor = (pressure: number) => {
  if (pressure > 70) return 'bg-green-500';
  if (pressure > 30) return 'bg-yellow-500';
  return 'bg-red-500';
};


export const Tank: React.FC<TankProps> = ({ particles, isLeaking, pressure, dimensions }) => {
  const { width, height, leakSize } = dimensions;
  const leakY = height / 2;

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-xl font-bold text-center mb-2 text-cyan-300 flex items-center justify-center">
            <TankIcon />
            Nitrogen Tank
        </h2>

        {/* Pressure Gauge */}
        <div className="px-2 mb-4">
          <div className="flex justify-between items-center text-sm font-mono mb-1 text-gray-400">
            <span>Pressure</span>
            <span className="font-semibold text-white">{pressure.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden border-2 border-gray-600 shadow-inner">
            <div
              className={`h-full rounded-full transition-all duration-300 ease-linear ${getPressureColor(pressure)}`}
              style={{ width: `${pressure}%` }}
              role="progressbar"
              aria-valuenow={pressure}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
        
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto bg-gray-900 rounded-lg overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        <defs>
          <radialGradient id="particleGradient" cx="0.3" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#cceeff" />
            <stop offset="80%" stopColor="#66ccff" />
            <stop offset="100%" stopColor="#3399ff" />
          </radialGradient>
        </defs>

        {/* Tank Body */}
        <rect width={width} height={height} fill="none" stroke="#4a5568" strokeWidth="3" rx="8" />

        {/* Particles */}
        {particles.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.radius}
            fill="url(#particleGradient)"
            opacity={p.opacity}
            style={{ transition: 'opacity 0.5s ease-out' }}
          />
        ))}

        {/* Leak visualization */}
        {isLeaking && (
          <g>
            <line
              x1={width}
              y1={leakY - leakSize / 2}
              x2={width}
              y2={leakY + leakSize / 2}
              stroke="#e53e3e"
              strokeWidth="4"
              strokeDasharray="4 2"
            />
            <line
              x1={width - 2}
              y1={leakY - leakSize / 2}
              x2={width - 2}
              y2={leakY + leakSize / 2}
              stroke="black"
              strokeOpacity="0.5"
              strokeWidth="4"
            />
          </g>
        )}
      </svg>
    </div>
  );
};