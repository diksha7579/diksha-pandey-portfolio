import { useCallback, useState } from "react";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

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
        <>
          <Navbar />

          <main>
            <Hero />

            {/* Temporary section anchors.
                These will be replaced by the real sections later. */}

            <section id="about" className="h-1" />
            <section id="experience" className="h-1" />
            <section id="skills" className="h-1" />
            <section id="projects" className="h-1" />
            <section id="certificates" className="h-1" />
            <section id="contact" className="h-1" />
          </main>
        </>
      )}
    </Layout>
  );
}

export default App;