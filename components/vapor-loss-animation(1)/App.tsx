import React, { useState, useEffect } from 'react';
import { Tank } from './components/Tank';
import { STAGE_CONTENT, MAX_STAGES, SunIcon, MoonIcon, ArrowLeftIcon, ArrowRightIcon, LeafIcon, DollarIcon, InfoIcon } from './constants';
import { VruMachine } from './components/VruMachine';

const AnimatedPipe = ({ d, flow, reversed }: { d: string; flow: boolean; reversed?: boolean }) => (
    <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none" fill="none">
        <path d={d} stroke="#718096" strokeWidth="5" strokeLinecap="round" />
        {flow && (
            <path
                d={d}
                stroke="#a78bfa"
                strokeWidth="5"
                strokeDasharray="20 20"
                strokeLinecap="round"
                className={reversed ? "animate-pipe-flow-reversed" : "animate-pipe-flow"}
            />
        )}
    </svg>
);


export default function App() {
    const [stage, setStage] = useState(0);
    const [animationState, setAnimationState] = useState({
        sunVisible: false,
        vaporLevel: 20,
        fuelLevel: 60,
        isVenting: false,
        isInhaling: false,
        tankFillLevel: 10,
        isFlowing: false,
    });
    
    const currentContent = STAGE_CONTENT[stage];

    useEffect(() => {
        setAnimationState(s => ({
            ...s, // Keep tankFillLevel from previous stage
            sunVisible: false,
            vaporLevel: 20,
            fuelLevel: 60,
            isVenting: false,
            isInhaling: false,
            isFlowing: false,
        }));

        const timeouts: NodeJS.Timeout[] = [];

        if (stage === 1) { // Day
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, sunVisible: true })), 500));
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, vaporLevel: 30, fuelLevel: 59 })), 1500));
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, isVenting: true })), 2500));
        } else if (stage === 2) { // Night
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, sunVisible: false })), 500));
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, vaporLevel: 15 })), 1500));
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, isInhaling: true })), 2500));
        } else if (stage === 3) { // Manifold Problem
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, tankFillLevel: 80, isFlowing: true })), 1000));
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, isVenting: true })), 3000));
        } else if (stage === 4) { // VRU Solution
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, tankFillLevel: 80, isFlowing: true })), 1000));
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, tankFillLevel: 85 })), 2000)); // Show recovered fuel
        } else if (stage === 5) { // Benefits
            timeouts.push(setTimeout(() => setAnimationState(s => ({ ...s, isFlowing: true })), 500));
        }
        
        return () => {
            timeouts.forEach(clearTimeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stage]);
    
    const handleNext = () => {
        if (stage < MAX_STAGES) {
            setStage(s => s + 1);
        }
    };

    const handlePrev = () => {
        if (stage > 0) {
            setStage(s => s - 1);
        }
    };
    
    const renderAnimationScene = () => {
        const { sunVisible, vaporLevel, fuelLevel, isVenting, isInhaling, tankFillLevel, isFlowing } = animationState;
        
        switch (stage) {
            case 0:
                return <div className="flex items-center justify-center"><Tank label="Storage Tank" fuelLevel={60} vaporLevel={20} /></div>;
            case 1:
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <SunIcon className={`absolute top-5 right-5 w-16 h-16 text-yellow-400 transition-opacity duration-1000 ${sunVisible ? 'opacity-100' : 'opacity-0'}`} />
                        <Tank label="Heating" fuelLevel={fuelLevel} vaporLevel={vaporLevel} isVenting={isVenting} />
                    </div>
                );
            case 2:
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <MoonIcon className={`absolute top-5 right-5 w-14 h-14 text-slate-300 transition-opacity duration-1000 ${!sunVisible ? 'opacity-100' : 'opacity-0'}`} />
                        <Tank label="Cooling" fuelLevel={fuelLevel} vaporLevel={vaporLevel} isInhaling={isInhaling} />
                    </div>
                );
            case 3:
            case 4:
                return (
                    <div className="w-full h-full flex justify-center items-center gap-4 relative">
                        <Tank label="Tank A" isFilling={isFlowing && stage === 3} fuelLevel={tankFillLevel} vaporLevel={15} />
                        <Tank label="Tank B" vaporLevel={isFlowing ? 40 : 15} />
                        <Tank label="Tank C" vaporLevel={isFlowing ? 60 : 15} isVenting={stage === 3 && isVenting}/>

                        {/* Vapor manifold pipe */}
                        <AnimatedPipe d="M 12.5% 18% H 87.5%" flow={isFlowing} />
                        
                        {stage === 4 && isFlowing && (
                            <>
                                {/* VRU Machine replacing the old icon */}
                                <div className="absolute top-[40%] right-[-2%] w-40 h-40 transform -translate-y-1/2">
                                   <VruMachine isActive={isFlowing} />
                                </div>
                                {/* Pipe from manifold to VRU intake */}
                                <AnimatedPipe d="M 87.5% 18% H 94% V 47% H 91%" flow={isFlowing} />
                                {/* Pipe from VRU outlet back to Tank A (liquid return) */}
                                <AnimatedPipe d="M 96% 62% C 75% 70%, 45% 65%, 20% 50%" flow={isFlowing} reversed />
                            </>
                        )}
                    </div>
                );
            case 5:
                 return (
                    <div className="w-full h-full flex justify-center items-center gap-2 sm:gap-6 p-4">
                        <div className="flex flex-col items-center gap-2 sm:gap-4 p-2 sm:p-4 text-center transform transition-transform duration-300 hover:scale-105">
                            <LeafIcon className="w-12 h-12 sm:w-16 sm:h-16 text-green-400"/>
                            <h3 className="text-md sm:text-xl font-bold text-green-300">Environmental</h3>
                            <p className="max-w-xs text-xs sm:text-base">Prevents harmful VOC emissions, protecting air quality.</p>
                        </div>
                        
                        <VruMachine isActive={isFlowing} />

                        <div className="flex flex-col items-center gap-2 sm:gap-4 p-2 sm:p-4 text-center transform transition-transform duration-300 hover:scale-105">
                            <DollarIcon className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400"/>
                            <h3 className="text-md sm:text-xl font-bold text-yellow-300">Economic</h3>
                            <p className="max-w-xs text-xs sm:text-base">Recovers valuable fuel that would be lost, creating a direct return on investment.</p>
                        </div>
                    </div>
                 );
            case 7: // New final stage
                return (
                    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 gap-4">
                        <InfoIcon className="w-20 h-20 text-cyan-400" />
                        <h2 className="text-2xl font-bold text-slate-200 mt-2">{currentContent.title}</h2>
                    </div>
                );
            default: // Handles stage 6
                return (
                    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
                        <h2 className="text-3xl font-bold text-cyan-400 mb-4">{currentContent.title}</h2>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <main className="w-full max-w-5xl bg-slate-800 rounded-2xl shadow-2xl shadow-black/30 flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                    <h1 className="text-2xl font-bold text-center text-cyan-300">{currentContent.title}</h1>
                </div>

                <div className="h-[26rem] flex-grow relative bg-grid p-4">
                   {renderAnimationScene()}
                </div>

                <div className="p-6 border-t border-slate-700 bg-slate-800/50">
                    <p className="text-center text-slate-300 min-h-[4rem]">{currentContent.description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <button 
                            onClick={handlePrev} 
                            disabled={stage === 0}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-500 transition-colors"
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                            Prev
                        </button>
                        <div className="text-sm font-medium text-slate-400">Step {stage + 1} / {MAX_STAGES + 1}</div>
                        <button 
                            onClick={handleNext} 
                            disabled={stage === MAX_STAGES}
                            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500 transition-colors"
                        >
                            Next
                            <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}