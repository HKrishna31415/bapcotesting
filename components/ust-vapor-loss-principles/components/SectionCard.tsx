
import React from 'react';

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  animation?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, children, animation }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="p-8 flex-grow">
        <div className="flex items-center mb-5">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
              {icon}
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl leading-6 font-bold text-gray-900 dark:text-white">{title}</h3>
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-300 space-y-4 prose prose-sky max-w-none">
          {children}
        </div>
      </div>
      
      {animation && (
        <div className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
          {animation}
        </div>
      )}
    </div>
  );
};

export default SectionCard;
