import { use, useState } from "react";

const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    inch: 39.3701,
    foot: 3.28084,
    mile: 0.000621371
  }
};

function Converter() {
  const [category] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const factor = units[category][toUnit] / units[category][fromUnit];
    setResult(value * factor);
  };

  return (
    <div>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter value" />
      <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
        {Object.keys(units[category]).map(unit => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
      <span> to </span>
      <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
        {Object.keys(units[category]).map(unit => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
      <button onClick={convert}>Convert</button>
      {result !== null && (
        <div>
          Result: {result}
        </div>
      )}
    </div>
  );
}

export default Converter;
