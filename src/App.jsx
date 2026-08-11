import { useState } from "react";

import Layout from "./components/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <Layout>
      {showWelcome && (
        <Welcome
          onComplete={() => setShowWelcome(false)}
        />
      )}

      {!showWelcome && (
        <>
          <Navbar />

          <main>
            <Hero />

            <About />

            <Education />

            <Experience />

            <Skills />

            <Projects />

            <Certificates />

            <Contact />

            <Footer />
          </main>
        </>
      )}
    </Layout>
  );
}

export default App;