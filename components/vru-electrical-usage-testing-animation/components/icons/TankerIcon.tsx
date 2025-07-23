import React from 'react';

const TankerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H18m0 1.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 17.25h13.5c.621 0 1.125-.504 1.125-1.125v-6c0-.621-.504-1.125-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125v6c0 .621.504 1.125 1.125 1.125z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9V6.75a2.25 2.25 0 0 0-2.25-2.25h-1.5A2.25 2.25 0 0 0 10.5 6.75V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 9h6" />
    </svg>
);

export default TankerIcon;