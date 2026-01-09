import React from 'react';
import { debriefs, flags } from '../mockData';
import { Button } from '../components/Button';

export const Debrief: React.FC = () => {
  const vibeEmojis = ['😍', '😊', '😐', '😕', '🚩'];

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="py-8">
        <h1 className="text-4xl font-serif font-bold text-[#3D3D3D] mb-2">
          Date Debrief
        </h1>
        <p className="text-[#3D3D3D]/70">
          Process what actually happened vs. what you want to believe happened
        </p>
      </div>

      {/* New Debrief Button */}
      <Button className="w-full mb-6">
        + New Debrief
      </Button>

      {/* Debrief History */}
      <div>
        <h2 className="text-xl font-serif font-semibold text-[#3D3D3D] mb-4">
          Recent Debriefs
        </h2>

        <div className="space-y-4">
          {debriefs.map((debrief) => {
            const triggeredFlags = flags.filter((f) =>
              debrief.triggeredFlagIds.includes(f.id)
            );
            const redFlagsCount = triggeredFlags.filter((f) => f.type === 'red').length;
            const greenFlagsCount = triggeredFlags.filter((f) => f.type === 'green').length;

            return (
              <div
                key={debrief.id}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3D3D3D]">
                      {debrief.personName}
                      {debrief.dateNumber && (
                        <span className="text-sm text-[#3D3D3D]/60 ml-2">
                          Date #{debrief.dateNumber}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-[#3D3D3D]/60">
                      {debrief.date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <span className="text-3xl">{vibeEmojis[debrief.overallVibe - 1]}</span>
                </div>

                {/* Notes */}
                {debrief.notes && (
                  <p className="text-sm text-[#3D3D3D]/70 mb-3 italic">
                    "{debrief.notes}"
                  </p>
                )}

                {/* Flags Summary */}
                <div className="flex items-center gap-3 flex-wrap">
                  {redFlagsCount > 0 && (
                    <span className="text-sm px-3 py-1 rounded-full bg-[#C97B7B]/10 text-[#C97B7B]">
                      🚩 {redFlagsCount} red flag{redFlagsCount > 1 ? 's' : ''}
                    </span>
                  )}
                  {greenFlagsCount > 0 && (
                    <span className="text-sm px-3 py-1 rounded-full bg-[#8BA888]/10 text-[#8BA888]">
                      💚 {greenFlagsCount} green flag{greenFlagsCount > 1 ? 's' : ''}
                    </span>
                  )}
                  {debrief.wouldRecommendDate2 !== undefined && (
                    <span className="text-xs px-2 py-1 rounded-full bg-[#E8E0D8] text-[#3D3D3D]">
                      {debrief.wouldRecommendDate2 ? '✓ Would see again' : '✗ Hard pass'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pattern Warning (if applicable) */}
      {(() => {
        const jakeDebriefs = debriefs.filter((d) => d.personName === 'Jake');
        if (jakeDebriefs.length > 1) {
          return (
            <div className="mt-6 bg-[#C97B7B]/10 border border-[#C97B7B]/20 rounded-xl p-4">
              <p className="text-sm text-[#C97B7B] font-medium">
                ⚠️ Pattern noticed: Jake has triggered red flags in {jakeDebriefs.length} dates
              </p>
            </div>
          );
        }
        return null;
      })()}
    </div>
  );
};
