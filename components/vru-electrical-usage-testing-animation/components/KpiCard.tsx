
import React from 'react';

interface KpiCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  unit: string;
  color: 'green' | 'yellow' | 'blue';
}

const KpiCard: React.FC<KpiCardProps> = ({ icon, title, value, unit, color }) => {
  const colorClasses = {
    green: 'border-green-500/50 text-green-400',
    yellow: 'border-yellow-500/50 text-yellow-400',
    blue: 'border-blue-500/50 text-blue-400',
  };

  return (
    <div className={`bg-slate-800 p-6 rounded-xl border-t-4 ${colorClasses[color]} flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:bg-slate-700/50`}>
      <div className={`mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-slate-900 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-slate-200 mb-2">{title}</h4>
      <p className={`text-4xl font-bold ${colorClasses[color]}`}>{value}</p>
      <p className="text-sm text-slate-400 mt-1">{unit}</p>
    </div>
  );
};

export default KpiCard;
