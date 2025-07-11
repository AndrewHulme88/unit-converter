import { useState } from 'react';

const units = {
  meter: 1,
  kilometer: 0.001,
  inch: 39.3701,
  foot: 3.28084,
  mile: 0.000621371,
};

function LengthConverter() {
  const [from, setFrom] = useState('meter');
  const [to, setTo] = useState('kilometer');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult(null);
      return;
    }
    const converted = num * (units[to] / units[from]);
    setResult(converted.toFixed(4));
  };

  return (
    <div className="space-y-4">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
        className="w-full p-2 border rounded-md shadow-sm"
      />

      <div className="flex gap-2">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        >
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        >
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convert}
        className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition"
      >
        Convert
      </button>

      <div className="h-10 flex items-center justify-center mt-4 text-lg font-semibold text-gray-800">
        {result !== null ? `Result: ${result}` : ''}
      </div>
    </div>
  );
}

export default LengthConverter;
