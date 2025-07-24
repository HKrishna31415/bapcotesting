
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SceneProps } from './types';
import { SunIcon, MoonIcon, MoneyIcon, ArrowLeftIcon, ArrowRightIcon } from './components/icons';

const TextOverlay: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-8 left-8 max-w-md bg-black/50 p-4 rounded-lg backdrop-blur-sm z-50"
    >
        <p className="text-lg text-gray-200">{children}</p>
    </motion.div>
);

const Ground = () => (
    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-800 to-transparent z-0">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-600"></div>
    </div>
);

const Tank: React.FC<{ label?: string; xOffset?: string; hasVent?: boolean; children?: React.ReactNode; className?: string }> = ({ label, xOffset = 'left-1/2 -translate-x-1/2', hasVent = true, children, className = '' }) => (
    <div className={`absolute bottom-[10%] w-1/4 h-1/2 ${xOffset} z-10 ${className}`}>
        {hasVent && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-20 bg-gray-500 rounded-t-md">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-8 h-4 bg-gray-600 rounded-sm" />
            </div>
        )}
        <div className="relative w-full h-full bg-gray-700 border-4 border-gray-600 rounded-lg shadow-2xl">
            <div className="absolute bottom-0 left-0 right-0 h-[85%] bg-gradient-to-t from-purple-700 to-purple-500 rounded-b-md" />
            {children}
            {label && <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 px-3 py-1 rounded text-sm font-bold">{label}</div>}
        </div>
    </div>
);

const Vapor: React.FC<{ animationProps: any; children?: React.ReactNode }> = ({ animationProps, children }) => (
    <motion.div {...animationProps} className="absolute top-0 left-0 right-0 h-[15%]">
        <div className="relative w-full h-full">
            {children || (
                <motion.div
                    className="absolute inset-2 bg-purple-300/20 rounded-full blur-xl"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                />
            )}
        </div>
    </motion.div>
);

// --- SCENE COMPONENTS ---

const Scene1: React.FC<SceneProps> = ({ isActive }) => (
    <>
        <TextOverlay>Fuel tanks 'breathe' with daily temperature changes. When it gets warm, vapor expands and escapes. This is called 'breathing loss'.</TextOverlay>
        <Ground />
        <Tank>
            <Vapor animationProps={{}}>
                {isActive && (
                    <motion.div
                        className="absolute top-[-11rem] left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-200/50 rounded-full"
                        animate={{ y: -20, opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                    />
                )}
            </Vapor>
        </Tank>
    </>
);

const Scene2: React.FC<SceneProps> = ({ isActive }) => (
    <>
        <SunIcon />
        <TextOverlay>Before, each tank had its own small vapor space. When it warmed up, a small amount of vapor would vent.</TextOverlay>
        <Ground />
        <Tank label="91 Octane">
            <Vapor animationProps={{ animate: isActive ? { scale: 1.15 } : {}, transition: { duration: 3 } }}>
                {isActive && (
                    <motion.div
                        className="absolute top-[-11rem] left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-200/50 rounded-full blur-sm"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: [0, 0.7, 0] }}
                        transition={{ duration: 1.5, delay: 2.5 }}
                    />
                )}
            </Vapor>
        </Tank>
    </>
);

const Scene3: React.FC<SceneProps> = ({ isActive }) => (
    <>
        <MoonIcon />
        <TextOverlay>At night, as it cooled, some vapor would condense back into liquid, reducing the overall loss.</TextOverlay>
        <Ground />
        <Tank label="91 Octane">
            <Vapor animationProps={{ animate: isActive ? { scale: 0.85 } : {}, transition: { duration: 3 } }}>
                {isActive && Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-2 bg-purple-400 rounded-full"
                        style={{ top: `${10 + Math.random() * 20}%`, left: `${10 + Math.random() * 80}%` }}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 80 }}
                        transition={{ duration: 2, delay: 1 + i * 0.3, repeat: 0 }}
                    />
                ))}
            </Vapor>
        </Tank>
    </>
);

