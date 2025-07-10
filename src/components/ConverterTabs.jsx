import { useState } from "react";
import LengthConverter from "./LengthConverter";
import TemperatureConverter from "./TemperatureConverter";
import WeightConverter from "./WeightConverter";

const tabs = [ 'Length', 'Temperature', 'Weight'];

function ConverterTabs() {
  const [activeTab, setActiveTab] = useState('Length');

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Length' && <LengthConverter />}
      {activeTab === 'Temperature' && <TemperatureConverter />}
      {activeTab === 'Weight' && <WeightConverter />}
    </div>
  )
}

export default ConverterTabs;
