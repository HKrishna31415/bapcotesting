import React from 'react';
import type { TestInfo } from './types';

import { FaSmog, FaRecycle, FaCheck, FaGaugeHigh, FaBan, FaDroplet, FaLightbulb, FaWifi, FaClipboardList, FaGasPump, FaFlask, FaWind } from 'react-icons/fa6';

export const TotalEmissionsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaSmog className={className} />
);

const RecoveryAmountIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaRecycle className={className} />
);

const RecoveryQualityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaCheck className={className} />
);

const PressureIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaGaugeHigh className={className} />
);

const BlockageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaBan className={className} />
);

const FlowRateIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25V12A9.75 9.75 0 0117.25 2.25h0A9.75 9.75 0 012.25 12v2.25m0 0h15V12A9.75 9.75 0 007.5 2.25h0A9.75 9.75 0 002.25 12v2.25m0 0H2.25m15 0h.008v.008H17.25v-.008zm-1.5 0h.008v.008H15.75v-.008z" />
  </svg>
);

const LeakIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm0 1.5a8.25 8.25 0 0 1 8.25 8.25c0 1.925-.666 3.7-1.796 5.122l-11.446-11.446A8.204 8.204 0 0 1 12 3.75Zm-6.454 2.926L16.992 18.12a8.205 8.205 0 0 1-5.122 1.796A8.25 8.25 0 0 1 3.75 12c0-1.925.666-3.7 1.796-5.122Z" />
    </svg>
);

const OlfactoryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8c2.5-1.5 5-1.5 7.5 0s5 1.5 7.5 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c2.5-1.5 5-1.5 7.5 0s5 1.5 7.5 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16c2.5-1.5 5-1.5 7.5 0s5 1.5 7.5 0" />
  </svg>
);

const ElectricIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaLightbulb className={className} />
);

const WifiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaWifi className={className} />
);

const ProtocolIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaClipboardList className={className} />
);

const NitrogenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaFlask className={className} />
);

const WindIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaWind className={className} />
);

const UstLeakIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaGasPump className={className} />
);

const AcousticThermalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.611c.996.166 1.874.825 2.433 1.697a4.5 4.5 0 01-.48 5.633l-.264.223c-1.353 1.143-3.273 1.143-4.626 0l-.264-.223a4.5 4.5 0 01-.48-5.633c.559-.872 1.437-1.531 2.433-1.697L12 3.375l.937 5.036 1.313 2.2z" />
  </svg>
);

const SalinityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaDroplet className={className} />
);

