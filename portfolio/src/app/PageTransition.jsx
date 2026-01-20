import { motion } from "framer-motion";

/**
 * Central page transition wrapper
 * Controls how pages enter & exit during route changes
 */
const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
    },
};

const pageTransition = {
    duration: 0.5,
    ease: [0.4, 0.0, 0.2, 1], // smooth, premium easing
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            style={{ minHeight: "100vh" }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;