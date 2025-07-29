
import React, { useState } from 'react';
import { METHODS } from './constants';
import Dashboard from './components/Dashboard';
import { MonitoringMethod } from './types';

function App() {
  const [activeMethodId, setActiveMethodId] = useState<MonitoringMethod['id']>(METHODS[0].id);

  const activeMethod = METHODS.find(m => m.id === activeMethodId)!;

  return (
    <div className="min-h-screen text-slate-100 font-sans p-4 sm:p-6 lg:p-8 flex flex-col">
       <header className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Leak Detection Method Explorer
        </h1>
        <p className="text-slate-400 mt-2">
          Interactive animations of modern fuel leak detection technologies.
        </p>
      </header>
      <Dashboard
        methods={METHODS}
        activeMethod={activeMethod}
        onSelectMethod={setActiveMethodId}
      />
    </div>
  );
}

export default App;
