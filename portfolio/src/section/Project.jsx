import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Projects"
                    subtitle="What I Have Built"
                    center
                />

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
