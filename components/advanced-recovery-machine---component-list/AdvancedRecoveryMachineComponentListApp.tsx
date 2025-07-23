
import React from 'react';
import { EQUIPMENT_DATA } from './constants';
import EquipmentCard from './components/EquipmentCard';

const AdvancedRecoveryMachineComponentListApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans p-4 sm:p-6 md:p-8">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" 
        style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}
      ></div>
      <div className="relative max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-3">
            Advanced Recovery Machine
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            System Equipment & Monitoring Hardware
          </p>
          <p className="mt-4 text-slate-500 max-w-4xl mx-auto">
            The project will integrate best-in-class components to ensure reliability, efficiency, and data accuracy for comprehensive performance validation.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {EQUIPMENT_DATA.map((categoryData) => (
            <EquipmentCard key={categoryData.category} data={categoryData} />
          ))}
        </main>
        
        <footer className="text-center mt-16 text-slate-600 text-sm">
            <p>Component overview for high-tech validation protocol.</p>
        </footer>
      </div>
    </div>
  );
};

export default AdvancedRecoveryMachineComponentListApp;
