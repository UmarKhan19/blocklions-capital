import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import OpenSource from "./pages/OpenSource";

function App() {
  return (
    <main className="w-[60%]">
      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/open-source" element={<OpenSource />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
