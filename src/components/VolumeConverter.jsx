import { useState } from 'react';

const units = {
  liter: 1,
  milliliter: 1000,
  gallon: 0.264172,
  cup: 4.22675,
  pint: 2.11338,
};

const unitLabels = {
  liter: ['liter', 'liters'],
  milliliter: ['milliliter', 'milliliters'],
  gallon: ['gallon', 'gallons'],
  cup: ['cup', 'cups'],
  pint: ['pint', 'pints'],
};

function VolumeConverter() {
  const [from, setFrom] = useState('liter');
  const [to, setTo] = useState('milliliter');
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
        placeholder="Enter volume"
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

export default VolumeConverter;
