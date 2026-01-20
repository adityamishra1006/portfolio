import { motion } from "framer-motion";
import ProjectModels from "./ProjectModal.jsx";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Project() {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-6xl mx-auto">

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display text-4xl md:text-5xl mb-4">
                        Projects
                    </h1>
                    <p className="font-primary text-gray-400 max-w-2xl mx-auto">
                        A collection of backend, full-stack, and frontend projects that
                        demonstrate my experience with Java, Spring Boot, microservices,
                        event-driven systems, and modern web development.
                    </p>
                </motion.div>

                {/* PROJECT GRID */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {ProjectModels.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
