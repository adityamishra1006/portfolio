import { Link } from "react-router-dom";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black text-white px-6 py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* LEFT */}
                <div className="text-sm text-gray-400 font-mono text-center md:text-left">
                    © {year} Aditya Mishra. All rights reserved.
                </div>

                {/* CENTER NAV */}
                <nav className="flex gap-6 text-sm font-mono">
                    <Link
                        to="/projects"
                        className="text-gray-400 hover:text-white transition"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/experience"
                        className="text-gray-400 hover:text-white transition"
                    >
                        Experience
                    </Link>
                    <Link
                        to="/skills"
                        className="text-gray-400 hover:text-white transition"
                    >
                        Skills
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-400 hover:text-white transition"
                    >
                        Contact
                    </Link>
                </nav>

                {/* RIGHT SOCIALS */}
                <div className="flex gap-4 text-sm font-mono">
                    <a
                        href="https://github.com/adityamishra1006"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/aditya-mishra-468197208"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:mishraaditya6001@gmail.com"
                        className="text-gray-400 hover:text-white transition"
                    >
                        Email
                    </a>
                </div>

            </div>
        </footer>
    );
}
