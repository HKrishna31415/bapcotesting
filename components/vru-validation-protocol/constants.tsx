
import React from 'react';
import { AccordionItem } from './types';

// Heroicons SVG components
const BeakerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
);
const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);
const DocumentTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l8.618-3.04a12.02 12.02 0 008.618-3.04A11.955 11.955 0 0118.382 7.984z" /></svg>
);
const ScaleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
);
const CurrencyDollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1H9.352a3.99 3.99 0 00-3.483 2.146l-.523 1.046m-1.046.523A3.99 3.99 0 003.148 9.352V12m6.292 6.292a3.99 3.99 0 003.483 2.146l.523 1.046m1.046.523a3.99 3.99 0 003.483-2.146V12m-6.292-6.292a3.99 3.99 0 00-3.483-2.146l-.523-1.046m-1.046-.523A3.99 3.99 0 009.352 3.148V6" /></svg>
);
const GlobeAltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>
);
const WrenchScrewdriverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.495-2.495a1.5 1.5 0 012.122 0l2.12 2.12a1.5 1.5 0 010 2.122l-2.495 2.495M3 12l6.42-6.42a1.5 1.5 0 012.122 0l2.12 2.12a1.5 1.5 0 010 2.122L3 12zM3 12l6.42-6.42a1.5 1.5 0 012.122 0l2.12 2.12a1.5 1.5 0 010 2.122L3 12zM3 12h.01M12 3h.01" /></svg>
);
const LightBulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
);
const CloudArrowDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 17l-4-4m4 4l4-4m-4 4v-9" /></svg>
);
const CogIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const LockClosedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);
const FireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12.5l3 3m0 0l3-3m-3 3v-3m-1.414-1.414a2 2 0 112.828 2.828L12 17.5V12.5z" /></svg>
);
const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);
const ClipboardDocumentCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2.586l-6.293-6.293A1 1 0 0012.293 4.414V2.5a1 1 0 00-1-1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8.707a1 1 0 00-.293-.707z" /></svg>
);
const CpuChipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m3.75 3.75H21m-3.75 8.25H21M15.75 21v-1.5m-7.5-3.75h1.5v-1.5h-1.5v1.5zm-3.75-3.75h1.5v-1.5h-1.5v1.5zm7.5 0h1.5v-1.5h-1.5v1.5zm3.75-3.75h1.5v-1.5h-1.5v1.5zm0-3.75h1.5v-1.5h-1.5v1.5zm-3.75 0h1.5v-1.5h-1.5v1.5zm-3.75-3.75h1.5v-1.5h-1.5v1.5zm7.5 0h1.5v-1.5h-1.5v1.5zm-3.75-3.75h1.5v-1.5h-1.5v1.5z" /></svg>
);

const Formula = ({ children }: { children: React.ReactNode }) => (
    <div className="my-4 p-4 bg-gray-900 border border-gray-700 rounded-lg">
        <code className="text-cyan-300 text-sm md:text-base whitespace-pre-wrap">{children}</code>
    </div>
);

// Data for each section
export const executiveSummaryData = {
    purpose: "This document presents a definitive protocol for the implementation and holistic validation of a Stage III Vapor Recovery Unit (VRU) at BAPCO facilities. Our plan is engineered to move beyond simple installation and deliver unequivocal, third-party certified proof of performance. The core of this validation is a rigorous, phased testing protocol designed to scientifically quantify the system's primary benefits—emissions reduction and revenue generation—while also assessing its complete operational footprint, including energy consumption, acoustic levels, and thermal output.",
    measurementApproach: {
        title: "Three-Pronged Measurement Approach",
        points: [
            "Direct Vent Measurement: Using a VOC analyzer and flow meter to directly quantify the mass of hydrocarbons emitted from vent stacks.",
            "Product Recovery Metering: Using a calibrated flow meter to precisely measure the volume of gasoline recovered by the VRU, directly quantifying the system's revenue stream.",
            "Inventory Reconciliation: Using high-precision Automatic Tank Gauging (ATG) data as an independent, mass-balance validation of evaporative losses and recovery efficiency."
        ]
    },
    validationOptions: {
        title: "Validation Options: Gold vs. Silver Standard",
        options: [
            {
                name: "Option A (Gold Standard)",
                description: "Continuous, on-site deployment of a primary VOC analyzer for real-time, direct measurement throughout the entire project, offering the highest possible data resolution."
            },
            {
                name: "Option B (Silver Standard)",
                description: "A highly cost-effective alternative that uses an intensive, short-term rental of the primary analyzer to build a robust, lab-calibrated proxy model, which is then used for the duration of the test."
            }
        ]
    },
    outcomes: "Both pathways culminate in a comprehensive audit and certification by a globally recognized third-party agency (e.g., Intertek, SGS, Bureau Veritas). This will provide BAPCO with a certified, data-driven confirmation of its environmental stewardship, a clear financial analysis of the project's total cost of ownership and return on investment, and the transformation of an environmental liability into a verifiable asset."
};

