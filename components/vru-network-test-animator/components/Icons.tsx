
import React from 'react';

export const VruIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <rect x="10" y="15" width="44" height="40" rx="2" fill="#475569"/>
    <rect x="14" y="25" width="36" height="26" rx="1" fill="#1e293b"/>
    <path d="M22 30h20v2H22zM22 36h12v2H22z" fill="#94a3b8"/>
    <circle cx="28" cy="45" r="3" fill="#38bdf8"/>
    <circle cx="36" cy="45" r="3" fill="#f87171"/>
    <path d="M10 15h44v4H10z" fill="#334155"/>
    <rect x="30" y="9" width="4" height="6" fill="#64748b"/>
  </svg>
);

export const SwitchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <rect x="4" y="24" width="56" height="16" rx="2" fill="#475569"/>
    <g fill="#1e293b">
      <rect x="8" y="30" width="4" height="4" rx="0.5"/>
      <rect x="14" y="30" width="4" height="4" rx="0.5"/>
      <rect x="20" y="30" width="4" height="4" rx="0.5"/>
      <rect x="26" y="30" width="4" height="4" rx="0.5"/>
      <rect x="34" y="30" width="4" height="4" rx="0.5"/>
      <rect x="40" y="30" width="4" height="4" rx="0.5"/>
      <rect x="46" y="30" width="4" height="4" rx="0.5"/>
      <rect x="52" y="30" width="4" height="4" rx="0.5"/>
    </g>
  </svg>
);

export const ExtenderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <rect x="16" y="20" width="32" height="24" rx="2" fill="#475569"/>
    <rect x="20" y="28" width="6" height="8" rx="1" fill="#1e293b"/>
    <rect x="38" y="28" width="6" height="8" rx="1" fill="#1e293b"/>
    <path d="M28 32h8m-8 2h8" stroke="#38bdf8" strokeWidth="1"/>
  </svg>
);

export const LaptopIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
        <path d="M2 20a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" />
    </svg>
);

export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const XCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.538 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);

export const PauseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H6.75zm8.25 0a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-2.25z" clipRule="evenodd" />
    </svg>
);
