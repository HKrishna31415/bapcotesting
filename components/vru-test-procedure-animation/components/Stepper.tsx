
import React from 'react';
import { Stage } from '../types';

interface StepperProps {
  stages: Stage[];
  activeStageId: string;
  onSelectStage: (id: string) => void;
}

const Stepper: React.FC<StepperProps> = ({ stages, activeStageId, onSelectStage }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:space-y-6">
        {stages.map((stage, stageIdx) => (
          <li key={stage.id} className="relative">
            {stageIdx !== stages.length - 1 ? (
              <div
                className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-600"
                aria-hidden="true"
              />
            ) : null}
            <button onClick={() => onSelectStage(stage.id)} className="group relative flex w-full items-start text-left">
              <span className="flex h-9 items-center" aria-hidden="true">
                <span
                  className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
                    stage.id === activeStageId
                      ? 'bg-sky-500'
                      : 'border-2 border-slate-500 bg-slate-800 group-hover:bg-slate-700'
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                       stage.id === activeStageId ? 'bg-white' : 'bg-transparent group-hover:bg-slate-400'
                    }`}
                  />
                </span>
              </span>
              <span className="ml-4 flex min-w-0 flex-col">
                <span
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    stage.id === activeStageId ? 'text-sky-400' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {stage.phase}
                </span>
                <span className="text-sm font-medium text-slate-200">{stage.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Stepper;
