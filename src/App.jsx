import ConverterTabs from './components/ConverterTabs';
import Footer from './components/Footer';
import { ScaleIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="flex items-center gap-3 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 tracking-tight">
          <ScaleIcon className="w-10 h-10 text-emerald-600" />
          Unit Converter
        </h1>
        <p className="text-gray-600 text-base mt-2">
          Convert length, weight, and temperature — fast and simple.
        </p>
      </div>

      <div className="relative w-full max-w-xl mb-8">
        <ConverterTabs />
      </div>

      <Footer />
    </div>
  );
}

export default App;
