
import React, { useState, useMemo } from 'react';
import { STAGES } from './constants';
import Stepper from './components/Stepper';
import PhaseCard from './components/PhaseCard';
import { Stage } from './types';

const App: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>(STAGES[0].id);

  const activeStage = useMemo<Stage | undefined>(() => 
    STAGES.find(s => s.id === activeStageId),
    [activeStageId]
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            VRU Validation Protocol
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            An animated guide to the staged performance and stress testing procedure.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-8 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Stepper stages={STAGES} activeStageId={activeStageId} onSelectStage={setActiveStageId} />
            </div>
          </aside>

          <main className="lg:col-span-8 xl:col-span-9">
            {activeStage ? (
               <PhaseCard key={activeStage.id} stage={activeStage} />
            ) : (
              <div className="text-center text-slate-500">
                <p>Please select a stage to view its details.</p>
              </div>
            )}
          </main>
        </div>

        <footer className="text-center mt-12 py-4 text-xs text-slate-600">
          <p>This is a visual representation of a technical procedure. For official use, refer to the full documentation.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
