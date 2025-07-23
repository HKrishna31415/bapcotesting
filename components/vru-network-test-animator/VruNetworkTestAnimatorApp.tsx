
import React, { useState, useEffect } from 'react';
import { VruIcon, SwitchIcon, ExtenderIcon, LaptopIcon, CheckCircleIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon } from './components/Icons';
import { LedTester } from './components/LedTester';
import { LinkStatus, PingTestType } from './types';

// Helper Components
const StepContainer: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
  <div className="bg-slate-800 rounded-xl shadow-2xl p-6 md:p-8 w-full animate-fade-in">
    <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-4">{title}</h2>
    <div className="text-slate-300 space-y-4 leading-relaxed">
      {children}
    </div>
  </div>
);

const MetricCard: React.FC<{title: string; value: string; description: string}> = ({ title, value, description }) => (
  <div className="bg-slate-700/50 p-4 rounded-lg">
    <div className="text-slate-400 text-sm">{title}</div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-slate-400 text-xs mt-1">{description}</div>
  </div>
);

// Step Components
const IntroStep = () => (
    <StepContainer title="Data & Connectivity Integrity">
        <p>This test validates the reliability of the remote monitoring and control system for the Vapor Recovery Unit (VRU), a critical component for modern network operations.</p>
        <p>We will monitor the success rate (%) and latency (ms) of the telemetry link to the VRU's PLC, ensuring reliable remote control.</p>
        <div className="grid md:grid-cols-3 gap-4 pt-4">
            <MetricCard title="Data Packet Success Rate" value="99.98%" description="e.g., percentage of successful pings" />
            <MetricCard title="Average Latency" value="~45ms" description="Time delay for data transfer" />
            <MetricCard title="Machine Responsiveness" value="< 2s" description="Time to start/stop components" />
        </div>
    </StepContainer>
);

const SetupStep = () => (
    <StepContainer title="The Test Setup">
        <p>The network connection spans a long distance, requiring an extender to maintain signal strength. Power over Ethernet (PoE) simplifies wiring by sending power and data over the same cable.</p>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 bg-slate-900/50 rounded-lg">
            <div className="flex flex-col items-center text-center">
                <SwitchIcon className="w-24 h-24 text-sky-300"/>
                <h3 className="font-semibold mt-2">PoE Switch</h3>
                <p className="text-xs text-slate-400">Provides Data & Power</p>
            </div>
            <div className="flex-1 flex items-center relative">
                <div className="w-full h-1 bg-slate-600"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-slate-900 text-sm text-slate-400">90m Cable</div>
            </div>
            <div className="flex flex-col items-center text-center">
                <ExtenderIcon className="w-24 h-24 text-teal-300"/>
                <h3 className="font-semibold mt-2">PoE Extender</h3>
                <p className="text-xs text-slate-400">Boosts Signal</p>
            </div>
             <div className="flex-1 flex items-center relative">
                <div className="w-full h-1 bg-slate-600"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-slate-900 text-sm text-slate-400">90m Cable</div>
            </div>
            <div className="flex flex-col items-center text-center">
                <VruIcon className="w-24 h-24 text-indigo-300"/>
                <h3 className="font-semibold mt-2">Vapor Recovery Unit</h3>
                <p className="text-xs text-slate-400">End Device</p>
            </div>
        </div>
    </StepContainer>
);

const LedTesterStep = () => (
    <StepContainer title="Step 0: Hardware Test (Cable Integrity)">
        <p>Before checking data, we ensure the physical cable is sound. A simple LED wiremap tester sends a signal down each of the 8 wires to check for breaks, shorts, or crossed pairs. This test is foundational.</p>
        <LedTester />
    </StepContainer>
);

