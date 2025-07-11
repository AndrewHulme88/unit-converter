import { useState } from 'react';
import LengthConverter from './LengthConverter';
import TemperatureConverter from './TemperatureConverter';
import WeightConverter from './WeightConverter';

const tabs = ['Length', 'Temperature', 'Weight'];

function ConverterTabs() {
  const [activeTab, setActiveTab] = useState('Length');

  return (
    <div className="relative">
      {/* Tab bar overlaps top of panel */}
      <div className="absolute -top-6 left-6 flex gap-2 z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 text-sm font-medium rounded-t-lg border transition shadow-sm ${
              activeTab === tab
                ? 'bg-white text-emerald-700 border-slate-300 border-b-white z-20'
                : 'bg-slate-200 text-gray-600 border border-transparent hover:bg-slate-300 z-10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Panel below tabs */}
      <div className="pt-6 bg-white rounded-xl shadow-lg p-8">
        {activeTab === 'Length' && <LengthConverter />}
        {activeTab === 'Temperature' && <TemperatureConverter />}
        {activeTab === 'Weight' && <WeightConverter />}
      </div>
    </div>
  );
}

export default ConverterTabs;
