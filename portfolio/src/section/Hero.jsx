import heroBg from "../assets/images/hero-bg.png";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            <div className="relative z-10 max-w-5xl px-6 text-center">
                <p className="text-sm uppercase tracking-widest text-gray-400">
                    Java Backend & Full Stack Developer
                </p>

                <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
                    Hello, I’m{" "}
                    <span className="text-purple-500">Aditya Mishra</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                    I build scalable backend systems, clean APIs, and modern web
                    applications with a strong focus on performance, reliability,
                    and long-term maintainability.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">

                    {/* View Projects */}
                    <Button
                        onClick={() => navigate("/projects")}
                        className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
                    >
                        View Projects →
                    </Button>

                    {/* Contact Me */}
                    <Button
                        variant="outline"
                        onClick={() => navigate("/contact")}
                        className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10"
                    >
                        Contact Me
                    </Button>

                </div>
            </div>
        </section>
    );
}
