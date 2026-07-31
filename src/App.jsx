import { useCallback, useState } from "react";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  const handleWelcomeComplete = useCallback(() => {
    setWelcomeComplete(true);
  }, []);

  return (
    <Layout>
      {!welcomeComplete && (
        <Welcome onComplete={handleWelcomeComplete} />
      )}

      {welcomeComplete && (
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-violet-400">
              Portfolio
            </p>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
              Diksha Pandey
            </h1>

            <p className="mt-5 text-lg text-slate-400">
              Full Stack Developer
            </p>
          </div>
        </main>
      )}
    </Layout>
  );
}

export default App;