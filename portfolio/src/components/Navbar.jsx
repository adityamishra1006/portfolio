import { useEffect, useState } from "react";

const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 120;

            for (const link of links) {
                const section = document.getElementById(link.id);
                if (
                    section &&
                    section.offsetTop <= scrollPos &&
                    section.offsetTop + section.offsetHeight > scrollPos
                ) {
                    setActive(link.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection("home")}
                    className="text-xl font-bold tracking-wide"
                >
                    Aditya<span className="text-primary">.dev</span>
                </button>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`relative transition-colors ${
                                active === link.id
                                    ? "text-primary"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            {link.label}

                            {active === link.id && (
                                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
