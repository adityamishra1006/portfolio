import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-6"
            >
                <h1 className="font-display text-6xl md:text-7xl">
                    404
                </h1>

                <p className="font-primary text-gray-400 max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-4 px-6 py-3 bg-white text-black font-mono text-sm rounded-lg hover:bg-gray-200 transition"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </section>
    );
}
