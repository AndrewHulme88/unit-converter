import { useState } from "react";
import LengthConverter from "./LengthConverter";


const tabs = [ 'Length', 'Temperature'];

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
      {/* {activeTab === 'Temperature' && <TemperatureConverter />} */}
    </div>
  )
}
