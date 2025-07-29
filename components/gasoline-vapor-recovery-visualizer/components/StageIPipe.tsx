
import React from 'react';

const StageIPipe: React.FC = () => {
  const gradient = 'repeating-linear-gradient(to top, #7dd3fc, #7dd3fc 10px, #38bdf8 10px, #38bdf8 20px)';

  return (
    <div className="absolute bottom-[14rem] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <p className="text-slate-400 font-semibold text-xs whitespace-nowrap mb-1">Stage I Vapor Vent</p>
        <div 
            className="w-6 h-24 bg-slate-600 rounded-t-md border-t-2 border-x-2 border-slate-500 overflow-hidden shadow-lg"
        >
            <div
                className="h-full w-full animate-flow-vertical"
                style={{
                backgroundImage: gradient,
                backgroundSize: '100% 100px'
                }}
            ></div>
        </div>
    </div>
  );
};

export default StageIPipe;