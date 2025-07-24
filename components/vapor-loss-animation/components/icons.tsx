
import React from 'react';
import { motion } from 'framer-motion';

export const SunIcon = () => (
  <motion.div
    initial={{ scale: 0, y: 50, opacity: 0 }}
    animate={{ scale: 1, y: 0, opacity: 1 }}
    exit={{ scale: 0, y: 50, opacity: 0 }}
    transition={{ duration: 0.8, type: 'spring' }}
    className="absolute top-8 right-8 w-20 h-20"
  >
    <div className="w-full h-full bg-yellow-400 rounded-full shadow-[0_0_20px_10px_rgba(250,204,21,0.5)]"></div>
  </motion.div>
);

export const MoonIcon = () => (
  <motion.div
    initial={{ scale: 0, y: 50, opacity: 0 }}
    animate={{ scale: 1, y: 0, opacity: 1 }}
    exit={{ scale: 0, y: 50, opacity: 0 }}
    transition={{ duration: 0.8, type: 'spring' }}
    className="absolute top-8 right-8 w-16 h-16"
  >
    <div className="w-full h-full bg-gray-300 rounded-full shadow-[0_0_20px_10px_rgba(209,213,219,0.3)]"></div>
  </motion.div>
);

export const MoneyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 6v1m0-8V6m0 12v-1m0 0H9m3 0h3m-3 0v-1m0 6v-1m0 0H9m3 0h3m-6-6h.01M9 12h.01M15 12h.01M12 12h.01M6 12h.01M18 12h.01M6 9h.01M18 9h.01" />
    </svg>
);

export const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h17" />
    </svg>
);
