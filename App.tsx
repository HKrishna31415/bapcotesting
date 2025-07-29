
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
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import TestCard from './components/TestCard';
import { TEST_DATA } from './constants';
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
import NitrogenPressurizationSimulatorApp from './components/nitrogen-pressurization-simulator/NitrogenPressurizationSimulatorApp';

import AcousticThermalFootprintAssessmentApp from "./components/acoustic-&-thermal-footprint-assessment/AcousticThermalFootprintAssessmentApp";
import GasolineVaporRecoveryVisualizerApp from './components/gasoline-vapor-recovery-visualizer/Promises';
import LeakDetectionMethodExplorerApp from './components/leak-detection-method-explorer/App';
import NitrogenLeakTestSimulatorApp from './components/nitrogen-leak-test-simulator/App';
import UstVaporLossPrinciplesApp from './components/ust-vapor-loss-principles/App';
import EmissionsComplianceTestingAnimatorApp from './components/emissions-compliance-testing-animator/Emissions';
import DynamicBackpressureTestSimulatorApp from './components/dynamic-backpressure-test-simulator/Backpressure';
import VaporLossAnimationApp from './components/vapor-loss-animation(1)/App';

const App: React.FC = () => {
  const navigate = useNavigate();



  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200">
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {TEST_DATA.map((test) => (
                <TestCard key={test.id} {...test} onClick={() => navigate(`/${test.path}`)} />
              ))}
            </div>
          } />
          <Route path="/advanced-recovery-machine-component-list" element={<AdvancedRecoveryMachineComponentListApp />} />
          <Route path="/voc-emissions-measurement-animator" element={<VocEmissionsMeasurementAnimatorApp />} />
          <Route path="/total-emissions-compliance" element={<EmissionsComplianceTestingAnimatorApp />} />
          <Route path="/recovered-gasoline-amount" element={<EthanolGasolineEvaporationStoryApp />} />
          <Route path="/recovered-gasoline-quality" element={<OverviewPage />} />
          
          <Route path="/dynamic-backpressure-test" element={<DynamicBackpressureTestSimulatorApp />} />
          {/*  */}
          <Route path="/olfactory-sniff-test" element={<OdorTestAnimationApp />} />
          <Route path="/electrical-usage-test" element={<VruElectricalUsageTestingAnimationApp />} />
          <Route path="/network-connectivity-test" element={<VruNetworkTestAnimatorApp />} />
          <Route path="/vru-validation-protocol" element={<VruValidationProtocolApp />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/product-recovery-protocol-visualizer" element={<ProductRecoveryProtocolVisualizerApp />} />
          <Route path="/salinity-evaporation-simulator" element={<SalinityEvaporationSimulatorApp />} />
          <Route path="/ust-leak-detection-simulator" element={<UstLeakDetectionSimulatorApp />} />
          <Route path="/nitrogen-pressurization-simulator" element={<NitrogenPressurizationSimulatorApp />} />
          <Route path="/acoustic-thermal-footprint" element={<AcousticThermalFootprintAssessmentApp />} />
          <Route path="/gasoline-vapor-recovery-visualizer" element={<GasolineVaporRecoveryVisualizerApp />} />
          <Route path="/leak-detection-method-explorer" element={<LeakDetectionMethodExplorerApp />} />
          <Route path="/nitrogen-leak-test-simulator" element={<NitrogenLeakTestSimulatorApp />} />
          <Route path="/ust-vapor-loss-principles" element={<UstVaporLossPrinciplesApp />} />
          <Route path="/dynamic-backpressure-test-simulator" element={<DynamicBackpressureTestSimulatorApp />} />
          <Route path="/vapor-loss-animation" element={<VaporLossAnimationApp />} />
          <Route path="/test-procedure" element={<TestProcedurePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
