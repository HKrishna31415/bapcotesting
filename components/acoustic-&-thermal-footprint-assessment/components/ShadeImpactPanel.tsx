
import React from 'react';
import { ShadeImpactData } from '../types';
import { Zap, ArrowDown, ShieldCheck } from './IconComponents';

interface ShadeImpactPanelProps {
    data: ShadeImpactData;
}

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; unit: string; color: string }> = ({ icon, value, label, unit, color }) => (
    <div className={`flex-1 bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-${color}-500 hover:bg-gray-700/50`}>
        <div className={`text-${color}-400 mb-3`}>{icon}</div>
        <p className={`text-3xl font-bold text-${color}-400`}>
            {value} <span className="text-xl font-medium text-gray-400">{unit}</span>
        </p>
        <p className="text-sm text-gray-300 mt-1">{label}</p>
    </div>
);


const ShadeImpactPanel: React.FC<ShadeImpactPanelProps> = ({ data }) => {
    return (
        <div className="bg-green-900/30 border-2 border-green-500 rounded-2xl p-6 shadow-2xl animate-fade-in">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-green-300 mb-4">
                <ShieldCheck className="w-8 h-8"/>
                Shade/Canopy Impact Test Results
            </h3>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
                <StatCard 
                    icon={<ArrowDown className="w-10 h-10" />}
                    value={data.tempReduction.toString()}
                    label="Chassis Temp. Reduction"
                    unit="°C"
                    color="orange"
                />
                <StatCard 
                    icon={<Zap className="w-10 h-10" />}
                    value={data.powerReduction.toString()}
                    label="Power Consumption Drop"
                    unit="kW"
                    color="cyan"
                />
                <StatCard 
                    icon={<ShieldCheck className="w-10 h-10" />}
                    value={data.efficiencyGain.toString()}
                    label="Cooling System Efficiency Gain"
                    unit="%"
                    color="green"
                />
            </div>
        </div>
    );
};

export default ShadeImpactPanel;
