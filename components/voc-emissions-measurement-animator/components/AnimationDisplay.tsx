import React from 'react';
import { StandardOption } from '../types';
import GoldStandardAnimation from './GoldStandardAnimation';
import SilverStandardAnimation from './SilverStandardAnimation';

interface AnimationDisplayProps {
  option: StandardOption;
}

const AnimationDisplay: React.FC<AnimationDisplayProps> = ({ option }) => {
  return (
    <div className="relative w-full min-h-[480px] aspect-[4/3] bg-gray-900 rounded-2xl p-4 border border-gray-700 overflow-hidden shadow-2xl shadow-black/20">
      <div key={option} className="animate-fade-in">
        {option === 'gold' ? <GoldStandardAnimation /> : <SilverStandardAnimation />}
      </div>
    </div>
  );
};

export default AnimationDisplay;