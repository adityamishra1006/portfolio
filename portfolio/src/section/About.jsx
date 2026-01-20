import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import profileImg from "../assets/images/profile.png";

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader title="About Me" subtitle="Who I Am" />

                <div className="grid gap-12 md:grid-cols-2 items-center">

                    {/* Profile Image */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl" />
                            <img
                                src={profileImg}
                                alt="Aditya Mishra"
                                className="relative z-10 w-64 h-64 object-cover rounded-2xl border border-white/10"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <p className="text-gray-300 leading-relaxed">
                            I am a{" "}
                            <span className="text-white font-medium">
                Java Backend Developer
              </span>{" "}
                            with a strong focus on building scalable, reliable, and
                            maintainable systems. I enjoy working on backend architectures,
                            designing clean APIs, and solving real-world engineering problems.
                        </p>

                        <p className="mt-6 text-gray-300 leading-relaxed">
                            My experience includes working with modern backend technologies,
                            microservices-based systems, and performance-oriented designs. I
                            believe in writing clean code, following best practices, and
                            continuously improving as an engineer.
                        </p>

                        {/* Info Cards */}
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            <Card className="p-6">
                                <h3 className="text-lg font-semibold text-white">
                                    Backend Focus
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Java, Spring Boot, REST APIs, Microservices, Kafka
                                </p>
                            </Card>

                            <Card className="p-6">
                                <h3 className="text-lg font-semibold text-white">
                                    Problem Solver
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Data Structures, Algorithms, System Design
                                </p>
                            </Card>

                            <Card className="p-6">
                                <h3 className="text-lg font-semibold text-white">
                                    Clean Code
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Maintainable architecture, readable code, best practices
                                </p>
                            </Card>

                            <Card className="p-6">
                                <h3 className="text-lg font-semibold text-white">
                                    Continuous Learning
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Always exploring new technologies and improving skills
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
