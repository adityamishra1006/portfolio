import SectionHeader from "../components/SectionHeader";
import profileImg from "../assets/images/profile.png";

export default function About() {
    return (
        <section id="about" className="py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader title="About Me" subtitle="The Developer" />

                <div className="grid gap-16 md:grid-cols-2 items-center">

                    {/* ================= PROFILE IMAGE ================= */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative group">

                            {/* subtle background */}
                            <div className="absolute inset-0 rounded-2xl bg-primary/10" />

                            <img
                                src={profileImg}
                                alt="Aditya Mishra"
                                className="
                  relative z-10
                  w-110 h-110
                  object-cover
                  rounded-2xl
                  border border-white/10
                "
                            />

                            {/* hover overlay */}
                            <div
                                className="
                  absolute inset-0 z-20
                  rounded-2xl
                  bg-black/70
                  flex flex-col items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
                            >
                                <h3 className="text-xl font-semibold text-white">
                                    Aditya Mishra
                                </h3>
                                <p className="mt-1 text-sm text-gray-300">
                                    Full Stack Developer
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= TEXT + INFO ================= */}
                    <div>
                        <p className="text-gray-300 leading-relaxed">
                            I’m a{" "}
                            <span className="text-white font-medium">
                Java Backend & Full Stack Developer
              </span>{" "}
                            focused on building scalable, maintainable, and production-ready
                            systems. I enjoy designing backend architectures, clean APIs,
                            and systems that perform reliably at scale.
                        </p>

                        <p className="mt-6 text-gray-300 leading-relaxed">
                            My experience spans backend engineering, frontend integration,
                            and system-level thinking. I value clean code, clarity in design,
                            and engineering decisions that age well.
                        </p>

                        {/* ================= INFO CARDS ================= */}
                        <div className="mt-14 grid gap-6 sm:grid-cols-2">

                            {/* Backend First */}
                            <div
                                className="
                  group
                  flex items-start gap-4
                  p-5 rounded-xl
                  bg-white/5
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:shadow-[0_0_28px_-10px_rgba(99,102,241,0.6)]
                "
                            >
                                <div
                                    className="
                    flex items-center justify-center
                    w-11 h-11 rounded-lg
                    bg-primary/10 text-primary
                    transition-all duration-300

                  "
                                >
                                    <span className="text-lg">{`</>`}</span>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium">
                                        Backend First
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Java, Spring Boot, REST APIs, Microservices, Kafka
                                    </p>
                                </div>
                            </div>

                            {/* Data & Persistence */}
                            <div
                                className="
                  group
                  flex items-start gap-4
                  p-5 rounded-xl
                  bg-white/5
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:shadow-[0_0_28px_-10px_rgba(99,102,241,0.6)]
                "
                            >
                                <div
                                    className="
                    flex items-center justify-center
                    w-11 h-11 rounded-lg
                    bg-primary/10 text-primary
                    transition-all duration-300

                  "
                                >
                                    <span className="text-lg">DB</span>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium">
                                        Data & Persistence
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        PostgreSQL, MySQL, Redis, Hibernate
                                    </p>
                                </div>
                            </div>

                            {/* Modern Frontend */}
                            <div
                                className="
                  group
                  flex items-start gap-4
                  p-5 rounded-xl
                  bg-white/5
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:shadow-[0_0_28px_-10px_rgba(99,102,241,0.6)]
                "
                            >
                                <div
                                    className="
                    flex items-center justify-center
                    w-11 h-11 rounded-lg
                    bg-primary/10 text-primary
                    transition-all duration-300

                  "
                                >
                                    <span className="text-lg">UI</span>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium">
                                        Modern Frontend
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        React, Tailwind CSS, Component-driven UI
                                    </p>
                                </div>
                            </div>

                            {/* Engineering Mindset */}
                            <div
                                className="
                  group
                  flex items-start gap-4
                  p-5 rounded-xl
                  bg-white/5
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:shadow-[0_0_28px_-10px_rgba(99,102,241,0.6)]
                "
                            >
                                <div
                                    className="
                    flex items-center justify-center
                    w-11 h-11 rounded-lg
                    bg-primary/10 text-primary
                    transition-all duration-300

                  "
                                >
                                    <span className="text-lg">⚙</span>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium">
                                        Engineering Mindset
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Clean code, system design, scalability & performance
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
