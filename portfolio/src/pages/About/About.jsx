import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* PROFILE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src="/images/profile/profile.jpg"
                        alt="Aditya Mishra"
                        className="w-72 h-72 object-cover rounded-2xl border border-white/10"
                    />
                </motion.div>

                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-6"
                >
                    <h1 className="font-display text-4xl md:text-5xl">
                        About Me
                    </h1>

                    <p className="font-primary text-gray-300 leading-relaxed">
                        I am a <span className="text-white">Computer Science graduate (B.Tech 2025)</span>
                        with a strong foundation in <span className="text-white">Java backend development</span>
                        and modern web technologies. I focus on building scalable, maintainable, and
                        production-ready applications.
                    </p>

                    <p className="font-primary text-gray-300 leading-relaxed">
                        My core skills include <span className="text-white">Core Java, Spring Boot, REST API
            development, Kafka, and database design</span>. I have hands-on experience building
                        backend services and integrating them with frontend applications.
                    </p>

                    <p className="font-primary text-gray-300 leading-relaxed">
                        On the frontend, I work with <span className="text-white">React, Tailwind CSS, Zustand,
            and animation libraries</span> to create responsive and interactive user interfaces.
                    </p>

                    {/* TECH STACK SUMMARY */}
                    <div className="pt-4">
                        <h2 className="font-display text-2xl mb-4">
                            Tech Stack
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm text-gray-400">
                            <div>
                                <span className="text-white">Backend:</span><br />
                                Java, Spring Boot, REST APIs, Kafka, Hibernate, JPA
                            </div>

                            <div>
                                <span className="text-white">Frontend:</span><br />
                                React, Tailwind CSS, Zustand, Framer Motion
                            </div>

                            <div>
                                <span className="text-white">Databases:</span><br />
                                MySQL, PostgreSQL
                            </div>

                            <div>
                                <span className="text-white">Tools:</span><br />
                                Git, GitHub, Maven, Postman, IntelliJ, VS Code
                            </div>
                        </div>
                    </div>

                    {/* QUICK INFO */}
                    <div className="flex flex-wrap gap-4 pt-6 font-mono text-sm text-gray-400">
                        <span>📍 India</span>
                        <span>🎓 B.Tech (CSE)</span>
                        <span>💻 Java Backend + React</span>
                        <span>🚀 Open to opportunities</span>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
