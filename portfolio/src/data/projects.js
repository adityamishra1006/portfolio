const projects = [
    {
        id: 1,
        title: "E-Wallet Application",
        subtitle: "Microservices-based financial system",
        image: "/images/project/wallet.png",
        description:
            "The E-Wallet Application is a microservices-based backend system designed to simulate core digital wallet functionalities. The system allows users to create wallets, maintain balances, and perform secure peer-to-peer transactions. Each major responsibility is handled by an independent service, enabling scalability, fault isolation, and clean separation of concerns.",
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
        id: 2,
        title: "Fitness Application",
        subtitle: "Event-driven microservices system",
        image: "/images/project/fitness.png",
        description:
            "The Fitness Application is an event-driven backend system designed to process user fitness activities asynchronously. The application uses Apache Kafka to decouple services and handle high-frequency user events such as activity tracking and notifications, improving scalability and responsiveness.",
        features: [
            "Kafka-based event-driven architecture for asynchronous processing",
            "User activity tracking using producer-consumer messaging",
            "Decoupled microservices to enhance scalability and reliability",
            "REST APIs for ingesting user and activity data",
            "Improved performance through background consumers"
        ],
        tech: ["Java", "Spring Boot", "Kafka", "Microservices"],
        github: "https://github.com/adityamishra1006/fitness-microservices-application.git"
    },

    {
        id: 3,
        title: "Kaizen Coaching Platform",
        subtitle: "Freelance full-stack web application",
        image: "/images/project/kaizen.png",
        description:
            "Kaizen Coaching Platform is a full-stack web application developed as a freelance project for a coaching institute. The platform enables secure user management, course handling, and student enrollments through a well-structured backend and a responsive frontend.",
        features: [
            "JWT-based authentication with secure login and session handling",
            "Role-based access control for Admin, Instructor, and Student roles",
            "Course creation, management, and enrollment workflows",
            "Clean REST API architecture with validation and error handling",
            "Seamless frontend-backend integration"
        ],
        tech: ["Java", "Spring Boot", "MySQL", "JWT", "React"],
        github: "https://github.com/adityamishra1006/kaizen-website-project.git"
    },

    {
        id: 4,
        title: "E-Commerce Backend System",
        subtitle: "Scalable backend architecture",
        image: "/images/project/ecommerce.png",
        description:
            "The E-Commerce Backend System is a REST-based backend application designed to manage core e-commerce operations such as products, orders, and users. The project follows a layered architecture and focuses on clean API design and data consistency.",
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
        id: 5,
        title: "Data Structure Visualizer",
        subtitle: "Interactive learning application",
        image: "/images/project/data-structure.png",
        description:
            "The Data Structure Visualizer is a frontend-focused educational application built to help learners understand how data structures work internally through interactive animations and user controls.",
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
        id: 6,
        title: "Keyword Analyzer",
        subtitle: "Mini project for text analysis",
        image: "/images/project/keyword.png",
        description:
            "The Keyword Analyzer is a lightweight Java-based application that processes textual input and extracts keyword-related insights. The project focuses on string manipulation, text processing logic, and algorithmic problem solving using core Java concepts.",
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
        id: 7,
        title: "Chat Application",
        subtitle: "Real-time frontend application",
        image: "/images/project/chat-app.png",
        description:
            "The Chat Application is a real-time messaging platform built using React and Firebase. It supports user authentication, real-time message updates, and efficient state management for responsive user experiences.",
        features: [
            "Real-time messaging using Firebase",
            "User authentication and session handling",
            "State management using Zustand",
            "Responsive and interactive UI design"
        ],
        tech: ["React", "Firebase", "Zustand"],
        github: "https://github.com/adityamishra1006/chat-app-react.git"
    }
];

export default projects;
