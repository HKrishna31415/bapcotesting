
import React from 'react';

interface ToggleSwitchProps {
    label: string;
    enabled: boolean;
    onChange: (enabled: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, enabled, onChange }) => {
  const handleToggle = () => {
    onChange(!enabled);
  };

  return (
    <label htmlFor="toggle-switch" className="flex items-center cursor-pointer select-none text-slate-300 bg-slate-800/70 backdrop-blur-sm p-3 pr-4 rounded-lg border border-slate-700 shadow-lg">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle-switch"
          className="sr-only"
          checked={enabled}
          onChange={handleToggle}
        />
        <div className={`block w-14 h-8 rounded-full transition-colors ${enabled ? 'bg-orange-600' : 'bg-slate-600'}`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
      </div>
      <div className="ml-3 font-medium">
        {label}
      </div>
    </label>
  );
};

export default ToggleSwitch;
