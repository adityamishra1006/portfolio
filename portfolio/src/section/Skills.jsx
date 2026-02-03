import SectionHeader from "../components/SectionHeader";

const SKILLS = [
    {
        title: "Backend",
        items: [
            { name: "Java", level: "Intermediate", value: 80 },
            { name: "Spring Boot", level: "Intermediate", value: 80 },
            { name: "REST APIs", level: "Intermediate", value: 80 },
            { name: "Microservices", level: "Intermediate", value: 75 },
            { name: "Kafka", level: "Basic", value: 65 },
            { name: "JWT Authentication", level: "Basic", value: 65 },
            { name: "Exception Handling", level: "Intermediate", value: 80 },
        ],
    },
    {
        title: "Frontend",
        items: [
            { name: "React", level: "Intermediate", value: 70 },
            { name: "JavaScript", level: "Intermediate", value: 70 },
            { name: "HTML", level: "Advanced", value: 80 },
            { name: "CSS", level: "Advanced", value: 80 },
            { name: "Tailwind CSS", level: "Basic", value: 60 },
        ],
    },
    {
        title: "Database",
        items: [
            { name: "MySQL", level: "Intermediate", value: 75 },
            { name: "PostgreSQL", level: "Basic", value: 50 },
            { name: "MongoDB", level: "Basic", value: 50 },
            { name: "JPA", level: "Intermediate", value: 70 },
            { name: "Hibernate", level: "Intermediate", value: 70 },
            { name: "Database Design", level: "Intermediate", value: 70 },
            { name: "Transactions & ACID", level: "Intermediate", value: 70 },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Git", level: "Intermediate", value: 80 },
            { name: "GitHub", level: "Intermediate", value: 80 },
            { name: "Docker", level: "Basic", value: 50 },
            { name: "Postman", level: "Intermediate", value: 80 },
            { name: "VS Code", level: "Advanced", value: 90 },
            { name: "IntelliJ IDEA", level: "Advanced", value: 85 },
            { name: "Linux Basics", level: "Basic", value: 65 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <SectionHeader
                    title="Technical Arsenal"
                    subtitle="Skills & Proficiency"
                />

                {/* Skill Cards */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {SKILLS.map((group, index) => (
                        <SkillCard key={index} group={group} />
                    ))}
                </div>

                {/* Always Learning */}
                <div
                    className="
            mt-20 p-10 rounded-2xl
            bg-white/5 border border-white/10
            text-center
          "
                >
                    <h3 className="text-xl font-semibold text-white">
                        Always Learning
                    </h3>

                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Technology never stands still, and neither do I. I'm currently
                        exploring{" "}
                        <span className="text-purple-400">Data Structures, Algorithms</span>{" "}
                        and{" "}
                        <span className="text-purple-400">System Design</span>{" "}
                        to broaden my horizons.
                    </p>
                </div>

            </div>
        </section>
    );
}

/* ================= SUB COMPONENT ================= */

function SkillCard({ group }) {
    return (
        <div
            className="
        p-6 rounded-2xl
        bg-white/5 border border-white/10
      "
        >
            <h3 className="text-lg font-semibold text-purple-400">
                {group.title}
            </h3>

            <div className="mt-6 space-y-5">
                {group.items.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-sm text-gray-300">
                            <span>{skill.name}</span>
                            <span className="text-gray-400">{skill.level}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-purple-500"
                                style={{ width: `${skill.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
