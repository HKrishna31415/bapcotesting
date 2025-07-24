
import React from 'react';
import { Scenario, Phase } from '../types';
import * as Constants from '../constants';
import { CheckCircleIcon, XCircleIcon, BeakerIcon, ClockIcon } from './Icons';

interface ControlPanelProps {
  scenario: Scenario;
  setScenario: (scenario: Scenario) => void;
  phase: Phase;
  startTest: () => void;
  resetTest: () => void;
  pressure: number;
  timer: number;
  isTestPassed: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  scenario,
  setScenario,
  phase,
  startTest,
  resetTest,
  pressure,
  timer,
  isTestPassed
}) => {
  const isTesting = phase !== Phase.IDLE && phase !== Phase.RESULT;
  
  const getTimerDisplay = () => {
    if(phase === Phase.STABILIZING) return `Stabilizing: ${timer}s`;
    if(phase === Phase.MONITORING) return `Monitoring: ${timer}s`;
    return `Timer: ${timer}s`;
  }

  return (
    <div className="bg-slate-800/50 rounded-xl p-4 md:p-6 shadow-2xl border border-slate-700 flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-bold text-slate-300 mb-2">1. Select Scenario</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setScenario(Scenario.LEAKING)}
            disabled={isTesting}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 border-2 ${
              scenario === Scenario.LEAKING
                ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                : 'bg-slate-700/50 border-slate-600 text-slate-400 hover:bg-slate-700'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Leaking System
          </button>
          <button
            onClick={() => setScenario(Scenario.SEALED)}
            disabled={isTesting}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 border-2 ${
              scenario === Scenario.SEALED
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : 'bg-slate-700/50 border-slate-600 text-slate-400 hover:bg-slate-700'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Sealed System
          </button>
        </div>
      </div>
      
      <div>
         <h3 className="text-lg font-bold text-slate-300 mb-2">2. Run Test</h3>
        {phase === Phase.IDLE ? (
          <button
            onClick={startTest}
            className="w-full px-4 py-3 bg-cyan-600 text-white rounded-md font-bold hover:bg-cyan-500 transition-colors"
          >
            Start Pressure Test
          </button>
        ) : (
          <button
            onClick={resetTest}
            className="w-full px-4 py-3 bg-slate-600 text-white rounded-md font-bold hover:bg-slate-500 transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-300 mb-2">3. Monitor System</h3>
        <div className="grid grid-cols-2 gap-4 bg-slate-900/70 p-4 rounded-lg">
            <div className="flex items-center gap-2">
                <BeakerIcon className="w-6 h-6 text-cyan-400" />
                <div>
                    <div className="text-xs text-slate-400">Pressure</div>
                    <div className="text-xl font-mono font-bold text-white">{pressure.toFixed(2)}" H₂O</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <ClockIcon className="w-6 h-6 text-cyan-400" />
                <div>
                    <div className="text-xs text-slate-400">Time</div>
                    <div className="text-xl font-mono font-bold text-white">{getTimerDisplay()}</div>
                </div>
            </div>
        </div>
      </div>

      {phase === Phase.RESULT && (
        <div>
          <h3 className="text-lg font-bold text-slate-300 mb-2">4. Result</h3>
          {isTestPassed ? (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/20 border border-emerald-500">
              <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
              <div>
                <p className="font-bold text-emerald-300 text-lg">Test Passed</p>
                <p className="text-sm text-slate-300">Pressure drop is within the allowable limit.</p>
              </div>
            </div>
          ) : (
             <div className="flex items-center gap-3 p-4 rounded-lg bg-rose-500/20 border border-rose-500">
              <XCircleIcon className="w-8 h-8 text-rose-400" />
              <div>
                <p className="font-bold text-rose-300 text-lg">Test Failed</p>
                <p className="text-sm text-slate-300">Pressure drop exceeded the limit. Leak detected.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
