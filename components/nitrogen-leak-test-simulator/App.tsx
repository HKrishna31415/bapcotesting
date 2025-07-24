import React, { useState, useMemo } from 'react';
import { AnimationStage } from './types';
import NitrogenLeakAnimation from './components/NitrogenLeakAnimation';

const App: React.FC = () => {
  const [stage, setStage] = useState<AnimationStage>(AnimationStage.Initial);

  const handleNext = () => {
    setStage(prev => {
      if (prev === AnimationStage.Initial) return AnimationStage.TestingLeaky;
      if (prev === AnimationStage.TestingLeaky) return AnimationStage.TestingSealed;
      if (prev === AnimationStage.TestingSealed) return AnimationStage.PerfectlySealed;
      return AnimationStage.Initial; // Reset
    });
  };

  const { title, description, buttonText, buttonIcon } = useMemo(() => {
    switch (stage) {
      case AnimationStage.TestingLeaky:
        return {
          title: 'Step 1: Testing for Leaks',
          description:
            'The system is pressurized with inert nitrogen gas. The rising pressure gauge indicates a leak, as gas is observed escaping from a faulty joint in the pipe.',
          buttonText: 'Apply Seal & Retest',
          buttonIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          ),
        };
      case AnimationStage.TestingSealed:
        return {
          title: 'Step 2: Verifying the Seal',
          description:
            'The faulty joint is sealed, and the system is re-pressurized. The pressure gauge holds steady, confirming the repair was successful. The system is now leak-free.',
          buttonText: 'Show Ideal System',
          buttonIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
               <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          ),
        };
      case AnimationStage.PerfectlySealed:
        return {
          title: 'Ideal System State',
          description:
            'This demonstrates a system with no inherent leaks. When pressurized, the nitrogen gas is fully contained, and the pressure gauge remains stable at the optimal level, indicating a perfectly sealed environment.',
          buttonText: 'Reset Simulation',
          buttonIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm10 10a1 1 0 01-1-1V11.899a7.002 7.002 0 01-11.601-2.566 1 1 0 011.885-.666A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 01-1 1z" clipRule="evenodd" />
            </svg>
          ),
        };
      case AnimationStage.Initial:
      default:
        return {
          title: 'Nitrogen Leak Detection',
          description:
            'This simulation shows how nitrogen gas is used to find leaks in sealed systems. Press "Start Test" to begin the process.',
          buttonText: 'Start Test',
          buttonIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          ),
        };
    }
  }, [stage]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white font-sans">
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 mb-2">
          {title}
        </h1>
        <p className="text-center text-gray-300 mb-6 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="w-full aspect-video bg-black rounded-lg mb-6 overflow-hidden border-2 border-gray-700">
          <NitrogenLeakAnimation stage={stage} />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="flex items-center justify-center px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50"
          >
            {buttonIcon}
            {buttonText}
          </button>
        </div>
      </div>
       <footer className="text-center text-gray-500 mt-6 text-sm">
        <p>A Visual Demonstration of Industrial Leak Testing Procedures.</p>
      </footer>
    </div>
  );
};

export default App;