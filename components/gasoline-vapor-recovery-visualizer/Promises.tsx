
import React, { useState, useEffect } from 'react';
import Tank from './components/Tank';
import GasPump from './components/GasPump';
import FlowPipe from './components/FlowPipe';
import InfoCard from './components/InfoCard';
import StageIPipe from './components/StageIPipe';
import ToggleSwitch from './components/ToggleSwitch';

const App: React.FC = () => {
  const [mainTankLevel, setMainTankLevel] = useState(100);
  const [recoveryTankLevel, setRecoveryTankLevel] = useState(0);
  const [isStageIActive, setIsStageIActive] = useState(true);

  useEffect(() => {
    let mainTankEmptiedInTick = false;
    const recoveryRate = isStageIActive ? 0.02 : 0.05; // Slower recovery with Stage I losses

    const animationInterval = setInterval(() => {
      mainTankEmptiedInTick = false;
      
      setMainTankLevel(prevLevel => {
        if (prevLevel <= 0.1) {
          mainTankEmptiedInTick = true;
          return 100;
        }
        return prevLevel - 0.1;
      });

      setRecoveryTankLevel(prevLevel => {
        if (mainTankEmptiedInTick) {
            return 0;
        }
        if (prevLevel >= 100) {
            return 100;
        }
        return prevLevel + recoveryRate; 
      });

    }, 50);

    return () => clearInterval(animationInterval);
  }, [isStageIActive]);

  return (
    <div className="relative w-full h-screen font-sans overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-6 w-11/12 max-w-md z-10 flex flex-col items-center gap-4">
        <InfoCard isStageIActive={isStageIActive} />
        <ToggleSwitch 
            label="Enable Stage I Vapor Loss"
            enabled={isStageIActive}
            onChange={setIsStageIActive}
        />
      </div>
      
      <div className="flex items-end justify-center w-full max-w-4xl px-4">
        <div className="relative">
          {isStageIActive && <StageIPipe />}
          <Tank label="Main Fuel Storage" level={mainTankLevel} liquidColorClass="bg-amber-400" />
        </div>
        
        <div className="flex flex-col items-center mx-1">
          <div className="w-full h-[7.5rem]"></div>
          <FlowPipe color="amber" />
        </div>

        <GasPump />

        <div className="flex flex-col items-center mx-1">
          <div className="w-full h-[7.5rem]"></div>
          <FlowPipe color="sky" />
        </div>

        <Tank label="Vapor Recovery Tank" level={recoveryTankLevel} liquidColorClass="bg-sky-400" />
      </div>

      <div className="absolute bottom-4 text-center text-slate-500 text-sm">
          <p>Animation depicts gasoline flow and vapor recovery.</p>
          <p>Levels and flow rates are for visualization purposes.</p>
      </div>
    </div>
  );
};

export default App;
