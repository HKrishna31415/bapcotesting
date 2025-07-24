
import React from 'react';
import { Scenario, Phase } from '../types';
import { NitrogenIcon, LeakIcon } from './Icons';

interface TankSystemProps {
  scenario: Scenario;
  phase: Phase;
  pressure: number;
}

const NitrogenParticle: React.FC<{ phase: Phase }> = ({ phase }) => {
  const show = phase === Phase.PRESSURIZING;
  const animationClass = show ? 'animate-[flow_4s_linear_infinite]' : 'opacity-0';

  // Randomize animation delay and horizontal start position
  const delay = Math.random() * -4; // negative delay to start mid-animation
  const startPos = 50 + Math.random() * 10 - 5;
  
  return (
    <div
      className={`absolute top-[90%] left-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full ${animationClass}`}
      style={{ animationDelay: `${delay}s`, '--start-x': `${startPos}%` } as React.CSSProperties}
    />
  );
};


const LeakParticle: React.FC<{ phase: Phase; scenario: Scenario }> = ({ phase, scenario }) => {
  const show = scenario === Scenario.LEAKING && (phase === Phase.MONITORING || phase === Phase.RESULT);
  if (!show) return null;

  const animationClass = 'animate-[leak_1.5s_ease-out_infinite]';
  const delay = Math.random() * -1.5;
  const angle = Math.random() * 90 - 45; // -45 to 45 degrees

  return (
    <div
      className={`absolute top-0 left-0 w-1 h-1 bg-rose-300 rounded-full ${animationClass}`}
      style={{ animationDelay: `${delay}s`, '--angle': `${angle}deg` } as React.CSSProperties}
    />
  );
};


const TankSystem: React.FC<TankSystemProps> = ({ scenario, phase, pressure }) => {
  const isLeaking = scenario === Scenario.LEAKING && (phase === Phase.MONITORING || phase === Phase.RESULT);
  const showNitrogenFlow = phase === Phase.PRESSURIZING;

  return (
    <div className="w-full h-full flex flex-col items-center justify-end relative scale-90 md:scale-100">
      <style>{`
        @keyframes flow {
          0% { transform: translate(-50%, 0) scale(0.5); opacity: 0; }
          10% { transform: translate(-50%, -20px) scale(1); opacity: 1; }
          90% { transform: translate(var(--start-x), -340px) scale(1); opacity: 1; }
          100% { transform: translate(var(--start-x), -360px) scale(0.5); opacity: 0; }
        }
        @keyframes leak {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(calc(50px * cos(var(--angle))), calc(50px * sin(var(--angle)))) scale(0); opacity: 0; }
        }
      `}</style>

      {/* Ground Level */}
      <div className="w-full h-1/3 bg-slate-700 border-t-4 border-slate-600 relative z-10 flex justify-center">
        <div className="absolute -top-1 w-[90%] h-2 bg-green-800 rounded-full" />
        <div className="absolute -top-0.5 w-[90%] h-1 bg-green-600" />
      </div>

      {/* Underground Section */}
      <div className="w-full h-2/3 bg-[#4a3f35] absolute bottom-0" />
      
      {/* Nitrogen Tank */}
      <div className={`absolute bottom-[33%] left-4 md:left-10 z-20 transition-opacity duration-500 ${showNitrogenFlow ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center">
          <div className="w-16 h-32 bg-slate-500 border-2 border-slate-400 rounded-t-lg rounded-b-md relative">
            <div className="h-4 bg-slate-600 rounded-t-md"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <NitrogenIcon className="w-8 h-8 text-cyan-300" />
            </div>
          </div>
          <div className="w-20 h-2 bg-slate-600 rounded-b-sm"></div>
        </div>
      </div>

      {/* Nitrogen Flow Particles */}
      {showNitrogenFlow && Array.from({ length: 20 }).map((_, i) => (
        <NitrogenParticle key={i} phase={phase} />
      ))}
      
      {/* UST System */}
      <div className="absolute w-full h-full flex items-end justify-center">
        {/* Main Tank */}
        <div className="w-4/5 md:w-3/5 h-1/2 bg-gradient-to-b from-gray-400 to-gray-600 rounded-2xl border-4 border-gray-700 shadow-inner-lg absolute bottom-4 z-0 flex items-center justify-center">
           <div
              className="absolute bottom-0 left-0 h-full bg-cyan-500/30 rounded-2xl transition-all duration-500"
              style={{ width: `${(pressure / 2.0) * 100}%` }}
            />
          <span className="text-xl md:text-2xl font-mono text-white z-10 drop-shadow-lg">
            {pressure.toFixed(2)}" H₂O
          </span>
        </div>

        {/* Piping */}
        <div className="absolute w-3 h-2/3 bg-gray-500 border-x-2 border-gray-600 bottom-1/3 z-0" />
        <div className="absolute w-1/3 h-3 bg-gray-500 border-y-2 border-gray-600 top-[calc(33%-1.5rem)] z-0" />
        
        {/* Dispenser pipe */}
        <div className="absolute w-3 h-1/3 bg-gray-500 border-x-2 border-gray-600 top-0 left-[calc(50%+16.66%-0.375rem)] z-20"/>
        
        {/* Fill pipe */}
        <div className="absolute w-3 h-1/3 bg-gray-500 border-x-2 border-gray-600 top-0 left-[calc(50%-16.66%-0.375rem)] z-20"/>

        {/* Dispenser head */}
        <div className="absolute top-[-40px] left-[calc(50%+16.66%-3rem)] w-24 h-10 bg-red-600 border-2 border-red-800 rounded z-30" />
        
        {/* Fill Cap */}
        <div className="absolute top-[-10px] left-[calc(50%-16.66%-1.5rem)] w-12 h-4 bg-yellow-500 border-2 border-yellow-700 rounded-full z-30" />
        
        {/* Leak Point */}
        <div className={`absolute top-[calc(33%-1.5rem)] left-[calc(50%+4%)] w-8 h-8 z-10 transition-opacity duration-300 ${isLeaking ? 'opacity-100' : 'opacity-0'}`}>
          <LeakIcon className="text-rose-500 w-full h-full" />
          {Array.from({ length: 15 }).map((_, i) => (
            <LeakParticle key={i} phase={phase} scenario={scenario} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TankSystem;
