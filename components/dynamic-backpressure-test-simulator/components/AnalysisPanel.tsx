
import React from 'react';
import { TestStatus } from '../types';
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { INH2O_TO_KPA } from '../constants';

interface AnalysisPanelProps {
    status: TestStatus;
    peakPressure: number;
}

const StatusIndicator: React.FC<{ status: TestStatus }> = ({ status }) => {
    switch (status) {
        case TestStatus.Passed:
            return (
                <div className="flex items-center space-x-3 bg-green-900/50 p-4 rounded-t-lg">
                    <CheckCircleIcon className="h-10 w-10 text-green-400" />
                    <div>
                        <h3 className="text-xl font-bold text-green-300">Test Passed</h3>
                        <p className="text-sm text-green-400">System operating within allowable limits.</p>
                    </div>
                </div>
            );
        case TestStatus.Failed:
            return (
                <div className="flex items-center space-x-3 bg-red-900/50 p-4 rounded-t-lg">
                    <XCircleIcon className="h-10 w-10 text-red-400" />
                    <div>
                        <h3 className="text-xl font-bold text-red-300">Test Failed</h3>
                        <p className="text-sm text-red-400">Backpressure exceeded maximum allowable level.</p>
                    </div>
                </div>
            );
        default:
            return (
                <div className="flex items-center space-x-3 bg-gray-700/50 p-4 rounded-t-lg">
                    <InformationCircleIcon className="h-10 w-10 text-cyan-400" />
                    <div>
                        <h3 className="text-xl font-bold text-cyan-300">Awaiting Test</h3>
                        <p className="text-sm text-cyan-400">Configure and start the test to see results.</p>
                    </div>
                </div>
            );
    }
};

const TestResult: React.FC<{ status: TestStatus; peakPressure: number }> = ({ status, peakPressure }) => {
    if (status !== TestStatus.Passed && status !== TestStatus.Failed) {
         if (status === TestStatus.Idle && peakPressure > 0) {
            // Test was stopped manually
         } else {
            return (
                <div className="p-6 text-center text-gray-400">
                    Test results will be displayed here.
                </div>
            );
         }
    }
    
    return (
        <div className="p-6 space-y-4">
            <div>
                <h4 className="font-bold text-lg text-cyan-300 mb-2">Test Summary</h4>
                <div className="bg-gray-900/50 p-4 rounded-md">
                    <p className="text-gray-300">
                        Peak Pressure Reached:
                    </p>
                    <p className="text-2xl font-bold">
                        <span className="text-white">{peakPressure.toFixed(2)} inH₂O</span>
                        <span className="text-gray-400 font-medium text-xl mx-2">/</span>
                        <span className="text-cyan-400">{(peakPressure * INH2O_TO_KPA).toFixed(2)} kPa</span>
                    </p>
                </div>
            </div>
        </div>
    );
};


const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ status, peakPressure }) => {
    return (
        <div className="bg-gray-800/50 rounded-lg shadow-lg border border-gray-700 min-h-[20rem]">
            <StatusIndicator status={status} />
            <TestResult status={status} peakPressure={peakPressure} />
        </div>
    );
};

export default AnalysisPanel;