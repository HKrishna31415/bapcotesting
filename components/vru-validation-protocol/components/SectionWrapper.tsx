
import React from 'react';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
    id: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = '' }) => {
    return (
        <section id={id} className={`py-16 sm:py-24 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        {title}
                    </h2>
                    {subtitle && (
                         <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
                    )}
                </div>
                <div className="mt-12">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper;
