
import React, { useState } from 'react';
import type { AccordionItem as AccordionItemProps } from '../types';

const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-700 rounded-lg overflow-hidden">
            <h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-200 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-expanded={isOpen}
                >
                    <span>{title}</span>
                    <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h3>
            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                 <div className="p-5 bg-gray-800/50 text-gray-400">
                    {content}
                </div>
            </div>
        </div>
    );
};

interface AccordionProps {
    items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div className="space-y-4 max-w-5xl mx-auto">
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>
    );
};

export default Accordion;
