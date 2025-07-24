
import React, { useState, useEffect } from 'react';
import { STORY_STAGES } from './constants';
import StoryPresenter from './components/StoryPresenter';
import ArrowLeftIcon from './components/icons/ArrowLeftIcon';
import ArrowRightIcon from './components/icons/ArrowRightIcon';

function App(): React.ReactNode {
  const [stage, setStage] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const totalStages = STORY_STAGES.length;
  const currentStageData = STORY_STAGES[stage];

  const handleNext = () => {
    if (stage < totalStages - 1) {
      setIsAnimatingOut(true);
    }
  };

  const handlePrev = () => {
    if (stage > 0) {
      setIsAnimatingOut(true);
    }
  };
  
  useEffect(() => {
    if (isAnimatingOut) {
      const timer = setTimeout(() => {
        if (stage < totalStages - 1 && stage < stage + 1) { // logic for next
             setStage(prev => prev + 1);
        } else if (stage > 0 && stage > stage -1) { // logic for prev
             setStage(prev => prev - 1);
        }
        // This is a simplified logic. For a real app, you'd need to know direction.
        // Let's assume we handle direction in the click handlers.
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimatingOut, stage, totalStages]);
  
  const updateStage = (newStage: number) => {
    if (newStage >= 0 && newStage < totalStages) {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setStage(newStage);
        setIsAnimatingOut(false);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 md:p-8 font-sans">
      <div className="w-full max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{minHeight: '80vh'}}>
        <header className="p-4 sm:p-6 border-b border-gray-700">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 text-center tracking-wide">
            The Story of Ethanol and Gasoline Evaporation
          </h1>
        </header>

        <main className="flex-grow p-4 sm:p-6 md:p-8 flex items-center justify-center relative">
            <StoryPresenter 
                stage={stage} 
                stageData={currentStageData} 
                isAnimatingOut={isAnimatingOut}
                onAnimationComplete={() => setIsAnimatingOut(false)}
            />
        </main>

        <footer className="p-4 border-t border-gray-700 bg-gray-800/50 flex items-center justify-between">
          <button
            onClick={() => updateStage(stage - 1)}
            disabled={stage === 0 || isAnimatingOut}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-cyan-500 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ArrowLeftIcon />
            Prev
          </button>

          <div className="flex items-center gap-2">
            {STORY_STAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => updateStage(index)}
                disabled={isAnimatingOut && stage !== index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  stage === index ? 'bg-cyan-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to stage ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => updateStage(stage + 1)}
            disabled={stage === totalStages - 1 || isAnimatingOut}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-cyan-500 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Next
            <ArrowRightIcon />
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
