import { motion } from "framer-motion";

const skillGroups = [
    {
        title: "Backend Development",
        skills: [
            "Java",
            "Spring Boot",
            "Spring MVC",
            "Spring Data JPA",
            "Hibernate",
            "REST APIs",
            "Microservices",
            "Apache Kafka"
        ]
    },
    {
        title: "Security & Authentication",
        skills: [
            "Spring Security",
            "JWT",
            "OAuth 2.0",
            "Role-Based Access Control"
        ]
    },
    {
        title: "Databases & Caching",
        skills: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "JPA & Hibernate ORM"
        ]
    },
    {
        title: "Frontend Development",
        skills: [
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Vite"
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            "Git",
            "GitHub",
            "Maven",
            "Postman",
            "IntelliJ IDEA",
            "VS Code",
            "CI/CD Concepts"
        ]
    },
    {
        title: "Core CS & Practices",
        skills: [
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Multithreading",
            "SDLC",
            "Clean Architecture",
            "Debugging & Logging"
        ]
    }
];

export default function Skill() {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                >
                    <h2 className="font-display text-4xl md:text-5xl">
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        Technologies and tools I have worked with while building real-world backend,
                        full-stack, and microservices-based applications.
                    </p>
                </motion.div>

                {/* SKILL GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition"
                        >
                            <h3 className="font-display text-xl mb-4">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-md bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
