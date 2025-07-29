
import React from 'react';
import { MonitoringMethod } from '../types';
import MethodVisualizer from './TankSystem'; // Re-using TankSystem as MethodVisualizer
import DescriptionPanel from './ControlPanel'; // Re-using ControlPanel as DescriptionPanel
import MethodSelector from './InfoPanel'; // Re-using InfoPanel as MethodSelector

interface DashboardProps {
  methods: MonitoringMethod[];
  activeMethod: MonitoringMethod;
  onSelectMethod: (id: MonitoringMethod['id']) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ methods, activeMethod, onSelectMethod }) => {
  return (
    <main className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <MethodSelector 
          methods={methods}
          activeMethodId={activeMethod.id}
          onSelectMethod={onSelectMethod}
        />
      </div>
      <div className="lg:col-span-3 grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className="xl:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 overflow-hidden">
          <MethodVisualizer method={activeMethod} key={activeMethod.id} />
        </div>
        <div className="xl:col-span-2">
          <DescriptionPanel method={activeMethod} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
