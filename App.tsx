
import React from 'react';

const OverviewPage: React.FC = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Overview of Testing Procedures</h2>
    <p>This page provides a general overview of the vapor recovery testing procedures. You can navigate to individual test details from the main page.</p>
  </div>
);

const TestProcedurePage: React.FC = () => {
  // In a real application, you would fetch test details based on a route parameter
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Test Procedure Details</h2>
      <p>This page would display detailed information about a specific test procedure.</p>
    </div>
  );
};
import { useState } from 'react';
import Header from './components/Header';
import TestCard from './components/TestCard';
import { TEST_DATA } from './constants';
import AcousticThermalFootprintAssessmentApp from './components/acoustic-&-thermal-footprint-assessment/AcousticThermalFootprintAssessmentApp';
import AdvancedRecoveryMachineComponentListApp from './components/advanced-recovery-machine---component-list/AdvancedRecoveryMachineComponentListApp';
import EthanolGasolineEvaporationStoryApp from './components/ethanol-gasoline-evaporation-story/EthanolGasolineEvaporationStoryApp';
import OdorTestAnimationApp from './components/odor-test-animation/OdorTestAnimationApp';
import VocEmissionsMeasurementAnimatorApp from './components/voc-emissions-measurement-animator/VocEmissionsMeasurementAnimatorApp';
import VruElectricalUsageTestingAnimationApp from './components/vru-electrical-usage-testing-animation/VruElectricalUsageTestingAnimationApp';
import VruNetworkTestAnimatorApp from './components/vru-network-test-animator/VruNetworkTestAnimatorApp';
import VruValidationProtocolApp from './components/vru-validation-protocol/VruValidationProtocolApp';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'advanced-recovery-machine-component-list':
        return <AdvancedRecoveryMachineComponentListApp />;
      case 'voc-emissions-measurement-animator':
        return <VocEmissionsMeasurementAnimatorApp />;
      case 'total-emissions-compliance':
        return <VocEmissionsMeasurementAnimatorApp />;
      case 'recovered-gasoline-amount':
        return <EthanolGasolineEvaporationStoryApp />;
      case 'recovered-gasoline-quality':
        return <OverviewPage />;
      case 'pressure-decay-test':
      case 'vapor-path-blockage-test':
      case 'dynamic-backpressure-test':
      case 'liquid-leak-detection':
      case 'olfactory-sniff-test':
        return <OdorTestAnimationApp />;
      case 'auditory-listening-test':
      case 'thermal-imaging-test':
        return <AcousticThermalFootprintAssessmentApp />;
      case 'electrical-usage-test':
        return <VruElectricalUsageTestingAnimationApp />;
      case 'network-connectivity-test':
        return <VruNetworkTestAnimatorApp />;
      case 'vru-validation-protocol':
        return <VruValidationProtocolApp />;
      case 'overview':
        return <VruValidationProtocolApp />;
      case 'test-procedure': // This case is for a generic test procedure page, if needed
        return <TestProcedurePage />;
      default:
        return (
          <>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {TEST_DATA.map((test) => (
                <TestCard key={test.id} {...test} onClick={() => setCurrentPage(test.path)} />
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200">
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
