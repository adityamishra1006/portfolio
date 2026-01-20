import { motion } from "framer-motion";
import skills from "@/data/skills.js";
import SkillCard from "@/components/cards/SkillCard";

export default function Skill() {
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
                        Skills
                    </h1>
                    <p className="font-primary text-gray-400 max-w-2xl mx-auto">
                        A categorized overview of my technical skills with clear
                        proficiency levels across backend, frontend, databases,
                        security, and core CS fundamentals.
                    </p>
                </motion.div>

                {/* SKILL GRID */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Object.values(skills).map((group, index) => (
                        <SkillCard
                            key={group.title}
                            title={group.title}
                            skills={group.skills}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