export const objectivesData = {
    primaryGoal: "The primary objective is to successfully install and scientifically validate the Stage III VRU system.",
    targets: [
        {
            icon: <ChartBarIcon />,
            text: "Quantify Baseline Emissions: Establish the current VOC emission rate (kg/day) from the existing Stage I and Stage II systems."
        },
        {
            icon: <CheckCircleIcon />,
            text: "Verify VRU Efficiency: Prove the VRU achieves a VOC recovery and destruction efficiency of ≥98%."
        },
        {
            icon: <CurrencyDollarIcon />,
            text: "Measure Recovered Revenue: Accurately meter the volume (liters/day) of gasoline recovered and confirm its quality."
        },
        {
            icon: <CloudArrowDownIcon />,
            text: "Confirm Pressure Management: Demonstrate the VRU's ability to maintain a slight negative pressure within the UST system."
        },
        {
            icon: <GlobeAltIcon />,
            text: "Validate Air Quality Improvement: Measure a statistically significant reduction in ambient BTEX concentrations."
        },
        {
            icon: <ScaleIcon />,
            text: "Assess Total Operational Footprint: Quantify energy consumption, acoustic signature, and thermal output."
        },
        {
            icon: <DocumentTextIcon />,
            text: "Achieve Independent Certification: Secure a formal Certificate of Performance from a reputable third-party agency."
        }
    ]
};

export const principlesData = [
    {
        icon: <LightBulbIcon />,
        title: "Diurnal Breathing Losses",
        description: "Daily ambient temperature cycles cause gasoline and vapor in the ullage to expand and contract. This pressure change, governed by the Ideal Gas Law (PV=nRT), can exceed the P/V valve's setting, venting hydrocarbon vapors."
    },
    {
        icon: <WrenchScrewdriverIcon />,
        title: "Displacement Losses (Stage I & II)",
        description: "Vapor is displaced and vented during tanker unloading (Stage I) as fuel enters the UST, and during vehicle refueling (Stage II) as vapor is pushed from the vehicle's tank back into the UST."
    },
    {
        icon: <CogIcon />,
        title: "The Role of the Stage III VRU",
        description: "The Stage III VRU creates a closed-loop system. It actively draws down ullage pressure, pulling hydrocarbon-laden vapor into the unit for processing and recovery before it can be vented, eliminating both breathing and displacement losses."
    },
    {
        icon: <BeakerIcon />,
        title: "Impact of Vapor Manifolding",
        description: "Manifolding USTs into a common vapor space increases the total ullage volume, which amplifies the diurnal breathing effect and typically leads to higher baseline emissions. Our test plan is designed to specifically measure this effect."
    }
];