const Scene4: React.FC<SceneProps> = ({ isActive }) => (
    <>
        <TextOverlay>Now, let's connect the vapor spaces of multiple tanks. The VRU is currently OFF.</TextOverlay>
        <Ground />
        <Tank label="91 Octane" xOffset="left-1/4 -translate-x-1/2" />
        <Tank label="91 Octane" xOffset="left-3/4 -translate-x-1/2" />
        {isActive && (
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 600">
                <motion.path
                    d="M 370 230 L 630 230"
                    stroke="#a78bfa"
                    strokeWidth="16"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
                />
            </svg>
        )}
    </>
);

const Scene5: React.FC<SceneProps> = ({ isActive }) => (
    <>
        <SunIcon />
        <TextOverlay>With a larger, combined vapor space, even a small temperature rise causes a much larger absolute volume of vapor to expand.</TextOverlay>
        <Ground />
        <Tank label="91 Octane" xOffset="left-1/4 -translate-x-1/2" hasVent={false} />
        <Tank label="91 Octane" xOffset="left-3/4 -translate-x-1/2" hasVent={false} />
        
        <div className="absolute bottom-[10%] w-1/4 h-1/2 left-1/2 -translate-x-1/2 z-10">
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-20 bg-gray-500 rounded-t-md">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-8 h-4 bg-gray-600 rounded-sm" />
            </div>
        </div>

        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 600">
            <path d="M 370 230 L 630 230" stroke="#a78bfa" strokeWidth="16" strokeLinecap="round" />
            <path d="M 500 230 V 150" stroke="#a78bfa" strokeWidth="16" strokeLinecap="round" />
        </svg>

        {isActive && (
            <>
                <motion.div
                    className="absolute top-[30%] left-[37.5%] w-1/4 h-[7.5%] bg-purple-300/20 rounded-full blur-xl"
                    animate={{ scale: 1.3 }}
                    transition={{ duration: 3 }}
                />
                <motion.div
                    className="absolute top-[8rem] left-1/2 -translate-x-1/2 w-24 h-24 bg-purple-300/60 rounded-full blur-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: [0, 0.8, 0] }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                />
            </>
        )}
    </>
);

const Scene6: React.FC<SceneProps> = ({ isActive }) => (
    <>
        <MoonIcon />
        <TextOverlay>More vapor is pushed out of the system entirely, leaving less to condense back into the tanks.</TextOverlay>
        <Ground />
        <Tank label="91 Octane" xOffset="left-1/4 -translate-x-1/2" hasVent={false} />
        <Tank label="91 Octane" xOffset="left-3/4 -translate-x-1/2" hasVent={false} />
        
        <div className="absolute bottom-[10%] w-1/4 h-1/2 left-1/2 -translate-x-1/2 z-10">
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-20 bg-gray-500 rounded-t-md">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-8 h-4 bg-gray-600 rounded-sm" />
            </div>
        </div>

        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 600">
            <path d="M 370 230 L 630 230" stroke="#a78bfa" strokeWidth="16" strokeLinecap="round" />
            <path d="M 500 230 V 150" stroke="#a78bfa" strokeWidth="16" strokeLinecap="round" />
        </svg>

        {isActive && (
            <>
                <motion.div
                    className="absolute top-[30%] left-[37.5%] w-1/4 h-[7.5%] bg-purple-300/10 rounded-full blur-xl"
                    animate={{ scale: 0.8 }}
                    transition={{ duration: 3 }}
                />
                 {/* Air drawn in */}
                 <motion.div
                    className="absolute top-[8rem] left-1/2 -translate-x-1/2 text-blue-300"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 0], y: 20 }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="text-sm">AIR IN</span>
                 </motion.div>
            </>
        )}
    </>
);

