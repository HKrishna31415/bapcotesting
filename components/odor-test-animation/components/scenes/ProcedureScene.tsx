import React, { useState, useEffect } from 'react';
import { SceneProps } from '../../types';
import WindIcon from '../icons/WindIcon';
import UserRoundIcon from '../icons/UserRoundIcon';
import LocateFixedIcon from '../icons/LocateFixedIcon';
import TimerIcon from '../icons/TimerIcon';
import WavesIcon from '../icons/WavesIcon';
import MilestoneIcon from '../icons/MilestoneIcon';


const procedureSteps = [
  "Panelists arrive at an upwind location to ensure neutral senses.",
  "They approach the first assessment point.",
  "Stand for 2 minutes to acclimate.",
  "For 10 minutes, breathe normally and record peak odor intensity.",
  "Wind speed and direction are recorded simultaneously.",
  "Panelists proceed to the next point after a break.",
];

const ProcedureScene: React.FC<SceneProps> = ({ isActive }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    if (isActive) {
      setStep(0); // Reset on activation
      const timer = setTimeout(() => setStep(1), 500); // Initial delay
      timers.push(timer);
      for (let i = 0; i < procedureSteps.length; i++) {
        const stepTimer = setTimeout(() => setStep(i + 1), 500 + (i + 1) * 2500);
        timers.push(stepTimer);
      }
    } else {
      setStep(0);
    }
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  const getIconForStep = (currentStep: number) => {
    const iconClass = "w-20 h-20 text-cyan-400";
    const secondaryIconClass = "w-16 h-16 text-slate-300";

    switch(currentStep) {
      case 1: return (
        <div className="flex items-center justify-center gap-4">
          <WindIcon className={iconClass} />
          <UserRoundIcon className={secondaryIconClass} />
        </div>
      );
      case 2: return <LocateFixedIcon className={`${iconClass} animate-pulse`} />;
      case 3: return <TimerIcon className={iconClass} />;
      case 4: return <WavesIcon className={`${iconClass} animate-pulse`} />;
      case 5: return <WindIcon className={iconClass} />;
      case 6: return <MilestoneIcon className={iconClass} />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
      <div className="w-full max-w-lg h-56 bg-slate-900/50 rounded-lg flex items-center justify-center border border-slate-700 mb-6">
        <div className="relative w-48 h-48">
          {procedureSteps.map((_, index) => (
            <div key={index} className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${step === index + 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
              {getIconForStep(index + 1)}
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-lg h-24">
        {procedureSteps.map((text, index) => (
          <p key={index} className={`absolute inset-0 text-xl text-slate-200 font-medium transition-opacity duration-500 flex items-center justify-center ${step === index + 1 ? 'opacity-100' : 'opacity-0'}`}>
            {text}
          </p>
        ))}
        {step === 0 && (
           <p className="text-xl text-slate-400 font-medium flex items-center justify-center h-full">Starting procedure...</p>
        )}
      </div>
    </div>
  );
};

export default ProcedureScene;