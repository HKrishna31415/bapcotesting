
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="text-center py-8 px-4 bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://bapco-phase2.objects.frb.io/Logos/New/_350xAUTO_fit_center-center_100_none/78455/BE-logo-Bapco-Tazweed.webp" alt="BAPCO Logo" className="h-24 w-auto" />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 sm:mb-0">
            Vapor Recovery Testing
          </h1>
        </div>
        <nav className="flex space-x-4">
          <button
            onClick={() => {
              navigate('/');
            }}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200 ease-in-out text-white font-medium flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            <span>Back to Home</span>
          </button>
          <button
            onClick={() => {
              navigate('/vru-validation-protocol');
            }}
            className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors duration-200 ease-in-out text-white font-medium flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21.75 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Overview</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
