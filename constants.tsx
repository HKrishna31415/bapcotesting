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
    id: 19,
    title: 'Emissions Compliance Testing Animator',
    path: 'total-emissions-compliance',
    icon: <FaSmog className="w-8 h-8" />,
    requirements: [
      'Outline the test criteria for emissions compliance of vapor recovery systems.',
      'Present the testing process and data collection methodology.',
      'Highlight key parameters and their impact on compliance.',
      'Detail regulatory requirements and testing procedures for BAPCO.'
    ],
    promises: [
      'Demonstrate our machine capabilities for emissions compliance testing.',
      'Provide clear visual representation of testing dynamics.',
      'Ensure adherence to regulatory standards for BAPCO.',
      'Offer insights into environmental protection and compliance for BAPCO operations.'
    ],
    highlighted: true,
  },
  {
    id: 20,
    title: 'Vapor Loss Animation',
    path: 'vapor-loss-animation',
    icon: <FaWind className="w-8 h-8" />,
    requirements: [
      'Present the process of vapor loss from fuel systems.',
      'Illustrate different scenarios leading to vapor emissions.',
      'Demonstrate the impact of temperature, pressure, and fuel composition on vapor loss.',
      'Outline methods to mitigate vapor loss and our machine\'s role.'
    ],
    promises: [
      'Provide clear visual understanding of vapor loss mechanisms.',
      'Offer insights into factors influencing vapor emissions.',
      'Showcase best practices in fuel handling and our machine\'s contribution.',
      'Highlight the importance of vapor recovery in reducing environmental impact for BAPCO.'
    ],
    highlighted: true,
  },
  {
    id: 21,
    title: 'Leak Detection Method Explorer',
    path: 'leak-detection-method-explorer',
    icon: <LeakIcon className="w-8 h-8" />,
    requirements: [
      'Present various methods for detecting leaks in fuel systems.',
      'Compare and contrast different leak detection technologies used by our machines.',
      'Provide visual examples of our leak detection in action.',
      'Discuss the advantages of our leak detection methods for BAPCO.'
    ],
    promises: [
      'Offer a comprehensive overview of our leak detection techniques.',
      'Provide guidance on selecting appropriate leak detection methods for BAPCO.',
      'Enhance understanding of fuel system integrity through our solutions.',
      'Promote proactive measures for environmental protection with our technology.'
    ],
    highlighted: true,
  },
  {
    id: 22,
    title: 'Gasoline Vapor Recovery Quantity',
    path: 'gasoline-vapor-recovery-visualizer',
    icon: <FaGasPump className="w-8 h-8" />,
requirements: [
      'Measure the total volume of vapor recovered during a dispensing event using our machines.',
      'Compare recovered volume to dispensed fuel volume to calculate efficiency for BAPCO.',
      'Ensure recovery efficiency meets regulatory standards (e.g., 95% or higher) with our systems.',
      'Account for temperature and pressure variations during testing with our equipment.'
    ],
    promises: [
      'Provide accurate quantification of vapor recovery efficiency for BAPCO.',
      'Verify compliance with local and federal recovery mandates through our testing.',
      'Identify systems operating below optimal recovery rates for BAPCO.',
      'Deliver data-driven insights for improving VRU performance and reducing emissions for BAPCO.',
      'Ensure recovery ratio is >0.3% of throughput for stations selling < 2M liters/month.'
    ],
    highlighted: true,
  },
  {
    id: 15,
    title: 'UST Leak Detection Simulator',
    path: 'ust-leak-detection-simulator',
    icon: <UstLeakIcon className="w-8 h-8" />,
    requirements: [
      'Outline the CARB Test Procedure TP-201.1 for UST leak detection.',
      'Present pressure changes in an underground storage tank system.',
      'Demonstrate pressurization, stabilization, and monitoring phases.',
      'Showcase our capabilities in handling leaking or sealed tank scenarios.'
    ],
    promises: [
      'Provide a clear understanding of our UST leak detection principles.',
      'Offer clear visual representation of tank pressure dynamics.',
      'Demonstrate environmental compliance procedures through our technology.',
      'Deliver insights into fuel storage safety and regulations for BAPCO.'
    ],
    highlighted: true,
  },
  {
    id: 14,
    title: 'Evaporation Simulator',
    path: 'salinity-evaporation-simulator',
    icon: <SalinityIcon className="w-8 h-8" />,
    requirements: [
      'Present the evaporation of gasoline and the increase in precipitates.',
      'Showcase the separation of pure gasoline from additives.',
      'Demonstrate the concept of concentration due to evaporation.',
      'Allow adjustment of initial concentration for different scenarios to BAPCO.'
    ],
    promises: [
      'Provide a clear understanding of additives and evaporation principles for BAPCO.',
      'Offer clear visual representation of gasoline and additive dynamics for BAPCO.'
    ],
    highlighted: true,
  },
  {
    id: 13,
    title: 'Product Recovery Protocol Visualizer',
    path: 'product-recovery-protocol-visualizer',
    icon: <ProtocolIcon className="w-8 h-8" />,
    requirements: [
      'Present our three-phase protocol for product recovery for BAPCO.',
      'Include neat sample characterization, lab blend simulation, and in-situ UST monitoring.',
      'Ensure recovered product meets ASTM standards and BAPCO specs with our process.',
      'Detail weekly dispenser sample testing during in-situ monitoring for BAPCO.'
    ],
    promises: [
      'Provide a visual representation of each phase of our product recovery protocol.',
      'Offer a clear understanding of the steps involved in ensuring product quality for BAPCO.',
      'Highlight key testing and monitoring activities at each stage for BAPCO.',
      'Instill confidence in the quality and usability of recovered product for BAPCO.'
    ],
    highlighted: true,
  },
  {
    id: 11,
    title: 'Recovered Gasoline Quality',
    path: 'recovered-gasoline-quality',
    icon: <RecoveryQualityIcon className="w-8 h-8" />,
    requirements: [
      'Sample and test recovered liquid for contaminants (e.g., water) for BAPCO.',
      'Ensure recovered fuel meets ASTM standards for gasoline for BAPCO.',
      'Prevent degradation of fuel quality in the main tank for BAPCO.',
      'Test for phase separation and particulate matter for BAPCO.'
    ],
    promises: [
      'Provide laboratory analysis of recovered fuel for BAPCO.',
      'Ensure protection of BAPCO\'s entire fuel inventory from contamination.',
      'Guarantee that BAPCO\'s customers receive the highest quality fuel.',
      'Deliver a detailed report on fuel purity and recommendations for BAPCO.'
    ],
    highlighted: true,
  },
  {
    id: 18,
    title: 'Acoustic & Thermal Footprint',
    path: 'acoustic-thermal-footprint',
    icon: <AcousticThermalIcon className="w-8 h-8" />,
    requirements: [
      'Measure sound levels at various distances from the unit for BAPCO.',
      'Monitor chassis, cooling system, and ambient air temperatures for BAPCO.',
      'Simulate the effect of a shade canopy on thermal performance for BAPCO.',
      'Assess the impact of temperature reduction on power consumption for BAPCO.'
    ],
    promises: [
      'Provide a detailed report on acoustic and thermal characteristics for BAPCO.',
      'Verify compliance with noise regulations for BAPCO.',
      'Offer quantifiable data on the benefits of shading for efficiency for BAPCO.',
      'Deliver insights into optimizing unit placement and operation for BAPCO.'
    ],
    highlighted: false,
  },
  {
    id: 17,
    title: 'Nitrogen Pressurization Test for Vapor Leak Detection',
    path: 'nitrogen-pressurization-simulator',
    icon: <NitrogenIcon className="w-8 h-8" />,
    requirements: [
      'Pressurize the VRU installation and gas station lines with nitrogen for BAPCO.',
      'Monitor pressure decay to identify potential vapor leaks for BAPCO.',
      'Utilize specialized equipment to pinpoint leak locations for BAPCO.',
      'Ensure system integrity prior to fuel introduction for BAPCO.'
    ],
    promises: [
      'Provide accurate identification of vapor leaks in the VRU and gas station infrastructure for BAPCO.',
      'Verify system integrity before operation for BAPCO.',
      'Prevent environmental contamination and product loss for BAPCO.',
      'Ensure compliance with safety and regulatory standards for vapor recovery systems for BAPCO.'
    ],
    highlighted: false,
  },
  {
    id: 10,
    title: 'Ethanol Impact',
    path: 'recovered-gasoline-amount',
    icon: <RecoveryAmountIcon className="w-8 h-8" />,
    requirements: [
      'Ensure gasoline quality remains consistent throughout the recovery process with our machines.',
      'Monitor for any signs of Ethanol impurity in the recovered product for BAPCO.',
      'Provide third-party testing on fuel composition and purity for BAPCO.'
    ],
    promises: [
      'Verify that BAPCO is reclaiming valuable product.',
      'Present clear ROI analysis based on recovered gasoline volume for BAPCO.'
    ],
    highlighted: false,
  },
  {
    id: 3,
    title: 'Dynamic Backpressure Test',
    path: 'dynamic-backpressure-test',
    icon: <FlowRateIcon className="w-8 h-8" />,
    requirements: [
      'Ensure backpressure remains below maximum allowable levels during fuel dispensing for BAPCO.',
      'Perform tests at various flow rates for BAPCO.',
      'Ensure our system does not impede vehicle refueling for BAPCO.',
      'Provide continuous monitoring during the test cycle for BAPCO.'
    ],
    promises: [
      'Offer simulation of real-world refueling scenarios for BAPCO.',
      'Provide graph and data summary of pressure vs. flow rate for BAPCO.',
      'Guarantee compliance with regulatory standards for BAPCO.',
      'Ensure minimal disruption to site operations during testing for BAPCO.'
    ],
    highlighted: false,
  },
  {
    id: 5,
    title: 'Olfactory (Sniff) Test',
    path: 'olfactory-sniff-test',
    icon: <OlfactoryIcon className="w-8 h-8" />,
    requirements: [
      'Our technician methodically checks for fuel odors around key points for BAPCO.',
      'We document wind conditions for accurate tracing for BAPCO.',
      'Any detected fuel odor constitutes a potential test failure for BAPCO.',
      'Tests are performed by our certified and experienced technicians for BAPCO.',
    ],
    promises: [
      'Creation of a site map with vapor concentration isopleths (odor maps) for BAPCO.',
      'Defining permissible setback distances for sensitive areas like on-site restaurants for BAPCO.',
      'Clear communication of findings, backed by dispersion data for BAPCO.',
      'Prioritizing safety and immediate action if odors exceed permissible levels for BAPCO.'
    ],
    highlighted: false,
  },
  {
    id: 8,
    title: 'Electrical Usage Test',
    path: 'electrical-usage-test',
    icon: <ElectricIcon className="w-8 h-8" />,
    requirements: [
      'Measure power consumption of VRU components (e.g., blower, control panel) for BAPCO.','Compare actual usage against manufacturer specifications for BAPCO.','Identify any abnormal power draws indicating inefficiencies or faults for BAPCO.','Perform tests under various operational loads for BAPCO.'
    ],
    promises: [
      'Provide a detailed report on energy consumption and cost analysis for BAPCO.','Offer recommendations for optimizing electrical efficiency for BAPCO.','Verify compliance with energy efficiency standards for BAPCO.','Proactively identify components nearing end-of-life for BAPCO.'
    ],
    highlighted: false,
  },
  {
    id: 9,
    title: 'Network Connectivity Test',
    path: 'network-connectivity-test',
    icon: <WifiIcon className="w-8 h-8" />,
    requirements: [
      'Verify stable network connection for remote monitoring and data transfer for BAPCO.','Test data transmission rates and latency for BAPCO.','Ensure secure communication protocols are in place for BAPCO.','Assess signal strength at all critical points for BAPCO.'
    ],
    promises: [
      'Provide a comprehensive network performance report for BAPCO.','Offer troubleshooting and resolution of connectivity issues for BAPCO.','Ensure enhanced reliability for remote diagnostics and updates for BAPCO.','Provide secure and seamless integration with BAPCO\'s existing IT infrastructure.'
    ],
    highlighted: false,
  }
];