
import React from 'react';
import { Stage } from '../types';
import { ClockIcon, BeakerIcon, ClipboardDocumentCheckIcon, BoltIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div>
        <h3 className="flex items-center text-sm font-semibold text-sky-300">
            {icon}
            <span className="ml-2">{title}</span>
        </h3>
        <div className="mt-2 ml-7 border-l border-slate-600 pl-4">
            {children}
        </div>
    </div>
);

const PhaseCard: React.FC<{ stage: Stage }> = ({ stage }) => {
  const { AnimationComponent } = stage;

  return (
    <div className="bg-slate-800 rounded-xl shadow-2xl shadow-slate-950/50 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-bold uppercase tracking-wider text-sky-400">{stage.phase}</p>
                <h2 className="text-2xl font-bold text-white mt-1">{stage.title}</h2>
            </div>
            <div className="flex items-center text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>{stage.duration}</span>
            </div>
        </div>
      </div>

      <div className="p-6 bg-black/20">
        <AnimationComponent />
      </div>

      <div className="p-6 space-y-6">
        <Section title="Procedure" icon={<ClipboardDocumentCheckIcon className="h-5 w-5" />}>
          <ul className="list-disc list-outside space-y-2 pl-4 text-slate-300">
            {stage.procedure.map((step, i) => <li key={i}>{step}</li>)}
          </ul>
        </Section>
        
        {stage.purpose && (
          <Section title="Purpose" icon={<BeakerIcon className="h-5 w-5" />}>
             <p className="text-slate-300">{stage.purpose}</p>
          </Section>
        )}

        {stage.deliverable && (
          <Section title="Key Deliverable" icon={<DocumentTextIcon className="h-5 w-5" />}>
             <p className="text-slate-300">{stage.deliverable}</p>
          </Section>
        )}
        
        {stage.stressTest && (
          <Section title="Stress Test" icon={<BoltIcon className="h-5 w-5 text-rose-400" />}>
             <p className="text-slate-300">{stage.stressTest}</p>
          </Section>
        )}
        
        {stage.monitoring && (
          <Section title="In-Situ Monitoring" icon={<ClipboardDocumentCheckIcon className="h-5 w-5" />}>
             <p className="text-slate-300">{stage.monitoring}</p>
          </Section>
        )}
      </div>
    </div>
  );
};

export default PhaseCard;
