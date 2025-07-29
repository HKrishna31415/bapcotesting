
import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-300">
      <div className="flex items-center space-x-4 mb-3">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-lg font-bold text-slate-100">{title}</h3>
      </div>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};
