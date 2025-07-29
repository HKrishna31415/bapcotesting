import React from 'react';
import { TestResult, TestStatus } from '../types';
import { StatusPill } from './StatusPill';
import { CheckCircleIcon, XCircleIcon } from './IconComponents';

interface TestItemProps {
  test: TestResult;
  icon: React.ReactNode;
}

export const TestItem: React.FC<TestItemProps> = ({ test, icon }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div className="text-blue-400">{icon}</div>
        <div>
          <p className="font-semibold text-slate-100">{test.name}</p>
          <p className="text-sm text-slate-400">{test.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        {test.status === TestStatus.PASS && <CheckCircleIcon className="w-6 h-6 text-green-400" />}
        {test.status === TestStatus.FAIL && <XCircleIcon className="w-6 h-6 text-red-400" />}
        <StatusPill status={test.status} />
      </div>
    </div>
  );
};
