import ConverterTabs from './components/ConverterTabs';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-12 tracking-tight">Unit Converter</h1>
      <div className="relative w-full max-w-xl">
        <ConverterTabs />
      </div>
    </div>
  );
}

export default App;
