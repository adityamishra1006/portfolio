import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Badge from "../components/Badge";
import skills from "../data/skills";

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Skills"
                    subtitle="What I Work With"
                    center
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skillCategory, index) => (
                        <Card key={index} className="p-6">
                            <h3 className="text-lg font-semibold text-white">
                                {skillCategory.category}
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {skillCategory.items.map((skill, idx) => (
                                    <Badge key={idx}>
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
