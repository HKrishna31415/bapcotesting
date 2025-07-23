
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CableFault } from '../types';
import { PlayIcon, PauseIcon } from './Icons';

interface LedPanelProps {
  title: string;
  activeLeds: number[];
  groundActive: boolean;
}

const LedPanel: React.FC<LedPanelProps> = ({ title, activeLeds, groundActive }) => {
  const leds = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="bg-slate-700 p-4 rounded-lg w-full">
      <h3 className="text-lg font-semibold text-white text-center mb-4">{title}</h3>
      <div className="grid grid-cols-4 gap-3">
        {leds.map((pin) => (
          <div key={pin} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full border-2 border-slate-500 flex items-center justify-center transition-all duration-100 ${activeLeds.includes(pin) ? 'bg-green-400 shadow-[0_0_10px_2px_#34d399]' : 'bg-slate-800'}`}>
            </div>
            <span className="text-xs text-slate-400 mt-1">{pin}</span>
          </div>
        ))}
        <div className="flex flex-col items-center col-start-4">
           <div className={`w-8 h-8 rounded-full border-2 border-slate-500 flex items-center justify-center transition-all duration-100 ${groundActive ? 'bg-green-400 shadow-[0_0_10px_2px_#34d399]' : 'bg-slate-800'}`}>
            </div>
            <span className="text-xs text-slate-400 mt-1">G</span>
        </div>
      </div>
    </div>
  );
};

const faultDescriptions: Record<CableFault, { title: string; description: string }> = {
  [CableFault.Perfect]: {
    title: 'Perfect Cable',
    description: 'Each light on the main tester corresponds to the same numbered light on the remote. All wires are connected correctly.',
  },
  [CableFault.Open]: {
    title: 'Open Circuit (Wire #3)',
    description: 'Wire #3 is broken. The #3 light is skipped and never turns on for either tester.',
  },
  [CableFault.Short]: {
    title: 'Short Circuit (Wires #2 & #3)',
    description: 'Wires #2 and #3 are touching. Both lights turn on simultaneously on the main tester when the signal is sent to either wire.',
  },
  [CableFault.Crossed]: {
    title: 'Crossed Pair (Wires #2 & #3)',
    description: 'The sequence is normal on the main tester, but out of order on the remote. Here, wires 2 and 3 are swapped.',
  },
  [CableFault.Crossover]: {
    title: 'Crossover Cable',
    description: 'A special cable for direct connections. The tester shows a specific, non-sequential pattern (e.g., 1->3, 2->6).',
  },
};


export const LedTester = () => {
  const [faultType, setFaultType] = useState<CableFault>(CableFault.Perfect);
  const [activePin, setActivePin] = useState(1);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setActivePin((prev) => (prev >= 9 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, [isRunning]);

  const { mainLeds, remoteLeds, mainGround, remoteGround } = useMemo(() => {
    if (activePin === null) return { mainLeds: [], remoteLeds: [], mainGround: false, remoteGround: false };
    
    let mainLeds: number[] = [];
    let remoteLeds: number[] = [];
    let mainGround = false;
    let remoteGround = false;

    const currentSignalPin = activePin > 8 ? 'G' : activePin;
    
    if (currentSignalPin === 'G') {
        mainGround = true;
        remoteGround = faultType !== CableFault.Open; // Assuming ground can also be open
    } else {
        const pin = currentSignalPin;
        switch (faultType) {
            case CableFault.Perfect:
                mainLeds = [pin];
                remoteLeds = [pin];
                break;
            case CableFault.Open:
                mainLeds = [pin];
                remoteLeds = pin === 3 ? [] : [pin];
                break;
            case CableFault.Short:
                if (pin === 2 || pin === 3) {
                    mainLeds = [2, 3];
                } else {
                    mainLeds = [pin];
                }
                remoteLeds = []; // Typically shorts don't show on remote
                break;
            case CableFault.Crossed:
                mainLeds = [pin];
                if (pin === 2) remoteLeds = [3];
                else if (pin === 3) remoteLeds = [2];
                else remoteLeds = [pin];
                break;
            case CableFault.Crossover:
                 mainLeds = [pin];
                 const mapping: {[key: number]: number} = { 1: 3, 2: 6, 3: 1, 4: 4, 5: 5, 6: 2, 7: 7, 8: 8 };
                 remoteLeds = [mapping[pin]];
                break;
        }
    }

    return { mainLeds, remoteLeds, mainGround, remoteGround };
  }, [activePin, faultType]);

  const selectedFault = faultDescriptions[faultType];

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-800 p-6 rounded-xl shadow-lg">
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {(Object.keys(CableFault) as Array<keyof typeof CableFault>).map((key) => (
          <button
            key={key}
            onClick={() => setFaultType(CableFault[key])}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              faultType === CableFault[key]
                ? 'bg-sky-500 text-white shadow'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            }`}
          >
            {faultDescriptions[CableFault[key]].title}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col items-center gap-4">
          <LedPanel title="Main Tester" activeLeds={mainLeds} groundActive={mainGround} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <LedPanel title="Remote" activeLeds={remoteLeds} groundActive={remoteGround} />
        </div>
      </div>
      
      <div className="mt-6 text-center">
         <button onClick={() => setIsRunning(!isRunning)} className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-full flex items-center mx-auto gap-2">
            {isRunning ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
            <span>{isRunning ? 'Pause' : 'Start'} Animation</span>
        </button>
        <div className="mt-4 bg-slate-900/50 p-4 rounded-lg">
            <h4 className="font-semibold text-sky-400">{selectedFault.title}</h4>
            <p className="text-slate-300 text-sm mt-1">{selectedFault.description}</p>
        </div>
      </div>
    </div>
  );
};
