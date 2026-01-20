import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-background text-white antialiased">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="relative">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
