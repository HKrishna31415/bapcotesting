
import React from 'react';

const ManifoldingAnimation: React.FC = () => {
  return (
    <div className="p-4 flex justify-center items-center h-64 text-gray-700 dark:text-gray-300">
        <style>{`
            @keyframes breathe-small {
                0%, 100% { transform: scaleY(0.5) translateY(5px); opacity: 0; }
                50% { transform: scaleY(1) translateY(0); opacity: 1; }
            }
            @keyframes breathe-large {
                0%, 100% { transform: scale(0.5) translateY(10px); opacity: 0; }
                50% { transform: scale(1.5) translateY(0); opacity: 1; }
            }
            .vent-arrow-small {
                animation: breathe-small 4s infinite ease-in-out;
            }
            .vent-arrow-large {
                animation: breathe-large 4s infinite ease-in-out;
                transform-origin: bottom;
            }
        `}</style>
        <svg viewBox="0 0 400 180" className="w-full h-full">
            <defs>
                <path id="vent-arrow-up" d="M-3,5 L0,0 L3,5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </defs>
            
            {/* Before Manifolding */}
            <g>
                <text x="80" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-current">Before Manifolding</text>
                {/* UST 1 */}
                <rect x="20" y="50" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="22" y="52" width="56" height="18" fill="#38BDF8" opacity="0.3" />
                <path d="M50,50 V30 H60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <use href="#vent-arrow-up" x="60" y="30" className="stroke-red-500 vent-arrow-small" />

                {/* UST 2 */}
                <rect x="100" y="50" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="102" y="52" width="56" height="18" fill="#38BDF8" opacity="0.3" />
                <path d="M130,50 V30 H140" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <use href="#vent-arrow-up" x="140" y="30" className="stroke-red-500 vent-arrow-small" style={{animationDelay: '0.2s'}} />
                <text x="80" y="110" textAnchor="middle" fontSize="10" className="fill-current">Separate Vapor Spaces</text>
            </g>
            
            <line x1="200" y1="10" x2="200" y2="170" stroke="currentColor" strokeDasharray="4 2" />

            {/* After Manifolding */}
            <g transform="translate(200, 0)">
                <text x="100" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-current">After Manifolding</text>
                {/* UST 1 */}
                <rect x="20" y="50" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                
                {/* UST 2 */}
                <rect x="120" y="50" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />

                {/* Manifold Pipe & Common Vapor Space */}
                <rect x="22" y="52" width="156" height="18" fill="#38BDF8" opacity="0.5" />
                <path d="M50,50 H150" fill="none" stroke="currentColor" strokeWidth="5" />
                
                {/* Common Vent */}
                <path d="M100,50 V30 H110" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <use href="#vent-arrow-up" x="110" y="30" className="stroke-red-500 vent-arrow-large" />
                <text x="100" y="110" textAnchor="middle" fontSize="10" className="fill-current">Larger Common Vapor Space</text>
                <text x="100" y="125" textAnchor="middle" fontSize="10" className="fill-current font-semibold">Amplified "Breathing"</text>
            </g>
        </svg>
    </div>
  );
};

export default ManifoldingAnimation;
