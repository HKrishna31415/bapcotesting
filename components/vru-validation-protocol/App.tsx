
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SectionWrapper from './components/SectionWrapper';
import Accordion from './components/Accordion';
import type { NavItem } from './types';

import {
    executiveSummaryData,
    objectivesData,
    principlesData,
    equipmentData,
    protocolData,
    methodologiesData,
    dataMatrixData,
    scenariosData,
    safetyData,
    verificationData,
    roiData,
    deliverablesData,
    appendicesData
} from './constants';

const sections: NavItem[] = [
    { id: 'summary', title: 'Summary' },
    { id: 'objectives', title: 'Objectives' },
    { id: 'principles', title: 'Principles' },
    { id: 'equipment', title: 'Equipment' },
    { id: 'protocol', title: 'Protocol' },
    { id: 'methodologies', title: 'Methods' },
    { id: 'safety', title: 'Safety' },
    { id: 'roi', title: 'ROI' },
    { id: 'deliverables', title: 'Deliverables' },
    { id: 'appendices', title: 'Appendices' },
];

const HeroSection = () => (
    <div className="relative bg-gray-900">
        <div className="absolute inset-0">
            <img className="w-full h-full object-cover opacity-10" src="https://picsum.photos/seed/vru-tech/1920/1080" alt="Industrial background"/>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Definitive Plan for the</span>
                <span className="block text-cyan-400">Stage III VRU Validation</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                An interactive guide to the implementation and holistic validation of a Stage III Vapor Recovery System.
            </p>
        </div>
    </div>
);

const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-gray-800/50 border border-gray-700 rounded-lg p-6 h-full ${className}`}>
        {children}
    </div>
);

const ExecutiveSummarySection = () => (
    <SectionWrapper id="summary" title="Executive Summary" subtitle={executiveSummaryData.purpose}>
        <div className="max-w-5xl mx-auto space-y-8 mt-12">
            <Card>
                <h3 className="font-semibold text-xl text-cyan-400">{executiveSummaryData.measurementApproach.title}</h3>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
                    {executiveSummaryData.measurementApproach.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            </Card>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <h3 className="font-semibold text-xl text-cyan-400">{executiveSummaryData.validationOptions.title}</h3>
                    <div className="mt-4 space-y-4">
                        {executiveSummaryData.validationOptions.options.map(opt => (
                            <div key={opt.name}>
                                <h4 className="font-semibold text-white">{opt.name}</h4>
                                <p className="text-gray-400">{opt.description}</p>
                            </div>
                        ))}
                    </div>
                </Card>
                <Card>
                     <h3 className="font-semibold text-xl text-cyan-400">Key Outcomes & Certification</h3>
                     <p className="mt-4 text-gray-400">{executiveSummaryData.outcomes}</p>
                </Card>
            </div>
        </div>
    </SectionWrapper>
);

const ObjectivesSection = () => (
    <SectionWrapper id="objectives" title="Project Objectives" subtitle={objectivesData.primaryGoal}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {objectivesData.targets.map((target, i) => (
                <Card key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{target.icon}</div>
                    <p className="text-gray-300">{target.text}</p>
                </Card>
            ))}
        </div>
    </SectionWrapper>
);

const PrinciplesSection = () => (
     <SectionWrapper id="principles" title="Scientific Principles of Vapor Loss">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {principlesData.map((principle, i) => (
                <Card key={i} className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700">
                        {principle.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-white">{principle.title}</h3>
                    <p className="mt-2 text-gray-400">{principle.description}</p>
                </Card>
            ))}
        </div>
    </SectionWrapper>
);

const EquipmentSection = () => (
     <SectionWrapper id="equipment" title="System Equipment & Monitoring Hardware">
         <div className="max-w-7xl mx-auto overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Equipment</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Purpose & Role in Validation</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-800/50 divide-y divide-gray-700">
                {equipmentData.map((item, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-black/20' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.category}</td>
                        <td className="px-6 py-4 whitespace-pre-wrap text-sm text-gray-300">{item.equipment}</td>
                        <td className="px-6 py-4 whitespace-pre-wrap text-sm text-gray-400">{item.purpose}</td>
                    </tr>
                ))}
                </tbody>
            </table>
         </div>
    </SectionWrapper>
);

const ProtocolSection = () => (
     <SectionWrapper id="protocol" title="Phased Installation & Validation Protocol" subtitle="A sequential protocol to scientifically isolate and quantify performance. Total on-site duration: ~2 months.">
        <div className="relative max-w-4xl mx-auto mt-16">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700" aria-hidden="true"></div>
            <div className="relative space-y-16">
                {protocolData.map((phase, i) => (
                    <div key={i} className="flex items-start">
                        <div className={`flex-1 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                            <div className="inline-block bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
                                <h3 className="text-xl font-bold text-cyan-400">{phase.name}</h3>
                                <p className="text-sm font-medium text-yellow-300 mt-1">{phase.duration}</p>
                                <p className="mt-3 text-gray-400">{phase.description}</p>
                                {phase.procedure && (
                                    <ul className="mt-3 space-y-1 list-disc list-inside text-gray-400 text-left">
                                        {phase.procedure.map((p, idx) => <li key={idx}>{p}</li>)}
                                    </ul>
                                )}
                                {phase.subPhases && (
                                     <div className="mt-3 space-y-3 text-left">
                                        {phase.subPhases.map((sp, idx) => (
                                            <div key={idx}>
                                                <p className="font-semibold text-gray-200">{sp.title}</p>
                                                <p className="text-sm text-gray-400">{sp.details}</p>
                                            </div>
                                        ))}
                                     </div>
                                )}
                                {phase.deliverable && <p className="mt-3 text-left font-semibold text-white">Deliverable: <span className="font-normal text-gray-300">{phase.deliverable}</span></p>}
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center z-10 order-1">
                           <span className="text-white font-bold text-xl">{i+1}</span>
                        </div>
                         <div className={`flex-1 ${i % 2 === 0 ? 'pl-8' : 'pr-8 order-0'}`}></div>
                    </div>
                ))}
            </div>
        </div>
     </SectionWrapper>
);

