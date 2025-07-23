
import React, { useState, useEffect } from 'react';
import { SceneProps } from '../../types';
import MapPinIcon from '../icons/MapPinIcon';

interface Location {
  name: string;
  position: { top: string; left: string };
}

const locations: Location[] = [
  { name: "Perimeter (North)", position: { top: '5%', left: '50%' } },
  { name: "Perimeter (West)", position: { top: '50%', left: '5%' } },
  { name: "Perimeter (East)", position: { top: '50%', left: '95%' } },
  { name: "Perimeter (South)", position: { top: '95%', left: '50%' } },
  { name: "Dispenser Island", position: { top: '50%', left: '40%' } },
  { name: "UST Fill Ports", position: { top: '30%', left: '75%' } },
  { name: "Nearby Restaurant", position: { top: '15%', left: '5%' } },
];

const LocationMarker: React.FC<{ location: Location; isVisible: boolean }> = ({ location, isVisible }) => (
  <div
    className="absolute -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 ease-out"
    style={{ 
        top: location.position.top, 
        left: location.position.left,
        opacity: isVisible ? 1 : 0,
        transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.5})`,
    }}
  >
    <MapPinIcon className="w-8 h-8 text-red-500" />
    <div className="absolute bottom-full mb-2 w-max -translate-x-1/2 left-1/2 bg-slate-900 text-white text-xs rounded py-1 px-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
      {location.name}
    </div>
  </div>
);


const LocationsScene: React.FC<SceneProps> = ({ isActive }) => {
  const [visibleLocations, setVisibleLocations] = useState<boolean[]>(Array(locations.length).fill(false));

  useEffect(() => {
    if (isActive) {
      const timers = locations.map((_, index) =>
        setTimeout(() => {
          setVisibleLocations(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }, index * 200)
      );
      return () => timers.forEach(clearTimeout);
    } else {
      setVisibleLocations(Array(locations.length).fill(false));
    }
  }, [isActive]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
        <h3 className="text-xl font-bold text-slate-100 mb-4 absolute top-5">Fixed Assessment Points</h3>
        <div className="relative w-[90%] h-[75%] max-w-2xl max-h-96 border-2 border-dashed border-slate-600 rounded-lg p-4">
            {/* Gas Station Layout */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-slate-700/50 rounded-md p-4 flex flex-col justify-between">
                <div className="text-center text-slate-400 font-bold">GAS STATION PROPERTY</div>
                <div className="flex justify-around items-center h-full">
                    <div className="w-2/5 h-1/2 bg-slate-600/70 rounded flex items-center justify-center text-xs text-slate-300">Building</div>
                    <div className="w-1/4 h-3/4 bg-slate-600/70 rounded flex items-center justify-center text-xs text-slate-300 p-1 text-center">Dispenser Area</div>
                </div>
            </div>
            {/* Location Markers */}
            {locations.map((loc, index) => (
                <div key={loc.name} className="group">
                    <LocationMarker location={loc} isVisible={visibleLocations[index]} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default LocationsScene;
