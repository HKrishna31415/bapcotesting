import React from 'react';
import { MonitoringMethod } from '../types';

interface MethodSelectorProps {
  methods: MonitoringMethod[];
  activeMethodId: string;
  onSelectMethod: (id: MonitoringMethod['id']) => void;
}

const MethodButton: React.FC<{ method: MonitoringMethod, isActive: boolean, onClick: (id: MonitoringMethod['id']) => void }> = ({ method, isActive, onClick }) => (
  <button
    key={method.id}
    onClick={() => onClick(method.id)}
    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
      isActive ? 'tab-active' : 'tab-inactive'
    }`}
  >
    {method.name}
  </button>
);

const MethodSelector: React.FC<MethodSelectorProps> = ({ methods, activeMethodId, onSelectMethod }) => {
  const detectingMethods = methods.filter(m => m.category === 'detecting');
  const pinpointingMethods = methods.filter(m => m.category === 'pinpointing');

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-700 h-full flex flex-col">
      <div className="flex-1 space-y-6 overflow-y-auto">
        <div>
          <h3 className="font-bold text-white text-lg mb-3 border-b border-slate-600 pb-2">Detecting a Leak</h3>
          <nav className="flex flex-col space-y-2">
            {detectingMethods.map((method) => (
              <MethodButton
                key={method.id}
                method={method}
                isActive={activeMethodId === method.id}
                onClick={onSelectMethod}
              />
            ))}
          </nav>
        </div>
        <div>
          <h3 className="font-bold text-white text-lg mb-3 border-b border-slate-600 pb-2">Pinpointing a Leak</h3>
          <nav className="flex flex-col space-y-2">
            {pinpointingMethods.map((method) => (
               <MethodButton
                key={method.id}
                method={method}
                isActive={activeMethodId === method.id}
                onClick={onSelectMethod}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MethodSelector;