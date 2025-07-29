
import React, { useState, useEffect, useCallback } from 'react';
import { AnimationStep, TestStatus, TestResult } from './types';
import { Tank } from './components/Tank';
import { TestItem } from './components/TestItem';
import { BenefitCard } from './components/BenefitCard';
import { 
  BeakerIcon, 
  DropletIcon, 
  MicroscopeIcon, 
  LayersIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  CheckCircleIcon,
  XCircleIcon 
} from './components/IconComponents';

const initialTests: TestResult[] = [
  { id: 'water', name: 'Water Content', status: TestStatus.PENDING, description: 'Detects presence of water.' },
  { id: 'particulates', name: 'Particulate Matter', status: TestStatus.PENDING, description: 'Checks for solid contaminants.' },
  { id: 'phase', name: 'Phase Separation', status: TestStatus.PENDING, description: 'Ensures fuel stability.' },
  { id: 'astm', name: 'ASTM D4814 Standards', status: TestStatus.PENDING, description: 'Verifies against industry specs.' },
];

const benefits = [
    {
      icon: <BeakerIcon className="w-8 h-8"/>,
      title: "Laboratory-Grade Analysis",
      description: "Our automated process simulates precise laboratory analysis of your recovered fuel for any contaminants."
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8"/>,
      title: "Inventory Protection",
      description: "We guarantee the protection of your entire fuel inventory from cross-contamination."
    },
    {
      icon: <DocumentTextIcon className="w-8 h-8"/>,
      title: "Detailed Purity Report",
      description: "Receive a comprehensive report on fuel purity and actionable recommendations."
    }
];

