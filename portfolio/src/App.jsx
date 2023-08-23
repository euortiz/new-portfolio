import "./App.css";

import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => (
  <div className="bg-white">
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default App;
