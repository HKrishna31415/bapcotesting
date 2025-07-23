
import React, { useState, useEffect, useCallback } from 'react';
import { AcousticData, ThermalDataPoint, ShadeImpactData } from './types';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import UnitVisualization from './components/UnitVisualization';
import AcousticPanel from './components/AcousticPanel';
import ThermalPanel from './components/ThermalPanel';
import ShadeImpactPanel from './components/ShadeImpactPanel';

const INITIAL_ACOUSTIC_DATA: AcousticData[] = [
    { name: '1m', dBA: 0, limit: 85 },
    { name: '3m', dBA: 0, limit: 75 },
    { name: '10m', dBA: 0, limit: 65 },
    { name: 'Property Line', dBA: 0, limit: 55 },
];

// Adjusted initial values for a more realistic starting point
const INITIAL_THERMAL_DATA: ThermalDataPoint[] = [{ time: 0, chassis: 25, cooling: 23, air: 22 }];

export default function AcousticThermalFootprintAssessmentApp() {
    const [isTesting, setIsTesting] = useState(false);
    const [isCanopyVisible, setIsCanopyVisible] = useState(false);
    const [isShadeTestCompleted, setIsShadeTestCompleted] = useState(false);
    const [acousticData, setAcousticData] = useState<AcousticData[]>(INITIAL_ACOUSTIC_DATA);
    const [thermalData, setThermalData] = useState<ThermalDataPoint[]>(INITIAL_THERMAL_DATA);
    const [shadeImpactData, setShadeImpactData] = useState<ShadeImpactData | null>(null);

    const resetState = useCallback(() => {
        setIsTesting(false);
        setIsCanopyVisible(false);
        setIsShadeTestCompleted(false);
        setAcousticData(INITIAL_ACOUSTIC_DATA);
        setThermalData(INITIAL_THERMAL_DATA);
        setShadeImpactData(null);
    }, []);

    const runSimulation = useCallback(() => {
        // Acoustic simulation
        const acousticTargets = [78, 68, 59, 52];
        acousticTargets.forEach((target, index) => {
            let currentDba = 0;
            const interval = setInterval(() => {
                currentDba += target / 20;
                if (currentDba >= target) {
                    currentDba = target;
                    clearInterval(interval);
                }
                setAcousticData(prev => prev.map((d, i) => i === index ? { ...d, dBA: Math.round(currentDba) } : d));
            }, 50);
        });

        // Unified thermal simulation
        const thermalInterval = setInterval(() => {
            setThermalData(prev => {
                if (prev.length >= 15) {
                    clearInterval(thermalInterval);
                    return prev;
                }

                const last = prev[prev.length - 1];
                const newTime = last.time + 1;
                let newPoint: ThermalDataPoint;

                if (newTime < 10) {
                    // Phase 1: Temperature rises to a stable peak
                    newPoint = {
                        time: newTime,
                        // Target peak around 75C
                        cooling: Math.min(75, last.cooling + (3 + Math.random() * 3)),
                        // Target peak around 60C
                        chassis: Math.min(60, last.chassis + (2.5 + Math.random() * 2)),
                        // Target peak around 50C
                        air: Math.min(50, last.air + (2 + Math.random() * 1.5)),
                    };
                } else {
                    // Phase 2: Shade test begins, temperature drops to a new, lower stable point
                    if (newTime === 10) {
                        setIsCanopyVisible(true); // Trigger canopy animation
                    }
                    newPoint = {
                        time: newTime,
                        // Drops from ~75C to a stable ~60C
                        cooling: Math.max(60, last.cooling - (2.5 + Math.random() * 2)),
                        // Drops from ~60C to a stable ~48C
                        chassis: Math.max(48, last.chassis - (2 + Math.random() * 1.5)),
                        // Drops from ~50C to a stable ~45C
                        air: Math.max(45, last.air - (1 + Math.random())),
                    };
                }
                return [...prev, newPoint];
            });
        }, 400);
    }, []);

    useEffect(() => {
        if (isTesting && acousticData[0].dBA === 0) {
            runSimulation();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTesting]);

    useEffect(() => {
        if (thermalData.length >= 15 && !isShadeTestCompleted) {
            const startData = thermalData.find(d => d.time === 9);
            const endData = thermalData[thermalData.length - 1];
            
            if (startData && endData) {
                const originalTemp = startData.chassis;
                const finalTemp = endData.chassis;
                const originalPower = 7.5; // Assumed starting power in kW
                
                const maxPossibleTempDrop = originalTemp - 40; // Assume 40C is a reasonable minimum
                const actualTempDrop = originalTemp - finalTemp;
                const tempDropRatio = maxPossibleTempDrop > 0 ? actualTempDrop / maxPossibleTempDrop : 0;
                
                const maxPowerReduction = 1.4; // Max possible power reduction in kW
                const powerReduction = maxPowerReduction * tempDropRatio;
                
                setShadeImpactData({
                    tempReduction: parseFloat(actualTempDrop.toFixed(1)),
                    powerReduction: parseFloat(powerReduction.toFixed(1)),
                    efficiencyGain: parseFloat(((powerReduction / originalPower) * 100).toFixed(1)),
                });
                setIsShadeTestCompleted(true);
            }
        }
    }, [thermalData, isShadeTestCompleted]);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <Header />
                <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-3 bg-gray-800/50 rounded-2xl p-6 shadow-2xl border border-gray-700">
                        <ControlPanel
                            isTesting={isTesting}
                            onStartTest={() => setIsTesting(true)}
                            onReset={resetState}
                        />
                    </div>
                    
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="md:col-span-2">
                             <UnitVisualization isTesting={isTesting} isShadeActive={isCanopyVisible} />
                        </div>
                        <div className="md:col-span-3 flex flex-col gap-8">
                            <AcousticPanel data={acousticData} isTesting={isTesting} />
                            <ThermalPanel data={thermalData} isTesting={isTesting} isShadeActive={isCanopyVisible}/>
                        </div>
                    </div>
                    
                    {isShadeTestCompleted && shadeImpactData && (
                        <div className="lg:col-span-3">
                            <ShadeImpactPanel data={shadeImpactData} />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
