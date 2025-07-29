import React from 'react';

const GasPump: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
       <div className="text-slate-400 font-semibold mb-2 text-center text-sm h-10">Vapor Recovery Machine</div>
       <div className="w-32 h-56 bg-red-700 rounded-xl border-4 border-red-900/50 p-3 flex flex-col items-center justify-between shadow-2xl relative">
        {/* Screen */}
        <div className="w-full h-1/3 bg-gray-800 rounded-md border-2 border-gray-900 flex flex-col items-center justify-center p-1">
            <p className="text-green-400 text-xs font-mono tracking-widest">ACTIVE</p>
            <p className="text-green-400 text-xs font-mono tracking-widest">RECOVERY</p>
        </div>
        
        {/* Hose on the side */}
        <div className="absolute right-full top-20 -mr-1 w-8 h-20 bg-slate-800 rounded-l-full border-y-4 border-l-4 border-slate-900/80"></div>

        {/* Branding */}
        <div className="w-full text-center">
            <div className="text-white font-black text-2xl tracking-tighter" style={{textShadow: '1px 1px 2px #000'}}>
                FUEL
            </div>
        </div>
       </div>
    </div>
  );
};

export default GasPump;