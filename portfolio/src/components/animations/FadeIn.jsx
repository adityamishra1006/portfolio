import { motion } from "framer-motion";

export default function FadeIn({
                                   children,
                                   delay = 0,
                                   duration = 0.6,
                                   y = 30,
                                   once = true,
                                   className = ""
                               }) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ once }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
