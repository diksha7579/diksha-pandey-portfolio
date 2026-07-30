import Background from "./components/Background/Background";

function App() {
  return (
    <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      <Background />

      <div className="flex items-center justify-center h-screen">

        <div className="text-center">

          <h1 className="text-6xl font-black">

            Cosmic Developer

          </h1>

          <p className="mt-4 text-gray-400">

            Background Engine Loaded

          </p>

        </div>

      </div>

    </main>
  );
}

export default App;