
import React, { useState, useEffect } from 'react';
import { Standard } from './types';
import StandardCard from './components/StandardCard';
import GoldStandardAnimation from './components/GoldStandardAnimation';
import SilverStandardAnimation from './components/SilverStandardAnimation';

const Emissions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const standardsData: Standard[] = [
    {
      title: 'Gold Standard',
      subtitle: 'Continuous Direct Measurement',
      methodology: 'The primary VOC analyzer (TVA2020) and the ultrasonic flow meter are deployed for the entire project duration, ensuring a constant stream of high-fidelity data.',
      calculation: 'Mass Emissions (kg/day) are calculated directly by multiplying real-time VOC concentration by the real-time volumetric flow rate.',
      pros: ['Highest possible data accuracy', 'Provides undeniable scientific rigor'],
      cons: ['Higher equipment rental and operational cost'],
      colorClass: 'border-amber-400',
      animationComponent: <GoldStandardAnimation />,
    },
    {
      title: 'Silver Standard',
      subtitle: 'Targeted Analysis & Proxy Modeling',
      methodology: 'This cost-effective approach uses the primary VOC analyzer for a shorter period to build a mathematical correlation between easily measured parameters (pressure, flow) and VOC concentration.',
      calculation: 'For the remainder of the test, cheaper sensors continue to run, and the lab-calibrated proxy model is used to estimate mass emissions from correlated data points.',
      pros: ['Significantly lower rental cost', 'Produces scientifically valid results'],
      cons: ['Slightly more complex data analysis', 'Accuracy depends on the strength of the proxy model'],
      colorClass: 'border-slate-400',
      animationComponent: <SilverStandardAnimation />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 sm:p-8">
      <main className="max-w-7xl mx-auto">
        <header className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Total Emissions Compliance
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            A visual comparison of two industry-leading methodologies for ensuring compliance with the most stringent air quality standards.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {standardsData.map((standard, index) => (
             <div key={standard.title} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${200 * (index + 1)}ms` }}>
              <StandardCard standard={standard} />
            </div>
          ))}
        </div>

        <footer className={`mt-16 text-center text-gray-500 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '800ms'}}>
          <h3 className="text-xl font-semibold text-gray-300">Our Promise</h3>
          <div className="mt-4 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div className="bg-gray-800/50 p-4 rounded-lg">Comprehensive report detailing both fugitive leaks and stack emissions.</div>
              <div className="bg-gray-800/50 p-4 rounded-lg">Certified verification of total system capture & destruction efficiency (min. 98% VOC destruction).</div>
              <div className="bg-gray-800/50 p-4 rounded-lg">Pinpoint specific sources of emissions for targeted repairs.</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Emissions;
