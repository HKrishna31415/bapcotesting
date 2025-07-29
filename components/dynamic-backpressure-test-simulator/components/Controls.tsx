
import React from 'react';
import { TestStatus, type FlowRateOption } from '../types';
import { PlayIcon, StopIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

interface ControlsProps {
    testStatus: TestStatus;
    stageIEnabled: boolean;
    stageIIIEnabled: boolean;
    flowRate: FlowRateOption;
    flowRateOptions: FlowRateOption[];
    onStartStop: () => void;
    onToggleStageI: () => void;
    onToggleStageIII: () => void;
    onSetFlowRate: (option: FlowRateOption) => void;
    onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({
    testStatus,
    stageIEnabled,
    stageIIIEnabled,
    flowRate,
    flowRateOptions,
    onStartStop,
    onToggleStageI,
    onToggleStageIII,
    onSetFlowRate,
    onReset,
}) => {
    const isRunning = testStatus === TestStatus.Running;
    
    return (
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-6 text-white">Test Configuration</h3>
            
            <div className="space-y-6">
                {/* Stage I Toggle */}
                <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-300">Stage I System</span>
                    <button
                        onClick={onToggleStageI}
                        disabled={isRunning}
                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 ${isRunning ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        <span className={`absolute inset-0 rounded-full ${stageIEnabled ? 'bg-green-500' : 'bg-gray-600'}`}></span>
                        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${stageIEnabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
                    </button>
                </div>

                {/* Stage III Toggle */}
                <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-300">Stage III System</span>
                    <button
                        onClick={onToggleStageIII}
                        disabled={isRunning}
                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 ${isRunning ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        <span className={`absolute inset-0 rounded-full ${stageIIIEnabled ? 'bg-green-500' : 'bg-gray-600'}`}></span>
                        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${stageIIIEnabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
                    </button>
                </div>

                {/* Flow Rate */}
                <div>
                    <label className="block font-medium text-gray-300 mb-2">Flow Rate (GPM / LPM)</label>
                    <div className="grid grid-cols-3 gap-2">
                        {flowRateOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => onSetFlowRate(option)}
                                disabled={isRunning}
                                className={`px-2 py-2 text-sm font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 ${
                                    flowRate.value === option.value
                                        ? 'bg-cyan-500 text-white shadow-md'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                } ${isRunning ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4">
                    <button
                        onClick={onStartStop}
                        className={`flex-1 inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                            isRunning
                                ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
                                : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                        }`}
                    >
                        {isRunning ? (
                            <StopIcon className="h-5 w-5 mr-2" />
                        ) : (
                            <PlayIcon className="h-5 w-5 mr-2" />
                        )}
                        {isRunning ? 'Stop Test' : 'Start Test'}
                    </button>
                     <button
                        onClick={onReset}
                        disabled={isRunning}
                        className={`p-3 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                        aria-label="Reset Test"
                    >
                        <ArrowPathIcon className="h-5 w-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Controls;