const LinkLightsStep = () => {
    const [status, setStatus] = useState<LinkStatus>(LinkStatus.Activity);

    const getLightClasses = (light: 'link' | 'poe') => {
        const base = "w-3 h-3 rounded-full transition-all";
        if(light === 'poe') return `${base} bg-yellow-400 shadow-[0_0_8px_1px_#facc15]`;

        switch(status) {
            case LinkStatus.Good: return `${base} bg-green-500 shadow-[0_0_8px_1px_#22c55e]`;
            case LinkStatus.Activity: return `${base} bg-green-500 shadow-[0_0_8px_1px_#22c55e] animate-pulse`;
            case LinkStatus.Slow: return `${base} bg-amber-500 shadow-[0_0_8px_1px_#f59e0b]`;
            case LinkStatus.NoLink: return `${base} bg-slate-600`;
            default: return `${base} bg-slate-600`;
        }
    }

    return (
        <StepContainer title="Step 1: Physical Check (Link Lights)">
            <p>The first and quickest diagnostic is checking the LED lights on the network switch or extender port. They provide an instant status of the physical connection.</p>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center bg-slate-900/50 p-6 rounded-lg mt-4">
                <div className="flex-shrink-0">
                    <div className="bg-slate-700 p-4 rounded-lg flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center flex-col gap-1.5 p-1">
                            <div className={getLightClasses('link')}></div>
                            <div className={getLightClasses('poe')}></div>
                        </div>
                        <div className="font-mono text-lg text-white">PORT 01</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <button onClick={() => setStatus(LinkStatus.Activity)} className={`text-left p-2 rounded-md transition ${status === LinkStatus.Activity ? 'bg-sky-500/20' : ''}`}><strong>Blinking Green:</strong> Good link with data activity. This is the ideal state.</button>
                    <button onClick={() => setStatus(LinkStatus.Good)} className={`text-left p-2 rounded-md transition ${status === LinkStatus.Good ? 'bg-sky-500/20' : ''}`}><strong>Solid Green:</strong> Good link established (e.g., 1 Gbps).</button>
                    <button onClick={() => setStatus(LinkStatus.Slow)} className={`text-left p-2 rounded-md transition ${status === LinkStatus.Slow ? 'bg-sky-500/20' : ''}`}><strong>Solid Amber:</strong> Link established, but at a lower speed (e.g., 100 Mbps).</button>
                    <button onClick={() => setStatus(LinkStatus.NoLink)} className={`text-left p-2 rounded-md transition ${status === LinkStatus.NoLink ? 'bg-sky-500/20' : ''}`}><strong>No Light:</strong> No connection detected. Check cables and device power.</button>
                    <p className="text-left p-2 text-sm text-slate-400"><strong>PoE Light:</strong> The solid yellow light indicates Power over Ethernet is active.</p>
                </div>
            </div>
        </StepContainer>
    );
};

const PingStep = () => {
    const [testType, setTestType] = useState<PingTestType>(PingTestType.Success);
    const [output, setOutput] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(false);

    const successLines = [
        '> ping 192.168.1.102',
        'Pinging 192.168.1.102 with 32 bytes of data:',
        'Reply from 192.168.1.102: bytes=32 time=42ms TTL=64',
        'Reply from 192.168.1.102: bytes=32 time=48ms TTL=64',
        'Reply from 192.168.1.102: bytes=32 time=45ms TTL=64',
        'Reply from 192.168.1.102: bytes=32 time=43ms TTL=64',
        'Ping statistics for 192.168.1.102: Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)'
    ];

    const failureLines = [
        '> ping 192.168.1.102',
        'Pinging 192.168.1.102 with 32 bytes of data:',
        'Request timed out.',
        'Request timed out.',
        'Request timed out.',
        'Request timed out.',
        'Ping statistics for 192.168.1.102: Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)'
    ];

    useEffect(() => {
        if (!isRunning) return;

        setOutput([]);
        const lines = testType === PingTestType.Success ? successLines : failureLines;
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < lines.length) {
                setOutput(prev => [...prev, lines[i]]);
                i++;
            } else {
                clearInterval(interval);
                setIsRunning(false);
            }
        }, 600);

        return () => clearInterval(interval);
    }, [isRunning, testType]);


    return (
        <StepContainer title="Step 2: Connectivity Check (Ping)">
            <p>Once the physical link is confirmed, we test end-to-end data connectivity. A "ping" sends a small data packet to the device's IP address and waits for a reply. This confirms the entire network path, including the extender, is working.</p>
            <div className="bg-slate-900/50 p-4 rounded-lg mt-4">
                <div className="flex gap-4 mb-4">
                     <button onClick={() => setTestType(PingTestType.Success)} className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${testType === PingTestType.Success ? 'bg-green-500 text-white' : 'bg-slate-700'}`}>Successful Ping</button>
                     <button onClick={() => setTestType(PingTestType.Failure)} className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${testType === PingTestType.Failure ? 'bg-red-500 text-white' : 'bg-slate-700'}`}>Failed Ping</button>
                     <button onClick={() => setIsRunning(true)} disabled={isRunning} className="ml-auto bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-md disabled:bg-slate-600 disabled:cursor-not-allowed">
                        {isRunning ? 'Pinging...' : 'Run Test'}
                    </button>
                </div>
                <div className="bg-black text-white font-mono text-sm p-4 rounded-md min-h-[220px] overflow-y-auto">
                    {output.map((line, i) => {
                        // Guard against undefined lines which can cause a crash.
                        if (!line) {
                            return null;
                        }
                        const isErrorLine = line.includes('Lost = 4') || line.includes('timed out');
                        return (
                            <p key={i} className={`whitespace-pre-wrap ${isErrorLine ? 'text-red-400' : 'text-green-300'}`}>
                               {line}
                            </p>
                        );
                    })}
                    {isRunning && <div className="inline-block w-2 h-4 bg-green-300 animate-pulse ml-1"></div>}
                </div>
            </div>
        </StepContainer>
    );
};

