
import React from 'react';

interface FlowPipeProps {
  color: 'amber' | 'sky';
}

const FlowPipe: React.FC<FlowPipeProps> = ({ color }) => {
  const gradients = {
    amber: 'repeating-linear-gradient(to right, #fbbf24, #fbbf24 10px, #d97706 10px, #d97706 20px)',
    sky: 'repeating-linear-gradient(to right, #7dd3fc, #7dd3fc 10px, #38bdf8 10px, #38bdf8 20px)'
  };

  return (
    <div className="w-24 md:w-32 h-6 self-end mb-[4.5rem] bg-slate-600 rounded-md border-2 border-slate-500 overflow-hidden shadow-lg">
      <div
        className="h-full w-full animate-flow"
        style={{
          backgroundImage: gradients[color],
          backgroundSize: '100px 100%'
        }}
      ></div>
    </div>
  );
};

export default FlowPipe;
