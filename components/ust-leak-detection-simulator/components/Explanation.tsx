
import React from 'react';
import { Phase } from '../types';

interface ExplanationProps {
  phase: Phase;
}

const explanations: Record<Phase, { title: string; text: string }> = {
  [Phase.IDLE]: {
    title: 'Ready to Start',
    text: "Select a system scenario (Leaking or Sealed) and press 'Start Pressure Test' to begin the simulation of TP-201.1.",
  },
  [Phase.PRESSURIZING]: {
    title: 'Step 1: Pressurization',
    text: 'The system is being pressurized with an inert gas (Nitrogen) to a target of +2.0" H₂O. This ensures a safe, non-flammable test environment.',
  },
  [Phase.STABILIZING]: {
    title: 'Step 2: Stabilization',
    text: 'A short stabilization period allows the system pressure to normalize after temperature changes caused by pressurization.',
  },
  [Phase.MONITORING]: {
    title: 'Step 3: Monitoring',
    text: 'The system pressure is monitored for 5 minutes. A significant pressure drop indicates a leak in the UST system.',
  },
  [Phase.RESULT]: {
    title: 'Step 4: Result',
    text: 'The test is complete. The total pressure drop is compared against the allowable threshold to determine a pass or fail.',
  },
};

const Explanation: React.FC<ExplanationProps> = ({ phase }) => {
  const { title, text } = explanations[phase];

  return (
    <div className="bg-slate-800/50 rounded-xl p-4 md:p-6 shadow-2xl border border-slate-700">
      <h3 className="text-lg font-bold text-cyan-400 mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default Explanation;
