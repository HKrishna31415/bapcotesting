
import React from 'react';

interface SystemSchematicProps {
    isRunning: boolean;
    stageIEnabled: boolean;
    stageIIIEnabled: boolean;
}

const SystemSchematic: React.FC<SystemSchematicProps> = ({ isRunning, stageIEnabled, stageIIIEnabled }) => {
    const stageIIIColor = stageIIIEnabled ? '#34D399' : '#4A5568'; // Green when enabled

    return (
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">System Schematic</h3>
            <div className="relative w-full h-48">
                <svg width="100%" height="100%" viewBox="0 0 300 120">
                    {/* Truck */}
                    <rect x="10" y="50" width="80" height="40" rx="5" fill="#4A5568" />
                    <rect x="20" y="30" width="50" height="20" rx="3" fill="#6B7280" />
                    <circle cx="30" cy="95" r="8" fill="#2D3748" />
                    <circle cx="70" cy="95" r="8" fill="#2D3748" />
                    <text x="50" y="75" fill="#E5E7EB" fontSize="12" textAnchor="middle">Truck</text>

                    {/* Underground Storage Tank (UST) */}
                    <rect x="180" y="40" width="110" height="60" rx="5" fill="#4A5568" />
                    <text x="235" y="75" fill="#E5E7EB" fontSize="12" textAnchor="middle">UST</text>

                    {/* Stage III Vapor Processor */}
                    <g>
                        <rect x="130" y="5" width="40" height="25" rx="3" fill={stageIIIColor} stroke={stageIIIEnabled && isRunning ? 'white' : 'none'} strokeWidth="1" />
                        <text x="150" y="21" fill="#E5E7EB" fontSize="8" textAnchor="middle">S-III</text>
                        {isRunning && stageIIIEnabled && (
                            <path d="M 135 5 v -3 h 30 v 3" stroke="#34D399" strokeWidth="1.5" fill="none">
                                <animate attributeName="stroke" values="#34D399; #E5E7EB; #34D399" dur="1.5s" repeatCount="indefinite" />
                            </path>
                        )}
                    </g>

                    {/* Ground Level */}
                    <line x1="0" y1="30" x2="300" y2="30" stroke="#6B7280" strokeWidth="2" />

                    {/* Fuel Hose */}
                    <path d="M 90 60 C 120 60, 150 80, 180 80" stroke="#FBBF24" strokeWidth="4" fill="none" />

                    {/* Vapor Recovery Hose */}
                    {stageIEnabled && (
                        <path d="M 90 80 C 120 80, 150 60, 180 60" stroke="#38BDF8" strokeWidth="4" fill="none" />
                    )}

                    {/* Fuel Flow Animation */}
                    {isRunning && (
                        <circle cx="0" cy="0" r="3" fill="#FBBF24">
                            <animateMotion dur="2s" repeatCount="indefinite" path="M 90 60 C 120 60, 150 80, 180 80" />
                        </circle>
                    )}
                    
                    {/* Vapor Flow Animation */}
                    {isRunning && stageIEnabled && (
                        <circle cx="0" cy="0" r="3" fill="#38BDF8" opacity="0.8">
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 180 60 C 150 60, 120 80, 90 80" />
                        </circle>
                    )}

                    {/* Backpressure representation */}
                    {isRunning && !stageIEnabled && !stageIIIEnabled && (
                         <g>
                            <circle cx="105" cy="75" r="3" fill="#EF4444" opacity="0.8">
                                <animate attributeName="r" from="1" to="5" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite" />
                            </circle>
                             <text x="115" y="70" fill="#F87171" fontSize="10" className="font-bold">High Backpressure</text>
                         </g>
                    )}
                </svg>
            </div>
        </div>
    );
};

export default SystemSchematic;
