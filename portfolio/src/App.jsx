import MainLayout from "./layout/MainLayout.jsx";

import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Project";
import Experience from "./section/Experience";
import Contact from "./section/Contact";

export default function App() {
    return (
        <MainLayout>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </MainLayout>
    );
}
