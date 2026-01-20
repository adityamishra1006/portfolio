import FadeIn from "@/components/animations/FadeIn.jsx";
import TextReveal from "@/components/animations/TextReveal.jsx";
import Parallax from "@/components/animations/Parallex.jsx";
import Button from "@/components/common/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-black text-white flex items-center px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full">

                {/* BACKGROUND PARALLAX GLOW */}
                <Parallax
                    offset={120}
                    className="absolute inset-0 -z-10 flex items-center justify-center"
                >
                    <div className="w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
                </Parallax>

                {/* CONTENT */}
                <div className="space-y-6 max-w-3xl">

                    {/* GREETING */}
                    <FadeIn>
                        <p className="font-mono text-sm text-gray-400">
                            Hello, I’m
                        </p>
                    </FadeIn>

                    {/* NAME */}
                    <TextReveal
                        text="Aditya Mishra"
                        as="h1"
                        type="char"
                        stagger={0.04}
                        className="font-display text-5xl md:text-7xl leading-tight"
                    />

                    {/* ROLE */}
                    <TextReveal
                        text="Java Backend & Full-Stack Developer"
                        as="h2"
                        delay={0.3}
                        className="font-display text-2xl md:text-3xl text-gray-300"
                    />

                    {/* DESCRIPTION */}
                    <FadeIn delay={0.5}>
                        <p className="font-primary text-gray-400 max-w-2xl leading-relaxed">
                            I build scalable backend systems using Java and Spring Boot,
                            design event-driven microservices, and develop modern,
                            responsive user interfaces with React. I focus on clean
                            architecture, performance, and real-world problem solving.
                        </p>
                    </FadeIn>

                    {/* CTA BUTTONS */}
                    <FadeIn delay={0.7}>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button to="/projects">
                                View Projects
                            </Button>

                            <Button
                                to="/contact"
                                variant="secondary"
                            >
                                Contact Me
                            </Button>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
