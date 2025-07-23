
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThermalDataPoint } from '../types';
import { Thermometer } from './IconComponents';

interface ThermalPanelProps {
    data: ThermalDataPoint[];
    isTesting: boolean;
    isShadeActive: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-2 border border-gray-600 rounded text-sm">
        <p className="label text-white">{`Time Step: ${label}`}</p>
        {payload.map((p: any) => (
           <p key={p.name} style={{ color: p.color }}>{`${p.name}: ${p.value.toFixed(1)} °C`}</p>
        ))}
      </div>
    );
  }
  return null;
};

const ThermalPanel: React.FC<ThermalPanelProps> = ({ data, isTesting, isShadeActive }) => {
    return (
        <div className="bg-gray-800/50 rounded-2xl p-6 shadow-lg border border-gray-700 h-full">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-orange-400">
                <Thermometer className="w-6 h-6" />
                Thermal Monitoring
            </h3>
            <p className="text-sm text-gray-400 mt-1 mb-4">Surface and exhaust temperatures (°C) over time.</p>
             <div className="w-full h-52">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                        <XAxis dataKey="time" stroke="#A0AEC0" fontSize={12} type="number" domain={[0, 15]} tickCount={16} />
                        <YAxis stroke="#A0AEC0" fontSize={12} domain={[0, 100]} />
                        <Tooltip content={<CustomTooltip />} cursor={{stroke: '#cbd5e0', strokeWidth: 1, strokeDasharray: '3 3'}}/>
                        <Legend wrapperStyle={{fontSize: "14px"}}/>
                        <Line type="natural" dataKey="chassis" name="Chassis" stroke="#f97316" strokeWidth={2} dot={false} animationDuration={isTesting ? 500 : 0} />
                        <Line type="natural" dataKey="cooling" name="Cooling Exhaust" stroke="#ef4444" strokeWidth={2} dot={false} animationDuration={isTesting ? 500 : 0} />
                        <Line type="natural" dataKey="air" name="Processed Air" stroke="#eab308" strokeWidth={2} dot={false} animationDuration={isTesting ? 500 : 0} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ThermalPanel;