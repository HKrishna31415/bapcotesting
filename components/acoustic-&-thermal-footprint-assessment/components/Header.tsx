
import React from 'react';
import { Thermometer, Volume2 } from './IconComponents';

const Header: React.FC = () => {
    return (
        <header className="text-center">
            <div className="flex items-center justify-center gap-4">
                <Volume2 className="w-8 h-8 text-cyan-400" />
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Acoustic & Thermal Footprint Assessment
                </h1>
                <Thermometer className="w-8 h-8 text-red-400" />
            </div>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400">
                Visualizing the environmental impact of the unit on its immediate surroundings.
            </p>
        </header>
    );
};

export default Header;
