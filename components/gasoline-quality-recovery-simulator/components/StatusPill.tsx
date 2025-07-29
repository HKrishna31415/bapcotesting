
import React from 'react';
import { TestStatus } from '../types';

interface StatusPillProps {
  status: TestStatus;
}

export const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  const statusStyles: { [key in TestStatus]: string } = {
    [TestStatus.PENDING]: 'bg-slate-500 text-slate-100',
    [TestStatus.TESTING]: 'bg-blue-500 text-white animate-pulse',
    [TestStatus.PASS]: 'bg-green-500 text-white',
    [TestStatus.FAIL]: 'bg-red-500 text-white',
  };

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
};
