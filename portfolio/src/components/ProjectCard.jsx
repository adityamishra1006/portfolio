import Card from "./Card";
import Badge from "./Badge";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
    const { title, description, tech, image, github, features } = project;

    return (
        <Card className="overflow-hidden group">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* GitHub Overlay */}
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center
                     rounded-full bg-black/70 text-white
                     hover:bg-primary transition"
                    aria-label="View source code on GitHub"
                >
                    <FaGithub />
                </a>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                    {title}
                </h3>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {description}
                </p>

                {/* Features */}
                {features && features.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-gray-400">
                        {features.map((feature, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {tech.map((item, index) => (
                        <Badge key={index}>
                            {item}
                        </Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
}
