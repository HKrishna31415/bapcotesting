import React from 'react';

interface IconProps {
  className?: string;
  x?: string | number;
  y?: string | number;
}

export const PlayIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ResetIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9a9 9 0 0114.23-5.77M20 15a9 9 0 01-14.23 5.77" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const CameraIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const EyeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

export const EarIcon: React.FC<IconProps> = ({ className, x, y }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} x={x} y={y}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25c.394.166.812.298 1.25.395V19.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75v-1.85c.438-.097.856-.23 1.25-.395m0 0V14.25c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v3.001z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c-2.483 0-4.664-1.29-5.986-3.324a6.75 6.75 0 0111.972 0C16.664 11.46 14.483 12.75 12 12.75z" />
  </svg>
);

export const MoleculeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="6" cy="6" r="2" stroke="currentColor" />
    <circle cx="18" cy="6" r="2" stroke="currentColor" />
    <circle cx="12" cy="16" r="2.5" stroke="currentColor" />
    <path strokeLinecap="round" d="M7.5 7.5 l3 7" stroke="currentColor" />
    <path strokeLinecap="round" d="M16.5 7.5 l-3 7" stroke="currentColor" />
  </svg>
);

export const WaterDropIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-3.48 0-6.375 2.895-6.375 6.375 0 4.17 3.75 8.625 6.375 11.25 2.625-2.625 6.375-7.08 6.375-11.25C18.375 7.395 15.48 4.5 12 4.5z" />
  </svg>
);

export const FireIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.973 5.973 0 00-2.133-1.001A3.75 3.75 0 0012 18z" />
    </svg>
);

export const GaugeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-2.065 0-3.75 1.685-3.75 3.75s1.685 3.75 3.75 3.75 3.75-1.685 3.75-3.75-1.685-3.75-3.75-3.75zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 15.91L12 12" />
    </svg>
);

export const NoseIcon: React.FC<IconProps> = ({ className, x, y }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} x={x} y={y}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75s.75 2.25 2.25 2.25 2.25-2.25 2.25-2.25S13.5 4.5 12 4.5s-2.25 2.25-3.75 2.25zM12 12.75V15m-3.75-6.375c.621-1.058 1.8-1.875 3.125-1.875s2.504.817 3.125 1.875" />
    </svg>
);

export const BubbleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
);