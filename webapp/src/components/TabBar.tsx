import React from 'react';

export type TabType = 'flags' | 'discover' | 'debrief' | 'insights' | 'settings';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

interface Tab {
  id: TabType;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  { id: 'flags', label: 'My Flags', icon: '🚩' },
  { id: 'discover', label: 'Discover', icon: '✨' },
  { id: 'debrief', label: 'Debrief', icon: '📝' },
  { id: 'insights', label: 'Insights', icon: '📊' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

export const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E8E0D8] shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-around items-center px-4 py-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-[#C97B7B]'
                  : 'text-[#3D3D3D]/60 hover:text-[#3D3D3D]'
              }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
