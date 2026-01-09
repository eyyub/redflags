import React from 'react';
import type { Flag } from '../types';
import { categories } from '../mockData';

interface FlagCardProps {
  flag: Flag;
  onClick?: () => void;
}

export const FlagCard: React.FC<FlagCardProps> = ({ flag, onClick }) => {
  const category = categories.find((c) => c.id === flag.category);
  const isRed = flag.type === 'red';

  const bgColor = isRed ? 'bg-white' : 'bg-white';
  const borderColor = isRed ? 'border-l-[#C97B7B]' : 'border-l-[#8BA888]';
  const badgeColor = isRed ? 'bg-[#C97B7B]/10 text-[#C97B7B]' : 'bg-[#8BA888]/10 text-[#8BA888]';

  const weightLabels = {
    dealbreaker: '🚫 Dealbreaker',
    matters: '⚠️ Matters',
    bonus: '✨ Bonus',
  };

  return (
    <div
      onClick={onClick}
      className={`${bgColor} ${borderColor} border-l-4 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-[#3D3D3D] flex-1 pr-2">{flag.title}</h3>
        <span className="text-xl">{isRed ? '🚩' : '💚'}</span>
      </div>

      {flag.note && (
        <p className="text-sm text-[#3D3D3D]/70 mb-3 leading-relaxed">{flag.note}</p>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        <span className={`${badgeColor} px-3 py-1 rounded-full text-xs font-medium`}>
          {category?.emoji} {category?.name}
        </span>
        <span className="bg-[#E8E0D8] text-[#3D3D3D] px-3 py-1 rounded-full text-xs font-medium">
          {weightLabels[flag.weight]}
        </span>
      </div>
    </div>
  );
};