const PerformanceStep = () => (
    <StepContainer title="Step 3: Performance Check (Speed)">
        <p>If connectivity is established but performance is poor (e.g., slow data updates), we investigate the connection speed. This can identify bottlenecks in the network.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-slate-900/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-sky-400 mb-2">Check Link Speed</h3>
                <p className="text-sm mb-4">You can check the negotiated link speed on a connected computer. This shows the speed between the PC and the switch, helping diagnose if one segment is slow.</p>
                <div className="bg-white text-black p-4 rounded-md shadow-lg text-sm">
                    <h4 className="font-bold mb-4">Ethernet Status</h4>
                    <div className="border-t border-gray-300 pt-4">
                        <div className="grid grid-cols-2 gap-2">
                           <div>Connection</div>
                           <div>
                                <div className="font-semibold">IPv4 Connectivity:</div>
                                <div>Internet</div>
                                <div className="font-semibold mt-2">IPv6 Connectivity:</div>
                                <div>No network access</div>
                           </div>
                           <div className="col-span-2 border-t border-gray-200 my-2"></div>
                           <div>Speed:</div>
                           <div className="font-bold">1.0 Gbps</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-sky-400 mb-2">Network Throughput Test</h3>
                <p className="text-sm mb-4">For a definitive test of real-world speed across the extender, a tool like <code className="bg-slate-700 text-sky-300 px-1 py-0.5 rounded">iperf3</code> is used. It measures the maximum achievable bandwidth between two points on the network.</p>
                <div className="bg-black text-white font-mono text-xs p-4 rounded-md mt-4">
                    <p className="text-gray-400"># On server (e.g. near VRU)</p>
                    <p className="text-green-400">$ iperf3 -s</p>
                    <p className="text-gray-400 mt-2"># On client (e.g. near switch)</p>
                    <p className="text-green-400">$ iperf3 -c [server_ip]</p>
                    <p className="mt-2 text-yellow-300">[ 5] 0.00-10.00 sec 1.09 GBytes 933 Mbits/sec sender</p>
                    <p className="text-yellow-300">[ 5] 0.00-10.00 sec 1.09 GBytes 931 Mbits/sec receiver</p>
                </div>
            </div>
        </div>
    </StepContainer>
);


const STEPS = [
    { name: 'Introduction', component: IntroStep },
    { name: 'The Setup', component: SetupStep },
    { name: 'Cable Test', component: LedTesterStep },
    { name: 'Link Lights', component: LinkLightsStep },
    { name: 'Ping Test', component: PingStep },
    { name: 'Performance', component: PerformanceStep },
];

function VruNetworkTestAnimatorApp() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const ActiveComponent = STEPS[currentStep].component;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <header className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white">VRU Connectivity Test Procedure</h1>
                <p className="text-slate-400 mt-2">An interactive guide to network diagnostics</p>
            </header>

            {/* Stepper */}
            <div className="w-full">
                <div className="flex items-center justify-center">
                    {STEPS.map((step, index) => (
                        <React.Fragment key={step.name}>
                            <div 
                                className="flex flex-col items-center cursor-pointer"
                                onClick={() => goToStep(index)}
                            >
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 font-bold ${index <= currentStep ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-400 border-2 border-slate-600'}`}>
                                    {index < currentStep ? <CheckCircleIcon className="w-6 h-6"/> : index + 1}
                                </div>
                                <p className={`mt-2 text-xs md:text-sm text-center transition-colors ${index === currentStep ? 'text-sky-400 font-semibold' : 'text-slate-500'}`}>{step.name}</p>
                            </div>
                            {index < STEPS.length - 1 && <div className={`flex-auto border-t-2 transition-colors duration-300 mx-2 md:mx-4 ${index < currentStep ? 'border-sky-500' : 'border-slate-700'}`}></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            
            {/* Active Step Content */}
            <main className="mt-8">
              <ActiveComponent />
            </main>

            {/* Navigation */}
            <footer className="flex justify-between items-center pt-4">
                <button 
                    onClick={prevStep} 
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition disabled:opacity-50 disabled:cursor-not-allowed">
                    <ChevronLeftIcon className="w-5 h-5" />
                    Previous
                </button>
                <div className="text-slate-400">{currentStep + 1} / {STEPS.length}</div>
                <button 
                    onClick={nextStep} 
                    disabled={currentStep === STEPS.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500 transition disabled:opacity-50 disabled:cursor-not-allowed">
                    Next
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </footer>
        </div>
    </div>
  );
}

export default VruNetworkTestAnimatorApp;
