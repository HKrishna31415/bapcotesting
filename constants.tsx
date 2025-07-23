import React from 'react';
import type { TestInfo } from './types';

const TotalEmissionsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

const RecoveryAmountIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 3.75v16.5a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5V3.75m15 0a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5m15 0v-1.5" />
  </svg>
);

const RecoveryQualityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PressureIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l-4 4" />
  </svg>
);

const BlockageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h.01M15 15h.01M3 12h18" />
  </svg>
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

const AuditoryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </svg>
);

const ThermalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.611c.996.166 1.874.825 2.433 1.697a4.5 4.5 0 01-.48 5.633l-.264.223c-1.353 1.143-3.273 1.143-4.626 0l-.264-.223a4.5 4.5 0 01-.48-5.633c.559-.872 1.437-1.531 2.433-1.697L12 3.375l.937 5.036 1.313 2.2z" />
  </svg>
);

const ElectricIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const WifiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M11.5 19.038a2.25 2.25 0 013 0m-6.75-2.25l.004.004v.001l.001.004-.001.002a.75.75 0 11-.002-.001h-.001L8.25 16.75l-.004-.004V16.5zM12 21.75h.004v.001l.001.004-.001.002a.75.75 0 11-.002-.001h-.001L11.995 21.75l-.004-.004V21.5z" />
  </svg>
);

export const TEST_DATA: TestInfo[] = [
  {
    id: 12,
    title: 'Total Emissions Compliance',
    path: 'total-emissions-compliance',
    icon: <TotalEmissionsIcon className="w-8 h-8" />,
    requirements: [
      'Overall system emissions (fugitive + stack) must meet EPA standards.',
      'Fugitive emissions measured at all potential leak points.',
      'Processing unit (e.g., thermal oxidizer) efficiency must be certified.',
      'Inlet and outlet vapor concentrations measured to certify destruction rate.',
    ],
    promises: [
      'Comprehensive report detailing both fugitive leaks and stack emissions.',
      'Certified verification of total system capture & destruction efficiency, with a minimum of 98% VOC destruction.',
      'Pinpoint specific sources of emissions for targeted repairs.',
      'Ensure compliance with the most stringent air quality standards.',
    ],
    highlighted: true,
  },
  {
    id: 10,
    title: 'Recovered Gasoline Amount',
    path: 'recovered-gasoline-amount',
    icon: <RecoveryAmountIcon className="w-8 h-8" />,
    requirements: [
      'Measure the volume of liquid gasoline returned to the tank.',
      'Compare recovered volume against dispensed volume.',
      'Recovery ratio must be >0.3% of throughput for stations selling < 2M liters/month.',
      'Test accounts for temperature-based volume changes.'
    ],
    promises: [
      'A precise accounting of recovered fuel, saving you money.',
      'Data-driven insights into the efficiency of your system.',
      'Verify that you are reclaiming valuable product.',
      'Clear ROI analysis based on recovered gasoline volume.'
    ],
    highlighted: true,
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
    id: 1,
    title: 'Pressure Decay Test',
    path: 'pressure-decay-test',
    icon: <PressureIcon className="w-8 h-8" />,
    requirements: [
      'System must maintain pressure within specified limits.',
      'Test conducted over a 5-minute duration.',
      'Requires calibrated pressure gauge and nitrogen source.',
      'Ambient temperature must be recorded.'
    ],
    promises: [
      'Use of state-of-the-art, calibrated equipment.',
      'Detailed, time-stamped reporting of pressure readings.',
      'Immediate notification of any test failures.',
      'Comprehensive safety checks before pressurization.'
    ]
  },
  {
    id: 2,
    title: 'Vapor Path Blockage Test',
    path: 'vapor-path-blockage-test',
    icon: <BlockageIcon className="w-8 h-8" />,
    requirements: [
      'Verify no obstructions in the vapor recovery path.',
      'Measure pressure drop across key components.',
      'Flow must meet or exceed minimum standards.',
      'Check for kinked hoses or blocked vents.'
    ],
    promises: [
      'Thorough visual inspection of all lines and fittings.',
      'Precise pressure drop measurements with digital manometers.',
      'Clear documentation of blockage location if found.',
      'Guidance on corrective actions for remediation.'
    ]
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
    ]
  },
  {
    id: 4,
    title: 'Liquid Leak Detection',
    path: 'liquid-leak-detection',
    icon: <LeakIcon className="w-8 h-8" />,
    requirements: [
      'Detect leaks as small as 0.1 gallons per hour.',
      'Monitor tank and line integrity under pressure.',
      'Test must run for the regulatory-specified duration.',
      'System must automatically shut down on leak detection.',
    ],
    promises: [
      'Non-invasive testing methods to protect your equipment.',
      'Certified technicians trained in leak detection protocols.',
      'Full compliance report for environmental agency submission.',
      '24/7 support for any post-test inquiries.',
    ]
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
    ]
  },
  {
    id: 6,
    title: 'Auditory (Listening) Test',
    path: 'auditory-listening-test',
    icon: <AuditoryIcon className="w-8 h-8" />,
    requirements: [
      'Listen for "hissing" sounds from vapor leaks.',
      'Test performed during both idle and pressurized states.',
      'Establish a baseline acoustic signature for normal operation.',
      'Isolate sounds from normal operational noises.',
    ],
    promises: [
      'Use of ultrasonic acoustic detectors for inaudible, high-frequency leaks.',
      'Analysis of deviations from the normal sound profile to preemptively identify faults.',
      'Recording and analysis of sound profiles for documentation.',
      'A non-disruptive test that can be performed during business hours.',
    ]
  },
  {
    id: 7,
    title: 'Thermal Imaging Test',
    path: 'thermal-imaging-test',
    icon: <ThermalIcon className="w-8 h-8" />,
    requirements: [
      'Use an infrared camera to find temperature anomalies from evaporating fuel.',
      'Scan all connections, seals, and piping for cold spots.',
      'Assess operational efficiency at high temperatures and the cooling effect of canopies.',
      'Requires a certified thermographer for proper interpretation.',
    ],
    promises: [
      'Detection of minute leaks invisible to the naked eye.',
      'A visual, easy-to-understand report with thermal images.',
      'Insights on system performance under thermal stress and effectiveness of shade structures.',
      'Proactive identification of failure points before they become large leaks.',
    ]
  },
  {
    id: 8,
    title: 'Electrical Usage Test',
    path: 'electrical-usage-test',
    icon: <ElectricIcon className="w-8 h-8" />,
    requirements: [
      'Measure power consumption of VRU components (e.g., blower, control panel).',
      'Compare actual usage against manufacturer specifications.','Identify any abnormal power draws indicating inefficiencies or faults.','Test performed under various operational loads.'
    ],
    promises: [
      'Detailed report on energy consumption and cost analysis.','Recommendations for optimizing electrical efficiency.','Verification of compliance with energy efficiency standards.','Proactive identification of components nearing end-of-life.'
    ]
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
    ]
  }
];