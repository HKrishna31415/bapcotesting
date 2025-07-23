import React, { useState } from 'react';
import { StandardOption } from './types';
import { GOLD_STANDARD_DATA, SILVER_STANDARD_DATA } from './constants';
import AnimationDisplay from './components/AnimationDisplay';
import OptionCard from './components/OptionCard';
import { LogoIcon } from './components/icons';

export default function VocEmissionsMeasurementAnimatorApp(): React.ReactNode {
  const [selectedOption, setSelectedOption] = useState<StandardOption>('gold');

  const options: { id: StandardOption; label: string; color: string }[] = [
    { id: 'gold', label: 'Gold Standard', color: 'bg-yellow-500 hover:bg-yellow-600' },
    { id: 'silver', label: 'Silver Standard', color: 'bg-gray-400 hover:bg-gray-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <header className="w-full max-w-6xl text-center mb-8">
        <div className="flex justify-center items-center gap-4 mb-2">
            <LogoIcon />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            VOC Emissions Measurement
            </h1>
        </div>
        <p className="text-lg text-gray-400">An Animated Comparison of Monitoring Standards</p>
      </header>

      <main className="w-full max-w-6xl">
        <div className="mb-8">
          <div className="flex justify-center bg-gray-800 rounded-full p-1 max-w-sm mx-auto">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`w-full py-2.5 px-4 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus-visible:ring-white ${
                  selectedOption === option.id
                    ? `${option.color} text-black shadow-lg`
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 items-stretch">
          <AnimationDisplay option={selectedOption} />
          <OptionCard
            details={selectedOption === 'gold' ? GOLD_STANDARD_DATA : SILVER_STANDARD_DATA}
          />
        </div>
      </main>
      <footer className="w-full max-w-6xl text-center mt-8 text-gray-500 text-sm">
        <p>Animations are illustrative and not to scale. Created for conceptual understanding.</p>
      </footer>
    </div>
  );
}