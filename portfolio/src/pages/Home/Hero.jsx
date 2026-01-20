import { motion } from "framer-motion";
import { heroContainer, heroItem } from "./homeAnimation";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-black text-white px-6">
            <motion.div
                variants={heroContainer}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto space-y-6"
            >
                {/* INTRO LINE */}
                <motion.p
                    variants={heroItem}
                    className="font-mono text-sm text-gray-400"
                >
                    Hello, I’m
                </motion.p>

                {/* NAME */}
                <motion.h1
                    variants={heroItem}
                    className="font-display text-5xl md:text-7xl leading-tight"
                >
                    Aditya Mishra
                </motion.h1>

                {/* ROLE */}
                <motion.h2
                    variants={heroItem}
                    className="font-display text-3xl md:text-4xl text-gray-300"
                >
                    Java Backend Developer
                </motion.h2>

                {/* DESCRIPTION */}
                <motion.p
                    variants={heroItem}
                    className="font-primary text-gray-400 max-w-2xl leading-relaxed"
                >
                    I build scalable backend systems using Java and Spring Boot,
                    and develop modern, responsive user interfaces with React.
                    I focus on clean architecture, performance, and real-world problem solving.
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                    variants={heroItem}
                    className="flex gap-4 pt-6"
                >
                    <a
                        href="/src/pages/Projects/Projects.jsx"
                        className="px-6 py-3 bg-white text-black font-mono text-sm rounded-lg hover:bg-gray-200 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="/src/pages/Contact/Contact.jsx"
                        className="px-6 py-3 border border-white/20 font-mono text-sm rounded-lg hover:border-white/40 transition"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