const Scene7: React.FC<SceneProps> = ({ isActive }) => (
    <div className="flex w-full h-full items-center justify-center">
        <TextOverlay>Without a VRU, manifolding creates a larger 'breathing' system. This means more vapor is vented, leading to a significant increase in product loss.</TextOverlay>
        
        {/* Left Side: Isolated Tank */}
        <div className="w-1/2 h-full relative border-r-2 border-gray-600 overflow-hidden">
            <h2 className="absolute top-[20%] left-1/2 -translate-x-1/2 text-xl font-bold text-cyan-400">ISOLATED TANK</h2>
            <div className="w-full h-full relative">
                 <Ground />
                <Tank className="!w-1/2">
                    <Vapor animationProps={{}}>
                        {isActive && (
                            <motion.div
                                className="absolute top-[-11rem] left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-200/50 rounded-full blur-sm"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: [0, 0.7, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2.5 }}
                            />
                        )}
                    </Vapor>
                </Tank>
            </div>
        </div>

        {/* Right Side: Manifolded Tanks */}
        <div className="w-1/2 h-full relative overflow-hidden">
            <h2 className="absolute top-[20%] left-1/2 -translate-x-1/2 text-xl font-bold text-red-400">MANIFOLDED (VRU OFF)</h2>
             <div className="w-full h-full relative">
                <Ground />
                
                <Tank xOffset="left-1/4 -translate-x-1/2" hasVent={false} className="!w-1/2" />
                <Tank xOffset="left-3/4 -translate-x-1/2" hasVent={false} className="!w-1/2" />

                <div className="absolute bottom-[10%] w-1/4 h-1/2 left-1/2 -translate-x-1/2 z-10">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-4 h-20 bg-gray-500 rounded-t-md">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-8 h-4 bg-gray-600 rounded-sm" />
                    </div>
                </div>

                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid meet">
                    {/* Coordinates scaled by 0.5 from Scene 5 to fit half-screen container */}
                    <path d="M 185 230 L 315 230" stroke="#a78bfa" strokeWidth="16" strokeLinecap="round" />
                    <path d="M 250 230 V 150" stroke="#a78bfa" strokeWidth="16" strokeLinecap="round" />
                </svg>

                 {isActive && (
                    <>
                        <motion.div
                            className="absolute top-[30%] left-[12.5%] w-3/4 h-[7.5%] bg-red-400/20 rounded-full blur-xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="absolute top-[25%] left-1/2 -translate-x-1/2 w-24 h-24 bg-red-400/60 rounded-full blur-lg"
                            style={{y: '-50%'}}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: [0, 0.8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                        />
                         {Array.from({ length: 6 }).map((_, i) => {
                            const randomX = (Math.random() - 0.5) * 150;
                            const randomY = -120 - (Math.random() * 40);
                            const randomRotate = (Math.random() - 0.5) * 270;
                            const randomDuration = 1.5 + Math.random();

                            return (
                                <motion.div
                                    key={i}
                                    className="absolute top-[25%] left-1/2 -translate-x-1/2"
                                    style={{ transformOrigin: 'center' }}
                                    initial={{ opacity: 0, y: 0, x: 0, scale: 0.3, rotate: 0 }}
                                    animate={{
                                        y: randomY,
                                        x: randomX,
                                        opacity: [0, 1, 1, 0],
                                        scale: [0.3, 1],
                                        rotate: randomRotate,
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: randomDuration,
                                        delay: i * 0.25,
                                        ease: "easeOut"
                                    }}
                                >
                                    <MoneyIcon />
                                </motion.div>
                            )
                        })}
                    </>
                )}
            </div>
        </div>
    </div>
);

