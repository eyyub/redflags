import React from 'react';
import { Button } from '../components/Button';

export const Settings: React.FC = () => {
  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="py-8">
        <h1 className="text-4xl font-serif font-bold text-[#3D3D3D] mb-2">
          Settings
        </h1>
        <p className="text-[#3D3D3D]/70">
          Customize your experience
        </p>
      </div>

      {/* Settings Groups */}
      <div className="space-y-6">
        {/* Appearance */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#3D3D3D] mb-4">
            Appearance
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-[#3D3D3D]">Theme</span>
              <select className="px-3 py-2 rounded-lg border border-[#E8E0D8] bg-white text-[#3D3D3D]">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#3D3D3D] mb-2">
            Categories
          </h2>
          <p className="text-sm text-[#3D3D3D]/60 mb-4">
            Manage your flag categories
          </p>
          <Button variant="outline" size="sm" className="w-full">
            Edit Categories
          </Button>
        </div>

        {/* Data */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#3D3D3D] mb-2">
            Your Data
          </h2>
          <p className="text-sm text-[#3D3D3D]/60 mb-4">
            Export or backup your flags and debriefs
          </p>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              Export Data (JSON)
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Share as Image
            </Button>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#3D3D3D] mb-2">
            About
          </h2>
          <div className="space-y-2 text-sm text-[#3D3D3D]/70">
            <p><strong>Know Your Worth</strong></p>
            <p>Version 1.0.0</p>
            <p className="pt-3 leading-relaxed italic">
              "You already know what you want. This app just helps you remember it."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
