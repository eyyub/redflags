import React, { useState } from 'react';
import { FlagCard } from '../components/FlagCard';
import { flags } from '../mockData';

export const MyFlags: React.FC = () => {
  const [activeView, setActiveView] = useState<'red' | 'green'>('red');

  const displayFlags = flags.filter((flag) => flag.type === activeView);
  const redCount = flags.filter((f) => f.type === 'red').length;
  const greenCount = flags.filter((f) => f.type === 'green').length;

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="py-8">
        <h1 className="text-4xl font-serif font-bold text-[#3D3D3D] mb-2">
          Know Your Worth
        </h1>
        <p className="text-[#3D3D3D]/70">
          Your standards belong here. Remember them.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveView('red')}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
            activeView === 'red'
              ? 'bg-[#C97B7B] text-white shadow-md'
              : 'bg-white text-[#3D3D3D] border-2 border-[#E8E0D8]'
          }`}
        >
          🚩 Red Flags ({redCount})
        </button>
        <button
          onClick={() => setActiveView('green')}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
            activeView === 'green'
              ? 'bg-[#8BA888] text-white shadow-md'
              : 'bg-white text-[#3D3D3D] border-2 border-[#E8E0D8]'
          }`}
        >
          💚 Green Flags ({greenCount})
        </button>
      </div>

      {/* Empty State */}
      {displayFlags.length === 0 && (
        <div className="text-center py-16 px-6">
          <p className="text-xl text-[#3D3D3D]/60 mb-4">
            No {activeView === 'red' ? 'red' : 'green'} flags yet
          </p>
          <p className="text-sm text-[#3D3D3D]/50">
            Your standards belong here. What's the first thing that comes to mind?
          </p>
        </div>
      )}

      {/* Flags List */}
      <div className="space-y-3">
        {displayFlags.map((flag) => (
          <FlagCard key={flag.id} flag={flag} />
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#C97B7B] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-2xl z-40"
        aria-label="Add flag"
      >
        +
      </button>
    </div>
  );
};
