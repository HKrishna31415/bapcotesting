
import React from 'react';
import SectionCard from './components/SectionCard';
import DiurnalBreathingAnimation from './components/DiurnalBreathingAnimation';
import IdealGasLawAnimation from './components/IdealGasLawAnimation';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);

const ScienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.375A1.875 1.875 0 1112 4.5h0a1.875 1.875 0 011.75 1.875V7.5m-7.5 3H12m0 0V7.5m0 3h3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Scientific Principles of Vapor Loss
          </h1>
          <p className="mt-4 text-xl text-sky-600 dark:text-sky-400 font-semibold">
            in Underground Storage Tank (UST) Systems
          </p>
          <div className="mt-6 max-w-3xl mx-auto h-1 bg-sky-500 rounded-full"></div>
        </header>

        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <SectionCard icon={<SunIcon />} title="Diurnal Breathing Losses" animation={<DiurnalBreathingAnimation />}>
            <p>
              Gasoline vapor loss from Underground Storage Tanks (USTs) is governed by physical principles. The daily cycle of ambient temperature changes causes the gasoline and the vapor in the ullage (vapor space) to expand (day) and contract (night).
            </p>
             <p>This temperature swing (ΔT) leads to a pressure increase (ΔP), a direct consequence of the <strong>Ideal Gas Law</strong>. When the internal pressure exceeds the setting of the Pressure/Vacuum (P/V) valve, hydrocarbon vapors are vented to the atmosphere.
            </p>
          </SectionCard>

          <SectionCard icon={<ScienceIcon />} title="The Ideal Gas Law (PV=nRT)" animation={<IdealGasLawAnimation />}>
            <p>
                The Ideal Gas Law is a fundamental equation describing the state of a hypothetical ideal gas. It's expressed as:
            </p>
            <div className="text-center font-mono text-lg p-3 my-2 bg-sky-100 dark:bg-gray-700 rounded-md">
                PV = nRT
            </div>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>P:</strong> Pressure of the gas</li>
                <li><strong>V:</strong> Volume of the gas</li>
                <li><strong>n:</strong> Amount of gas (moles)</li>
                <li><strong>R:</strong> Ideal gas constant</li>
                <li><strong>T:</strong> Temperature of the gas</li>
            </ul>
            <p>
                In a sealed UST ullage, <strong>V</strong> (volume) and <strong>n</strong> (amount of vapor) are relatively constant. As the daily <strong>T</strong> (temperature) rises, the <strong>P</strong> (pressure) must also rise proportionally. Once this pressure exceeds the P/V valve's threshold, vapor is vented out to the atmosphere.
            </p>
          </SectionCard>
        </main>

        <footer className="text-center mt-16 text-sm text-gray-500 dark:text-gray-400">
            <p>This information is for educational purposes. Always consult with certified professionals and local regulations for UST management.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
