
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { type DataPoint } from '../types';
import { INH2O_TO_KPA } from '../constants';

interface DataChartProps {
    data: DataPoint[];
    maxPressure: number;
}

const DataChart: React.FC<DataChartProps> = ({ data, maxPressure }) => {
    return (
        <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-700 h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                    <XAxis 
                        dataKey="time" 
                        type="number" 
                        domain={[0, 'dataMax']} 
                        unit="s" 
                        stroke="#A0AEC0"
                        tick={{ fill: '#A0AEC0', fontSize: 12 }}
                    />
                    <YAxis 
                        stroke="#A0AEC0" 
                        domain={[0, (dataMax: number) => Math.max(maxPressure * 1.1, dataMax || 0)]}
                        tick={{ fill: '#A0AEC0', fontSize: 12 }}
                        label={{ value: 'Pressure (inH₂O)', angle: -90, position: 'insideLeft', fill: '#CBD5E0', dy: 40 }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(31, 41, 55, 0.8)',
                            borderColor: '#4A5568',
                            borderRadius: '0.5rem',
                        }}
                        labelStyle={{ color: '#E5E7EB' }}
                        itemStyle={{ color: '#38BDF8', fontWeight: 'bold' }}
                        formatter={(value: number) => `${value.toFixed(2)} inH₂O (${(value * INH2O_TO_KPA).toFixed(2)} kPa)`}
                    />
                    <Legend wrapperStyle={{ color: '#E5E7EB' }}/>
                    <Line 
                        type="monotone" 
                        dataKey="pressure" 
                        stroke="#38BDF8" 
                        strokeWidth={2} 
                        dot={false}
                        isAnimationActive={false}
                        name="Live Backpressure"
                    />
                    <ReferenceLine 
                        y={maxPressure} 
                        label={{ value: 'Max Allowable', position: 'insideTopRight', fill: '#F87171', fontSize: 12, fontWeight: 'bold' }} 
                        stroke="#EF4444" 
                        strokeWidth={2} 
                        strokeDasharray="5 5" 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DataChart;