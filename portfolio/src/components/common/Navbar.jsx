import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../common/Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
        { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <Link
                    to="/"
                    className="font-display text-xl text-white tracking-wide"
                >
                    Aditya<span className="text-gray-400">.dev</span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm font-mono transition ${
                                    isActive
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <Button to="/contact" size="sm">
                        Hire Me
                    </Button>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-300 hover:text-white transition"
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden border-t border-white/10 bg-black">
                    <nav className="flex flex-col px-6 py-6 gap-4">
                        {navItems.map(item => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `text-sm font-mono transition ${
                                        isActive
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        <Button
                            to="/contact"
                            size="sm"
                            className="mt-4"
                            onClick={() => setOpen(false)}
                        >
                            Hire Me
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
