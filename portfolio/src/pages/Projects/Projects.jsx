import { motion } from "framer-motion";
import useUIStore from "../../store/uiStore";
import ProjectModal from "./ProjectModal.jsx";

const projects = [
    {
        title: "E-Wallet Application",
        subtitle: "Microservices-based financial system",
        description:
            "The E-Wallet Application is a microservices-based backend system designed to simulate core digital wallet functionalities. The system allows users to create wallets, maintain balances, and perform secure peer-to-peer transactions. Each major responsibility is handled by an independent service, enabling scalability, fault isolation, and clean separation of concerns. The project emphasizes transactional integrity, REST-based inter-service communication, and real-world backend workflows commonly used in financial systems.",
        features: [
            "Wallet creation and balance management with persistent storage",
            "Transaction processing between users with validation and error handling",
            "Microservices-based architecture for modular and scalable design",
            "REST API communication between services",
            "Structured logging and centralized exception handling"
        ],
        tech: ["Java", "Spring Boot", "Microservices", "MySQL"],
        github: "https://github.com/adityamishra1006/e-wallet-project.git"
    },
    {
        title: "Fitness Application",
        subtitle: "Event-driven microservices system",
        description:
            "The Fitness Application is an event-driven backend system designed to process user fitness activities asynchronously. The application uses Apache Kafka to decouple services and handle high-frequency user events such as activity tracking and notifications. By adopting a microservices and messaging-based architecture, the system improves scalability, responsiveness, and fault tolerance while demonstrating real-world asynchronous backend communication patterns.",
        features: [
            "Kafka-based event-driven architecture for asynchronous processing",
            "User activity tracking using producer-consumer messaging",
            "Decoupled microservices to enhance scalability and reliability",
            "REST APIs for ingesting user and activity data",
            "Improved performance by offloading processing to background consumers"
        ],
        tech: ["Java", "Spring Boot", "Kafka", "Microservices"],
        github: "https://github.com/adityamishra1006/fitness-microservices-application.git"

    },
    {
        title: "Kaizen Coaching Platform",
        subtitle: "Freelance full-stack web application",
        description:
            "Kaizen Coaching Platform is a full-stack web application developed as a freelance project for a coaching institute. The platform enables secure user management, course handling, and student enrollments through a well-structured backend and a responsive frontend. The project focuses on real-world application requirements such as authentication, role-based access control, clean API design, and seamless frontend-backend integration.",
        features: [
            "JWT-based authentication with secure login and session handling",
            "Role-based access control for Admin, Instructor, and Student roles",
            "Course creation, management, and enrollment workflows",
            "Clean REST API architecture with validation and error handling",
            "Integrated frontend for smooth user interaction and data flow"
        ],
        tech: ["Java", "Spring Boot", "MySQL", "JWT"],
        github: "https://github.com/adityamishra1006/kaizen-website-project.git"

    },
    {
        title: "E-Commerce Backend System",
        subtitle: "Scalable backend architecture",
        description:
            "The E-Commerce Backend System is a REST-based backend application designed to manage core e-commerce operations such as products, orders, and users. The project follows a layered architecture and focuses on clean API design, data consistency, and maintainable code structure. It demonstrates how backend systems support real-world commerce workflows through structured endpoints and relational database modeling.",
        features: [
            "Product and order management using RESTful APIs",
            "Clean layered backend architecture",
            "Relational database design with normalization",
            "CRUD operations with proper validation",
            "Maintainable and scalable backend structure"
        ],
        tech: ["Java", "Spring Boot", "MySQL"],
        github: "https://github.com/adityamishra1006/e-commerce-backend-system.git"

    },
    {
        title: "Data Structure Visualizer",
        subtitle: "Interactive learning application",
        description:
            "The Data Structure Visualizer is a frontend-focused educational application built to help learners understand how data structures work internally. The application visually demonstrates operations on structures like arrays and linked lists through interactive animations and user controls. The project emphasizes clarity, interactivity, and intuitive UI design to make abstract concepts easier to grasp.",
        features: [
            "Visual representation of arrays and linked lists",
            "Interactive controls for step-by-step execution",
            "Clear and beginner-friendly UI design",
            "Focused on improving conceptual understanding"
        ],
        tech: ["React", "JavaScript"],
        github: "https://github.com/adityamishra1006/data-structure-visualization.git"

    },
    {
        title: "Keyword Analyzer",
        subtitle: "Mini project for text analysis",
        description:
            "The Keyword Analyzer is a lightweight Java-based application that processes textual input and extracts keyword-related insights. The project focuses on string manipulation, basic text processing logic, and algorithmic thinking. It serves as a foundational project demonstrating problem-solving skills using core Java concepts.",
        features: [
            "Keyword frequency analysis",
            "Text parsing and processing logic",
            "Use of core Java data structures",
            "Simple and efficient algorithm design"
        ],
        tech: ["Java"],
        github: "https://github.com/adityamishra1006/MiniProject-01.git"

    },
    {
        title: "Chat Application",
        subtitle: "Real-time frontend application",
        description:
            "The Chat Application is a real-time messaging platform built using React and Firebase. It supports user authentication, real-time message updates, and efficient state management. The project focuses on frontend architecture, real-time data synchronization, and managing application state for responsive user experiences.",
        features: [
            "Real-time messaging using Firebase",
            "User authentication and session handling",
            "State management using Zustand",
            "Responsive and interactive UI design"
        ],
        tech: ["React", "Firebase", "Zustand"],
        github: "https://github.com/adityamishra1006/chat-app-react.git"

    },
];

export default function Projects() {
    const { openModal } = useUIStore();

    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-6xl mx-auto">

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display text-4xl md:text-5xl mb-4">
                        Projects
                    </h1>
                    <p className="font-primary text-gray-400 max-w-2xl mx-auto">
                        A collection of my real-world projects, ranging from backend
                        microservices and event-driven systems to interactive frontend
                        applications.
                    </p>
                </motion.div>

                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition"
                        >
                            {/* IMAGE */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                <h2 className="font-display text-2xl mb-2">
                                    {project.title}
                                </h2>

                                <p className="font-primary text-gray-400 mb-4">
                                    {project.subtitle}
                                </p>

                                <p className="font-primary text-gray-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* TECH STACK */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full text-gray-300"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                {/* ACTION */}
                                <button
                                    onClick={() => openModal("project", project)}
                                    className="font-mono text-sm text-white border border-white/20 px-4 py-2 rounded-lg hover:border-white/40 transition"
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* PROJECT MODAL */}
                <ProjectModal />
            </div>
        </section>
    );
}
