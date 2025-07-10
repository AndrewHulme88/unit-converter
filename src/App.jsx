import ConverterTabs from "./components/ConverterTabs";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Unit Converter</h1>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <ConverterTabs />
      </div>
    </div>
  )
}

export default App
