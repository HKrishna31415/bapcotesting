
import React, { useState, useCallback } from 'react';
import { Scene, SceneConfig } from './types';
import StepProgressBar from './components/ui/StepProgressBar';
import IntroductionScene from './components/scenes/IntroductionScene';
import ScaleScene from './components/scenes/ScaleScene';
import LocationsScene from './components/scenes/LocationsScene';
import ProcedureScene from './components/scenes/ProcedureScene';
import AnalysisScene from './components/scenes/AnalysisScene';
import ConclusionScene from './components/scenes/ConclusionScene';
import Button from './components/ui/Button';

const scenes: SceneConfig[] = [
  { id: Scene.Introduction, title: 'Introduction', component: IntroductionScene },
  { id: Scene.Scale, title: 'Odor Intensity Scale', component: ScaleScene },
  { id: Scene.Locations, title: 'Monitoring Locations', component: LocationsScene },
  { id: Scene.Procedure, title: 'Field Procedure', component: ProcedureScene },
  { id: Scene.Analysis, title: 'Data Analysis', component: AnalysisScene },
  { id: Scene.Conclusion, title: 'Final Metric', component: ConclusionScene },
];

const OdorTestAnimationApp: React.FC = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSceneIndex((prevIndex) => Math.min(prevIndex + 1, scenes.length - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSceneIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);
  
  const handleRestart = useCallback(() => {
    setCurrentSceneIndex(0);
  }, []);

  const handleStepClick = useCallback((index: number) => {
    setCurrentSceneIndex(index);
  }, []);

  const CurrentSceneComponent = scenes[currentSceneIndex].component;
  const isLastScene = currentSceneIndex === scenes.length - 1;

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <header className="w-full text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Scientific Odor Assessment Protocol
          </h1>
          <p className="text-slate-400 mt-2">{scenes[currentSceneIndex].title}</p>
        </header>

        <main className="w-full h-[60vh] min-h-[500px] md:min-h-[550px] bg-slate-800/50 rounded-2xl shadow-2xl shadow-cyan-500/10 flex items-center justify-center p-4 md:p-8 border border-slate-700 relative overflow-y-auto overflow-x-hidden">
          {scenes.map((scene, index) => {
            const SceneComponent = scene.component;
            return (
              <div
                key={scene.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSceneIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <SceneComponent isActive={index === currentSceneIndex} />
              </div>
            );
          })}
        </main>

        <footer className="w-full mt-6 flex flex-col items-center">
          <StepProgressBar 
            totalSteps={scenes.length} 
            currentStep={currentSceneIndex + 1}
            onStepClick={handleStepClick}
          />
          <div className="flex items-center gap-4 mt-4">
            <Button onClick={handlePrev} disabled={currentSceneIndex === 0}>
              Previous
            </Button>
            {isLastScene ? (
              <Button onClick={handleRestart} variant="primary">
                Restart Animation
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={isLastScene} variant="primary">
                Next
              </Button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OdorTestAnimationApp;