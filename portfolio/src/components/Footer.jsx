import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold">
                        Aditya<span className="text-primary">.dev</span>
                    </h2>
                    <p className="mt-4 text-sm text-gray-400 max-w-xs">
                        Building robust, scalable backend systems and seamless web
                        experiences. Let’s create something extraordinary together.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                        Navigation
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-400">
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#skills" className="hover:text-white">Skills</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                        Connect
                    </h3>

                    <div className="mt-4 flex items-center gap-4">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-primary transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-primary transition"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="mailto:contact@aditya.dev"
                            className="p-3 rounded-full bg-white/5 hover:bg-primary transition"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                    <span>© {new Date().getFullYear()} Aditya Mishra. All rights reserved.</span>
                    <span className="mt-2 md:mt-0">
            Designed & Built with React & Tailwind CSS
          </span>
                </div>
            </div>
        </footer>
    );
}
