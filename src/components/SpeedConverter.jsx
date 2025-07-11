import { useState } from 'react';

const units = {
  'm/s': 1,
  'km/h': 3.6,
  'mph': 2.23694,
  'knot': 1.94384,
};

const unitLabels = {
  'm/s': ['meter per second', 'meters per second'],
  'km/h': ['kilometer per hour', 'kilometers per hour'],
  'mph': ['mile per hour', 'miles per hour'],
  'knot': ['knot', 'knots'],
};

function SpeedConverter() {
  const [from, setFrom] = useState('m/s');
  const [to, setTo] = useState('km/h');
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
        placeholder="Enter speed"
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

export default SpeedConverter;