export const equipmentData = [
    { category: "Primary Equipment", equipment: "GEVLR-3 (or equivalent) Hybrid VRU", purpose: "Hybrid (refrigeration + carbon) technology ensures ≥98% VOC recovery. PLC provides operational control and data output for performance analysis. Sized with 25% surplus capacity for peak loads." },
    { category: "Vapor Manifolding", equipment: "4-inch double-walled FRP piping & CARB-certified P/V valves (e.g., Phil-Tite 880)", purpose: "Creates a common vapor space for the VRU to manage. Certified valves ensure system integrity and provide a known pressure relief point for baseline testing." },
    { category: "Data Acquisition & Control", equipment: "Centralized Data Acquisition System (DAS)", purpose: "Logs all sensor data (pressure, temp, flow, power) at 1-minute intervals, providing a synchronized dataset for comprehensive analysis." },
    { category: "Emissions & Flow Measurement", equipment: "- Thermo Fisher TVA2020 VOC Analyzer\n- PID/FID\n- Ultrasonic Gas Flow Meter", purpose: "The core of direct measurement. Measures VOC concentration (ppm) and volumetric flow rate (m³/min) in the vent pipe, allowing for direct calculation of mass emissions (kg/day)." },
    { category: "Tank Inventory Monitoring", equipment: "High-Precision ATG (e.g., Veeder-Root TLS-450PLUS)", purpose: "Provides independent, mass-balance validation of vapor loss/recovery via high-resolution (0.01mm) level tracking and temperature-corrected volume reconciliation." },
    { category: "Ancillary Monitoring Suite", equipment: "- Revenue-Grade Power Meter\n- Type 1 Sound Level Meter\n- Thermal Imager/Thermocouples", purpose: "Quantifies total operational footprint. Measures energy use (kWh), noise levels (dBA), and thermal output (°C) for a full cost-of-ownership and environmental impact assessment." },
    { category: "Atmospheric Monitoring", equipment: "On-site Weather Station", purpose: "Records ambient temperature, barometric pressure, solar radiation, and wind. Essential for normalizing emissions data and ensuring true 'apples-to-apples' comparisons between test periods." },
    { category: "Fuel Quality Analysis", equipment: "Access to Certified Laboratory", purpose: "Performs ASTM standard tests (RVP, Octane, Distillation) to verify the quality of recovered gasoline and ensure the final blended product remains within BAPCO specifications." }
];

export const protocolData = [
    {
        name: "Phase 1: Pre-Modification Baseline",
        duration: "7 Days | Current State",
        description: "This phase maps the station's existing emission profile with separate vents.",
        procedure: [
            "System Integrity Verification: Confirm the baseline system is leak-free by conducting and passing the tests outlined in TP-201.1 & TP-201.3.",
            "Continuously log UST pressure and measure VOC mass emissions from each individual vent pipe.",
            "Conduct initial Air Quality (BTEX) and Odor Panel assessments."
        ],
        deliverable: "Baseline total VOC mass emitted (kg/day) for the current, un-manifolded system."
    },
    {
        name: "Phase 2: Post-Manifolding Baseline",
        duration: "7 Days | VRU Installed but OFF",
        description: "This phase quantifies the impact of creating a common vapor space.",
        procedure: [
            "After manifolding the tanks to a common vent stack, re-run the Static Pressure Integrity Test (TP-201.1).",
            "Log pressure and measure VOC emissions from the new single vent stack."
        ],
        deliverable: "A new, higher baseline for VOC emissions (kg/day), demonstrating the amplified diurnal breathing effect of a manifolded system. This serves as the true 'before' state for the VRU."
    },
    {
        name: "Phase 3: Stage III VRU Performance & Stress Testing",
        duration: "30 Days",
        description: "This is the core of the validation, testing the fully integrated system under controlled conditions.",
        subPhases: [
            {
                title: "3A: System Stabilization & 'Neat' Fuel Sample Collection (7 Days)",
                details: "The VRU runs continuously to establish a stable pressure equilibrium. All recovered gasoline is diverted to a temporary external tank to collect a 'neat' (unblended) sample of the recovered liquid for comprehensive laboratory analysis."
            },
            {
                title: "3B: High-Frequency Alternating Interval Test (14 Days)",
                details: "The system will operate on a repeating 48-hour cycle (24h ON, 24h OFF). This provides directly paired 'On' and 'Off' days, enabling a highly accurate, irrefutable comparison by minimizing the influence of weather variability."
            },
            {
                title: "3C: Continuous Operation & Peak Load Stress Test (9 Days)",
                details: "The VRU is returned to continuous operation. A planned tanker fuel delivery will be conducted with the Stage I vapor return hose intentionally disconnected, forcing the VRU to process 100% of the high-volume vapor displacement. This tests the unit's peak processing capacity and validates the quality of the final blended fuel."
            }
        ]
    }
];

