import { techIcons } from "../../icons/techIcons";

const ProjectMeta = ({ title, description, tech = [] }) => {
    return (
        <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
                {title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
                {tech.map((key) => {
                    const Icon = techIcons[key];
                    if (!Icon) return null;

                    return (
                        <Icon
                            key={key}
                            className="text-gray-300 hover:text-white transition-colors"
                            size={18}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectMeta;
