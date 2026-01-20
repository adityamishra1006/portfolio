import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <div
            className="
        group relative overflow-hidden
        rounded-2xl
        bg-white/5
        border border-white/10
        transition-all duration-300
        hover:border-purple-500/40
        hover:shadow-[0_0_35px_-15px_rgba(168,85,247,0.6)]
      "
        >
            {/* Project Image */}
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />
            )}

            {/* Action Icons */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="
              p-2 rounded-full
              bg-black/50
              text-gray-300
              transition-all duration-300
              hover:bg-purple-600
              hover:text-white
            "
                    >
                        <Github className="w-5 h-5" />
                    </a>
                )}

                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="
              p-2 rounded-full
              bg-black/50
              text-gray-300
              transition-all duration-300
              hover:bg-purple-600
              hover:text-white
            "
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                    {project.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                {project.tech?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="
                  px-3 py-1 text-xs rounded-full
                  bg-white/5 text-gray-300
                  transition-colors
                  hover:bg-purple-500/10
                  hover:text-purple-300
                "
                            >
                {tech}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
