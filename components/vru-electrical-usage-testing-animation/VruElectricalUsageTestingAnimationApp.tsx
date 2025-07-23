import React, { useState, useCallback, useMemo } from 'react';
import { AnimationStep, KpiData } from './types';
import type { PowerData } from './types';
import AnimationStage from './components/AnimationStage';
import Controls from './components/Controls';
import KpiCard from './components/KpiCard';
import BoltIcon from './components/icons/BoltIcon';
import GasPumpIcon from './components/icons/GasPumpIcon';
import MoneyIcon from './components/icons/MoneyIcon';

const VruElectricalUsageTestingAnimationApp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AnimationStep>(AnimationStep.Initial);

  const initialPowerData: PowerData = { idle: 0, normal: 0, peak: 0 };
  const [powerData, setPowerData] = useState<PowerData>(initialPowerData);

  const stepDescriptions: Record<AnimationStep, { title: string; description: string }> = {
    [AnimationStep.Initial]: { title: 'Energy Consumption & Efficiency Analysis', description: 'A power meter will log kWh usage. We will isolate idle, normal, and peak-load draw to calculate the key metric of kWh consumed per liter of gasoline recovered.' },
    [AnimationStep.Setup]: { title: 'Step 1: System Setup', description: 'A dedicated, revenue-grade power meter is installed on the Vapor Recovery Unit\'s (VRU) electrical supply to continuously log power consumption (kW) and total energy usage (kWh).' },
    [AnimationStep.Idle]: { title: 'Step 2: Idle/Standby Power', description: 'Measuring power draw when the VRU is powered on but not actively processing vapor. This establishes a baseline energy consumption.' },
    [AnimationStep.Normal]: { title: 'Step 3: Normal Operation Power', description: 'Measuring average power draw during standard diurnal (day/night temperature changes) and vehicle refueling cycles.' },
    [AnimationStep.Peak]: { title: 'Step 4: Peak Load Power', description: 'Measuring maximum power draw during a high-volume stress test, simulating a gasoline tanker drop.' },
    [AnimationStep.Analysis]: { title: 'Step 5: KPI Analysis', description: 'The collected data is analyzed to determine the key performance indicators (KPIs) for energy efficiency and operational cost.' },
  };

  const handleNextStep = useCallback(() => {
    setCurrentStep(prev => {
      const next = prev + 1;
      if (next > AnimationStep.Analysis) return prev;

      // Simulate data "collection" at each step
      if (next === AnimationStep.Idle) setPowerData(d => ({ ...d, idle: 1.5 }));
      if (next === AnimationStep.Normal) setPowerData(d => ({ ...d, normal: 7.2 }));
      if (next === AnimationStep.Peak) setPowerData(d => ({ ...d, peak: 15.8 }));
      
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setCurrentStep(AnimationStep.Initial);
    setPowerData(initialPowerData);
  }, []);

  const kpiData = useMemo<KpiData>(() => {
    if (currentStep < AnimationStep.Analysis) {
      return { energyIntensity: 0, dailyConsumption: 0, monthlyCost: 0, peakIdleRatio: 0, annualCost: 0, gasolineRecovered: 0 };
    }
    // Dummy calculations for demonstration
    const recoveredLitersPerDay = 1500; // Assumed value
    const avgPower = (powerData.idle * 8 + powerData.normal * 14 + powerData.peak * 2) / 24;
    const dailyConsumption = avgPower * 24;
    const energyIntensity = dailyConsumption / recoveredLitersPerDay;
    const electricityTariff = 0.12; // $/kWh
    const monthlyCost = dailyConsumption * 30 * electricityTariff;
    const annualCost = monthlyCost * 12;
    const peakIdleRatio = powerData.idle > 0 ? powerData.peak / powerData.idle : 0;

    return {
      energyIntensity: parseFloat(energyIntensity.toFixed(3)),
      dailyConsumption: parseFloat(dailyConsumption.toFixed(1)),
      monthlyCost: parseFloat(monthlyCost.toFixed(2)),
      annualCost: parseFloat(annualCost.toFixed(2)),
      peakIdleRatio: parseFloat(peakIdleRatio.toFixed(1)),
      gasolineRecovered: recoveredLitersPerDay,
    };
  }, [currentStep, powerData]);
  
  const currentInfo = stepDescriptions[currentStep];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 tracking-tight">
            VRU Electrical Testing Simulation
          </h1>
          <p className="text-slate-400 mt-2 text-lg">An Interactive Guide to Energy Analysis</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-slate-800/50 rounded-2xl shadow-2xl shadow-slate-950/50 ring-1 ring-white/10 p-6 flex flex-col items-center justify-center min-h-[450px] lg:min-h-[500px]">
             <AnimationStage step={currentStep} powerData={powerData} kpiData={kpiData} />
          </div>

          <div className="lg:col-span-2 bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-3">{currentInfo.title}</h2>
              <p className="text-slate-300 text-base leading-relaxed h-32">{currentInfo.description}</p>
            </div>
            <Controls
              step={currentStep}
              onNext={handleNextStep}
              onReset={handleReset}
            />
          </div>
        </main>

        {currentStep === AnimationStep.Analysis && (
            <section className="mt-8 bg-slate-800/50 p-6 rounded-2xl shadow-2xl ring-1 ring-white/10">
                <h3 className="text-center text-2xl font-bold text-cyan-300 mb-6">Key Performance Indicators (KPIs)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <KpiCard
                        icon={<BoltIcon />}
                        title="Energy Intensity of Recovery"
                        value={kpiData.energyIntensity}
                        unit="kWh / liter recovered"
                        color="green"
                    />
                    <KpiCard
                        icon={<GasPumpIcon />}
                        title="Average Daily Consumption"
                        value={kpiData.dailyConsumption}
                        unit="kWh / day"
                        color="yellow"
                    />
                    <KpiCard
                        icon={<MoneyIcon />}
                        title="Projected Monthly Cost"
                        value={`$${kpiData.monthlyCost}`}
                        unit="based on BAPCO tariff"
                        color="blue"
                    />
                </div>
            </section>
        )}
      </div>
      <footer className="w-full text-center mt-8 text-slate-500 text-sm">
        <p>A conceptual demonstration for energy efficiency analysis.</p>
      </footer>
    </div>
  );
};

export default VruElectricalUsageTestingAnimationApp;