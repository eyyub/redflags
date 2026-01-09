import React, { useState } from 'react';
import { prompts, starterPacks, categories } from '../mockData';
import { Button } from '../components/Button';

export const Discover: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'prompts' | 'packs'>('prompts');

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="py-8">
        <h1 className="text-4xl font-serif font-bold text-[#3D3D3D] mb-2">
          Discover
        </h1>
        <p className="text-[#3D3D3D]/70">
          Prompts and starter packs to help you articulate what you already know
        </p>
      </div>

      {/* Toggle */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveSection('prompts')}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
            activeSection === 'prompts'
              ? 'bg-[#C97B7B] text-white shadow-md'
              : 'bg-white text-[#3D3D3D] border-2 border-[#E8E0D8]'
          }`}
        >
          💭 Prompts
        </button>
        <button
          onClick={() => setActiveSection('packs')}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
            activeSection === 'packs'
              ? 'bg-[#C97B7B] text-white shadow-md'
              : 'bg-white text-[#3D3D3D] border-2 border-[#E8E0D8]'
          }`}
        >
          📦 Starter Packs
        </button>
      </div>

      {/* Prompts Section */}
      {activeSection === 'prompts' && (
        <div className="space-y-6">
          {categories.map((category) => {
            const categoryPrompts = prompts.filter((p) => p.category === category.id);
            if (categoryPrompts.length === 0) return null;

            return (
              <div key={category.id}>
                <h2 className="text-lg font-semibold text-[#3D3D3D] mb-3 flex items-center gap-2">
                  <span>{category.emoji}</span>
                  <span>{category.name}</span>
                </h2>
                <div className="space-y-3">
                  {categoryPrompts.map((prompt) => (
                    <div
                      key={prompt.id}
                      className={`bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${
                        prompt.isCompleted ? 'border-l-4 border-[#8BA888]' : ''
                      }`}
                    >
                      <p className="text-[#3D3D3D] font-medium mb-2">{prompt.text}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-[#E8E0D8] text-[#3D3D3D]">
                          {prompt.depth}
                        </span>
                        {prompt.isCompleted && (
                          <span className="text-xs px-2 py-1 rounded-full bg-[#8BA888]/10 text-[#8BA888]">
                            ✓ Reflected
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Starter Packs Section */}
      {activeSection === 'packs' && (
        <div className="space-y-4">
          {starterPacks.map((pack) => (
            <div
              key={pack.id}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-xl font-serif font-semibold text-[#3D3D3D] mb-2">
                {pack.name}
              </h3>
              <p className="text-sm text-[#3D3D3D]/70 mb-4">{pack.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#3D3D3D]/60">
                  {pack.flags.length} flags
                </span>
                <Button size="sm" variant="outline">
                  Add to My Flags
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
