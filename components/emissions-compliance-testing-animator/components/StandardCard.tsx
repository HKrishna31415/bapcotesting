
import React from 'react';
import type { Standard } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

interface StandardCardProps {
  standard: Standard;
}

const StandardCard: React.FC<StandardCardProps> = ({ standard }) => {
  return (
    <div className={`bg-gray-800/50 rounded-xl shadow-lg border-t-4 ${standard.colorClass} h-full flex flex-col`}>
      <div className="p-6">
        <h2 className={`text-2xl font-bold ${standard.colorClass === 'border-amber-400' ? 'text-amber-400' : 'text-slate-300'}`}>{standard.title}</h2>
        <p className="text-lg font-semibold text-gray-300 mt-1">{standard.subtitle}</p>
        
        <div className="w-full h-48 my-6 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
            {standard.animationComponent}
        </div>

        <div className="space-y-4 text-gray-400 text-sm">
          <div>
            <h4 className="font-semibold text-gray-200 mb-1">Methodology</h4>
            <p>{standard.methodology}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 mb-1">Calculation</h4>
            <p>{standard.calculation}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-auto bg-gray-800 p-6 rounded-b-xl">
        <h4 className="font-semibold text-gray-200 mb-3">Pros & Cons</h4>
        <ul className="space-y-2">
          {standard.pros.map(pro => (
            <li key={pro} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0 mr-2 mt-px" />
              <span className="text-gray-300 text-sm">{pro}</span>
            </li>
          ))}
          {standard.cons.map(con => (
            <li key={con} className="flex items-start">
              <XIcon className="h-5 w-5 text-red-400 flex-shrink-0 mr-2 mt-px" />
              <span className="text-gray-300 text-sm">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StandardCard;
