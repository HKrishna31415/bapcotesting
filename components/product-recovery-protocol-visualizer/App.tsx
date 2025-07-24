import React, { useState, useMemo } from 'react';
import PhaseCard from './components/PhaseCard';
import { BeakerIcon, CalculatorIcon, ClipboardCheckIcon, ArrowRightIcon, RefreshIcon, CheckCircleIcon } from './components/icons';
import { Phase1Animation, Phase2Animation, Phase3Animation } from './components/animations';

const PHASES_DATA = [
  {
    phaseNumber: 1,
    title: 'Neat Sample Characterization',
    icon: <BeakerIcon className="h-12 w-12 text-sky-300" />,
    animation: <Phase1Animation />,
    description: 'The initial sample of recovered liquid is sent to a certified lab for a full analysis against ASTM standards.',
    details: ['RVP', 'Octane (RON/MON)', 'Distillation Curve', 'Gravity', 'Corrosion']
  },
  {
    phaseNumber: 2,
    title: 'Laboratory Blend Simulation',
    icon: <CalculatorIcon className="h-12 w-12 text-purple-300" />,
    animation: <Phase2Animation />,
    description: 'Using results from Phase 1, the lab mathematically models and tests various blends of source gasoline and recovered liquid.',
    details: ['Confirm blend ratios (e.g., 99:1, 95:5)', 'Ensure final product meets BAPCO specs']
  },
  {
    phaseNumber: 3,
    title: 'In-Situ UST Monitoring',
    icon: <ClipboardCheckIcon className="h-12 w-12 text-teal-300" />,
    animation: <Phase3Animation />,
    description: 'Once lab tests confirm negligible impact, the return line is connected for real-world confirmation.',
    details: ['Connect return line', 'Weekly dispenser sample testing', 'Final RVP & Octane confirmation']
  }
];

const App: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const handleNextPhase = () => {
    setActivePhase(current => Math.min(current + 1, PHASES_DATA.length + 1));
  };

  const handleReset = () => {
    setActivePhase(0);
  };

  const isCompleted = activePhase > PHASES_DATA.length;

  const buttonText = useMemo(() => {
    if (isCompleted) return 'Process Complete';
    if (activePhase === PHASES_DATA.length) return 'Complete Process';
    if (activePhase === 0) return 'Start Protocol';
    return `Advance to Phase ${activePhase + 1}`;
  }, [activePhase, isCompleted]);

  const progressPercentage = activePhase > 0 ? ((activePhase - 1) / PHASES_DATA.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="text-center w-full max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-400 mb-4">
          Product Recovery Protocol
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
          This three-phase protocol ensures the recovered product is a valuable asset through rigorous testing and monitoring.
        </p>
      </div>
      
      <div className="w-full max-w-7xl mx-auto mb-10 px-4">
          <div className="bg-slate-700/50 rounded-full h-3 relative overflow-hidden">
              <div 
                  className="bg-gradient-to-r from-sky-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${isCompleted ? 100 : progressPercentage}%` }}
              ></div>
          </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {PHASES_DATA.map((phase, index) => (
          <PhaseCard
            key={phase.phaseNumber}
            {...phase}
            isActive={activePhase === index + 1}
            isCompleted={activePhase > index + 1}
          />
        ))}
      </div>

      <div className="flex items-center space-x-4 mt-4">
        <button
          onClick={handleNextPhase}
          disabled={isCompleted}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-800 border-2 border-slate-700 rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className={`absolute -inset-2 ${isCompleted ? '' : 'transition-all duration-1000' } bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg blur-lg opacity-0 ${activePhase > 0 && !isCompleted ? 'group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200 animate-tilt' : ''} ${activePhase === 0 ? 'group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200' : ''}`}></span>
          <span className="relative flex items-center gap-2">
            {buttonText}
            {!isCompleted && activePhase !== PHASES_DATA.length && <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
            {activePhase === PHASES_DATA.length && <CheckCircleIcon className="h-6 w-6 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />}
          </span>
        </button>
        {activePhase > 0 && (
          <button
            onClick={handleReset}
            className="p-4 bg-slate-800 border-2 border-slate-700 rounded-lg hover:bg-slate-700 hover:border-slate-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-red-500"
            aria-label="Reset Protocol"
          >
            <RefreshIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
