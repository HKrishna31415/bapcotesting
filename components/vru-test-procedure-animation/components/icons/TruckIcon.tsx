
import React from 'react';

interface TruckIconProps {
  className?: string;
}

const TruckIcon: React.FC<TruckIconProps> = ({ className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M3 17.25V5.75C3 4.784 3.784 4 4.75 4H13.25C14.216 4 15 4.784 15 5.75V17.25C15 18.216 14.216 19 13.25 19H4.75C3.784 19 3 18.216 3 17.25ZM5 17h8V6H5v11Z" className="fill-slate-400" />
    <path d="M16 8.75C16 7.784 16.784 7 17.75 7H20.25C21.216 7 22 7.784 22 8.75V17.25C22 18.216 21.216 19 20.25 19H17.75C16.784 19 16 18.216 16 17.25V8.75ZM18 17h2V9h-2v8Z" className="fill-slate-500" />
    <path d="M12.5 19.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" className="fill-slate-300"/>
    <path d="M19.5 19.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" className="fill-slate-300"/>
  </svg>
);

export default TruckIcon;
