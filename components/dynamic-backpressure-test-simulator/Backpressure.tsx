
import React, { useState, useEffect, useCallback } from 'react';
import { TestStatus, type FlowRateOption, type DataPoint } from './types';
import { FLOW_RATE_OPTIONS, MAX_ALLOWABLE_PRESSURE_IMPERIAL, TEST_DURATION_MS } from './constants';
import Controls from './components/Controls';
import PressureGauge from './components/PressureGauge';
import DataChart from './components/DataChart';
import SystemSchematic from './components/SystemSchematic';
import AnalysisPanel from './components/AnalysisPanel';

const App: React.FC = () => {
    const [testStatus, setTestStatus] = useState<TestStatus>(TestStatus.Idle);
    const [stageIEnabled, setStageIEnabled] = useState<boolean>(true);
    const [stageIIIEnabled, setStageIIIEnabled] = useState<boolean>(false);
    
    const [flowRate, setFlowRate] = useState<FlowRateOption>(FLOW_RATE_OPTIONS[1]);
    const [backpressureData, setBackpressureData] = useState<DataPoint[]>([]);
    const [currentPressure, setCurrentPressure] = useState<number>(0);
    const [peakPressure, setPeakPressure] = useState<number>(0);

    const maxPressure = MAX_ALLOWABLE_PRESSURE_IMPERIAL;

    const resetState = useCallback(() => {
        setTestStatus(TestStatus.Idle);
        setBackpressureData([]);
        setCurrentPressure(0);
        setPeakPressure(0);
    }, []);

    const endTest = useCallback((finalStatus: TestStatus) => {
        setTestStatus(finalStatus);
        setBackpressureData(currentData => {
            const peak = Math.max(...currentData.map(p => p.pressure), 0);
            setPeakPressure(peak);
            return currentData;
        });
    }, []);
    

    useEffect(() => {
        if (testStatus !== TestStatus.Running) {
            return;
        }

        const startTime = Date.now();
        const pressureFactor = 0.1;

        const interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            
            let recoveryFactor = 2.5;
            if (stageIEnabled && stageIIIEnabled) {
                recoveryFactor = 0.5;
            } else if (stageIEnabled || stageIIIEnabled) {
                recoveryFactor = 1.0;
            }

            const basePressure = flowRate.value * pressureFactor;
            const timeFactor = 1 + Math.sin((elapsedTime / TEST_DURATION_MS) * Math.PI) * 0.2;
            const noise = (Math.random() - 0.5) * (maxPressure / 20);
            const newPressure = basePressure * recoveryFactor * timeFactor + noise;

            const finalPressure = Math.max(0, newPressure);
            setCurrentPressure(finalPressure);
            setBackpressureData(prevData => [...prevData, { time: elapsedTime / 1000, pressure: finalPressure }]);

            if (finalPressure > maxPressure) {
                endTest(TestStatus.Failed);
            } else if (elapsedTime >= TEST_DURATION_MS) {
                endTest(TestStatus.Passed);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [testStatus, flowRate.value, stageIEnabled, stageIIIEnabled, maxPressure, endTest]);


    const handleStartStop = () => {
        if (testStatus === TestStatus.Running) {
            endTest(TestStatus.Idle); // Stop the test manually
        } else {
            resetState();
            setTestStatus(TestStatus.Running);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-cyan-400 tracking-tight">Dynamic Backpressure Test</h1>
                    <p className="mt-2 text-lg text-gray-400">Simulating fuel dispensing system performance.</p>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-8">
                        <Controls
                            testStatus={testStatus}
                            stageIEnabled={stageIEnabled}
                            stageIIIEnabled={stageIIIEnabled}
                            flowRate={flowRate}
                            flowRateOptions={FLOW_RATE_OPTIONS}
                            onStartStop={handleStartStop}
                            onToggleStageI={() => setStageIEnabled(prev => !prev)}
                            onToggleStageIII={() => setStageIIIEnabled(prev => !prev)}
                            onSetFlowRate={setFlowRate}
                            onReset={resetState}
                        />
                        <PressureGauge pressure={currentPressure} maxPressure={maxPressure} status={testStatus} />
                        <SystemSchematic isRunning={testStatus === TestStatus.Running} stageIEnabled={stageIEnabled} stageIIIEnabled={stageIIIEnabled} />
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <DataChart data={backpressureData} maxPressure={maxPressure} />
                        <AnalysisPanel 
                            status={testStatus}
                            peakPressure={peakPressure}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;