import React from 'react';
import { SceneProps } from '../../types';

const stats = [
  { value: '3', label: 'Panelists' },
  { value: '4', label: 'Scenarios' },
  { value: '7+', label: 'Locations' },
];

const IntroductionScene: React.FC<SceneProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center text-center p-8 transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
        A Clear Metric for Community Impact
      </h2>
      <p className="max-w-2xl text-lg text-slate-300 mb-8">
        A trained panel will scientifically measure odor intensity at key locations, providing objective data to quantify the reduction in community impact.
      </p>

      <div className="flex space-x-8 text-cyan-400">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center transition-all duration-500 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${isActive ? 200 + index * 150 : 0}ms` }}
          >
            <span className="text-4xl font-bold">{stat.value}</span>
            <span className="text-sm text-slate-400">{stat.label}</span>
          </div>
        ))}
      </div>
      
      <div className={`mt-8 w-full max-w-md transition-all duration-500 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${isActive ? 200 + (stats.length * 150) : 0}ms`}}>
        <h3 className="text-xl font-semibold text-cyan-400 mb-2 text-center">Key Testing Scenarios</h3>
        <ul className="text-slate-300 space-y-1 text-left list-disc list-inside bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <li>Baseline Conditions (Before Treatment)</li>
            <li>During Fuel Delivery (UST Filling)</li>
            <li>Peak Customer Hours</li>
            <li>Post-Treatment Conditions (After Changes)</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroductionScene;