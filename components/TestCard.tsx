import React from 'react';
import type { TestInfo } from '../types';

interface TestCardProps extends TestInfo {
  onClick: () => void;
}

const RequirementIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2 text-slate-400 dark:text-slate-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const PromiseIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2 text-emerald-500 dark:text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


const TestCard: React.FC<TestCardProps> = ({ id, title, icon, requirements, promises, highlighted, path, onClick }) => {
  return (
    <div className={`
      bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl 
      transition-all duration-300 ease-in-out overflow-hidden flex flex-col relative
      ${highlighted ? 'ring-2 ring-amber-400 dark:ring-amber-300' : ''}
    `}>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
          Key Metric
        </div>
      )}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-4">
          <div className="text-sky-500 dark:text-sky-400">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="mb-6">
          <h4 className="font-semibold text-slate-600 dark:text-slate-300 mb-3">Requirements</h4>
          <ul className="space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start">
                <RequirementIcon />
                <span className="text-slate-600 dark:text-slate-400 text-sm">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-600 dark:text-slate-300 mb-3">Our Promise</h4>
          <ul className="space-y-2">
            {promises.map((promise, index) => (
              <li key={index} className="flex items-start">
                <PromiseIcon />
                <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{promise}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button onClick={onClick} className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          View Procedure
        </button>
      </div>
    </div>
  );
};

export default TestCard;
