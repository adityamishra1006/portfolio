import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { hoverFade } from "../../motion/hover";

const ProjectOverlay = ({ githubUrl }) => {
    if (!githubUrl) return null;

    return (
        <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-start justify-end p-3"
            {...hoverFade}
        >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm">
                <FaGithub className="text-white text-lg" />
            </div>
        </motion.a>
    );
};

export default ProjectOverlay;
