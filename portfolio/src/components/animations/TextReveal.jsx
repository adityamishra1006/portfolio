import { motion } from "framer-motion";

export default function TextReveal({
                                       text,
                                       as = "p",
                                       type = "word", // "word" | "char"
                                       delay = 0,
                                       stagger = 0.05,
                                       className = ""
                                   }) {
    const Tag = motion[as] || motion.p;

    const items =
        type === "char"
            ? text.split("")
            : text.split(" ");

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delay
            }
        }
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <Tag
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                >
                    {item}
                    {type === "word" && "\u00A0"}
                </motion.span>
            ))}
        </Tag>
    );
}
