import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navConfig } from "../config/navConfig";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold text-white"
                >
                    Aditya<span className="text-purple-500">.dev</span>
                </NavLink>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navConfig
                        .filter((item) => item.showInNav)
                        .map((item) => (
                            <li key={item.id} className="relative">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `relative text-sm transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "text-gray-400 hover:text-white"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {item.label}

                                            {isActive && (
                                                <span
                                                    className="
                            absolute -bottom-2 left-1/2 -translate-x-1/2
                            w-1.5 h-1.5 rounded-full
                            bg-purple-500
                          "
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-xl"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/10">
                    <ul className="flex flex-col">
                        {navConfig
                            .filter((item) => item.showInNav)
                            .map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.path}
                                        onClick={() => setOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-6 py-4 text-sm transition ${
                                                isActive
                                                    ? "text-white bg-white/5"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
