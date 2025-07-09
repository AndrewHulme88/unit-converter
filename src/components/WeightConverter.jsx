import { useState } from "react";

const units = {
  gram: 1,
  kilogram: 0.001,
  pound: 0.00220462,
  ounce: 0.035274
};

function WeightConverter() {
  const [from, setFrom] = useState('gram');
  const [to, setTo] = useState('kilogram');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return;

    const resultVal = val * (units[to] / units[from]);
    setResult(resultVal.toFixed(4))
  };

  return (
    <div>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter weight" />
      <select value={from} onChange={e => setFrom(e.target.value)}>
        {Object.keys(units).map(unit => <option key={unit} value={unit}>{unit}</option>)}
      </select>
      <span> to </span>
      <select value={to} onChange={e => setTo(e.target.value)}>
        {Object.keys(units).map(unit => <option key={unit} value={unit}>{unit}</option>)}
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

export default WeightConverter;
