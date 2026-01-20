import { motion } from "framer-motion";

const levelColor = {
    Advanced: "border-green-500/40 text-green-400",
    Intermediate: "border-yellow-500/40 text-yellow-400",
    Basic: "border-blue-500/40 text-blue-400"
};

export default function SkillCard({ title, skills, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl p-6 bg-black hover:border-white/30 transition"
        >
            {/* TITLE */}
            <h3 className="font-display text-xl mb-4 text-white">
                {title}
            </h3>

            {/* SKILLS */}
            <div className="space-y-3">
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between gap-3"
                    >
            <span className="text-gray-300 text-sm">
              {skill.name}
            </span>

                        <span
                            className={`px-3 py-1 text-xs font-mono rounded-full border ${
                                levelColor[skill.level]
                            }`}
                        >
              {skill.level}
            </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
