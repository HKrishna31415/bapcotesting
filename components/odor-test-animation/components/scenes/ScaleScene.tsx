import React from 'react';
import { SceneProps, OdorScaleLevel } from '../../types';
import Card from '../ui/Card';

const scaleData: OdorScaleLevel[] = [
  { level: 0, name: 'No Odor', description: 'No odor perceptible.', hedonicToneRange: "N/A" },
  { level: 1, name: 'Very Faint', description: 'Odor is detectable, but not clearly recognizable.', hedonicToneRange: "-1 to 0" },
  { level: 2, name: 'Faint', description: 'Odor is weak but its character is recognizable.', hedonicToneRange: "-2 to -1" },
  { level: 3, name: 'Distinct', description: 'Odor is clearly detectable and distinct.', hedonicToneRange: "-3 to -2" },
  { level: 4, name: 'Strong', description: 'Odor is strong and persistent.', hedonicToneRange: "-4 to -3" },
  { level: 5, name: 'Very Strong', description: 'Odor is overpowering and may cause nuisance.', hedonicToneRange: "-4" },
];

const ScaleScene: React.FC<SceneProps> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {scaleData.map((item, index) => (
          <div
            key={item.level}
            className={`transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${isActive ? index * 100 : 0}ms` }}
          >
            <Card className="h-full flex flex-col text-center hover:border-cyan-500 hover:scale-105 transition-all duration-300">
              <div className="mx-auto w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-2xl font-bold">
                {item.level}
              </div>
              <h3 className="font-bold text-white text-md">{item.name}</h3>
              <p className="text-slate-400 text-sm flex-grow">{item.description}</p>
              <div className="mt-2 pt-2 border-t border-slate-700">
                <p className="text-xs text-slate-500">Hedonic Tone: <span className="font-mono text-cyan-300">{item.hedonicToneRange}</span></p>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div 
        className={`mt-4 text-center max-w-lg transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`} 
        style={{ transitionDelay: `${isActive ? (scaleData.length * 100) + 100 : 0}ms` }}
      >
        <p className="text-slate-300 text-sm p-3 bg-slate-800/60 rounded-lg border border-slate-700">
          <strong className="font-semibold text-cyan-400">Hedonic Tone:</strong> A measure of pleasantness from -4 (very unpleasant) to +4 (very pleasant). For gasoline, all ratings are negative.
        </p>
      </div>
    </div>
  );
};

export default ScaleScene;