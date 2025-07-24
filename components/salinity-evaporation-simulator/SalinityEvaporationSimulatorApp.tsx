
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import WaterTank from './components/WaterTank';
import ControlPanel from './components/ControlPanel';
import { AnimationState, VaporParticle } from './types';
import { MAX_VOLUME, EVAPORATION_TARGET_VOLUME, EVAPORATION_STEP_AMOUNT, EVAPORATION_INTERVAL_MS, TRANSITION_DURATION_MS } from './constants';

const App: React.FC = () => {
  const [animationState, setAnimationState] = useState<AnimationState>(AnimationState.IDLE);
  const [initialSalinity, setInitialSalinity] = useState<number>(3.5);
  const [sourceVolume, setSourceVolume] = useState<number>(MAX_VOLUME);
  const [condensedVolume, setCondensedVolume] = useState<number>(0);
  const [totalSaltMass, setTotalSaltMass] = useState<number>(0);
  const [vaporParticles, setVaporParticles] = useState<VaporParticle[]>([]);
  
  const sourceSalinity = useMemo(() => {
    if (sourceVolume <= 0) return 0;
    return (totalSaltMass / sourceVolume) * 100;
  }, [sourceVolume, totalSaltMass]);

  const finalSalinityOnMix = useMemo(() => {
      const totalVolume = sourceVolume + condensedVolume;
      if (totalVolume <= 0) return 0;
      return (totalSaltMass / totalVolume) * 100;
  }, [sourceVolume, condensedVolume, totalSaltMass]);


  useEffect(() => {
    if (animationState === AnimationState.EVAPORATING) {
      const interval = setInterval(() => {
        setSourceVolume(prevVolume => {
          const newVolume = prevVolume - EVAPORATION_STEP_AMOUNT;
          if (newVolume <= EVAPORATION_TARGET_VOLUME) {
            clearInterval(interval);
            setAnimationState(AnimationState.CONDENSING);
            setVaporParticles([]);
            return EVAPORATION_TARGET_VOLUME;
          }
          
          setVaporParticles(prevParticles => [
            ...prevParticles,
            { id: Date.now() + Math.random(), left: `${10 + Math.random() * 80}%` }
          ]);

          return newVolume;
        });
      }, EVAPORATION_INTERVAL_MS);

      // Cleanup particles that have faded
      const particleCleanupInterval = setInterval(() => {
        setVaporParticles(currentParticles => currentParticles.slice(-50)); // Keep last 50 particles
      }, 4000);

      return () => {
        clearInterval(interval);
        clearInterval(particleCleanupInterval);
      };
    }
  }, [animationState]);

  const handleStart = useCallback(() => {
    if (animationState === AnimationState.IDLE) {
      setTotalSaltMass(sourceVolume * (initialSalinity / 100));
      setAnimationState(AnimationState.EVAPORATING);
    }
  }, [animationState, sourceVolume, initialSalinity]);

  const handleCondense = useCallback(() => {
    if (animationState === AnimationState.CONDENSING) {
        const evaporatedAmount = MAX_VOLUME - sourceVolume;
        setCondensedVolume(evaporatedAmount);
        setTimeout(() => {
            setAnimationState(AnimationState.DONE);
        }, TRANSITION_DURATION_MS);
    }
  }, [animationState, sourceVolume]);


  const handleMix = useCallback(() => {
    if (animationState === AnimationState.DONE) {
        setAnimationState(AnimationState.MIXING);
        setSourceVolume(MAX_VOLUME);
        setCondensedVolume(0);
        setTimeout(() => {
            handleReset();
        }, TRANSITION_DURATION_MS);
    }
  }, [animationState]);

  const handleReset = useCallback(() => {
    setAnimationState(AnimationState.IDLE);
    setSourceVolume(MAX_VOLUME);
    setCondensedVolume(0);
    setTotalSaltMass(0);
    setVaporParticles([]);
    // Keep initialSalinity as is for user's convenience
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Salinity & Evaporation
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-slate-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          An interactive simulation showing how pure water evaporates, leaving salt behind and increasing salinity.
        </p>
      </header>
      
      <main className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="relative flex items-end justify-center gap-8 md:gap-12">
            {/* Vapor Particles */}
            {animationState === AnimationState.EVAPORATING && (
                <div className="absolute top-[-210px] left-[-30px] w-48 h-48">
                    {vaporParticles.map(p => (
                        <div
                        key={p.id}
                        className="absolute bottom-0 w-1.5 h-1.5 bg-slate-300/70 rounded-full vapor-particle-animate"
                        style={{ left: p.left }}
                        />
                    ))}
                </div>
            )}
          <WaterTank 
            label="Source Water" 
            volume={sourceVolume} 
            salinity={sourceSalinity} 
            isAnimating={animationState === AnimationState.MIXING}
          />
          <WaterTank 
            label="Condensed Water" 
            volume={condensedVolume} 
            salinity={0}
            isAnimating={animationState === AnimationState.CONDENSING || animationState === AnimationState.MIXING}
          />
        </div>

        <ControlPanel 
          initialSalinity={initialSalinity}
          setInitialSalinity={setInitialSalinity}
          animationState={animationState}
          onStart={handleStart}
          onCondense={handleCondense}
          onMix={handleMix}
          onReset={handleReset}
          finalSalinity={finalSalinityOnMix}
        />
      </main>
    </div>
  );
};

export default App;
