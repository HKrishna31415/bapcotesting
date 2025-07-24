
import React, { useState, useEffect, useCallback } from 'react';
import { Scenario, Phase } from './types';
import * as Constants from './constants';
import TankSystem from './components/TankSystem';
import ControlPanel from './components/ControlPanel';
import Explanation from './components/Explanation';
import { GithubIcon } from './components/Icons';

export default function App() {
  const [scenario, setScenario] = useState<Scenario>(Scenario.LEAKING);
  const [phase, setPhase] = useState<Phase>(Phase.IDLE);
  const [pressure, setPressure] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const resetSimulation = useCallback(() => {
    setPhase(Phase.IDLE);
    setPressure(0);
    setTimer(0);
  }, []);

  useEffect(() => {
    // Reset simulation when scenario changes
    resetSimulation();
  }, [scenario, resetSimulation]);

  const startTest = () => {
    if (phase !== Phase.IDLE) return;
    setPhase(Phase.PRESSURIZING);
  };

  useEffect(() => {
    let intervalId: any;
    
    if (phase === Phase.PRESSURIZING) {
      const startTime = Date.now();
      intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / Constants.PRESSURIZATION_DURATION, 1);
        setPressure(progress * Constants.TARGET_PRESSURE);
        if (progress >= 1) {
          clearInterval(intervalId);
          setPressure(Constants.TARGET_PRESSURE);
          setPhase(Phase.STABILIZING);
        }
      }, 50);
    }
    
    if (phase === Phase.STABILIZING) {
      setTimer(Constants.STABILIZATION_TIME);
      intervalId = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(intervalId);
            setPhase(Phase.MONITORING);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    if (phase === Phase.MONITORING) {
      setTimer(Constants.MONITORING_TIME);
      const pressureDropRate = (scenario === Scenario.LEAKING ? Constants.LEAK_PRESSURE_DROP : Constants.SEALED_PRESSURE_DROP) / Constants.MONITORING_TIME;

      intervalId = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(intervalId);
            setPhase(Phase.RESULT);
            return 0;
          }
          setPressure(p => Math.max(0, p - pressureDropRate));
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [phase, scenario]);

  const isTestPassed = scenario === Scenario.SEALED && pressure >= (Constants.TARGET_PRESSURE - Constants.ALLOWABLE_PRESSURE_DROP_SEALED);

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen flex flex-col items-center justify-center p-4 font-sans relative">
      <div className="w-full max-w-7xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">UST Leak Detection Simulator</h1>
          <p className="text-slate-400 text-lg">Visualizing CARB Test Procedure TP-201.1</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800/50 rounded-xl p-4 md:p-6 shadow-2xl border border-slate-700 min-h-[450px] md:min-h-[500px] flex items-center justify-center">
            <TankSystem scenario={scenario} phase={phase} pressure={pressure} />
          </div>

          <div className="flex flex-col gap-6">
            <ControlPanel
              scenario={scenario}
              setScenario={setScenario}
              phase={phase}
              startTest={startTest}
              resetTest={resetSimulation}
              pressure={pressure}
              timer={timer}
              isTestPassed={isTestPassed}
            />
            <Explanation phase={phase} />
          </div>
        </main>
      </div>
      <footer className="absolute bottom-4 right-4 text-slate-500">
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
          <GithubIcon className="w-5 h-5" />
          View on GitHub
        </a>
      </footer>
    </div>
  );
}
