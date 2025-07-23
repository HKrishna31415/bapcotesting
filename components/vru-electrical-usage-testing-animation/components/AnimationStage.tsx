import React from 'react';
import { AnimationStep } from '../types';
import type { PowerData, KpiData } from '../types';
import VruIcon from './icons/VruIcon';
import PowerMeterIcon from './icons/PowerMeterIcon';
import SunMoonIcon from './icons/SunMoonIcon';
import CarIcon from './icons/CarIcon';
import TankerIcon from './icons/TankerIcon';

interface AnimationStageProps {
  step: AnimationStep;
  powerData: PowerData;
  kpiData: KpiData;
}

const StageObject: React.FC<{ children: React.ReactNode; isVisible: boolean; className?: string }> = ({ children, isVisible, className = '' }) => (
  <div className={`absolute transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${className}`}>
    {children}
  </div>
);

const MeterNeedle: React.FC<{ value: number; max: number }> = ({ value, max }) => {
    const rotation = Math.min(180, Math.max(0, (value / max) * 180));
    return (
        <div 
            className="absolute bottom-[48%] left-1/2 w-1 h-1/2 -ml-0.5 origin-bottom transition-transform duration-1000 ease-out"
            style={{ transform: `rotate(${rotation - 90}deg)` }}
        >
            <div className="w-full h-full bg-red-500 rounded-t-full"></div>
        </div>
    );
};

const StatusIndicator: React.FC<{ color: 'blue' | 'green' | 'red' | 'gray' }> = ({ color }) => {
    const colorClasses = {
        blue: 'bg-blue-500 shadow-blue-400',
        green: 'bg-green-500 shadow-green-400',
        red: 'bg-red-500 shadow-red-400',
        gray: 'bg-slate-600 shadow-slate-500'
    };
    return (
        <div className={`w-6 h-6 rounded-full transition-all duration-500 ${colorClasses[color]}`} style={{boxShadow: `0 0 12px 2px var(--tw-shadow-color)`}}></div>
    );
};


const AnimationStage: React.FC<AnimationStageProps> = ({ step, powerData, kpiData }) => {
  const isVisible = (s: AnimationStep) => step >= s;
  
  const getMeterValue = () => {
    if (step === AnimationStep.Peak) return powerData.peak;
    if (step === AnimationStep.Normal) return powerData.normal;
    if (step >= AnimationStep.Idle) return powerData.idle;
    return 0;
  };

  const getStatusColor = (): 'blue' | 'green' | 'red' | 'gray' => {
    if (step === AnimationStep.Peak) return 'red';
    if (step === AnimationStep.Normal) return 'green';
    if (step >= AnimationStep.Idle) return 'blue';
    return 'gray';
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative">
        {/* Connection Line */}
        <StageObject isVisible={isVisible(AnimationStep.Setup) && step < AnimationStep.Analysis} className="w-1/3 h-1 bg-slate-600 top-1/2 -mt-0.5">
            <div 
                className="h-full bg-cyan-400/80 transition-all duration-1000 ease-in-out"
                style={{ width: `${Math.min(100, (step - 1) * 34)}%` }}
            ></div>
        </StageObject>

        {/* VRU */}
        <StageObject isVisible={isVisible(AnimationStep.Setup) && step < AnimationStep.Analysis} className="left-[15%] transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-4">
                <VruIcon className="w-32 h-32" />
                <div className="flex items-center gap-3 bg-slate-900/50 px-3 py-1.5 rounded-full">
                    <StatusIndicator color={getStatusColor()} />
                    <span className="font-mono text-sm text-slate-300">VRU Status</span>
                </div>
            </div>
        </StageObject>
        
        {/* Power Meter */}
        <StageObject isVisible={isVisible(AnimationStep.Setup) && step < AnimationStep.Analysis} className="right-[15%] transform translate-x-1/2">
             <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <PowerMeterIcon className="w-32 h-32" />
                    <MeterNeedle value={getMeterValue()} max={20} />
                </div>
                 <div className="bg-slate-900/50 px-4 py-2 rounded-lg text-center">
                    <p className="font-mono text-2xl text-cyan-300 transition-colors duration-500">{getMeterValue().toFixed(1)}</p>
                    <p className="text-xs text-slate-400">kW</p>
                </div>
            </div>
        </StageObject>

        {/* Normal Operation Icons */}
        <StageObject isVisible={step === AnimationStep.Normal} className="top-[5%] left-[15%] -translate-x-1/2 flex flex-col items-center gap-2">
            <SunMoonIcon className="w-12 h-12 text-yellow-300" />
            <CarIcon className="w-16 h-16 text-slate-300" />
            <p className="text-xs text-slate-400 font-medium">Diurnal & Refueling</p>
        </StageObject>

        {/* Peak Load Icon */}
        <StageObject isVisible={step === AnimationStep.Peak} className="top-[5%] left-[15%] -translate-x-1/2 flex flex-col items-center gap-2">
            <TankerIcon className="w-24 h-24 text-orange-400"/>
            <p className="text-xs text-slate-400 font-medium">Tanker Drop</p>
        </StageObject>

        {/* Final Analysis Placeholder */}
        <StageObject isVisible={step === AnimationStep.Analysis} className="text-center w-full max-w-md">
            <div className="bg-slate-900/70 rounded-xl p-6 ring-1 ring-cyan-400/30 shadow-lg transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-bold text-cyan-300 mb-1">Efficiency Report</h3>
                <p className="text-sm text-slate-400 mb-6">Analysis Complete</p>
                
                <div className="space-y-3 text-left">
                    <div className="flex justify-between items-baseline p-3 rounded-lg bg-slate-800/50">
                        <span className="text-slate-300 text-sm">Peak / Idle Power Ratio</span>
                        <span className="font-mono text-lg text-white">{kpiData.peakIdleRatio}x</span>
                    </div>
                    <div className="flex justify-between items-baseline p-3 rounded-lg bg-slate-800/50">
                        <span className="text-slate-300 text-sm">Annual Cost Projection</span>
                        <span className="font-mono text-lg text-white">${kpiData.annualCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-baseline p-3 rounded-lg bg-slate-800/50">
                        <span className="text-slate-300 text-sm">Assumed Daily Recovery</span>
                        <span className="font-mono text-lg text-white">{kpiData.gasolineRecovered.toLocaleString()} L</span>
                    </div>
                </div>
                
                <p className="text-xs text-slate-500 mt-6">
                    Detailed KPIs are available below. This report highlights key operational metrics derived from the test data.
                </p>
            </div>
        </StageObject>

    </div>
  );
};

export default AnimationStage;