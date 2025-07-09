import { useState } from "react";

function TemperatureConverter() {
  const [from, setFrom] = useState('Celsius');
  const [to, setTo] = useState('Fahrenheit');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return;

    let celsius;

    switch (from) {
      case 'Celsius': celsius = val;
      break;
      case 'Fahrenheit': celsius = (val - 32) * 5/9;
      break;
      case 'Kelvin': celsius = val - 273.15;
      break;
    }

    let final;

    switch (to) {
      case 'Celsius': final = celsius;
      break;
      case 'Fahrenheit': final = (celsius * 9/5) + 32;
      break;
      case 'Kelvin': final = celsius + 273.15;
      break;
    }

    setResult(final.toFixed(2));
  };

  const options = ['Celsius', 'Fahrenheit', 'Kelvin'];

  return (
    <div>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter temperature" />
      <select value={from} onChange={e => setFrom(e.target.value)}>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <span> to </span>
      <select value={to} onChange={e => setTo(e.target.value)}>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
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

export default TemperatureConverter;
