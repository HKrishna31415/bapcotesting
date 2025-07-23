
import React, { useState, useEffect } from 'react';
import { StoryStage } from '../types';
import RVPChart from './RVPChart';
import TankDiagramIcon from './icons/TankDiagramIcon';

interface StoryPresenterProps {
  stage: number;
  stageData: StoryStage;
  isAnimatingOut: boolean;
  onAnimationComplete: () => void;
}

const StoryPresenter: React.FC<StoryPresenterProps> = ({ stage, stageData, isAnimatingOut, onAnimationComplete }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (isAnimatingOut) {
      setIsContentVisible(false);
    } else {
      const timer = setTimeout(() => {
        setIsContentVisible(true);
        onAnimationComplete();
      }, 50); // Short delay to allow state to settle
      return () => clearTimeout(timer);
    }
  }, [stage, isAnimatingOut, onAnimationComplete]);

  const transitionClasses = `transition-all duration-300 ease-in-out ${
    isContentVisible ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-5'
  }`;

  return (
    <div className={`w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 ${transitionClasses}`}>
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{stageData.title}</h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">{stageData.description}</p>
      </div>
      <div className="w-full lg:w-2/3 h-64 md:h-80 lg:h-96 flex items-center justify-center bg-gray-900/50 rounded-lg p-4">
        {stageData.visual === 'chart' ? (
          <RVPChart currentStage={stage} highlightKey={stageData.highlightKey} />
        ) : (
          <TankDiagramIcon className="w-full h-full text-gray-400" />
        )}
      </div>
    </div>
  );
};

export default StoryPresenter;
