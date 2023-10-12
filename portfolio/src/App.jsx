import "./App.css";

import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const App = () => (
  <div className="bg-white relative bg-gradient-to-b from-gray-900 to-gray-600">
    <NavBar />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default App;
