import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portofolio from "./pages/Portofolio";
import Experience from "./pages/Experience";
import Testimoni from "./pages/Testimoni";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/testimoni" element={<Testimoni />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
