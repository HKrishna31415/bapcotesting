
import React from 'react';
import { SceneProps } from '../../types';
import CheckCircleIcon from '../icons/CheckCircleIcon';

const ConclusionScene: React.FC<SceneProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center text-center p-8 transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className={`transition-transform duration-1000 ease-out ${isActive ? 'scale-100' : 'scale-0'}`}>
        <CheckCircleIcon className="w-24 h-24 text-green-400" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white mt-6">
        Tangible Metric of Improvement
      </h2>
      
      <p className="mt-4 text-slate-300 text-lg max-w-2xl">
        The final report presents a clear percentage reduction in the frequency and intensity of odor detection at the property line.
      </p>

      <div className={`mt-8 bg-green-500/20 border border-green-400 text-green-300 rounded-lg p-6 transition-all duration-700 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-5xl font-bold">
          {'>'}90%
        </div>
        <div className="text-xl mt-1">
          Reduction in Odor Detection
        </div>
      </div>
    </div>
  );
};

export default ConclusionScene;
