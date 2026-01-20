import { NavLink } from "react-router-dom";
import useUIStore from "../store/uiStore.js";
import { navConfig } from "../config/navConfig";

const Navbar = () => {
    const activeNav = useUIStore((s) => s.activeNav);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand / Logo */}
                <div className="text-lg font-semibold text-white">
                    Aditya.dev
                </div>

                {/* Navigation Links */}
                <ul className="flex items-center gap-8">
                    {navConfig
                        .filter((item) => item.showInNav)
                        .map((item) => {
                            const isActive = activeNav === item.id;

                            return (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.path}
                                        className={`
                      relative text-sm transition-colors
                      ${
                                            isActive
                                                ? "text-white"
                                                : "text-gray-400 hover:text-white"
                                        }
                    `}
                                    >
                                        {item.label}

                                        {/* Active indicator */}
                                        {isActive && (
                                            <span
                                                className="
                          absolute -bottom-2 left-1/2 -translate-x-1/2
                          w-1.5 h-1.5 rounded-full
                          bg-indigo-500
                        "
                                            />
                                        )}
                                    </NavLink>
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
