import Layout from "./components/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Layout>
      <Welcome />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Experience />

        <Skills />

        {/* Future sections */}
        <section id="projects" className="h-1" />
        <section id="certificates" className="h-1" />
        <section id="contact" className="h-1" />
      </main>
    </Layout>
  );
}

export default App;