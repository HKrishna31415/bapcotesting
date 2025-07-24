
import React from 'react';

interface ControlsProps {
  isLeaking: boolean;
  setIsLeaking: (isLeaking: boolean) => void;
  onReset: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ isLeaking, setIsLeaking, onReset }) => {
  const toggleId = 'leak-toggle';

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 w-full max-w-md">
      <div className="flex items-center gap-4">
        <span className={`font-medium transition-colors ${!isLeaking ? 'text-cyan-400' : 'text-gray-400'}`}>
          Sealed
        </span>
        <label htmlFor={toggleId} className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id={toggleId}
            className="sr-only peer"
            checked={isLeaking}
            onChange={(e) => setIsLeaking(e.target.checked)}
          />
          <div className="w-14 h-8 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-600"></div>
        </label>
        <span className={`font-medium transition-colors ${isLeaking ? 'text-red-400' : 'text-gray-400'}`}>
          Leaking
        </span>
      </div>
      <button
        onClick={onReset}
        className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-colors"
      >
        Reset Simulation
      </button>
    </div>
  );
};
