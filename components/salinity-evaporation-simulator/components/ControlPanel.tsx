
import React from 'react';
import { AnimationState } from '../types';
import { PlayIcon, MixIcon, ResetIcon, DropletIcon } from './icons';

interface ControlPanelProps {
  initialSalinity: number;
  setInitialSalinity: (value: number) => void;
  animationState: AnimationState;
  onStart: () => void;
  onCondense: () => void;
  onMix: () => void;
  onReset: () => void;
  finalSalinity: number | null;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  initialSalinity,
  setInitialSalinity,
  animationState,
  onStart,
  onCondense,
  onMix,
  onReset,
  finalSalinity
}) => {
  const isIdle = animationState === AnimationState.IDLE;
  const isEvaporating = animationState === AnimationState.EVAPORATING;
  const isCondensing = animationState === AnimationState.CONDENSING;
  const isDone = animationState === AnimationState.DONE;
  const isMixing = animationState === AnimationState.MIXING;
  
  const getButtonClass = (enabled: boolean) =>
    `flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all ${
      enabled ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer' : 'bg-slate-600 cursor-not-allowed'
    }`;

  return (
    <div className="w-full max-w-md bg-slate-800/50 p-6 rounded-xl border border-slate-700 space-y-6">
      <h2 className="text-xl font-bold text-center text-indigo-300">Simulation Controls</h2>
      
      {/* Salinity Slider */}
      <div className="space-y-2">
        <label htmlFor="salinity-slider" className="block text-sm font-medium text-slate-300">
          Initial Salinity: <span className="font-bold text-white">{initialSalinity.toFixed(1)}%</span>
        </label>
        <input
          id="salinity-slider"
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={initialSalinity}
          onChange={(e) => setInitialSalinity(parseFloat(e.target.value))}
          disabled={!isIdle}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed"
        />
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button onClick={onStart} disabled={!isIdle} className={getButtonClass(isIdle)}>
          <PlayIcon />
          Evaporate
        </button>
        <button onClick={onCondense} disabled={!isCondensing} className={getButtonClass(isCondensing)}>
          <DropletIcon />
          Condense
        </button>
        <button onClick={onMix} disabled={!isDone} className={getButtonClass(isDone)}>
          <MixIcon />
          Mix Back
        </button>
        <button onClick={onReset} disabled={isEvaporating || isMixing} className={getButtonClass(!isEvaporating && !isMixing)}>
          <ResetIcon />
          Reset
        </button>
      </div>

       {/* Status message */}
      <div className="h-12 flex items-center justify-center text-center bg-slate-900/50 rounded-md p-2">
        <p className="text-slate-300 text-sm">
          {isIdle && 'Set initial salinity and start evaporation.'}
          {isEvaporating && 'Evaporating pure H₂O, increasing source salinity...'}
          {isCondensing && 'Evaporation complete. Ready to condense water vapor.'}
          {isDone && `Process finished. Mix back to see original salinity: ${finalSalinity?.toFixed(2)}%`}
          {isMixing && 'Mixing condensed water back into the source...'}
        </p>
      </div>
    </div>
  );
};

export default ControlPanel;
