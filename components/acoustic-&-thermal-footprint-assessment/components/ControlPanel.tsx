
import React from 'react';
import { PlayIcon, RefreshCw } from './IconComponents';

interface ControlPanelProps {
    isTesting: boolean;
    onStartTest: () => void;
    onReset: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    isTesting,
    onStartTest,
    onReset
}) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!isTesting ? (
                <button
                    onClick={onStartTest}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                    <PlayIcon className="w-5 h-5" />
                    Start Assessment
                </button>
            ) : (
                <button
                    onClick={onReset}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500 transition-all duration-300"
                >
                    <RefreshCw className="w-5 h-5" />
                    Reset Simulation
                </button>
            )}
        </div>
    );
};

export default ControlPanel;
