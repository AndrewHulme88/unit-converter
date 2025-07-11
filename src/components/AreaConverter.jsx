import { useState } from 'react';

const units = {
  'square meter': 1,
  'square kilometer': 0.000001,
  'square foot': 10.7639,
  'square yard': 1.19599,
  'acre': 0.000247105,
  'hectare': 0.0001,
};

const unitLabels = {
  'square meter': ['square meter', 'square meters'],
  'square kilometer': ['square kilometer', 'square kilometers'],
  'square foot': ['square foot', 'square feet'],
  'square yard': ['square yard', 'square yards'],
  'acre': ['acre', 'acres'],
  'hectare': ['hectare', 'hectares'],
};

function AreaConverter() {
  const [from, setFrom] = useState('square meter');
  const [to, setTo] = useState('square kilometer');
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
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter area"
        className="w-full p-2 border rounded-md shadow-sm"
      />

      <div className="flex gap-2">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        >
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        >
          {Object.keys(units).map((unit) => (
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

export default AreaConverter;