const MethodologiesSection = () => (
    <SectionWrapper id="methodologies" title="Detailed Measurement & Analysis Methodologies">
        <Accordion items={methodologiesData} />
        
        <div className="max-w-7xl mx-auto mt-16 space-y-12">
            <div>
                 <h3 className="text-2xl font-bold text-white text-center mb-6">Data Collection Matrix</h3>
                 <div className="overflow-x-auto rounded-lg border border-gray-700">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800">
                            <tr>{dataMatrixData.headers.map(h => <th key={h} scope="col" className="px-4 py-3 text-center text-xs font-medium text-cyan-300 uppercase tracking-wider">{h}</th>)}</tr>
                        </thead>
                        <tbody className="bg-gray-800/50 divide-y divide-gray-700">
                            {dataMatrixData.rows.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-700/50">
                                    {row.map((cell, j) => <td key={j} className={`px-4 py-3 whitespace-nowrap text-sm ${j > 1 ? 'text-center' : 'text-left'} ${j === 0 ? 'font-medium text-white' : 'text-gray-300'}`}>{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
            </div>
            <div>
                 <h3 className="text-2xl font-bold text-white text-center mb-6">Test Scenarios</h3>
                 <div className="overflow-x-auto rounded-lg border border-gray-700">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800">
                            <tr>{scenariosData.headers.map(h => <th key={h} scope="col" className="px-4 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">{h}</th>)}</tr>
                        </thead>
                        <tbody className="bg-gray-800/50 divide-y divide-gray-700">
                            {scenariosData.rows.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-700/50">
                                    {row.map((cell, j) => <td key={j} className={`px-4 py-3 whitespace-pre-wrap text-sm ${j === 0 ? 'font-medium text-white' : 'text-gray-300'}`}>{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
            </div>
        </div>
    </SectionWrapper>
);

const SafetySection = () => (
    <SectionWrapper id="safety" title="Safety and Hazard Management" subtitle="A comprehensive safety plan will be strictly enforced at all times.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {safetyData.map((item, i) => (
                <Card key={i} className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700">{item.icon}</div>
                    <h3 className="mt-6 text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-400">{item.description}</p>
                </Card>
            ))}
        </div>
    </SectionWrapper>
);

const VerificationSection = () => (
     <SectionWrapper id="verification" title="Independent Third-Party Verification" subtitle="To provide an unimpeachable, bankable attestation of the VRU's performance.">
        <div className="relative max-w-3xl mx-auto">
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-700" aria-hidden="true"></div>
             <div className="relative flex justify-between">
                {verificationData.map((item, i) => (
                    <div key={i} className="relative flex flex-col items-center text-center w-1/3 px-2">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-900">
                           <span className="text-white font-bold text-xl">{i + 1}</span>
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-white">{item.name}</h3>
                        <p className="mt-2 text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
     </SectionWrapper>
);

const RoiSection = () => (
    <SectionWrapper id="roi" title="Return on Investment (ROI) Framework">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {roiData.map((item, i) => (
                 <Card key={i} className="flex flex-col text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700">{item.icon}</div>
                    <h3 className="mt-6 text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-400 flex-grow">{item.description}</p>
                </Card>
            ))}
        </div>
    </SectionWrapper>
);

const DeliverablesSection = () => (
     <SectionWrapper id="deliverables" title="Final Deliverables & Conclusion" subtitle="Upon successful completion, BAPCO will receive a complete documentation package and a system that transforms an environmental liability into a verifiable asset.">
        <div className="max-w-2xl mx-auto">
            <Card>
                <h3 className="font-semibold text-xl text-cyan-400">Documentation Package</h3>
                <ul className="mt-4 space-y-3">
                    {deliverablesData.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            </div>
                            <p className="ml-3 text-gray-300">{item}</p>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    </SectionWrapper>
);

const AppendicesSection = () => (
    <SectionWrapper id="appendices" title="Appendices">
        <Accordion items={appendicesData} />
    </SectionWrapper>
);


const App = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id;
            if (visibleSection) {
                setActiveSection(visibleSection);
            }
        }, { rootMargin: '-20% 0px -80% 0px' }); // Trigger when section is in the middle 20% of the viewport

        const elements = sections.map(sec => document.getElementById(sec.id)).filter(el => el);
        elements.forEach((el) => observer.current?.observe(el));
        
        return () => {
            elements.forEach((el) => observer.current?.unobserve(el));
        };
    }, []);

    return (
        <div className="bg-gray-900">
            <Header navItems={sections} activeSection={activeSection} />
            <main>
                <HeroSection />
                <div className="divide-y divide-gray-800">
                    <ExecutiveSummarySection />
                    <ObjectivesSection />
                    <PrinciplesSection />
                    <EquipmentSection />
                    <ProtocolSection />
                    <MethodologiesSection />
                    <SafetySection />
                    <VerificationSection />
                    <RoiSection />
                    <DeliverablesSection />
                    <AppendicesSection />
                </div>
            </main>
            <footer className="bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} BAPCO VRU Validation Project. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
