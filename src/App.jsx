import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import OpenSource from "./pages/OpenSource";
import Disclosure from "./pages/Disclosure";

function App() {
  return (
    <main className="lg:w-[60%] mx-auto  p-8 my-8 rounded-md font-nbInternational">
      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/website-terms-of-use" element={<OpenSource />} />
        <Route path="/important-disclosures" element={<Disclosure />} />
        <Route path="/open-source" element={<OpenSource />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
