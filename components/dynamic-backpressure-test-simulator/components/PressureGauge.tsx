
import React from 'react';
import { TestStatus } from '../types';
import { INH2O_TO_KPA } from '../constants';

interface PressureGaugeProps {
    pressure: number;
    maxPressure: number;
    status: TestStatus;
}

const PressureGauge: React.FC<PressureGaugeProps> = ({ pressure, maxPressure, status }) => {
    const percentage = Math.min(pressure / maxPressure, 1);
    const circumference = 2 * Math.PI * 80; // Radius is 80

    const getStatusColor = () => {
        if (status === TestStatus.Failed || percentage >= 1) return 'text-red-500';
        if (status === TestStatus.Passed) return 'text-green-500';
        if (percentage > 0.75) return 'text-yellow-400';
        return 'text-cyan-400';
    };

    const getTrackColor = () => {
        if (status === TestStatus.Failed || percentage >= 1) return 'stroke-red-500';
        if (status === TestStatus.Passed) return 'stroke-green-500';
        if (percentage > 0.75) return 'stroke-yellow-400';
        return 'stroke-cyan-400';
    }

    const colorClass = getStatusColor();
    const pressureKpa = pressure * INH2O_TO_KPA;

    return (
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700 text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Live Backpressure</h3>
            <div className="relative inline-block" style={{ width: '200px', height: '100px' }}>
                <svg viewBox="0 0 200 100" className="w-full h-full">
                    {/* Background Arc */}
                    <path
                        d="M 20 100 A 80 80 0 0 1 180 100"
                        fill="none"
                        strokeWidth="12"
                        className="stroke-gray-700"
                    />
                    {/* Foreground Arc */}
                    {pressure > 0 && (
                      <path
                          d="M 20 100 A 80 80 0 0 1 180 100"
                          fill="none"
                          strokeWidth="12"
                          strokeLinecap="round"
                          className={`transition-all duration-200 ease-in-out ${getTrackColor()}`}
                          style={{
                              strokeDasharray: `${circumference / 2} ${circumference}`,
                              strokeDashoffset: `${(circumference / 2) * (1 - percentage)}`
                          }}
                      />
                    )}
                    {/* Max Pressure Marker */}
                     <line 
                        x1="180" y1="100" 
                        x2="185" y2="90" 
                        strokeWidth="2"
                        className="stroke-red-500"
                    />
                    <text x="188" y="88" fontSize="10" fill="white" textAnchor="middle">MAX</text>

                </svg>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
                    <div className={colorClass}>
                        <span className="text-4xl font-black tracking-tighter">{pressure.toFixed(2)}</span>
                        <span className="text-sm ml-1 font-medium text-gray-400">inH₂O</span>
                    </div>
                    <div className="text-gray-400 text-md -mt-1">
                        ({pressureKpa.toFixed(2)} kPa)
                    </div>
                </div>
            </div>
             <p className="text-xs text-gray-500 mt-2">Max Allowable: {maxPressure.toFixed(2)} inH₂O / {(maxPressure * INH2O_TO_KPA).toFixed(2)} kPa</p>
        </div>
    );
};

export default PressureGauge;