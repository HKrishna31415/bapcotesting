
import React from 'react';

interface InfoCardProps {
  isStageIActive: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ isStageIActive }) => {
  const rate = isStageIActive ? "0.1%" : "0.5%";
  const explanation = isStageIActive
    ? "Rate is lower due to vapor displacement during Stage I tanker refueling."
    : "Maximum efficiency with no Stage I vapor loss.";
  const title = isStageIActive ? "Recovery w/ Stage I Loss" : "Ideal Recovery Rate";
  const theme = isStageIActive 
    ? {
        bg: 'bg-orange-500/20',
        text: 'text-orange-300',
        highlight: 'text-orange-400',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
             </svg>
        )
      }
    : {
        bg: 'bg-green-500/20',
        text: 'text-green-300',
        highlight: 'text-green-400',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
      };

  return (
    <div className="bg-slate-800/70 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg border border-slate-700 w-full z-10">
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 ${theme.bg} ${theme.text} p-3 rounded-full`}>
          {theme.icon}
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-100">{title}</h3>
          <p className="text-slate-300 text-sm">
            Recapturing <span className={`font-semibold ${theme.highlight}`}>{rate}</span> of throughput.
          </p>
           <p className="text-slate-400 text-xs mt-1">
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
