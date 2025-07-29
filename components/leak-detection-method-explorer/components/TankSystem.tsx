import React, { useState, useEffect } from 'react';
import { MonitoringMethod, SimulationState } from '../types';
import { PlayIcon, ResetIcon, CameraIcon, EyeIcon, EarIcon, MoleculeIcon, WaterDropIcon, FireIcon, GaugeIcon, NoseIcon, BubbleIcon } from './icons';

interface MethodVisualizerProps {
  method: MonitoringMethod;
  key: string;
}

// --- SHARED UI COMPONENTS ---

const VisualizerButton: React.FC<{ onClick: () => void; children: React.ReactNode; disabled?: boolean, active?: boolean }> = ({ onClick, children, disabled, active }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center gap-2 w-full px-4 py-2 text-white font-bold rounded-lg shadow-md transition-colors duration-200 ${
      active ? 'bg-amber-600 hover:bg-amber-500' : 'bg-sky-600 hover:bg-sky-500'
    } disabled:bg-slate-600 disabled:cursor-not-allowed`}
  >
    {children}
  </button>
);

const GroundAndTank: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>
    <defs>
      <linearGradient id="tankGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#71717a' }} />
        <stop offset="100%" style={{ stopColor: '#3f3f46' }} />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect x="0" y="150" width="400" height="150" fill="#44403c" />
    <rect x="0" y="150" width="400" height="10" fill="#57534e" />
    <text x="10" y="285" fill="#a8a29e" fontSize="10" fontFamily="monospace">Ground Level</text>
    <line x1="0" y1="150" x2="400" y2="150" stroke="#a8a29e" strokeWidth="0.5" strokeDasharray="4 2" />
    <ellipse cx="200" cy="210" rx="130" ry="40" fill="url(#tankGradient)" stroke="#3f3f46" strokeWidth="2" />
    <text x="200" y="215" textAnchor="middle" fill="#d4d4d8" fontSize="14" fontWeight="bold">UST</text>
    {children}
  </>
);

const AboveGroundPipe: React.FC<{ children?: React.ReactNode, title?: string }> = ({ children, title = "Above-ground piping" }) => (
    <>
        <rect x="0" y="0" width="400" height="300" fill="#1e293b" />
        <text x="200" y="40" fill="#94a3b8" textAnchor="middle" fontSize="12">{title}</text>
        
        {/* Pipe */}
        <path d="M 50 150 H 350" stroke="#a1a1aa" strokeWidth="16" />
        <path d="M 50 150 H 350" stroke="#71717a" strokeWidth="12" />
        <rect x="190" y="140" width="20" height="20" fill="#a1a1aa" />
        <rect x="192" y="142" width="16" height="16" fill="#71717a" />
        <text x="200" y="180" fill="#d4d4d8" textAnchor="middle" fontSize="12">Pipe Joint</text>
        {children}
    </>
);


// --- VISUALIZATIONS PER METHOD ---

const AtgVisualization = () => {
    const [state, setState] = useState(SimulationState.Idle);
    const [fuelLevel, setFuelLevel] = useState(100.0);

    useEffect(() => {
        if (state === SimulationState.Running) {
            const timer = setInterval(() => {
                setFuelLevel(prev => {
                    if (prev <= 98.8) {
                        clearInterval(timer);
                        setState(SimulationState.Detected);
                        return 98.8;
                    }
                    return prev - 0.1
                });
            }, 500);
            return () => clearInterval(timer);
        }
    }, [state]);
    
    const handleReset = () => {
      setState(SimulationState.Idle);
      setFuelLevel(100.0);
    }

    return (
     <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <GroundAndTank>
            <rect x="70" y="170" width="260" height={40 * (fuelLevel / 100)} fill="#facc15" className="transition-all duration-500"/>
            <rect x="195" y="100" width="10" height="110" fill="#a1a1aa" />
            <rect x="190" y="100" width="20" height="15" fill="#52525b" />
            <text x="210" y="110" fontSize="10" fill="white">ATG Probe</text>
             <foreignObject x="10" y="20" width="180" height="100">
                <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-600 text-center text-white">
                    <div className="text-xs text-slate-400">Measured Fuel Volume</div>
                    <div className="text-2xl font-bold transition-colors" style={{color: state === SimulationState.Detected ? '#f59e0b' : 'white'}}>{fuelLevel.toFixed(2)}%</div>
                    <div className="text-xs text-slate-400">(Simulating 8-hour test)</div>
                    {state === SimulationState.Detected && <div className="text-amber-400 text-xs font-bold animate-pulse">Volume Loss! Leak Detected.</div>}
                </div>
            </foreignObject>
          </GroundAndTank>
        </svg>
      </div>
       <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-2 gap-4">
        <VisualizerButton onClick={() => setState(SimulationState.Running)} disabled={state !== SimulationState.Idle}><PlayIcon className="w-5 h-5"/> Start Test</VisualizerButton>
        <VisualizerButton onClick={handleReset} disabled={state === SimulationState.Idle}><ResetIcon className="w-5 h-5"/> Reset</VisualizerButton>
      </div>
    </div>
    )
}

const InterstitialVisualization = () => {
    const [state, setState] = useState(SimulationState.Idle);
    const hasLeaked = state === SimulationState.Detected;
    
    return (
     <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <GroundAndTank>
            {/* Outer wall */}
            <ellipse cx="200" cy="210" rx="135" ry="45" fill="none" stroke="#a1a1aa" strokeWidth="2" />
            {/* Interstitial Space */}
            <text x="200" y="160" fontSize="8" fill="#d4d4d8" textAnchor="middle">Interstitial Space</text>
             {/* Leaked fuel */}
             <ellipse cx="200" cy="245" rx={hasLeaked ? 40 : 0} ry={hasLeaked ? 10 : 0} fill="#f59e0b" className="transition-all duration-1000" opacity="0.8"/>
            {/* Sensor */}
            <rect x="240" y="245" width="10" height="10" fill={hasLeaked ? '#f59e0b' : '#34d399'} stroke="black" strokeWidth="1" className="transition-colors duration-300"/>
            <text x="255" y="253" fontSize="8" fill="white">Sensor</text>
             {hasLeaked && <text x="200" y="50" fontSize="14" fill="#fcd34d" textAnchor="middle" className="font-bold animate-pulse">LEAK DETECTED IN INTERSTITIAL SPACE</text>}
          </GroundAndTank>
        </svg>
      </div>
       <div className="p-4 bg-slate-900/50 border-t border-slate-700">
        <VisualizerButton onClick={() => setState(hasLeaked ? SimulationState.Idle : SimulationState.Detected)}>
          {hasLeaked ? <><ResetIcon className="w-5 h-5"/> Reset</> : <>Simulate Inner Wall Leak</>}
        </VisualizerButton>
      </div>
    </div>
    )
}

const CgiVisualization = () => {
  const [state, setState] = useState(SimulationState.Idle);
  const [lel, setLel] = useState(0);

  useEffect(() => {
    let timer: number;
    if (state === SimulationState.Leaking) {
      timer = window.setInterval(() => {
        setLel(prev => {
          if (prev >= 25) {
            clearInterval(timer);
            setState(SimulationState.Detected);
            return 25;
          }
          return prev + 1;
        });
      }, 80);
    }
    return () => clearInterval(timer);
  }, [state]);

  const handleReset = () => {
    setState(SimulationState.Idle);
    setLel(0);
  };
  
  const isLeaking = state === SimulationState.Leaking || state === SimulationState.Detected;
  const isDetected = state === SimulationState.Detected;
  const lelColor = isDetected ? '#ef4444' : (isLeaking ? '#f59e0b' : '#34d399');

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <GroundAndTank>
            {/* VRU (Vapor Recovery Unit) */}
            <g transform="translate(180, 0)">
              <rect x="50" y="80" width="40" height="70" fill="#a1a1aa" rx="2" />
              <rect x="55" y="85" width="30" height="20" fill="#1e293b" />
              <path d="M 90 100 h 20 v -10" stroke="#71717a" strokeWidth="5" fill="none" />
              <text x="70" y="165" fill="#d4d4d8" textAnchor="middle" fontSize="8">VRU</text>
            </g>

            {/* Pipe from UST to VRU */}
            <path d="M 200 190 Q 240 190, 240 160 V 150" stroke="#a1a1aa" strokeWidth="8" fill="none" />
            
            {/* Containment Sump under VRU */}
            <rect x="220" y="150" width="60" height="30" stroke="#a1a1aa" strokeWidth="2" fill="#52525b" />
            <text x="250" y="145" fill="#d4d4d8" textAnchor="middle" fontSize="8">VRU Sump</text>

            {/* Leaking Pipe Joint in Sump */}
            <rect x="236" y="155" width="8" height="8" fill="#71717a" />
            
            {/* Vapor in sump */}
            {isLeaking && (
                <g transform="translate(240, 175)">
                    <path d="M -10 0 C 0 -15, 0 -15, 10 0" fill="#fde047" opacity="0.4">
                         <animate attributeName="d" values="M -10 0 C 0 -10, 0 -10, 10 0; M -10 0 C 0 -15, 0 -15, 10 0; M -10 0 C 0 -10, 0 -10, 10 0" dur="2s" repeatCount="indefinite" />
                    </path>
                </g>
            )}

            {/* CGI Sensor in Sump */}
            <rect x="255" y="160" width="15" height="15" fill="#3f3f46" stroke="black"/>
            <circle cx="262.5" cy="167.5" r="2" fill={lelColor} className="transition-colors duration-200" />
            <text x="255" y="158" fontSize="8" fill="white" textAnchor="end">CGI</text>

            {/* LEL Readout Display */}
            <foreignObject x="20" y="60" width="140" height="80">
                <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-600 text-center text-white">
                    <div className="text-xs text-slate-400">Combustible Gas</div>
                    <div className="text-2xl font-bold transition-colors" style={{color: lelColor}}>{lel.toFixed(0)}% LEL</div>
                    {isDetected && <div className="text-red-500 text-xs font-bold animate-pulse">Explosive Risk! Alarm.</div>}
                </div>
            </foreignObject>
          </GroundAndTank>
        </svg>
      </div>
      <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-2 gap-4">
        <VisualizerButton onClick={() => setState(SimulationState.Leaking)} disabled={state !== SimulationState.Idle}>
          <FireIcon className="w-5 h-5"/> Simulate Vapor Leak
        </VisualizerButton>
        <VisualizerButton onClick={handleReset} disabled={state === SimulationState.Idle}>
          <ResetIcon className="w-5 h-5"/> Reset
        </VisualizerButton>
      </div>
    </div>
  );
};


const OpticalGasVisualization = () => {
    const [isLeaking, setIsLeaking] = useState(false);
    const [irView, setIrView] = useState(false);
    
    const GasPlume = () => (
        <g opacity={isLeaking ? 1 : 0} className="transition-opacity duration-500">
            <path d="M 320 30 C 310 10, 330 -10, 340 0" fill={irView ? "black" : "none"} opacity="0.5">
                 <animateTransform attributeName="transform" type="translate" values="0 0; 0 -20" dur="2s" repeatCount="indefinite"/>
                 <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
            </path>
             <path d="M 325 30 C 320 15, 335 0, 345 5" fill={irView ? "black" : "none"} opacity="0.4">
                 <animateTransform attributeName="transform" type="translate" values="0 0; 5 -15" dur="1.5s" repeatCount="indefinite"/>
                 <animate attributeName="opacity" values="0;0.4;0" dur="1.5s" repeatCount="indefinite" />
            </path>
        </g>
    )

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-1" style={{background: irView ? '#e2e8f0' : 'transparent'}}>
                 <svg viewBox="0 0 400 300" className="w-full h-full">
                     <GroundAndTank>
                         <path d="M 120 190 V 50 H 320 V 30" stroke="#a1a1aa" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                         <g transform="translate(300, 0)">
                           <rect x="15" y="10" width="30" height="20" fill="#4b5563" rx="2" />
                           <path d="M 30 30 L 30 40 L 40 40" stroke="#a1a1aa" strokeWidth="4" fill="none" />
                        </g>
                        <GasPlume />
                     </GroundAndTank>
                     {irView && <text x="200" y="20" fontSize="12" fill="black" textAnchor="middle" className="font-bold">INFRARED CAMERA VIEW</text>}
                 </svg>
            </div>
             <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-3 gap-4">
                <VisualizerButton onClick={() => setIrView(!irView)} active={irView}>
                    {irView ? <><EyeIcon className="w-5 h-5"/> Normal View</> : <><CameraIcon className="w-5 h-5"/> IR View</>}
                </VisualizerButton>
                <VisualizerButton onClick={() => setIsLeaking(true)} disabled={isLeaking}>Simulate Leak</VisualizerButton>
                <VisualizerButton onClick={() => setIsLeaking(false)} disabled={!isLeaking}><ResetIcon className="w-5 h-5"/> Stop Leak</VisualizerButton>
             </div>
        </div>
    )
}

const VaporWellVisualization = () => {
  const [state, setState] = useState(SimulationState.Idle);
  const isLeaking = state === SimulationState.Leaking || state === SimulationState.Detected;
  const isDetected = state === SimulationState.Detected;

  useEffect(() => {
    if (state === SimulationState.Leaking) {
      const timer = setTimeout(() => setState(SimulationState.Detected), 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleReset = () => {
    setState(SimulationState.Idle);
  };
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <GroundAndTank>
            {/* Monitoring Well */}
            <rect x="350" y="150" width="10" height="100" fill="#a1a1aa" />
            <rect x="345" y="140" width="20" height="10" fill="#52525b" />
            <text x="340" y="148" fontSize="8" fill="white" textAnchor="end">Vapor Well</text>
            
            {/* Vapor Sensor */}
            <rect x="351" y="235" width="8" height="8" fill={isDetected ? '#f59e0b' : '#34d399'} className="transition-colors duration-300" />
            <text x="355" y="255" fontSize="8" fill="white" textAnchor="middle">Sensor</text>
            
            {/* Vapor Plume */}
            {isLeaking && (
              <circle cx="200" cy="250" fill="#fde047" opacity="0.4">
                <animate attributeName="r" from="0" to="160" dur="3s" fill="freeze" />
                <animate attributeName="opacity" from="0" to="0.4" dur="1s" fill="freeze" />
              </circle>
            )}
            
            {isDetected && <text x="200" y="50" fontSize="14" fill="#fcd34d" textAnchor="middle" className="font-bold animate-pulse">VAPOR DETECTED</text>}

          </GroundAndTank>
        </svg>
      </div>
      <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-2 gap-4">
        <VisualizerButton onClick={() => setState(SimulationState.Leaking)} disabled={state !== SimulationState.Idle}>
          <MoleculeIcon className="w-5 h-5"/> Simulate Leak
        </VisualizerButton>
        <VisualizerButton onClick={handleReset} disabled={state === SimulationState.Idle}>
          <ResetIcon className="w-5 h-5"/> Reset
        </VisualizerButton>
      </div>
    </div>
  );
};


const GroundwaterVisualization = () => {
  const [state, setState] = useState(SimulationState.Idle);
  const isLeaking = state === SimulationState.Leaking || state === SimulationState.Detected;
  const isDetected = state === SimulationState.Detected;

  useEffect(() => {
    if (state === SimulationState.Leaking) {
      const timer = setTimeout(() => setState(SimulationState.Detected), 4000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleReset = () => {
    setState(SimulationState.Idle);
  };
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <defs>
            <linearGradient id="contaminantGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#854d0e" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <GroundAndTank>
            {/* Groundwater */}
            <rect x="0" y="270" width="400" height="30" fill="#3b82f6" opacity="0.4" />
            <text x="10" y="280" fontSize="10" fill="white" fontFamily="monospace">Groundwater</text>
            
            {/* Monitoring Well */}
            <rect x="300" y="150" width="10" height="150" fill="#a1a1aa" />
            <rect x="295" y="140" width="20" height="10" fill="#52525b" />
            
            {/* Contaminant Plume */}
            {isLeaking && (
              <path fill="url(#contaminantGradient)">
                <animate attributeName="d" from="M 200 240 C 200 240, 200 240, 200 240 Z" to="M 150 290 C 200 320, 250 320, 300 290 L 200 240 Z" dur="4s" fill="freeze" />
              </path>
            )}

            {/* Indicator */}
            <circle cx="305" cy="285" r="4" fill={isDetected ? '#f59e0b' : '#34d399'} className="transition-colors duration-300" />
            <text x="290" y="148" fontSize="8" fill="white" textAnchor="end">Monitoring Well</text>
            
            {isDetected && <text x="200" y="50" fontSize="14" fill="#fcd34d" textAnchor="middle" className="font-bold animate-pulse">CONTAMINATION DETECTED</text>}
          </GroundAndTank>
        </svg>
      </div>
      <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-2 gap-4">
        <VisualizerButton onClick={() => setState(SimulationState.Leaking)} disabled={state !== SimulationState.Idle}>
          <WaterDropIcon className="w-5 h-5"/> Simulate Leak
        </VisualizerButton>
        <VisualizerButton onClick={handleReset} disabled={state === SimulationState.Idle}>
          <ResetIcon className="w-5 h-5"/> Reset
        </VisualizerButton>
      </div>
    </div>
  );
};

const HissingVisualization = () => {
  const [isLeaking, setIsLeaking] = useState(false);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <AboveGroundPipe>
               {/* Hissing effect */}
                {isLeaking && (
                    <g transform="translate(210, 150)">
                        <circle r="5" fill="none" stroke="white" strokeWidth="1">
                            <animate attributeName="r" from="0" to="30" dur="1.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                         <circle r="5" fill="none" stroke="white" strokeWidth="1">
                            <animate attributeName="r" from="0" to="30" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                        </circle>
                    </g>
                )}

                {isLeaking && (
                    <g className="animate-pulse">
                        <EarIcon className="w-10 h-10 text-sky-400" x="300" y="80"/>
                        <text x="315" y="130" fill="#38bdf8" fontSize="12" className="font-bold">Listening...</text>
                    </g>
                )}
            </AboveGroundPipe>
        </svg>
      </div>
      <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-2 gap-4">
        <VisualizerButton onClick={() => setIsLeaking(true)} disabled={isLeaking}>
          <EarIcon className="w-5 h-5"/> Simulate Hiss
        </VisualizerButton>
        <VisualizerButton onClick={() => setIsLeaking(false)} disabled={!isLeaking}>
          <ResetIcon className="w-5 h-5"/> Reset
        </VisualizerButton>
      </div>
    </div>
  );
};

const PressureDecayVisualization = () => {
  type PressureState = 'idle' | 'pressurized' | 'leaking';
  const [state, setState] = useState<PressureState>('idle');
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    let timer: number;
    if (state === 'leaking') {
      timer = window.setInterval(() => {
        setPressure(p => Math.max(0, p - 0.5));
      }, 100);
    }
    return () => clearInterval(timer);
  }, [state]);

  const handlePressurize = () => {
    setState('pressurized');
    setPressure(50);
  };
  const handleReset = () => {
    setState('idle');
    setPressure(0);
  };

  const needleRotation = pressure * 3.6; // 50 PSI = 180 degrees
  const pressureColor = state === 'leaking' && pressure < 50 ? '#ef4444' : (state === 'pressurized' ? '#34d399' : 'white');

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <AboveGroundPipe title="Sealed & Pressurized Line">
                {/* Gauge */}
                <g transform="translate(80, 80)">
                    <circle cx="0" cy="0" r="30" fill="#e2e8f0" stroke="black" strokeWidth="2"/>
                    <line x1="0" y1="0" x2="-25" y2="0" stroke={pressureColor} strokeWidth="2" transform={`rotate(${needleRotation})`} className="transition-all duration-100" />
                    <circle cx="0" cy="0" r="3" fill="#334155"/>
                    <text x="0" y="10" fontSize="8" textAnchor="middle" fill="black">PSI</text>
                </g>
                <foreignObject x="120" y="60" width="160" height="80">
                    <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-600 text-center text-white">
                        <div className="text-xs text-slate-400">Line Pressure</div>
                        <div className="text-2xl font-bold transition-colors" style={{color: pressureColor}}>{pressure.toFixed(1)} PSI</div>
                        {state === 'leaking' && pressure < 50 && <div className="text-red-500 text-xs font-bold animate-pulse">Pressure Loss! Leak Detected.</div>}
                    </div>
                </foreignObject>
            </AboveGroundPipe>
        </svg>
      </div>
      <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-3 gap-4">
        <VisualizerButton onClick={handlePressurize} disabled={state !== 'idle'}>
          <PlayIcon className="w-5 h-5"/> Pressurize
        </VisualizerButton>
        <VisualizerButton onClick={() => setState('leaking')} disabled={state !== 'pressurized'}>
          <GaugeIcon className="w-5 h-5"/> Simulate Leak
        </VisualizerButton>
        <VisualizerButton onClick={handleReset} disabled={state === 'idle'}>
          <ResetIcon className="w-5 h-5"/> Reset
        </VisualizerButton>
      </div>
    </div>
  );
};

const SmellVisualization = () => {
  const [isLeaking, setIsLeaking] = useState(false);
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <GroundAndTank>
             {/* VRU (Vapor Recovery Unit) */}
             <rect x="50" y="80" width="40" height="70" fill="#a1a1aa" rx="2" />
             <rect x="55" y="85" width="30" height="20" fill="#1e293b" />
             <path d="M 90 100 h 20 v -10" stroke="#71717a" strokeWidth="5" fill="none" />
             <text x="70" y="165" fill="#d4d4d8" textAnchor="middle" fontSize="8">VRU</text>
             
             {/* Odor Plume */}
             {isLeaking && (
               <g>
                 <path d="M 110 95 C 150 85, 180 105, 220 95" stroke="#a3e635" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.7">
                   <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.5s" repeatCount="indefinite" />
                 </path>
                  <path d="M 110 95 C 140 105, 190 115, 220 105" stroke="#a3e635" strokeWidth="2" fill="none" strokeDasharray="5 5" opacity="0.6">
                   <animate attributeName="stroke-dashoffset" from="15" to="0" dur="0.6s" repeatCount="indefinite" />
                 </path>
               </g>
             )}

             {isLeaking && (
                <g className="animate-pulse">
                    <NoseIcon className="w-12 h-12 text-lime-300" x="220" y="80"/>
                    <text x="240" y="130" fill="#a3e635" fontSize="12" className="font-bold">Smell Detected!</text>
                </g>
            )}
          </GroundAndTank>
        </svg>
      </div>
      <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-2 gap-4">
        <VisualizerButton onClick={() => setIsLeaking(true)} disabled={isLeaking}>
          <MoleculeIcon className="w-5 h-5"/> Simulate Vapor Leak
        </VisualizerButton>
        <VisualizerButton onClick={() => setIsLeaking(false)} disabled={!isLeaking}>
          <ResetIcon className="w-5 h-5"/> Reset
        </VisualizerButton>
      </div>
    </div>
  );
};

const SoapBubbleVisualization = () => {
    const [isLeaking, setIsLeaking] = useState(false);
    const [isSoaped, setIsSoaped] = useState(false);

    const showBubbles = isLeaking && isSoaped;
    
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-1">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                    <AboveGroundPipe title="Pressurized Pipe Joint">
                        {isSoaped && (
                           <path d="M 190 140 Q 200 130 210 140 T 190 160 Q 200 170 210 160 Z" fill="#67e8f9" opacity="0.4"/>
                        )}
                        {showBubbles && (
                           <g transform="translate(212, 148)">
                               <circle cx="0" cy="0" r="1" fill="#ecfdf5">
                                   <animate attributeName="r" from="1" to="15" dur="2s" begin="0s" repeatCount="indefinite" />
                                   <animate attributeName="opacity" from="1" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
                               </circle>
                               <circle cx="5" cy="5" r="1" fill="#ecfdf5">
                                   <animate attributeName="r" from="1" to="12" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                                   <animate attributeName="opacity" from="1" to="0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                               </circle>
                                <text x="-5" y="30" fill="white" fontSize="10" className="font-bold animate-pulse">Leak Pinpointed!</text>
                           </g>
                        )}
                    </AboveGroundPipe>
                </svg>
            </div>
            <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-3 gap-4">
                <VisualizerButton onClick={() => setIsLeaking(!isLeaking)} active={isLeaking}>
                    <PlayIcon className="w-5 h-5"/> {isLeaking ? "Stop Leak" : "Simulate Leak"}
                </VisualizerButton>
                <VisualizerButton onClick={() => setIsSoaped(true)} disabled={!isLeaking || isSoaped}>
                    <BubbleIcon className="w-5 h-5"/> Apply Soap
                </VisualizerButton>
                <VisualizerButton onClick={() => { setIsLeaking(false); setIsSoaped(false); }} disabled={!isLeaking && !isSoaped}>
                    <ResetIcon className="w-5 h-5"/> Reset
                </VisualizerButton>
            </div>
        </div>
    );
};


const MethodVisualizer: React.FC<MethodVisualizerProps> = ({ method }) => {
  switch (method.id) {
    case 'atg':
      return <AtgVisualization />;
    case 'interstitial':
      return <InterstitialVisualization />;
    case 'cgi':
      return <CgiVisualization />;
    case 'optical':
      return <OpticalGasVisualization />;
    case 'vapor':
      return <VaporWellVisualization />;
    case 'groundwater':
      return <GroundwaterVisualization />;
    case 'hissing':
      return <HissingVisualization />;
    case 'pressureDecay':
      return <PressureDecayVisualization />;
    case 'smell':
      return <SmellVisualization />;
    case 'soapBubble':
        return <SoapBubbleVisualization />;
    default:
      return <div className="p-4 text-white">Select a method to see the visualization.</div>;
  }
};

export default MethodVisualizer;