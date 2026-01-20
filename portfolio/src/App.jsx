import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/common/Navbar.jsx";
import Footer from "@/components/common/Footer";

// Pages
import Home from "@/pages/Home/Home";
import Project from "@/pages/Projects/Projects.jsx";
import Experience from "@/pages/Experience/Experience";
import Skill from "@/pages/Skills/Skills.jsx";
import Contact from "@/pages/Contact/Contact";

// Wrapper to enable route animations
function AnimatedRoutes() {
  const location = useLocation();

  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
  );
}

export default function App() {
  return (
      <Router>
        <Navbar />

        <main className="pt-20">
          {/* pt-20 to offset fixed navbar */}
          <AnimatedRoutes />
        </main>

        <Footer />
      </Router>
  );
}
