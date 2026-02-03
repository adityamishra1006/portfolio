import eWalletImg from "../assets/images/projects/ewallet.png";
import fitnessImg from "../assets/images/projects/fitness.png";
import kaizenImg from "../assets/images/projects/kaizen.png";
import ecommerceImg from "../assets/images/projects/ecommerce.png";
import keywordImg from "../assets/images/projects/keyword.png";
import dsaImg from "../assets/images/projects/data-structure.png";
import chatImg from "../assets/images/projects/chat-app.png";
import arogyaFlowImg from "../assets/images/projects/arogyaFlowImg.png";

const projects = [

    {
        id: 8,
        title: "Arogya Flow – OPD Token Management System",
        description:
            "Arogya Flow is a backend-focused OPD token management system designed to streamline patient flow in hospitals and clinics. The system replaces manual queues with a structured, rule-driven token allocation process, ensuring fair and efficient handling of patients. Doctors are assigned time-based slots, and tokens are generated based on availability, priority, and slot capacity. " +
            "The application is built with clean layered architecture, keeping controllers thin and moving all business rules into dedicated service and allocation layers. Core logic such as slot validation, token capacity checks, priority handling (emergency, walk-in, online), and time-based constraints is centralized to improve maintainability and testability. PostgreSQL is used for persistent storage, while global exception handling ensures consistent and meaningful API responses. The design closely reflects real-world hospital workflows and is suitable for scalable OPD systems.",

        features: [
            "Doctor availability and time-slot management",
            "OPD token generation with slot capacity validation",
            "Priority-based token allocation (Emergency, Walk-in, Online)",
            "Prevention of overbooking using strict business rules",
            "Real-time slot status tracking (OPEN, FULL, CLOSED)",
            "Clean RESTful APIs with DTO-based request and response handling",
            "Centralized exception handling for consistent error responses",
            "Thin controller and service-driven architecture",
            "Persistent data storage using PostgreSQL"
        ],

        tech: [
            "Java",
            "Spring Boot",
            "Spring Web MVC",
            "Spring Data JPA",
            "Hibernate",
            "REST APIs",
            "PostgreSQL",
            "Lombok",
            "Validation",
            "Maven"
        ],

        image: arogyaFlowImg,
        github: "https://github.com/adityamishra1006/arogya-flow.git",
    },

    {
        id: 1,
        title: "E-Wallet Application",
        description:
            "This project is a secure and scalable digital wallet system designed using a microservices-based architecture. The system allows users to create and manage wallets, check real-time balances, and perform credit and debit transactions in a safe and controlled manner. Each core responsibility such as user management, wallet handling, transaction processing, and notifications is separated into independent services, which improves scalability, maintainability, and fault isolation. " +
            "The backend is built with a strong focus on reliability and data consistency. Financial operations are handled using transactional processing to ensure accuracy and ACID compliance. Redis is used to cache frequently accessed data like wallet balances to improve performance and reduce database load, while Apache Kafka enables asynchronous, event-driven communication between services. This design ensures the system can handle high traffic efficiently while maintaining data integrity, making it suitable for real-world wallet and payment-based applications.",

        features: [
            "Secure user authentication and user management",
            "Wallet balance management with transactional safety",
            "Credit and debit transaction processing",
            "Seamless wallet top-up using Razorpay",
            "RESTful APIs for wallet and transaction operations",
            "Event-driven communication using Apache Kafka",
            "High-performance caching using Redis",
            "Data consistency and ACID compliance for financial operations",
            "Maven multi-module, microservices-based architecture"
        ],
        tech: [
            "Java",
            "Spring Boot",
            "Spring Web MVC",
            "Spring Data JPA",
            "Validation",
            "REST APIs",
            "Microservices",
            "MySQL",
            "Redis",
            "Apache Kafka",
            "Razorpay Payment Gateway",
            "Lombok",

        ],
        image: eWalletImg,
        github: "https://github.com/adityamishra1006/e-wallet-project.git",
    },

    {
        id: 2,
        title: "Fitness Recommendation Application",
        description:
            "A microservices-based fitness recommendation system designed to provide personalized workout suggestions through loosely coupled backend services.",
        features: [
            "Microservices-based architecture",
            "Service-to-service communication",
            "Event-driven messaging using Kafka",
            "Scalable backend services",
            "Clean and modular API design",
        ],
        tech: [
            "Java",
            "Spring Boot",
            "Microservices",
            "Kafka",
            "REST APIs",
            "Docker",
        ],
        image: fitnessImg,
        github:
            "https://github.com/adityamishra1006/fitness-microservices-application.git",
    },

    {
        id: 3,
        title: "Kaizen Project (Coaching Institute Platform)",
        description:
            "A production-ready platform developed for a coaching institute to manage course information, student inquiries, and content delivery with a real-world deployment mindset.",
        features: [
            "Course and program management",
            "Student inquiry handling",
            "Backend-driven content management",
            "Scalable REST API architecture",
            "Frontend-backend integration",
        ],
        tech: [
            "Java",
            "Spring Boot",
            "React",
            "REST APIs",
            "MySQL",
            "Tailwind CSS",
        ],
        image: kaizenImg,
        github:
            "https://github.com/adityamishra1006/kaizen-website-project.git",
    },

    {
        id: 4,
        title: "E-Commerce Backend System",
        description:
            "A robust backend system for an e-commerce platform handling products, users, orders, and inventory with real-world business workflows.",
        features: [
            "Product and category management",
            "User authentication and authorization",
            "Order processing workflows",
            "Inventory management logic",
            "Relational database design with JPA",
        ],
        tech: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "MySQL",
            "JPA",
            "Hibernate",
        ],
        image: ecommerceImg,
        github:
            "https://github.com/adityamishra1006/e-commerce-backend-system.git",
    },

    {
        id: 5,
        title: "Keyword Analyzer",
        description:
            "A lightweight Java-based application focused on analyzing text input to extract and process keywords efficiently.",
        features: [
            "Efficient string processing algorithms",
            "Keyword extraction logic",
            "Clean and modular Java code",
            "Focus on algorithmic problem-solving",
        ],
        tech: [
            "Java",
            "Algorithms",
            "Core Java",
            "Data Processing",
        ],
        image: keywordImg,
        github:
            "https://github.com/adityamishra1006/MiniProject-01.git",
    },

    {
        id: 6,
        title: "Data Structure Visualizer",
        description:
            "An interactive application that visually demonstrates the internal working of common data structures to improve conceptual understanding.",
        features: [
            "Visualization of arrays, stacks, and queues",
            "Step-by-step algorithm execution",
            "Interactive UI for learning",
            "Clear representation of data flow",
        ],
        tech: [
            "React",
            "JavaScript",
            "Data Structures",
            "Algorithms",
        ],
        image: dsaImg,
        github:
            "https://github.com/adityamishra1006/data-structure-visualization.git",
    },

    {
        id: 7,
        title: "Real-Time Chat Application",
        description:
            "A real-time chat application enabling instant messaging with a focus on responsiveness and real-time data synchronization.",
        features: [
            "Real-time message delivery",
            "User-to-user chat functionality",
            "Live updates without page refresh",
            "Modern state management",
        ],
        tech: [
            "React",
            "Firebase",
            "Real-Time Database",
            "JavaScript",
        ],
        image: chatImg,
        github:
            "https://github.com/adityamishra1006/chat-app-react.git",
    },
];

export default projects;
