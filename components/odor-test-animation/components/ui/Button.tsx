
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'secondary', ...props }) => {
  const baseClasses = "px-6 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const variantClasses = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-slate-900 focus:ring-cyan-500 disabled:bg-cyan-800 disabled:text-slate-500 disabled:cursor-not-allowed",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
