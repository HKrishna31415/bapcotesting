
import React from 'react';
import { EquipmentCategory } from '../types';

interface EquipmentCardProps {
  data: EquipmentCategory;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ data }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-cyan-500/10">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 bg-slate-700/50 p-3 rounded-lg">
          {data.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">{data.category}</h3>
          <p className="text-sm text-slate-400 mt-1">{data.purpose}</p>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-slate-700/50">
        <h4 className="font-semibold text-slate-300 mb-3 text-sm">Key Components & Role</h4>
        <ul className="space-y-3">
          {data.items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-medium text-slate-200">{item.name}</p>
                <p className="text-xs text-slate-400">{item.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EquipmentCard;
