
import React from 'react';
import { MonitoringMethod } from '../types';

interface DescriptionPanelProps {
  method: MonitoringMethod;
}

const DescriptionPanel: React.FC<DescriptionPanelProps> = ({ method }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-slate-700 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-sky-400 mb-2">{method.name}</h2>
      <p className="text-sm text-slate-400 mb-4 italic">{method.principle}</p>
      
      <div className="flex-1 space-y-4 overflow-y-auto">
        <div>
          <h4 className="font-bold text-slate-100 mb-1">How it Works</h4>
          <p className="text-slate-300 font-light text-sm leading-relaxed">
            {method.longDescription}
          </p>
        </div>

        <div>
            <h4 className="font-bold text-slate-100 mb-1">Key Concept</h4>
             <p className="text-slate-300 font-light text-sm leading-relaxed">
            {method.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPanel;
