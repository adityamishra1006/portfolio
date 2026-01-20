import { motion } from "framer-motion";

export default function ExperienceCard({ experience, index }) {
    const {
        role,
        company,
        duration,
        type,
        description,
        responsibilities,
        tech
    } = experience;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl p-6 bg-black hover:border-white/30 transition"
        >
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h3 className="font-display text-xl text-white">
                        {role}
                    </h3>
                    <p className="text-gray-400 text-sm font-mono">
                        {company}
                    </p>
                </div>

                <div className="text-sm font-mono text-gray-400">
                    {duration}
                </div>
            </div>

            {/* TYPE */}
            <p className="mt-2 text-xs font-mono text-gray-500">
                {type}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-300 leading-relaxed">
                {description}
            </p>

            {/* RESPONSIBILITIES */}
            {responsibilities?.length > 0 && (
                <ul className="mt-4 space-y-2 text-gray-400 text-sm list-disc list-inside">
                    {responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}

            {/* TECH STACK */}
            {tech?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                    {tech.map((item, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
              {item}
            </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
