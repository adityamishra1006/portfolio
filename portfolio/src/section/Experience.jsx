import SectionHeader from "../components/SectionHeader";
import TimelineLine from "../components/timeline/TimelineLine";
import TimelineDot from "../components/timeline/TimelineDot";
import experience from "../data/experience";

export default function Experience() {
    return (
        <section id="experience" className="py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Professional Journey"
                    subtitle="Experience"
                />

                <div className="relative mt-20">
                    {/* Timeline vertical line */}
                    <TimelineLine />

                    <div className="space-y-20">
                        {experience.map((item, index) => (
                            <div key={item.id} className="relative pl-16 group">

                                {/* Timeline Dot */}
                                <div className="absolute left-2 top-8">
                                    <TimelineDot active={index === 0} />
                                </div>

                                {/* Experience Card */}
                                <div
                                    className="
                    relative p-8 rounded-2xl
                    bg-white/5 border border-white/10
                    transition-all duration-300
                    hover:border-purple-500/40
                    hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.6)]
                  "
                                >
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">
                                                {item.role}
                                            </h3>
                                            <p className="mt-1 text-gray-300">
                                                {item.company}
                                            </p>
                                        </div>

                                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {item.duration}
                    </span>
                                    </div>

                                    {/* Job Type */}
                                    <span
                                        className="
                      inline-block mt-4 px-3 py-1 text-xs rounded-full
                      bg-purple-500/10 text-purple-300
                      border border-purple-500/20 tracking-wide
                    "
                                    >
                    {item.type}
                  </span>

                                    {/* Description */}
                                    <p className="mt-5 text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Responsibilities */}
                                    {item.responsibilities?.length > 0 && (
                                        <ul className="mt-6 space-y-2 text-sm text-gray-400">
                                            {item.responsibilities.map((point, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Tech Stack */}
                                    {item.tech?.length > 0 && (
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {item.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="
                            px-3 py-1 text-xs rounded-full
                            bg-white/5 text-gray-300
                            transition-colors
                            hover:bg-purple-500/10 hover:text-purple-300
                          "
                                                >
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