const Scene8: React.FC<SceneProps> = ({ isActive }) => (
    <>
        <SunIcon />
        <TextOverlay>
            With the VRU ON, expanding vapor is captured, processed, and returned to the tanks as liquid. This prevents product loss and protects the environment.
        </TextOverlay>
        <Ground />

        {/* Tanks */}
        <Tank label="91 Octane" xOffset="left-1/4 -translate-x-1/2" hasVent={false} />
        <Tank label="91 Octane" xOffset="left-3/4 -translate-x-1/2" hasVent={false} />

        {/* VRU Machine */}
        <div className="absolute top-[12rem] left-1/2 -translate-x-1/2 z-20">
            <div className="relative w-40 h-28 bg-gray-700 border-4 border-gray-600 rounded-lg p-2 flex flex-col items-center justify-between shadow-2xl">
                <div className="text-white font-bold text-xl tracking-wider">VRU</div>
                 <motion.div 
                    className="w-full h-1 bg-green-400"
                    animate={{ opacity: isActive ? [0.5, 1, 0.5] : 1}}
                    transition={{duration: 1.5, repeat: Infinity}}
                 />
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-300">SYSTEM</span>
                    <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-green-300 shadow-[0_0_10px_2px_rgba(110,231,183,0.7)]" />
                    <span className="text-xs text-gray-300">ACTIVE</span>
                </div>
            </div>
        </div>

        {/* Piping */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 600" style={{ pointerEvents: 'none' }}>
            {/* Manifold Pipe */}
            <path d="M 370 230 L 630 230" stroke="#a78bfa" strokeWidth="16" strokeLinecap="round" />
            {/* Pipe to VRU */}
            <path d="M 500 230 V 210" stroke="#a78bfa" strokeWidth="16" strokeLinecap="round" />
             {/* Return pipes from VRU to tanks */}
            <path
                id="return-path-left-8"
                d="M 440 312 V 350 H 370"
                stroke="#6ee7b7"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                id="return-path-right-8"
                d="M 560 312 V 350 H 630"
                stroke="#6ee7b7"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

        {/* Animations */}
        {isActive && (
            <>
                {/* Vapor expanding in tank */}
                <motion.div
                    className="absolute top-[30%] left-[37.5%] w-1/4 h-[7.5%] bg-purple-300/20 rounded-full blur-xl"
                    animate={{ scale: 1.3 }}
                    transition={{ duration: 3 }}
                />

                {/* Vapor being sucked into VRU */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 w-2 h-2 bg-purple-300/70 rounded-full"
                        style={{ top: '230px', transform: 'translateX(-50%)' }}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: [0, 1, 0], y: -30 }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            delay: i * 0.15,
                        }}
                    />
                ))}

                 {/* Animate droplet along paths */}
                 <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 600" style={{pointerEvents: 'none'}}>
                    {/* Animate droplet along left path */}
                    <motion.circle cx="0" cy="0" r="4" fill="#6ee7b7" style={{ offsetPath: "path('#return-path-left-8')"}}
                        animate={{ offsetDistance: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />
                    {/* Animate droplet along right path */}
                     <motion.circle cx="0" cy="0" r="4" fill="#6ee7b7" style={{ offsetPath: "path('#return-path-right-8')"}}
                        animate={{ offsetDistance: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
                    />
                </svg>
            </>
        )}
    </>
);


const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8];

const App = () => {
    const [currentScene, setCurrentScene] = useState(0);

    const handleNext = () => {
        setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
    };

    const handlePrev = () => {
        setCurrentScene((prev) => Math.max(prev - 1, 0));
    };
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const CurrentSceneComponent = scenes[currentScene];

    return (
        <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center font-sans overflow-hidden">
            <header className="absolute top-0 left-0 p-4 text-center w-full z-50">
                 <h1 className="text-2xl font-bold tracking-wider text-gray-300">Manifolding & Vapor Loss</h1>
            </header>
            
            <main className="w-full h-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentScene}
                        className="w-full h-full absolute inset-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CurrentSceneComponent isActive={true} />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="absolute bottom-0 left-0 right-0 p-4 z-50">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <button
                        onClick={handlePrev}
                        disabled={currentScene === 0}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ArrowLeftIcon />
                        Prev
                    </button>

                    <div className="flex items-center gap-2">
                        {scenes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentScene(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    currentScene === index ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                                aria-label={`Go to scene ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={currentScene === scenes.length - 1}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-700 rounded-md hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                        <ArrowRightIcon />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default App;