const App: React.FC = () => {
  const [step, setStep] = useState<AnimationStep>(AnimationStep.IDLE);
  const [tests, setTests] = useState<TestResult[]>(initialTests);
  const [report, setReport] = useState<string>('');
  const [isFlowing, setIsFlowing] = useState<boolean>(false);

  const updateTestStatus = (id: string, status: TestStatus) => {
    setTests(prevTests => prevTests.map(t => t.id === id ? { ...t, status } : t));
  };
  
  const handleStart = () => {
    setStep(AnimationStep.SAMPLING);
  };

  const handleReset = () => {
    setStep(AnimationStep.IDLE);
    setTests(initialTests);
    setReport('');
    setIsFlowing(false);
  };

  const runAnimationSequence = useCallback(async () => {
    switch (step) {
      case AnimationStep.SAMPLING:
        setTimeout(() => setStep(AnimationStep.TESTING_WATER), 2000);
        break;
      case AnimationStep.TESTING_WATER:
        updateTestStatus('water', TestStatus.TESTING);
        setTimeout(() => {
          updateTestStatus('water', TestStatus.PASS);
          setStep(AnimationStep.TESTING_PARTICULATES);
        }, 2000);
        break;
      case AnimationStep.TESTING_PARTICULATES:
        updateTestStatus('particulates', TestStatus.TESTING);
        setTimeout(() => {
          updateTestStatus('particulates', TestStatus.PASS);
          setStep(AnimationStep.TESTING_PHASE_SEPARATION);
        }, 2000);
        break;
      case AnimationStep.TESTING_PHASE_SEPARATION:
        updateTestStatus('phase', TestStatus.TESTING);
        setTimeout(() => {
            updateTestStatus('phase', TestStatus.PASS);
            setStep(AnimationStep.ANALYZING_ASTM);
        }, 2000);
        break;
      case AnimationStep.ANALYZING_ASTM:
        updateTestStatus('astm', TestStatus.TESTING);
        setTimeout(() => {
          updateTestStatus('astm', TestStatus.PASS);
          setStep(AnimationStep.GENERATING_REPORT);
        }, 2000);
        break;
      case AnimationStep.GENERATING_REPORT: {
        const staticReport = `*****************************************
** RECOVERED GASOLINE PURITY REPORT **
*****************************************

DATE:     ${new Date().toISOString().split('T')[0]}
BATCH ID: REC-2024-07-29-A1
STATUS:   CERTIFIED FOR TRANSFER

-----------------------------------------
I. EXECUTIVE SUMMARY
-----------------------------------------
The recovered gasoline sample has passed all
quality assurance tests and meets ASTM D4814
specifications. The fuel is deemed pure,
stable, and free of significant
contaminants. It is certified for
transfer to the main storage tank.

-----------------------------------------
II. DETAILED ANALYSIS RESULTS
-----------------------------------------

[✔] Water Content:          PASS
    - Result: < 0.05%
    - Method: Karl Fischer Titration

[✔] Particulate Matter:     PASS
    - Result: < 4 mg/L
    - Method: Microscopic Analysis

[✔] Phase Separation:       PASS
    - Result: Stable
    - Method: Visual Inspection

[✔] ASTM D4814 Compliance:  PASS
    - All key parameters conform.

-----------------------------------------
III. RECOMMENDATION
-----------------------------------------
Proceed with transfer of recovered fuel.
No further action is required.
`;
        setTimeout(() => {
          setReport(staticReport);
          const finalResults = tests.map(t => t.id === 'astm' ? {...t, status: TestStatus.PASS} : t);
          const allTestsPass = finalResults.every(t => t.status === TestStatus.PASS);
          if (allTestsPass) {
              setStep(AnimationStep.TRANSFERRING_FUEL);
          } else {
              setStep(AnimationStep.FAILED);
          }
        }, 2000);
        break;
      }
      case AnimationStep.TRANSFERRING_FUEL:
        setIsFlowing(true);
        setTimeout(() => setStep(AnimationStep.COMPLETED), 3000);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);


  useEffect(() => {
    if(step > AnimationStep.IDLE && step < AnimationStep.TRANSFERRING_FUEL) {
        runAnimationSequence();
    } else if (step === AnimationStep.TRANSFERRING_FUEL) {
        setIsFlowing(true);
        setTimeout(() => setStep(AnimationStep.COMPLETED), 3500);
    }
  }, [step, runAnimationSequence]);


  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-8 text-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-blue-300">Recovered Gasoline Quality Assurance</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            An automated simulation ensuring recovered fuel meets ASTM standards before returning to the main tank.
          </p>
        </header>

        {/* Main Animation and Control Section */}
        <div className="relative bg-black/20 p-8 rounded-xl border border-slate-700 shadow-2xl shadow-blue-500/10 mb-12">
            <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
                <Tank label="Main Tank" fuelLevel={80} isContaminated={false} />
                
                <div className="relative w-full md:w-1/3 h-24 flex items-center justify-center">
                    {/* Pipe */}
                    <div className="absolute w-full h-4 bg-slate-600 border-y-2 border-slate-500"></div>
                    {/* Flow Animation */}
                    <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-yellow-600 transition-all duration-3000 ease-linear ${isFlowing ? 'w-full' : 'w-0'}`}
                        style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}
                    ></div>
                    {/* Status Text */}
                    <div className="z-10 bg-slate-800 px-4 py-2 rounded-md border border-slate-600">
                        <p className="font-orbitron text-center text-lg">
                            {step === AnimationStep.IDLE && "Awaiting Start"}
                            {step === AnimationStep.SAMPLING && "Sampling..."}
                            {step > AnimationStep.SAMPLING && step < AnimationStep.GENERATING_REPORT && "Analyzing Sample"}
                            {step === AnimationStep.GENERATING_REPORT && "Generating Report"}
                            {step === AnimationStep.TRANSFERRING_FUEL && "Transferring Pure Fuel"}
                            {step === AnimationStep.COMPLETED && "Process Complete"}
                            {step === AnimationStep.FAILED && "Process Halted"}
                        </p>
                    </div>
                </div>

                <Tank label="Recovered Liquid" fuelLevel={90} isContaminated={true} isSampling={step === AnimationStep.SAMPLING}/>
            </div>

            <div className="absolute top-4 right-4">
                 {step === AnimationStep.IDLE && (
                    <button onClick={handleStart} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-blue-600/30">
                        Start Recovery Process
                    </button>
                )}
                {(step === AnimationStep.COMPLETED || step === AnimationStep.FAILED) && (
                    <button onClick={handleReset} className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-green-600/30">
                        Reset Simulation
                    </button>
                )}
            </div>
        </div>

        {/* Analysis and Report Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Test Results */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h2 className="text-2xl font-bold font-orbitron mb-4 text-slate-200">Analysis Dashboard</h2>
                <div className="space-y-3">
                    <TestItem test={tests.find(t=>t.id==='water')!} icon={<DropletIcon className="w-6 h-6" />} />
                    <TestItem test={tests.find(t=>t.id==='particulates')!} icon={<MicroscopeIcon className="w-6 h-6" />} />
                    <TestItem test={tests.find(t=>t.id==='phase')!} icon={<LayersIcon className="w-6 h-6" />} />
                    <TestItem test={tests.find(t=>t.id==='astm')!} icon={<ChartBarIcon className="w-6 h-6" />} />
                </div>
            </div>

            {/* Purity Report */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h2 className="text-2xl font-bold font-orbitron mb-4 text-slate-200 flex items-center">
                    <DocumentTextIcon className="w-7 h-7 mr-3 text-blue-400"/>
                    Quality Assurance Report
                </h2>
                <div className="bg-slate-900 p-4 rounded-md min-h-[250px] border border-slate-700 whitespace-pre-wrap font-mono text-sm text-slate-300 overflow-y-auto flex">
                     {report ? report : (
                        <div className="flex items-center justify-center h-full w-full">
                            {step >= AnimationStep.GENERATING_REPORT ? (
                                <p className="animate-pulse">Generating Purity Report...</p>
                            ) : (
                                <p className="text-slate-500">Report will be generated after analysis is complete.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Benefits Section */}
        <div>
            <h2 className="text-3xl font-bold text-center font-orbitron mb-8 text-slate-200">Our Guarantee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map(b => <BenefitCard key={b.title} {...b} />)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
