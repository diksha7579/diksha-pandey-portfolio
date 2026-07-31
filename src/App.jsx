import Layout from "./components/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";

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

        <Projects />

        <Certificates />

        <Contact />

      </main>
    </Layout>
  );
}

export default App;