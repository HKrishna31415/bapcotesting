
import React from 'react';
import type { NavItem } from '../types';

interface HeaderProps {
    navItems: NavItem[];
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ navItems, activeSection }) => {
    return (
        <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-700/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-xl text-white">
                            VRU <span className="text-cyan-400">Validation</span>
                        </span>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                                        activeSection === item.id
                                            ? 'bg-cyan-500 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
