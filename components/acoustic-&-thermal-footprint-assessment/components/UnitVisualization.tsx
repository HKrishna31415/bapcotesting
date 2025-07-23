
import React from 'react';

interface UnitVisualizationProps {
    isTesting: boolean;
    isShadeActive: boolean;
}

const SensorPoint: React.FC<{ position: string; color: string; delay: string }> = ({ position, color, delay }) => (
    <div
        className={`absolute ${position} w-4 h-4 rounded-full ${color} opacity-0 animate-pulse`}
        style={{ animationDelay: delay, animationDuration: '2s' }}
    />
);

const UnitVisualization: React.FC<UnitVisualizationProps> = ({ isTesting, isShadeActive }) => {
    return (
        <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
            <div className="relative w-4/5 h-4/5">
                {/* Shade Canopy */}
                <div 
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 w-[120%] h-12 bg-teal-500/30 rounded-lg border-2 border-teal-400 transition-all duration-700 ease-in-out ${
                        isShadeActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                    }`}
                >
                     <p className="text-center text-teal-300 font-bold text-sm pt-2">SHADE CANOPY</p>
                </div>

                {/* Unit Body */}
                <div className="relative w-full h-full bg-gray-700 rounded-lg shadow-inner z-10 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gray-800" />
                    <div className="absolute bottom-0 left-0 w-full h-4 bg-gray-800" />
                    
                    {/* Vent */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-24 bg-gray-600 rounded-md">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-[calc(100%-1rem)] bg-gray-900/50 flex flex-col justify-around items-center">
                           {[...Array(5)].map((_, i) => <div key={i} className="w-6 h-1 bg-gray-500" />)}
                        </div>
                    </div>

                    {/* Panel */}
                    <div className="absolute top-6 left-6 w-24 h-16 bg-gray-600 border-2 border-gray-500 rounded flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                    </div>

                    {/* Sensor points for animation */}
                    {isTesting && (
                        <>
                            {/* Thermal Sensors */}
                            <SensorPoint position="top-1/4 left-1/3" color="bg-orange-500" delay="0s" />
                            <SensorPoint position="top-1/2 left-1/2" color="bg-red-500" delay="0.2s" />
                            <SensorPoint position="top-3/4 right-1/3" color="bg-yellow-500" delay="0.4s" />
                            
                            {/* Acoustic Sensors */}
                            <SensorPoint position="top-10 -left-10" color="bg-cyan-400" delay="0.1s" />
                            <SensorPoint position="bottom-10 -right-10" color="bg-cyan-400" delay="0.3s" />
                            <SensorPoint position="bottom-20 -left-20" color="bg-cyan-400" delay="0.5s" />
                        </>
                    )}
                </div>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-gray-900 rounded-b-lg -mb-4 z-0" />
            </div>
            
        </div>
    );
};

export default UnitVisualization;
