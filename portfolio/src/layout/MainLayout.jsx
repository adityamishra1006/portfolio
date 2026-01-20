import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import useUIStore from "../store/uiStore";
import { navConfig } from "../config/navConfig";

const MainLayout = () => {
    const location = useLocation();
    const setActiveNav = useUIStore((s) => s.setActiveNav);

    // Sync active nav with current route
    useEffect(() => {
        const match = navConfig.find(
            (item) => item.path === location.pathname
        );
        if (match) setActiveNav(match.id);
    }, [location.pathname, setActiveNav]);

    return (
        <div className="min-h-screen flex flex-col bg-[#0b0f1a] text-gray-200">
            <Navbar />

            {/* Page content (animated by PageTransition in routes.jsx) */}
            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
