import { motion } from "framer-motion";
import experience from "@/data/experience";
import ExperienceCard from "@/components/cards/ExperienceCard";

export default function Experience() {
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
                        Experience
                    </h1>
                    <p className="font-primary text-gray-400 max-w-xl mx-auto">
                        My professional experience includes freelance development,
                        internships, and real-world project work across backend and
                        frontend technologies.
                    </p>
                </motion.div>

                {/* EXPERIENCE LIST */}
                <div className="space-y-10">
                    {experience.map((exp, index) => (
                        <ExperienceCard
                            key={exp.id}
                            experience={exp}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
