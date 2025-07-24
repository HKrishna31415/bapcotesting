
import React from 'react';

const VruAnimation: React.FC = () => {
  return (
    <div className="p-4 flex justify-center items-center h-64 text-gray-700 dark:text-gray-300">
        <style>{`
            .flow-dot-vapor {
                animation: flow-vapor 2s linear infinite;
                stroke-dasharray: 2 4;
                stroke-dashoffset: 6;
            }
            @keyframes flow-vapor {
                to { stroke-dashoffset: 0; }
            }
            .flow-dot-liquid {
                animation: flow-liquid 3s linear infinite;
                stroke-dasharray: 1 3;
                stroke-dashoffset: 4;
            }
            @keyframes flow-liquid {
                to { stroke-dashoffset: 0; }
            }
            @keyframes cog-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .cog {
                transform-origin: center;
                animation: cog-spin 5s linear infinite;
            }
        `}</style>
        <svg viewBox="0 0 300 180" className="w-full h-full">
            <text x="150" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-current">Stage III Vapor Recovery Unit (VRU)</text>
            
            {/* UST */}
            <rect x="30" y="90" width="120" height="60" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="35" y="95" width="110" height="50" fill="#38BDF8" opacity="0.3" />
            <text x="90" y="125" textAnchor="middle" fontSize="10" className="fill-current">UST Vapor</text>

            {/* VRU */}
            <rect x="190" y="70" width="80" height="80" rx="5" className="fill-gray-200 dark:fill-gray-700" stroke="currentColor" strokeWidth="2" />
            <text x="230" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-current">VRU</text>
            <g className="cog fill-current" transform="translate(230, 95) scale(0.8)">
                <path d="M-10,2.5 l-5,-8.66 l10,0 l5,-8.66 l5,8.66 l10,0 l-5,8.66 l5,8.66 l-10,0 l-5,8.66 l-5,-8.66 l-10,0 l5,-8.66z" />
            </g>

            {/* Vapor Pipe to VRU */}
            <path d="M120,90 C 150,90 160,70 190,70" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M120,90 C 150,90 160,70 190,70" fill="none" className="stroke-sky-400 stroke-2 flow-dot-vapor" />
            <text x="165" y="65" textAnchor="middle" fontSize="9" className="fill-current">Vapor In</text>

            {/* Liquid Pipe to UST */}
            <path d="M190,150 C 160,150 150,130 140,130" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M190,150 C 160,150 150,130 140,130" fill="none" className="stroke-orange-400 stroke-2 flow-dot-liquid" />
            <text x="165" y="145" textAnchor="middle" fontSize="9" className="fill-current">Liquid Out</text>
        </svg>
    </div>
  );
};

export default VruAnimation;
