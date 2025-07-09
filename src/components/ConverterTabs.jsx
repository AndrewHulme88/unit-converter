import { useState } from "react";
import LengthConverter from "./LengthConverter";
import TemperatureConverter from "./TemperatureConverter";
import WeightConverter from "./WeightConverter";

const tabs = [ 'Length', 'Temperature', 'Weight'];

function ConverterTabs() {
  const [activeTab, setActiveTab] = useState('Length');

  return (
    <div>
      <div>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{marginRight: '1rem', fontWeight: activeTab === tab ? 'bold' : 'normal'}}
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
