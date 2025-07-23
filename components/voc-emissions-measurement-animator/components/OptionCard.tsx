
import React from 'react';
import { OptionDetails } from '../types';
import { CheckIcon, CrossIcon, MoneyIcon, ScienceIcon, BrainIcon } from './icons';

interface OptionCardProps {
  details: OptionDetails;
}

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div>
    <div className="flex items-center gap-3 mb-3">
      {icon}
      <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
    </div>
    <div className="pl-9 text-gray-400">{children}</div>
  </div>
);

const ListItem: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
    <div className="flex items-start gap-3 mb-2">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <p>{children}</p>
    </div>
);

const OptionCard: React.FC<OptionCardProps> = ({ details }) => {
  const isGold = details.id === 'gold';

  return (
    <div className={`bg-gray-800/50 rounded-2xl p-6 border ${isGold ? 'border-yellow-500/30' : 'border-gray-500/30'} shadow-2xl shadow-black/20 h-full`}>
      <h2 className={`text-3xl font-bold mb-1 ${isGold ? 'text-yellow-400' : 'text-gray-300'}`}>
        {details.title}
      </h2>
      <p className="text-md text-gray-400 mb-6 font-medium">{details.subtitle}</p>

      <div className="space-y-6">
        <Section title="Methodology" icon={<ScienceIcon />}>
          <p>{details.methodology}</p>
        </Section>

        <Section title="Calculation" icon={<BrainIcon />}>
          <p>{details.calculation}</p>
        </Section>
        
        <Section title="Pros & Cons" icon={<MoneyIcon />}>
            <div className="space-y-3">
                {details.pros.map((pro, index) => (
                    <ListItem key={`pro-${index}`} icon={<CheckIcon />}>{pro}</ListItem>
                ))}
                {details.cons.map((con, index) => (
                    <ListItem key={`con-${index}`} icon={<CrossIcon />}>{con}</ListItem>
                ))}
            </div>
        </Section>
      </div>
    </div>
  );
};

export default OptionCard;
