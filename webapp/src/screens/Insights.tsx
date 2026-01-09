import React from 'react';
import { flags, debriefs, categories } from '../mockData';

export const Insights: React.FC = () => {
  // Calculate category breakdown
  const categoryCounts = categories.map((cat) => ({
    ...cat,
    count: flags.filter((f) => f.category === cat.id).length,
  })).filter((c) => c.count > 0);

  // Calculate dealbreakers
  const dealbreakers = flags.filter((f) => f.weight === 'dealbreaker');

  // Most triggered flags across debriefs
  const flagTriggerCounts = new Map<string, number>();
  debriefs.forEach((d) => {
    d.triggeredFlagIds.forEach((flagId) => {
      flagTriggerCounts.set(flagId, (flagTriggerCounts.get(flagId) || 0) + 1);
    });
  });

  const mostTriggered = Array.from(flagTriggerCounts.entries())
    .map(([flagId, count]) => ({
      flag: flags.find((f) => f.id === flagId)!,
      count,
    }))
    .filter((item) => item.flag)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="py-8">
        <h1 className="text-4xl font-serif font-bold text-[#3D3D3D] mb-2">
          Insights
        </h1>
        <p className="text-[#3D3D3D]/70">
          Your patterns, visualized. Not to judge yourself — to see clearly.
        </p>
      </div>

      {/* Affirmations */}
      <div className="bg-gradient-to-br from-[#E8D0D0] to-[#E8E0D8] rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-serif font-semibold text-[#3D3D3D] mb-3">
          Remember This
        </h2>
        <p className="text-[#3D3D3D]/80 leading-relaxed mb-2">
          You have <strong>{dealbreakers.length} dealbreakers</strong>. You know what you won't accept. Trust that.
        </p>
        <p className="text-[#3D3D3D]/80 leading-relaxed">
          You've added <strong>{flags.length} flags</strong> total. You're learning. That's growth.
        </p>
      </div>

      {/* Your Standards Profile */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <h2 className="text-xl font-serif font-semibold text-[#3D3D3D] mb-4">
          Your Standards Profile
        </h2>
        <p className="text-sm text-[#3D3D3D]/60 mb-4">
          What matters most to you, by category
        </p>
        <div className="space-y-3">
          {categoryCounts.sort((a, b) => b.count - a.count).map((cat) => (
            <div key={cat.id}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-[#3D3D3D]">
                  {cat.emoji} {cat.name}
                </span>
                <span className="text-sm text-[#3D3D3D]/60">{cat.count}</span>
              </div>
              <div className="h-2 bg-[#E8E0D8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C97B7B] rounded-full transition-all duration-300"
                  style={{ width: `${(cat.count / flags.length) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        {categoryCounts.length > 0 && (
          <p className="text-xs text-[#3D3D3D]/60 mt-4 italic">
            You have {categoryCounts[0].count} flags about {categoryCounts[0].name.toLowerCase()} — this matters to you. Don't let anyone make you feel dramatic for it.
          </p>
        )}
      </div>

      {/* Dating Patterns */}
      {mostTriggered.length > 0 && (
        <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
          <h2 className="text-xl font-serif font-semibold text-[#3D3D3D] mb-4">
            Dating Patterns
          </h2>
          <p className="text-sm text-[#3D3D3D]/60 mb-4">
            Flags that keep showing up in your dates
          </p>
          <div className="space-y-3">
            {mostTriggered.map(({ flag, count }) => (
              <div
                key={flag.id}
                className={`p-3 rounded-lg ${
                  flag.type === 'red' ? 'bg-[#C97B7B]/10' : 'bg-[#8BA888]/10'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#3D3D3D] mb-1">
                      {flag.type === 'red' ? '🚩' : '💚'} {flag.title}
                    </p>
                    <p className="text-xs text-[#3D3D3D]/60">
                      Showed up in {count} date{count > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {mostTriggered.some((item) => item.flag.type === 'red' && item.count >= 3) && (
            <p className="text-xs text-[#C97B7B] mt-4 italic">
              ⚠️ Some red flags are showing up repeatedly. Trust what you already know.
            </p>
          )}
        </div>
      )}

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <div className="text-3xl font-bold text-[#C97B7B] mb-1">
            {flags.filter((f) => f.type === 'red').length}
          </div>
          <div className="text-sm text-[#3D3D3D]/60">Red Flags</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <div className="text-3xl font-bold text-[#8BA888] mb-1">
            {flags.filter((f) => f.type === 'green').length}
          </div>
          <div className="text-sm text-[#3D3D3D]/60">Green Flags</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <div className="text-3xl font-bold text-[#3D3D3D] mb-1">
            {debriefs.length}
          </div>
          <div className="text-sm text-[#3D3D3D]/60">Debriefs</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <div className="text-3xl font-bold text-[#3D3D3D] mb-1">
            {dealbreakers.length}
          </div>
          <div className="text-sm text-[#3D3D3D]/60">Dealbreakers</div>
        </div>
      </div>
    </div>
  );
};
