import React from 'react';
import { CheckCircleIcon } from './icons';

interface PhaseCardProps {
  phaseNumber: number;
  title: string;
  icon: React.ReactNode;
  animation: React.ReactNode;
  description: string;
  details: string[];
  isActive: boolean;
  isCompleted: boolean;
}

const PhaseCard: React.FC<PhaseCardProps> = ({
  phaseNumber,
  title,
  icon,
  animation,
  description,
  details,
  isActive,
  isCompleted,
}) => {
  const phaseColorClasses = {
    1: { border: 'border-sky-500', shadow: 'shadow-sky-500/30' },
    2: { border: 'border-purple-500', shadow: 'shadow-purple-500/30' },
    3: { border: 'border-teal-500', shadow: 'shadow-teal-500/30' },
  }[phaseNumber] || { border: 'border-slate-700', shadow: 'shadow-transparent' };

  return (
    <div
      className={`
        relative flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 h-full
        transition-all duration-700 ease-in-out
        ${isActive ? `transform scale-105 shadow-2xl ${phaseColorClasses.shadow}` : 'transform scale-100 shadow-xl'}
        ${isCompleted ? 'opacity-60 scale-95' : 'opacity-100'}
        border-2
        ${isActive ? phaseColorClasses.border : 'border-slate-700'}
      `}
    >
      <div className="absolute top-4 right-4 transition-opacity duration-500">
        {isCompleted && <CheckCircleIcon className="h-8 w-8 text-emerald-400" />}
      </div>
      
      <div className="flex-shrink-0 h-24 w-full flex justify-center items-center mb-2">
        {isActive ? animation : icon}
      </div>

      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Phase {phaseNumber}
        </h3>
        <h2 className="text-2xl font-bold text-slate-100 mb-4">{title}</h2>
        <p className="text-slate-300 mb-6 flex-grow text-left">{description}</p>
        
        <ul className="space-y-3 text-left">
          {details.map((detail, index) => (
            <li 
              key={index}
              className="flex items-start transition-all duration-500 ease-out"
              style={{
                transitionDelay: isActive ? `${300 + index * 100}ms` : '0ms',
                opacity: isActive || isCompleted ? 1 : 0,
                transform: isActive || isCompleted ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              <svg className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-slate-300">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhaseCard;