export const methodologiesData: AccordionItem[] = [
    {
        title: "VOC Emissions Measurement & Calculation",
        defaultOpen: true,
        content: (
            <div className="space-y-4">
                <p>Emissions are calculated via two potential pathways, offering a balance of ultimate precision and cost-effectiveness.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-800/50 border border-yellow-400/50 rounded-lg">
                        <h4 className="font-semibold text-lg text-yellow-300">Option A: "Gold Standard"</h4>
                        <p className="text-gray-400 mt-2">The primary VOC analyzer (TVA2020) and ultrasonic flow meter are deployed for the entire project. Mass Emissions (kg/day) are calculated directly by multiplying real-time VOC concentration by the real-time volumetric flow rate. This offers the highest possible data accuracy.</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 border border-gray-500/50 rounded-lg">
                        <h4 className="font-semibold text-lg text-gray-300">Option B: "Silver Standard"</h4>
                        <p className="text-gray-400 mt-2">A cost-effective approach using the primary analyzer for a shorter period to build a mathematical correlation between easily measured parameters (pressure, flow) and VOC concentration. For the rest of the test, cheaper sensors run, and the lab-calibrated proxy model estimates mass emissions.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Recovered Gasoline Quality Assurance Protocol",
        content: (
            <ol className="list-decimal list-inside space-y-2">
                <li><span className="font-semibold">Neat Sample Characterization:</span> The initial sample of recovered liquid is sent to a certified lab for a full analysis against ASTM standards: RVP, Octane (RON/MON), Distillation Curve, Gravity, and Corrosion.</li>
                <li><span className="font-semibold">Laboratory Blend Simulation:</span> Using results from Phase 1, the lab mathematically models and tests various blends of source gasoline and recovered liquid (e.g., 99:1, 95:5) to confirm the final product remains within BAPCO's specifications.</li>
                <li><span className="font-semibold">In-Situ UST Monitoring:</span> Once lab tests confirm negligible impact, the return line is connected. Weekly dispenser samples are tested for RVP and octane for final, real-world confirmation.</li>
            </ol>
        )
    },
    {
        title: "High-Precision Inventory Reconciliation (Mass-Balance Validation)",
        content: (
            <div className="space-y-4">
                <p>This provides an independent, mass-balance validation of vapor loss. The actual change in volume measured by the ATG (ΔV_total) overnight is the sum of volume change from thermal contraction (ΔV_thermal) and volume lost to evaporation (V_loss).</p>
                <Formula>V_loss = ΔV_total - ΔV_thermal</Formula>
                <p>Where ΔV_thermal is calculated as:</p>
                <Formula>ΔV_thermal = V_initial × β × (T_final - T_initial)</Formula>
                <p>β is the coefficient of thermal expansion for gasoline (~0.00095 /°C).</p>
            </div>
        )
    },
    {
        title: "Ancillary System Performance Metrics",
        content: (
             <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-lg text-cyan-300">Energy Consumption & Efficiency Analysis</h4>
                    <p className="mt-2 text-gray-400">A dedicated, revenue-grade power meter on the VRU's supply will continuously log power consumption (kW) and total energy usage (kWh). We will isolate Idle/Standby, Normal Operation, and Peak Load power draw.</p>
                    <p className="mt-2 text-gray-400 font-semibold">Key KPI: <span className="text-white">Energy Intensity of Recovery (kWh consumed per liter recovered)</span>.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-cyan-300">Acoustic & Thermal Footprint Assessment</h4>
                    <p className="mt-2 text-gray-400"><span className="font-semibold text-white">Acoustic:</span> Using a Type 1 Sound Level Meter, measure dBA levels at standardized distances (1m, 3m, 10m, property line) during idle and peak operation.</p>
                    <p className="mt-2 text-gray-400"><span className="font-semibold text-white">Thermal:</span> Use a thermal imaging camera to measure temperature (°C) of the chassis, cooling system, and exhaust to ensure operation within design limits.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg text-cyan-300">Data & Connectivity Integrity</h4>
                    <p className="mt-2 text-gray-400">Validates the reliability of the remote monitoring and control system. The central server will continuously "ping" the VRU's PLC to log the success rate and latency of data transmission and responsiveness to commands.</p>
                    <p className="mt-2 text-gray-400 font-semibold">Metrics: <span className="text-white">Data Packet Success Rate (%), Average Latency (ms), Time to Start/Stop.</span></p>
                </div>
            </div>
        )
    },
    {
        title: "Data Normalization for Ambient Conditions",
        content: (
            <div className="space-y-4">
                <p>To ensure a true "apples-to-apples" comparison, all emissions data will be normalized using established EPA AP-42 models.</p>
                <h4 className="font-semibold text-lg text-cyan-300">True Vapor Pressure (TVP) & The Antoine Equation</h4>
                <p>The primary driver for evaporation is TVP, modeled with our lab-determined constants:</p>
                <Formula>log₁₀(P_vap) = A - (B / (C + T_liq))</Formula>
                <h4 className="font-semibold text-lg text-cyan-300">EPA AP-42 Emission Model (Standing & Working Losses)</h4>
                <p>Standing Storage Loss (Diurnal Breathing):</p>
                <Formula>L_S = 365 ⋅ V_V ⋅ W_V ⋅ K_E ⋅ K_S</Formula>
                <p>Working Loss (Filling/Emptying):</p>
                <Formula>L_W = K_N ⋅ V ⋅ P ⋅ W_V / (R ⋅ T_LA)</Formula>
            </div>
        )
    },
    {
        title: "Field Olfactometry (Odor Panel) Protocol",
        content: <p>A trained panel will scientifically quantify odor intensity on a standardized 0-5 scale at pre-defined locations. This provides a clear, defensible metric for community impact reduction, reported as a percentage reduction in odor intensity at the property line.</p>
    }
];

export const dataMatrixData = {
    headers: ["Metric Category", "Parameter", "Scenario A", "B", "C", "D"],
    rows: [
        ["Emissions", "VOC Mass (kg/day)", "✔️", "✔️", "✔️", "✔️"],
        ["Air Quality", "Perimeter BTEX (μg/m³)", "✔️", "✔️", "✔️", "✔️"],
        ["Odor", "Olfactometry Panel (Intensity)", "✔️", "✔️", "✔️", "✔️"],
        ["Pressure", "UST System Pressure (\"H₂O)", "✔️", "✔️", "✔️", "✔️"],
        ["Energy", "VRU Power Draw (kWh)", "N/A", "N/A", "✔️", "✔️"],
        ["Acoustics", "Decibel Level (dB)", "N/A", "N/A", "✔️", "✔️"],
        ["Thermal", "VRU Exhaust Temp (°C)", "N/A", "N/A", "✔️", "✔️"],
        ["Connectivity", "Data Packet Success Rate (%)", "N/A", "N/A", "✔️", "✔️"],
        ["Revenue", "Gasoline Recovered (Liters)", "N/A", "N/A", "✔️", "✔️"],
        ["Inventory Loss", "Temp-Corrected Volume Change (Liters)", "✔️", "✔️", "✔️", "✔️"]
    ]
};

export const scenariosData = {
    headers: ["Scenario", "Description", "Stage I (Tanker Drop)", "VRU (Stage III)", "Purpose"],
    rows: [
        ["A: Worst-Case Baseline", "A tanker fuel drop is performed.", "Vapor hose disconnected", "OFF", "To quantify maximum uncontrolled vapor displacement."],
        ["B: Standard Baseline", "Normal station operation.", "N/A (No drop)", "OFF", "To quantify baseline emissions from Stage I/II during daily operations."],
        ["C: VRU Stress Test", "A tanker fuel drop is performed.", "Vapor hose disconnected", "ON", "To prove VRU peak capacity during a simulated Stage I failure."],
        ["D: Full System Operation", "Normal station operation.", "N/A (No drop)", "ON", "To quantify final near-zero emissions and stable negative pressure."]
    ]
};

export const safetyData = [
    { icon: <DocumentTextIcon />, title: "Permit-to-Work & JSA", description: "A detailed Job Safety Analysis will be completed and approved for each phase of work." },
    { icon: <LockClosedIcon />, title: "Lockout-Tagout (LOTO)", description: "Strict LOTO procedures will be implemented for all electrical and mechanical work." },
    { icon: <FireIcon />, title: "ATEX/IECEx Certification", description: "All equipment in hazardous locations will be certified for use in explosive atmospheres." },
    { icon: <UserGroupIcon />, title: "Personnel Training & ERP", description: "BAPCO staff will receive full training on safe operation, and the site Emergency Response Plan will be updated." }
];

export const verificationData = [
    { name: "Independent Audit", description: "BAPCO will select a reputable agency (e.g., Intertek, SGS, Bureau Veritas) to independently audit all data, methodologies, and findings." },
    { name: "Data Review", description: "The agency will be provided with the complete raw dataset and final report for a comprehensive review." },
    { name: "Certification", description: "Upon successful review, the agency will issue a formal Certificate of Performance, serving as an unimpeachable, bankable attestation of the VRU's performance." }
];

export const roiData = [
    { icon: <CurrencyDollarIcon />, title: "Direct Revenue", description: "Value of verifiably recovered gasoline (liters/day x market price)." },
    { icon: <ChartBarIcon />, title: "Operational Cost Analysis", description: "Precise electrical cost of operation (kWh/day x tariff), leading to a net profit calculation." },
    { icon: <GlobeAltIcon />, title: "ESG & Intangible Value", description: "Certified proof of emission reductions enhances corporate reputation, ESG ratings, and social license to operate." },
    { icon: <ShieldCheckIcon />, title: "Regulatory Compliance", description: "Ensures compliance with current and future environmental regulations, avoiding potential fines." }
];

export const deliverablesData = [
    "Baseline Emissions & System Integrity Report",
    "Full Performance Verification Report",
    "Fuel Quality Assurance Dossier",
    "Operational Cost & ROI Analysis",
    "The official signed Third-Party Certificate of Performance",
    "Operations & Maintenance Manuals and full as-built documentation",
    "On-site training for BAPCO personnel"
];

const LedTesterContent = () => (
    <div className="space-y-4 text-gray-400">
        <p>A simple LED wiremap tester is a two-piece tool to check the physical integrity of an Ethernet cable.</p>
        <h5 className="font-semibold text-gray-200">How to Use:</h5>
        <ol className="list-decimal list-inside space-y-2 pl-4">
            <li><span className="font-semibold">Disconnect Cable:</span> Unplug from both ends.</li>
            <li><span className="font-semibold">Connect Tester:</span> Plug one end into the main unit and the other into the remote.</li>
            <li><span className="font-semibold">Turn On:</span> The tester sends signals down each of the 8 wires.</li>
        </ol>
        <h5 className="font-semibold text-gray-200">Interpreting Lights:</h5>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li><span className="font-semibold text-green-400">Perfect Cable:</span> Lights blink in sequence (1-8) on both units.</li>
            <li><span className="font-semibold text-red-400">Open Circuit (Broken Wire):</span> A number is skipped in the sequence.</li>
            <li><span className="font-semibold text-red-400">Short Circuit (Wires Touching):</span> Two or more lights blink simultaneously.</li>
            <li><span className="font-semibold text-yellow-400">Crossed Pair:</span> Sequence is normal on main unit but out of order on the remote (e.g., 1, 3, 2).</li>
        </ul>
    </div>
);

const SignalCheckContent = () => (
    <div className="space-y-4 text-gray-400">
        <p>For a live network, a multi-step check verifies connectivity and performance.</p>
        <ol className="list-decimal list-inside space-y-3 pl-2">
            <li>
                <h5 className="font-semibold text-gray-200">Step 1: Physical Check (Link Lights)</h5>
                <p>Look at the LED lights on the switch/repeater ports.</p>
                <ul className="list-disc list-inside space-y-1 pl-6 mt-2">
                    <li><span className="font-semibold text-green-400">Solid/Blinking Green:</span> Good link, data is flowing.</li>
                    <li><span className="font-semibold text-yellow-400">Solid Amber/Orange:</span> Link established, but at a lower speed (e.g., 100 Mbps).</li>
                    <li><span className="font-semibold text-red-400">No Light:</span> No connection. Check cables and power.</li>
                </ul>
            </li>
            <li>
                <h5 className="font-semibold text-gray-200">Step 2: Connectivity Check (Ping)</h5>
                <p>Confirms data can travel end-to-end. From a laptop on the network, ping the IP address of the vapor recovery machine. If you get replies, the basic connection is solid.</p>
            </li>
            <li>
                <h5 className="font-semibold text-gray-200">Step 3: Performance Check (Speed Test)</h5>
                <p>To test actual throughput, use a tool like <code className="bg-gray-700 px-1 rounded">iperf3</code>. This measures real-world data transfer speed across the network, including any extenders, to identify performance bottlenecks.</p>
            </li>
        </ol>
    </div>
);


export const appendicesData: AccordionItem[] = [
    {
        title: "CARB Test Procedure Excerpts (TP-201.1 & TP-201.3)",
        content: (
            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-lg text-cyan-300">TP-201.1: Static Pressure Integrity Test</h4>
                    <p className="mt-2 text-gray-400">Verifies that the entire UST vapor containment system can hold pressure without leaking.</p>
                    <ol className="list-decimal list-inside space-y-1 pl-4 mt-2 text-gray-400">
                        <li><span className="font-semibold">System Isolation:</span> Vents are sealed, P/V valves bypassed.</li>
                        <li><span className="font-semibold">Pressurization:</span> System is slowly pressurized to +2.0" H₂O with Nitrogen.</li>
                        <li><span className="font-semibold">Stabilization & Monitoring:</span> After stabilization, pressure is monitored for 5 minutes with a high-resolution manometer.</li>
                        <li><span className="font-semibold">Pass/Fail:</span> System passes if pressure drop is less than the allowable threshold for the given ullage volume.</li>
                    </ol>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg text-cyan-300">TP-201.3: Static Torque of Rotatable Fittings Test</h4>
                    <p className="mt-2 text-gray-400">Ensures that rotatable fittings (e.g., swivels) maintain a seal under stress.</p>
                     <ol className="list-decimal list-inside space-y-1 pl-4 mt-2 text-gray-400">
                        <li><span className="font-semibold">Isolation & Pressurization:</span> The specific fitting is isolated and pressurized to +2.0" H₂O.</li>
                        <li><span className="font-semibold">Torque Application:</span> A specified torque is applied, and the fitting is rotated.</li>
                        <li><span className="font-semibold">Leak Detection:</span> A soap bubble solution is applied to check for leaks during rotation.</li>
                        <li><span className="font-semibold">Pass/Fail:</span> The fitting passes if no bubbles form.</li>
                    </ol>
                </div>
            </div>
        )
    },
    {
        title: "Hardware Test: LED Tester",
        content: <LedTesterContent />
    },
    {
        title: "Connectivity Test: Signal Check",
        content: <SignalCheckContent />
    },
    {
        title: "Signal Attenuation Suite (CAT6 Certification)",
        content: (
            <div className="space-y-4">
                 <p className="text-gray-400">To guarantee long-term stability of wired data connections, we use a three-phase certification protocol for mission-critical CAT6 cabling.</p>
                <div className="p-4 bg-gray-800/50 border border-yellow-400/50 rounded-lg">
                    <h4 className="font-semibold text-lg text-yellow-300">Gold Standard: Certification</h4>
                    <p className="text-gray-400 mt-2">This is not a simple connectivity check. We use a specialized tool (e.g., Fluke DSX CableAnalyzer) to compare the cable's performance against TIA/EIA-568 standards, providing a definitive PASS/FAIL result. This is required for mission-critical infrastructure.</p>
                </div>
                 <h4 className="font-semibold text-lg text-cyan-300 pt-4">Phase 1: Physical Inspection</h4>
                 <ul className="list-disc list-inside space-y-1 pl-4 text-gray-400">
                    <li><span className="font-semibold">Path Inspection:</span> Ensure cable is not routed alongside high-voltage power lines.</li>
                    <li><span className="font-semibold">Bend Radius:</span> Check for sharp kinks that damage internal structure.</li>
                    <li><span className="font-semibold">Jacket Integrity:</span> Check for nicks, cuts, or abrasions.</li>
                    <li><span className="font-semibold">Termination Quality:</span> Visually inspect RJ45 connectors for proper twist maintenance.</li>
                 </ul>
                 <h4 className="font-semibold text-lg text-cyan-300 pt-4">Phase 2: Cable Certification (The Core Test)</h4>
                 <p className="text-gray-400">Using a certification tool, a full "AUTOTEST" is performed, measuring all critical parameters against CAT6 standards:</p>
                 <ul className="list-disc list-inside space-y-1 pl-4 text-gray-400">
                    <li><span className="font-semibold">Insertion Loss (Attenuation):</span> Signal loss over the cable length.</li>
                    <li><span className="font-semibold">NEXT (Near-End Crosstalk):</span> Signal bleed between wire pairs.</li>
                    <li><span className="font-semibold">Return Loss (RL):</span> Signal reflected back toward the transmitter.</li>
                    <li><span className="font-semibold">And more:</span> Wire Map, Length, ACR-F, PSNEXT, Propagation Delay, etc.</li>
                 </ul>
                 <p className="text-gray-400 font-medium">A "PASS" result guarantees the physical link meets performance requirements for Gigabit Ethernet.</p>
                 <h4 className="font-semibold text-lg text-cyan-300 pt-4">Phase 3: Active Network Performance (Stress Test)</h4>
                 <p className="text-gray-400">Once certified, the cable is tested with actual data traffic using software like <code className="bg-gray-700 px-1 rounded">iperf3</code> to saturate the link and monitor for bandwidth consistency and retransmissions, ensuring it performs under load.</p>
            </div>
        )
    }
];
