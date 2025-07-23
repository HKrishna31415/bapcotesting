
import React from 'react';
import { EquipmentCategory } from './types';

const PrimaryEquipmentIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const DataAcquisitionIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
  </svg>
);

const EmissionsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const TankMonitoringIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414M19.778 5.636l-1.414 1.414M18.364 18.364l1.414 1.414M4.222 18.364l1.414-1.414M12 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const AncillaryMonitoringIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const AtmosphericIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const FuelQualityIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
  </svg>
);


export const EQUIPMENT_DATA: EquipmentCategory[] = [
  {
    category: 'Primary Equipment',
    purpose: 'Hybrid (refrigeration + carbon) technology ensures ≥98% VOC recovery. PLC provides operational control and data output for performance analysis.',
    icon: PrimaryEquipmentIcon,
    items: [
      { name: 'GEVLR-3 (or equivalent) Hybrid VRU', details: 'Sized with 25% surplus capacity for peak loads.' },
      { name: '4-inch double-walled FRP piping', details: 'Creates a common vapor space.' },
      { name: 'CARB-certified P/V valves', details: 'e.g., Phil-Tite 880, ensures system integrity.' },
    ],
  },
  {
    category: 'Data Acquisition & Control',
    purpose: 'Logs all sensor data (pressure, temp, flow, power) at 1-minute intervals, providing a synchronized dataset for comprehensive analysis.',
    icon: DataAcquisitionIcon,
    items: [
      { name: 'Centralized Data Acquisition System (DAS)', details: 'The central hub for all sensor data logging.' },
    ],
  },
  {
    category: 'Emissions & Flow Measurement',
    purpose: 'The core of direct measurement. Measures VOC concentration (ppm) and volumetric flow rate (m³/min), allowing for direct calculation of mass emissions (kg/day).',
    icon: EmissionsIcon,
    items: [
      { name: 'Thermo Fisher TVA2020 VOC Analyzer', details: 'Utilizes PID/FID technology.' },
      { name: 'Ultrasonic Gas Flow Meter', details: 'Measures volumetric flow in the vent pipe.' },
    ],
  },
  {
    category: 'Tank Inventory Monitoring',
    purpose: 'Provides independent, mass-balance validation of vapor loss/recovery via high-resolution (0.01mm) level tracking and temperature-corrected volume reconciliation.',
    icon: TankMonitoringIcon,
    items: [
      { name: 'High-Precision ATG', details: 'e.g., Veeder-Root TLS-450PLUS' },
    ],
  },
  {
    category: 'Ancillary Monitoring Suite',
    purpose: 'Quantifies total operational footprint. Measures energy use (kWh), noise levels (dBA), and thermal output (°C) for a full cost-of-ownership and environmental impact assessment.',
    icon: AncillaryMonitoringIcon,
    items: [
      { name: 'Revenue-Grade Power Meter', details: 'Tracks energy consumption (kWh).' },
      { name: 'Type 1 Sound Level Meter', details: 'Monitors noise levels (dBA).' },
      { name: 'Thermal Imager/Thermocouples', details: 'Measures thermal output (°C).' },
    ],
  },
  {
    category: 'Atmospheric Monitoring',
    purpose: 'Records ambient temperature, barometric pressure, solar radiation, and wind. Essential for normalizing emissions data and ensuring true "apples-to-apples" comparisons.',
    icon: AtmosphericIcon,
    items: [
      { name: 'On-site Weather Station', details: 'Provides critical environmental context.' },
    ],
  },
  {
    category: 'Fuel Quality Analysis',
    purpose: 'Performs ASTM standard tests (RVP, Octane, Distillation) to verify the quality of recovered gasoline and ensure the final blended product remains within BAPCO specifications.',
    icon: FuelQualityIcon,
    items: [
      { name: 'Access to Certified Laboratory', details: 'For ASTM standard fuel testing.' },
    ],
  },
];
