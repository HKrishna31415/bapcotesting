
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot, Label } from 'recharts';
import { RVP_CHART_DATA } from '../constants';
import { ChartDataPoint } from '../types';

interface RVPChartProps {
  currentStage: number;
  highlightKey?: string;
}

const stageDataVisibility = [
    ['E0', 'E100'], // Stage 0
    ['E0', 'E15', 'E100'], // Stage 1
    ['E0', 'E15', 'E20', 'E50', 'E100'], // Stage 2
    [], // Stage 3 (diagram)
    ['E0', 'E15', 'E20', 'E50', 'E85', 'E100'], // Stage 4
    ['E0', 'E15', 'E20', 'E50', 'E85', 'E100'], // Stage 5
];

const stageLineDataSlices = [2, 2, 4, 0, 5, 5];

// Custom Dot for highlighting
const CustomizedDot: React.FC<any> = (props) => {
    const { cx, cy } = props;

    // This component is rendered by ReferenceDot, which passes cx and cy.
    // It is only used for the highlighted point, so we can directly render the animated highlight effect.
    // The `payload` prop is not passed by ReferenceDot's shape, which caused the original error.
    if (cx === undefined || cy === undefined) {
      return null;
    }

    return (
        <g>
            <circle cx={cx} cy={cy} r={8} strokeWidth={2} fill="#16a34a" stroke="white" />
            <circle cx={cx} cy={cy} r={12} stroke="#16a34a" fill="transparent" strokeWidth={2}>
                 <animate attributeName="r" from="10" to="16" dur="1.5s" begin="0s" repeatCount="indefinite" />
                 <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
            </circle>
        </g>
    );
};


const RVPChart: React.FC<RVPChartProps> = ({ currentStage, highlightKey }) => {
    const visibleKeys = stageDataVisibility[currentStage] || [];
    const chartData = RVP_CHART_DATA.filter(d => visibleKeys.includes(d.blend));
    const lineData = RVP_CHART_DATA.slice(0, stageLineDataSlices[currentStage]);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                <XAxis dataKey="label" stroke="#a0aec0" tick={{ fill: '#a0aec0' }} />
                <YAxis stroke="#a0aec0" domain={[0, 12]} tick={{ fill: '#a0aec0' }}>
                    <Label value="Reid Vapor Pressure (RVP) in psi" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fill: '#cbd5e0' }} />
                </YAxis>
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#2d3748',
                        borderColor: '#4a5568',
                        color: '#e2e8f0'
                    }}
                    itemStyle={{ color: '#e2e8f0' }}
                    labelStyle={{ color: '#06b6d4', fontWeight: 'bold' }}
                />
                <Legend wrapperStyle={{ color: '#a0aec0' }} />
                <Line
                    type="monotone"
                    data={lineData}
                    dataKey="rvp"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={{ r: 0 }}
                    activeDot={{ r: 6 }}
                    isAnimationActive={true}
                    animationDuration={1000}
                />
                {chartData.map((entry) => (
                     <ReferenceDot 
                        key={`ref-${entry.blend}`} 
                        x={entry.label} 
                        y={entry.rvp} 
                        ifOverflow="extendDomain"
                        r={5} 
                        fill="#06b6d4" 
                        stroke="white" 
                        strokeWidth={2}
                     >
                        <Label value={entry.blend} position="top" fill="white" fontSize={12} />
                    </ReferenceDot>
                ))}
                {highlightKey && RVP_CHART_DATA.find(d => d.blend === highlightKey) && (
                    <ReferenceDot
                        x={RVP_CHART_DATA.find(d => d.blend === highlightKey)?.label}
                        y={RVP_CHART_DATA.find(d => d.blend === highlightKey)?.rvp}
                        ifOverflow="extendDomain"
                        shape={<CustomizedDot />}
                    />
                )}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default RVPChart;
