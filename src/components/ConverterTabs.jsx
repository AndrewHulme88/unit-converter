import { useState } from 'react';
import LengthConverter from './LengthConverter';
import TemperatureConverter from './TemperatureConverter';
import WeightConverter from './WeightConverter';
import VolumeConverter from './VolumeConverter';
import AreaConverter from './AreaConverter';
import SpeedConverter from './SpeedConverter';
import TimeConverter from './TimeConverter';

const tabs = ['Length', 'Temperature', 'Weight', 'Volume', 'Area', 'Speed', 'Time'];

function ConverterTabs() {
  const [activeTab, setActiveTab] = useState('Length');

  return (
    <div className="relative">
      <div className="-mt-6 mb-0 overflow-x-auto max-w-full px-1">
        <div className="flex gap-2 w-max min-w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 text-sm font-medium rounded-t-lg border transition shadow-sm whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-white text-emerald-700 border-slate-300 border-b-white z-20'
                  : 'bg-slate-200 text-gray-600 border border-transparent hover:bg-slate-300 z-10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-6 bg-white rounded-xl shadow-lg p-8">
        {activeTab === 'Length' && <LengthConverter />}
        {activeTab === 'Temperature' && <TemperatureConverter />}
        {activeTab === 'Weight' && <WeightConverter />}
        {activeTab === 'Volume' && <VolumeConverter />}
        {activeTab === 'Area' && <AreaConverter />}
        {activeTab === 'Speed' && <SpeedConverter />}
        {activeTab === 'Time' && <TimeConverter />}
      </div>
    </div>
  );
}

export default ConverterTabs;
