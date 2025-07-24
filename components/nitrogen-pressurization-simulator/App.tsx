import React, { useState, useCallback } from 'react';
import { Controls } from './components/Controls';
import { Tank } from './components/Tank';
import { useParticleAnimation } from './hooks/useParticleAnimation';

// Defined outside the App component to prevent re-creation on re-renders.
const MainSimulation: React.FC = () => {
  const [isLeaking, setIsLeaking] = useState(false);
  const { particles, pressure, tankDimensions } = useParticleAnimation(isLeaking);
  
  const handleResetSim = useCallback(() => {
      setIsLeaking(false); // This will trigger the reset logic inside the hook
  }, []);

  return (
      <div className="flex flex-col items-center justify-center gap-8 w-full px-4">
          <Tank particles={particles} isLeaking={isLeaking} pressure={pressure} dimensions={tankDimensions} />
          <Controls isLeaking={isLeaking} setIsLeaking={setIsLeaking} onReset={handleResetSim} />
      </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 flex flex-col items-center justify-center p-4 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
          Nitrogen Pressurization Simulator
        </h1>
        <p className="mt-2 text-lg text-gray-400 max-w-2xl mx-auto">
          Observe how nitrogen particles behave in a pressurized tank. Toggle the switch to simulate a leak and see the particles escape.
        </p>
      </header>
      
      <main className="w-full flex justify-center">
        <MainSimulation />
      </main>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Built with React, TypeScript, and Tailwind CSS.</p>
        <p>A demonstration of particle physics animation.</p>
      </footer>
    </div>
  );
};

export default App;