
import React from 'react';

interface StepProgressBarProps {
  totalSteps: number;
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({ totalSteps, currentStep, onStepClick }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className="flex items-center space-x-2">
            <button
              onClick={() => onStepClick(index)}
              aria-label={`Go to step ${stepNumber}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                isActive ? 'bg-cyan-400 scale-125' : isCompleted ? 'bg-cyan-600 hover:bg-cyan-500' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            ></button>
            {stepNumber < totalSteps && (
              <div
                className={`h-0.5 w-8 md:w-12 transition-colors duration-300 ${
                  isCompleted ? 'bg-cyan-600' : 'bg-slate-600'
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepProgressBar;