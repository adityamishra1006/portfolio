import heroBg from "../assets/images/hero-bg.png";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl px-6 text-center">
                <p className="text-sm uppercase tracking-widest text-gray-400">
                    Java Backend Developer
                </p>

                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    Hi, I’m{" "}
                    <span className="text-primary">Aditya Mishra</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                    I build scalable backend systems, clean APIs, and modern web
                    applications with a strong focus on performance, reliability,
                    and maintainability.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
