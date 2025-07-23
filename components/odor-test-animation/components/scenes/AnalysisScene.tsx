
import React, { useState, useEffect } from 'react';
import { SceneProps } from '../../types';
import LineChart from '../ui/LineChart';

const OdorMap: React.FC<{ intensity: 'high' | 'low', title: string, isVisible: boolean }> = ({ intensity, title, isVisible }) => (
    <div className="w-full p-4 bg-slate-900/30 rounded-lg flex flex-col items-center justify-center">
        <h4 className="text-center font-bold text-white mb-2">{title}</h4>
        <div className="relative w-32 h-32 border border-dashed border-slate-600 flex items-center justify-center">
            <div className="w-8 h-8 bg-slate-700 text-xs flex items-center justify-center text-white rounded-sm">Site</div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 ease-out ${
                intensity === 'high' ? 'bg-red-500/50 w-28 h-28' : 'bg-green-500/50 w-12 h-12'
            }`}
            style={{ transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`, opacity: isVisible ? 1 : 0}}
            ></div>
        </div>
    </div>
);


const AnalysisScene: React.FC<SceneProps> = ({ isActive }) => {
  const chartData = {
    labels: ['P1', 'P2', 'P3', 'P4', 'P5'],
    datasets: [
      {
        label: 'Before Treatment',
        data: [4.0, 3.8, 3.0, 2.0, 4.5], // Values based on 0-5 scale
        color: '#ef4444', // Red
      },
      {
        label: 'After Treatment',
        data: [1.0, 0.8, 0.5, 0.2, 1.2], // Values based on 0-5 scale
        color: '#22c55e', // Green
      }
    ]
  };

  const [showAfterMap, setShowAfterMap] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      // Delay showing the "After" map to sync with the line chart animation
      timer = setTimeout(() => {
        setShowAfterMap(true);
      }, 1000);
    } else {
      setShowAfterMap(false);
    }
    return () => clearTimeout(timer);
  }, [isActive]);


  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-4 text-center px-2">Comparing "Before" and "After" States</h3>
      <div className="w-full h-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Combined Line Chart */}
        <div className="bg-slate-900/30 rounded-lg p-4 flex items-center justify-center">
           <LineChart 
              data={chartData}
              yMax={5} // Set max Y for Odor Scale 0-5
              isActive={isActive} 
            />
        </div>
        {/* Odor Maps */}
        <div className="flex flex-col justify-around gap-4 md:gap-0">
          <OdorMap title="Odor Footprint (Before)" intensity="high" isVisible={isActive} />
          <OdorMap title="Odor Footprint (After)" intensity="low" isVisible={showAfterMap} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisScene;