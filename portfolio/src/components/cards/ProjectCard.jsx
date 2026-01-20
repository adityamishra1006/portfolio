import { motion } from "framer-motion";
import Button from "../common/Button";

export default function ProjectCard({ project, index }) {
    const {
        title,
        subtitle,
        image,
        description,
        features,
        tech,
        github
    } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group border border-white/10 rounded-2xl overflow-hidden bg-black hover:border-white/30 transition"
        >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-4">
                {/* HEADER */}
                <div>
                    <h3 className="font-display text-xl text-white">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-400 font-mono">
                        {subtitle}
                    </p>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm leading-relaxed">
                    {description}
                </p>

                {/* FEATURES */}
                {features?.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                        {features.slice(0, 3).map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                )}

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {tech.map((item, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 text-gray-300 bg-white/5"
                        >
              {item}
            </span>
                    ))}
                </div>

                {/* ACTIONS */}
                <div className="pt-4 flex gap-3">
                    <Button
                        href={github}
                        variant="secondary"
                        size="sm"
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
