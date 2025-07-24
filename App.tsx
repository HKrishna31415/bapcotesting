
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
import AuditoryTestApp from './components/auditory-listening-test/AuditoryTestApp';
import ThermalTestApp from './components/thermal-imaging-test/ThermalTestApp';
import AdvancedRecoveryMachineComponentListApp from './components/advanced-recovery-machine---component-list/AdvancedRecoveryMachineComponentListApp';
import EthanolGasolineEvaporationStoryApp from './components/ethanol-gasoline-evaporation-story/EthanolGasolineEvaporationStoryApp';
import OdorTestAnimationApp from './components/odor-test-animation/OdorTestAnimationApp';
import VocEmissionsMeasurementAnimatorApp from './components/voc-emissions-measurement-animator/VocEmissionsMeasurementAnimatorApp';
import VruElectricalUsageTestingAnimationApp from './components/vru-electrical-usage-testing-animation/VruElectricalUsageTestingAnimationApp';
import VruNetworkTestAnimatorApp from './components/vru-network-test-animator/VruNetworkTestAnimatorApp';
import VruValidationProtocolApp from './components/vru-validation-protocol/VruValidationProtocolApp';
import ProductRecoveryProtocolVisualizerApp from './components/product-recovery-protocol-visualizer/ProductRecoveryProtocolVisualizerApp';
import SalinityEvaporationSimulatorApp from './components/salinity-evaporation-simulator/SalinityEvaporationSimulatorApp';
import UstLeakDetectionSimulatorApp from './components/ust-leak-detection-simulator/UstLeakDetectionSimulatorApp';
import VaporLossAnimationApp from './components/vapor-loss-animation/VaporLossAnimationApp';
import NitrogenPressurizationSimulatorApp from './components/nitrogen-pressurization-simulator/NitrogenPressurizationSimulatorApp';
import PressureDecayTestApp from './components/pressure-decay-test/PressureDecayTestApp';
import VaporPathBlockageTestApp from './components/vapor-path-blockage-test/VaporPathBlockageTestApp';
import DynamicBackpressureTestApp from './components/dynamic-backpressure-test/DynamicBackpressureTestApp';
import LiquidLeakDetectionApp from './components/liquid-leak-detection/LiquidLeakDetectionApp';

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
        return <PressureDecayTestApp />;
      case 'vapor-path-blockage-test':
        return <VaporPathBlockageTestApp />;
      case 'dynamic-backpressure-test':
        return <DynamicBackpressureTestApp />;
      case 'liquid-leak-detection':
        return <LiquidLeakDetectionApp />;
      case 'olfactory-sniff-test':
        return <OdorTestAnimationApp />;
      case 'auditory-listening-test':
        return <AuditoryTestApp />;
      case 'thermal-imaging-test':
        return <ThermalTestApp />;
      case 'electrical-usage-test':
        return <VruElectricalUsageTestingAnimationApp />;
      case 'network-connectivity-test':
        return <VruNetworkTestAnimatorApp />;
      case 'vru-validation-protocol':
        return <VruValidationProtocolApp />;
      case 'overview':
        return <VruValidationProtocolApp />;
      case 'product-recovery-protocol-visualizer':
        return <ProductRecoveryProtocolVisualizerApp />;
      case 'salinity-evaporation-simulator':
        return <SalinityEvaporationSimulatorApp />;
      case 'ust-leak-detection-simulator':
        return <UstLeakDetectionSimulatorApp />;
      case 'vapor-loss-animation':
        return <VaporLossAnimationApp />;
      case 'nitrogen-pressurization-simulator':
        return <NitrogenPressurizationSimulatorApp />;
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
