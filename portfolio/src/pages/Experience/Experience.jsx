import { motion } from "framer-motion";

const experiences = [
    {
        title: "Freelance Full-Stack Project",
        company: "Kaizen Coaching",
        duration: "2025 – Present",
        type: "Freelance Project",
        description: [
            "Designed and developed a full-stack web application for a coaching institute, handling both backend and frontend responsibilities.",
            "Built backend services using Java and Spring Boot, implementing RESTful APIs for user management, course management, and student enrollments.",
            "Implemented authentication and authorization using JWT with role-based access control for Admin, Instructor, and Student roles.",
            "Designed and managed relational database schemas using MySQL, ensuring efficient data modeling and optimized queries.",
            "Applied request validation, global exception handling, and standardized API responses to improve backend reliability and maintainability.",
            "Developed frontend components using React.js, JavaScript, and Vite, focusing on clean UI structure and smooth user interactions.",
            "Integrated frontend with backend APIs and handled state management for authenticated user sessions.",
            "Worked closely with stakeholders to gather requirements, prioritize features, and deliver functionality in iterative development cycles.",
            "Performed debugging, testing, and incremental improvements based on feedback to enhance application stability and usability.",
            "Used Git and GitHub for version control, maintaining a clean commit history and organized project structure.",
            "Gained hands-on experience in full-stack development, strengthening understanding of real-world application workflows."
        ],
        tech: [
            "Java", "Spring Boot", "REST APIs", "MySQL", "JWT", "Spring Security", "React.js", "JavaScript", "Vite", "Git", "GitHub", "Full-Stack Development"
        ]

    },
    {
        title: "Java Backend Developer Intern",
        company: "GeeksforGeeks",
        duration: "June 2025 – September 2025",
        type: "Internship",
        description: [
            "Worked as a Java Backend Developer Intern, building backend applications under the guidance of mentors using Core Java and Spring Boot.",
            "Designed and developed RESTful APIs from scratch by following layered architecture and standard backend development practices.",
            "Built an internal payment wallet application as a learning-based project, implementing transaction workflows, balance handling, and API endpoints under mentor guidance.",
            "Developed an e-commerce backend system by creating REST APIs for user, product, and order management, focusing on clean API design and CRUD operations.",
            "Implemented data persistence using Spring Data JPA and Hibernate, ensuring proper entity mapping and transactional consistency.",
            "Worked with MySQL for database schema design, relational modeling, and query execution.",
            "Added basic validation, exception handling, and structured API responses to improve application reliability.",
            "Tested APIs using Postman and performed debugging to identify and fix backend issues during development.",
            "Followed Software Development Life Cycle (SDLC) phases including requirement understanding, implementation, testing, and refinement.",
            "Received regular code reviews from mentors and incorporated feedback to improve code quality, readability, and backend design understanding.",
            "Used Git and GitHub for version control, practicing collaborative and professional development workflows.",
            "Strengthened practical understanding of backend development concepts and real-world Java application structure."
        ],
        tech: [
            "Java", "Spring Boot", "REST APIs", "Spring Data JPA", "Hibernate", "MySQL", "Postman", "Git", "GitHub", "Backend Development", "SDLC"
        ]

    },
    {
        title: "Frontend Developer Intern",
        company: "ABMN Postulates",
        duration: "January 2024 – March 2024",
        type: "Internship",
        description: [
            "Worked as a Backend / Frontend Developer Intern on the development of a live company website in a collaborative team environment.",
            "Developed responsive and reusable UI components using React, HTML5, CSS3, and JavaScript, ensuring compatibility across devices and screen sizes.",
            "Integrated frontend components with backend APIs to enable dynamic content rendering and smooth data flow.",
            "Followed clean coding practices while implementing UI logic and improving overall user experience.",
            "Participated in debugging and fixing UI-related issues to enhance website stability and performance.",
            "Collaborated with team members using Git and GitHub for version control, code reviews, and feature integration.",
            "Gained practical exposure to real-world web development workflows, teamwork, and deployment-ready applications."
        ],
        tech: [
            "React.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "Frontend Development", "Web Development"
        ]

    },
];

export default function Experience() {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-5xl mx-auto">

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display text-4xl md:text-5xl mb-4">
                        Experience
                    </h1>
                    <p className="font-primary text-gray-400 max-w-xl mx-auto">
                        My professional experience includes freelance development, internships,
                        and real-world project work across backend and frontend technologies.
                    </p>
                </motion.div>

                {/* EXPERIENCE LIST */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl p-8"
                        >
                            {/* HEADER */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h2 className="font-display text-2xl">
                                        {exp.title}
                                    </h2>
                                    <p className="font-primary text-gray-400">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="font-mono text-sm text-gray-400 mt-2 sm:mt-0">
                                    {exp.duration} • {exp.type}
                                </div>
                            </div>

                            {/* DESCRIPTION */}
                            <ul className="list-disc list-inside space-y-2 font-primary text-gray-300">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            {/* TECH STACK */}
                            <div className="flex flex-wrap gap-3 mt-6">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-mono text-gray-300 border border-white/10 rounded-full"
                                    >
                                    {tech}
                                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
