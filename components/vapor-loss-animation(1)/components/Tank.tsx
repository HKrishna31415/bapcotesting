import React from 'react';

const VaporParticle = ({ delay, duration, left, animationClass }: { delay: string, duration: string, left: string, animationClass: string }) => (
  <div
    className={`absolute bottom-[90%] w-1.5 h-1.5 bg-purple-400/50 rounded-full shadow-[0_0_8px_3px_rgba(192,132,252,0.4)] ${animationClass}`}
    style={{
      animationDelay: delay,
      animationDuration: duration,
      left: left,
    }}
  />
);

const VentingVapors = ({ count = 30, inhaling = false }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <VaporParticle
          key={i}
          delay={`${Math.random() * 2.5}s`}
          duration={`${2.5 + Math.random() * 2}s`}
          left={`${15 + Math.random() * 70}%`}
          animationClass={inhaling ? 'animate-inhale-flow' : 'animate-vapor-rise'}
        />
      ))}
    </div>
  );
};


interface TankProps {
  label: string;
  fuelLevel?: number;
  vaporLevel?: number;
  isVenting?: boolean;
  isInhaling?: boolean;
  isFilling?: boolean;
  fillRate?: number;
}

export const Tank = ({
  label,
  fuelLevel = 60,
  vaporLevel = 20,
  isVenting = false,
  isInhaling = false,
  isFilling = false,
  fillRate = 5
}: TankProps) => {
  
  const liquidHeight = `${fuelLevel}%`;
  const vaporTop = `${100 - fuelLevel - vaporLevel}%`;
  const vaporHeight = `${vaporLevel}%`;
  const fillTransitionDuration = isFilling ? `${100 / fillRate}s` : '1.5s';

  return (
    <div className="flex flex-col items-center gap-2">
        <div className="w-40 h-64 relative">
            {/* Main Tank Body */}
            <div className="w-full h-full bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 rounded-lg shadow-inner shadow-black/50 relative overflow-hidden">
                
                {/* Vapor Area */}
                <div
                    className="absolute left-0 w-full transition-all duration-1000 ease-in-out"
                    style={{
                        top: vaporTop,
                        height: vaporHeight,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-radial from-purple-500/30 to-transparent opacity-60 animate-pulse" style={{animationDuration: '4s'}}></div>
                </div>

                {/* Liquid Area */}
                <div
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-600 via-orange-500 to-yellow-400"
                    style={{ 
                        height: liquidHeight, 
                        transition: `height ${fillTransitionDuration} linear, top 1.5s ease-in-out`
                    }}
                >
                    {/* Liquid Surface Wave */}
                    <div className="absolute -top-1 left-0 w-full h-3 overflow-hidden">
                        <div 
                            className="w-[200%] h-full bg-repeat-x animate-[wave_4s_linear_infinite]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='10' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 5 Q 25 10 50 5 T 100 5' stroke='%23fcd34d' fill='transparent' stroke-width='2'/%3e%3c/svg%3e")`,
                                backgroundSize: '100px 10px',
                            }}
                        ></div>
                    </div>
                </div>
                
                {/* Tank Shine/Highlight */}
                <div className="absolute top-0 left-4 w-10 h-full bg-white/10 rounded-full blur-lg -rotate-12"></div>
                
                {/* Venting/Inhaling particles */}
                {isVenting && <VentingVapors />}
                {isInhaling && <VentingVapors inhaling />}

            </div>

            {/* Tank Top & Bottom Rims */}
            <div className="absolute -top-[3px] left-0 w-full h-4 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full z-10 border-[3px] border-slate-400"></div>
            <div className="absolute -bottom-[3px] left-0 w-full h-4 bg-gradient-to-t from-slate-500 to-slate-700 rounded-full border-[3px] border-slate-400"></div>
        </div>
        <p className="font-bold text-sm text-slate-300 tracking-wider mt-2">{label}</p>
    </div>
  );
};