export const TEST_DATA: TestInfo[] = [
  {
    id: 18,
    title: 'Acoustic & Thermal Footprint',
    path: 'acoustic-thermal-footprint',
    icon: <AcousticThermalIcon className="w-8 h-8" />,
    requirements: [
      'Measure sound levels at various distances from the unit.',
      'Monitor chassis, cooling system, and ambient air temperatures.',
      'Simulate the effect of a shade canopy on thermal performance.',
      'Assess the impact of temperature reduction on power consumption.'
    ],
    promises: [
      'Detailed report on acoustic and thermal characteristics.',
      'Verification of compliance with noise regulations.',
      'Quantifiable data on the benefits of shading for efficiency.',
      'Insights into optimizing unit placement and operation.'
    ],
    highlighted: false,
  },
  {
    id: 19,
    title: 'Emissions Compliance Testing Animator',
    path: 'total-emissions-compliance',
    icon: <FaSmog className="w-8 h-8" />,
    requirements: [
      'Simulates various emissions compliance tests for vapor recovery systems.',
      'Visualizes the testing process and data collection.',
      'Highlights key parameters and their impact on compliance.',
      'Provides insights into regulatory requirements and testing procedures.'
    ],
    promises: [
      'Interactive animation to understand emissions compliance testing.',
      'Clear visual representation of testing dynamics.',
      'Educational tool for demonstrating regulatory adherence.',
      'Provides insights into environmental protection and compliance.'
    ],
    highlighted: true,
  },
  {
    id: 20,
    title: 'Vapor Loss Animation',
    path: 'vapor-loss-animation',
    icon: <FaWind className="w-8 h-8" />,
    requirements: [
      'Animates the process of vapor loss from fuel systems.',
      'Illustrates different scenarios leading to vapor emissions.',
      'Demonstrates the impact of temperature, pressure, and fuel composition.',
      'Visualizes methods to mitigate vapor loss.'
    ],
    promises: [
      'Clear visual understanding of vapor loss mechanisms.',
      'Insights into factors influencing vapor emissions.',
      'Educational tool for promoting best practices in fuel handling.',
      'Highlights the importance of vapor recovery in reducing environmental impact.'
    ],
    highlighted: true,
  },
  {
    id: 21,
    title: 'Leak Detection Method Explorer',
    path: 'leak-detection-method-explorer',
    icon: <LeakIcon className="w-8 h-8" />,
    requirements: [
      'Explores various methods for detecting leaks in fuel systems.',
      'Compares and contrasts different leak detection technologies.',
      'Provides visual examples of leak detection in action.',
      'Discusses the pros and cons of each method.'
    ],
    promises: [
      'Comprehensive overview of leak detection techniques.',
      'Guidance on selecting appropriate leak detection methods.',
      'Enhanced understanding of fuel system integrity.',
      'Promotes proactive measures for environmental protection.'
    ],
    highlighted: true,
  },
  {
    id: 22,
    title: 'Gasoline Vapor Recovery Quantity',
    path: 'gasoline-vapor-recovery-visualizer',
    icon: <FaGasPump className="w-8 h-8" />,
requirements: [
      'Measure the total volume of vapor recovered during a dispensing event.',
      'Compare recovered volume to dispensed fuel volume to calculate efficiency.',
      'Ensure recovery efficiency meets regulatory standards (e.g., 95% or higher).',
      'Account for temperature and pressure variations during testing.'
    ],
    promises: [
      'Accurate quantification of vapor recovery efficiency.',
      'Verification of compliance with local and federal recovery mandates.',
      'Identification of systems operating below optimal recovery rates.',
      'Data-driven insights for improving VRU performance and reducing emissions.',
      'Recovery ratio must be >0.3% of throughput for stations selling < 2M liters/month.'
    ],
    highlighted: true,
  },
  {
    id: 17,
    title: 'Nitrogen Pressurization Test for Vapor Leak Detection',
    path: 'nitrogen-pressurization-simulator',
    icon: <NitrogenIcon className="w-8 h-8" />,
    requirements: [
      'Pressurize the VRU installation and gas station lines with nitrogen.',
      'Monitor pressure decay to identify potential vapor leaks.',
      'Utilize specialized equipment to pinpoint leak locations.',
      'Ensure system integrity prior to fuel introduction.'
    ],
    promises: [
      'Accurate identification of vapor leaks in the VRU and gas station infrastructure.',
      'Verification of system integrity before operation.',
      'Prevention of environmental contamination and product loss.',
      'Compliance with safety and regulatory standards for vapor recovery systems.'
    ],
    highlighted: false,
  },

  {
    id: 15,
    title: 'UST Leak Detection Simulator',
    path: 'ust-leak-detection-simulator',
    icon: <UstLeakIcon className="w-8 h-8" />,
    requirements: [
      'Simulates the CARB Test Procedure TP-201.1 for UST leak detection.',
      'Visualizes pressure changes in an underground storage tank system.',
      'Demonstrates pressurization, stabilization, and monitoring phases.',
      'Allows selection of leaking or sealed tank scenarios.'
    ],
    promises: [
      'Interactive simulation to understand UST leak detection principles.',
      'Clear visual representation of tank pressure dynamics.',
      'Educational tool for demonstrating environmental compliance procedures.',
      'Provides insights into fuel storage safety and regulations.'
    ],
    highlighted: true,
  },
  {
    id: 14,
    title: 'Evaporation Simulator',
    path: 'salinity-evaporation-simulator',
    icon: <SalinityIcon className="w-8 h-8" />,
    requirements: [
      'Simulates the evaporation of gasoline and the increase in precipitates.',
      'Visualizes the separation of pure gasoline from additives.',
      'Demonstrates the concept of concentration due to evaporation.',
      'Allows adjustment of initial concentration for different scenarios.'
    ],
    promises: [
      'Interactive simulation to understand additives and evaporation principles.',
      'Clear visual representation of gasoline and additive dynamics.',
    ],
    highlighted: true,
  },
  {
    id: 13,
    title: 'Product Recovery Protocol Visualizer',
    path: 'product-recovery-protocol-visualizer',
    icon: <ProtocolIcon className="w-8 h-8" />,
    requirements: [
      'Follows a three-phase protocol for product recovery.',
      'Includes neat sample characterization, lab blend simulation, and in-situ UST monitoring.',
      'Ensures recovered product meets ASTM standards and BAPCO specs.',
      'Requires weekly dispenser sample testing during in-situ monitoring.'
    ],
    promises: [
      'Visual representation of each phase of the product recovery protocol.',
      'Clear understanding of the steps involved in ensuring product quality.',
      'Highlights key testing and monitoring activities at each stage.',
      'Provides confidence in the quality and usability of recovered product.'
    ],
    highlighted: true,
  },
  {
    id: 10,
    title: 'Ethanol Impact',
    path: 'recovered-gasoline-amount',
    icon: <RecoveryAmountIcon className="w-8 h-8" />,
    requirements: [
      'Ensure gasoline quality remains consistent throughout the recovery process.',
      'Monitor for any signs of Ethanol impurity in the recovered product.',
      'Third party testing on fuel composition and purity.'
    ],
    promises: [
      'Verify that you are reclaiming valuable product.',
      'Clear ROI analysis based on recovered gasoline volume.'
    ],
    highlighted: false,
  },
  {
    id: 11,
    title: 'Recovered Gasoline Quality',
    path: 'recovered-gasoline-quality',
    icon: <RecoveryQualityIcon className="w-8 h-8" />,
    requirements: [
      'Sample and test recovered liquid for contaminants (e.g., water).',
      'Ensure recovered fuel meets ASTM standards for gasoline.',
      'Prevent degradation of fuel quality in the main tank.',
      'Test for phase separation and particulate matter.'
    ],
    promises: [
      'Laboratory analysis of your recovered fuel.',
      'Protection of your entire fuel inventory from contamination.',
      'Guarantee that your customers receive the highest quality fuel.',
      'Detailed report on fuel purity and recommendations.'
    ],
    highlighted: true,
  },
  {
    id: 3,
    title: 'Dynamic Backpressure Test',
    path: 'dynamic-backpressure-test',
    icon: <FlowRateIcon className="w-8 h-8" />,
    requirements: [
      'Ensure backpressure remains below maximum allowable levels during fuel dispensing.',
      'Test performed at various flow rates.',
      'System must not impede vehicle refueling.',
      'Continuous monitoring during the test cycle.'
    ],
    promises: [
      'Simulation of real-world refueling scenarios.',
      'Graph and data summary of pressure vs. flow rate.',
      'Guaranteed compliance with regulatory standards.',
      'Minimal disruption to site operations during testing.'
    ],
    highlighted: false,
  },
  {
    id: 5,
    title: 'Olfactory (Sniff) Test',
    path: 'olfactory-sniff-test',
    icon: <OlfactoryIcon className="w-8 h-8" />,
    requirements: [
      'Technician methodically checks for fuel odors around key points.',
      'Requires documented wind conditions for accurate tracing.',
      'Any detected fuel odor constitutes a potential test failure.',
      'Performed by a certified and experienced technician.',
    ],
    promises: [
      'Creation of a site map with vapor concentration isopleths (odor maps).',
      'Defining permissible setback distances for sensitive areas like on-site restaurants.',
      'Clear communication of findings, backed by dispersion data.',
      'Prioritizing safety and immediate action if odors exceed permissible levels.',
    ],
    highlighted: false,
  },
  {
    id: 8,
    title: 'Electrical Usage Test',
    path: 'electrical-usage-test',
    icon: <ElectricIcon className="w-8 h-8" />,
    requirements: [
      'Measure power consumption of VRU components (e.g., blower, control panel).','Compare actual usage against manufacturer specifications.','Identify any abnormal power draws indicating inefficiencies or faults.','Test performed under various operational loads.'
    ],
    promises: [
      'Detailed report on energy consumption and cost analysis.','Recommendations for optimizing electrical efficiency.','Verification of compliance with energy efficiency standards.','Proactive identification of components nearing end-of-life.'
    ],
    highlighted: false,
  },
  {
    id: 9,
    title: 'Network Connectivity Test',
    path: 'network-connectivity-test',
    icon: <WifiIcon className="w-8 h-8" />,
    requirements: [
      'Verify stable network connection for remote monitoring and data transfer.','Test data transmission rates and latency.','Ensure secure communication protocols are in place.','Assess signal strength at all critical points.'
    ],
    promises: [
      'Comprehensive network performance report.','Troubleshooting and resolution of connectivity issues.','Enhanced reliability for remote diagnostics and updates.','Secure and seamless integration with your existing IT infrastructure.'
    ],
    highlighted: false,
  }
];