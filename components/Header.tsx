
import React from 'react';

interface HeaderProps {
  currentPage: string | null;
  setCurrentPage: (page: string | null) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="text-center py-8 px-4 bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 sm:mb-0">
          Vapor Recovery Testing
        </h1>
        <nav className="flex space-x-4">
          <button
            onClick={() => setCurrentPage(null)}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200 ease-in-out text-white font-medium flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            <span>Back to Home</span>
          </button>
          <button
            onClick={() => setCurrentPage('overview')}
            className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 transition-colors duration-200 ease-in-out text-white font-medium flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h9.75a1.125 1.125 0 001.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>Overview</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
