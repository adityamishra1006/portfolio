import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "../layout/MainLayout";

// Pages (your existing section files)
import Hero from "../section/Hero";
import About from "../section/About";
import Skills from "../section/Skills";
import Projects from "../section/Project";
import Experience from "../section/Experience";
import Contact from "../section/Contact";

// Page transition wrapper
import PageTransition from "./PageTransition";

const AppRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Hero />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <PageTransition>
                                <About />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/skills"
                        element={
                            <PageTransition>
                                <Skills />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/projects"
                        element={
                            <PageTransition>
                                <Projects />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/experience"
                        element={
                            <PageTransition>
                                <Experience />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <PageTransition>
                                <Contact />
                            </PageTransition>
                        }
                    />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
