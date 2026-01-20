import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects";

export default function Project() {
    return (
        <section id="projects" className="py-28">
            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    title="Featured Projects"
                    subtitle="Code & Creativity"
                />

                {/* Projects Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="mt-20 flex justify-center">
                    <a
                        href="https://github.com/adityamishra1006"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              px-8 py-3 rounded-lg font-medium
              border border-white/20 text-white
              transition-all duration-300
              hover:border-purple-500/50
              hover:text-purple-300
              hover:shadow-[0_0_30px_-12px_rgba(168,85,247,0.6)]
            "
                    >
                        Visit My GitHub →
                    </a>
                </div>

            </div>
        </section>
    );
}
