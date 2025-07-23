
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AcousticData } from '../types';
import { Volume2 } from './IconComponents';

interface AcousticPanelProps {
    data: AcousticData[];
    isTesting: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-2 border border-gray-600 rounded text-sm">
        <p className="label text-white">{`${label} : ${payload[0].value} dBA`}</p>
        <p className="intro text-gray-400">{`Limit: ${payload[0].payload.limit} dBA`}</p>
      </div>
    );
  }
  return null;
};


const AcousticPanel: React.FC<AcousticPanelProps> = ({ data, isTesting }) => {
    return (
        <div className="bg-gray-800/50 rounded-2xl p-6 shadow-lg border border-gray-700 h-full">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-300">
                <Volume2 className="w-6 h-6" />
                Acoustic Monitoring
            </h3>
            <p className="text-sm text-gray-400 mt-1 mb-4">A-weighted decibel level (dBA) at standardized distances.</p>
            <div className="w-full h-52">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                        <XAxis dataKey="name" stroke="#A0AEC0" fontSize={12} />
                        <YAxis stroke="#A0AEC0" fontSize={12} domain={[0, 100]} />
                        <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(74, 222, 128, 0.1)'}}/>
                        <Legend wrapperStyle={{fontSize: "14px"}}/>
                        <Bar 
                          dataKey="dBA" 
                          fill="#22d3ee" 
                          name="Measured Level" 
                          animationDuration={isTesting ? 1500 : 0} 
                        />
                        <Bar 
                          dataKey="limit" 
                          fill="rgba(239, 68, 68, 0.4)" 
                          name="Noise Limit" 
                          animationDuration={0} 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AcousticPanel;
