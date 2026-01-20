import SectionHeader from "../components/SectionHeader";
import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import experience from "../data/experience";

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Professional Journey"
                    subtitle="Experience"
                />

                <Timeline>
                    {experience.map((item) => (
                        <TimelineItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </Timeline>
            </div>
        </section>
    );
}