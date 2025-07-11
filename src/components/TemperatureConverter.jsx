import { useState } from 'react';

function TemperatureConverter() {
  const [from, setFrom] = useState('Celsius');
  const [to, setTo] = useState('Fahrenheit');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) {
      setResult(null);
      return;
    }

    let celsius;

    switch (from) {
      case 'Celsius': celsius = val; break;
      case 'Fahrenheit': celsius = (val - 32) * 5 / 9; break;
      case 'Kelvin': celsius = val - 273.15; break;
    }

    let final;
    switch (to) {
      case 'Celsius': final = celsius; break;
      case 'Fahrenheit': final = (celsius * 9 / 5) + 32; break;
      case 'Kelvin': final = celsius + 273.15; break;
    }

    const formatted = parseFloat(final.toFixed(4)).toString();
    setResult(formatted);
  };

  const options = ['Celsius', 'Fahrenheit', 'Kelvin'];

  return (
    <div className="space-y-4">
      <input
        type="number"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter temperature"
        className="w-full p-2 border rounded-md shadow-sm"
      />

      <div className="flex gap-2">
        <select
          value={from}
          onChange={e => setFrom(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        >
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        >
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>

      <button
        onClick={convert}
        className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition"
      >
        Convert
      </button>

      <div className="h-10 flex items-center justify-center mt-4 text-lg font-semibold text-gray-800">
        {result !== null ? `Result: ${result} ${to}` : ''}
      </div>
    </div>
  );
}

export default TemperatureConverter;
