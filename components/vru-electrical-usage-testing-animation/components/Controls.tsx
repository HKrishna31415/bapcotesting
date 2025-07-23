
import React from 'react';
import { AnimationStep } from '../types';

interface ControlsProps {
  step: AnimationStep;
  onNext: () => void;
  onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({ step, onNext, onReset }) => {
  const isInitial = step === AnimationStep.Initial;
  const isFinished = step === AnimationStep.Analysis;

  const buttonClass = "w-full text-lg font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";
  const primaryButtonClass = "bg-cyan-500 hover:bg-cyan-400 text-white focus:ring-cyan-300 shadow-lg hover:shadow-cyan-500/50";
  const secondaryButtonClass = "bg-slate-600 hover:bg-slate-500 text-slate-100 focus:ring-slate-400";
  
  return (
    <div className="mt-6 flex flex-col gap-4">
      {isFinished ? (
        <button onClick={onReset} className={`${buttonClass} ${primaryButtonClass}`}>
          Reset Simulation
        </button>
      ) : (
        <button onClick={onNext} className={`${buttonClass} ${primaryButtonClass}`} disabled={isFinished}>
          {isInitial ? 'Start Simulation' : 'Next Step'}
        </button>
      )}
      {!isInitial && !isFinished && (
        <button onClick={onReset} className={`${buttonClass} ${secondaryButtonClass}`}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Controls;
