import { useState } from 'react';

const units = {
  gram: 1,
  kilogram: 0.001,
  pound: 0.00220462,
  ounce: 0.035274,
};

const unitLabels = {
  gram: ['gram', 'grams'],
  kilogram: ['kilogram', 'kilograms'],
  pound: ['pound', 'pounds'],
  ounce: ['ounce', 'ounces'],
};

function WeightConverter() {
  const [from, setFrom] = useState('gram');
  const [to, setTo] = useState('kilogram');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) {
      setResult(null);
      return;
    }

    const converted = val * (units[to] / units[from]);
    const formatted = parseFloat(converted.toFixed(4)).toString();
    setResult(formatted);
  };

  return (
    <div className="space-y-4">
      <input
        type="number"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter weight"
        className="w-full p-2 border rounded-md shadow-sm"
      />

      <div className="flex gap-2">
        <select
          value={from}
          onChange={e => setFrom(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        >
          {Object.keys(units).map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        >
          {Object.keys(units).map(unit => (
            <option key={unit} value={unit}>{unit}</option>
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
        {result !== null && (
          <>
            Result: {result}{' '}
            {parseFloat(result) === 1
              ? unitLabels[to][0]
              : unitLabels[to][1]}
          </>
        )}
      </div>
    </div>
  );
}

export default WeightConverter;
