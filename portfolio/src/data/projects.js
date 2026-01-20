import eWalletImg from "../assets/images/projects/ewallet.png";
import fitnessImg from "../assets/images/projects/fitness.png";
import kaizenImg from "../assets/images/projects/kaizen.png";
import ecommerceImg from "../assets/images/projects/ecommerce.png";
import keywordImg from "../assets/images/projects/keyword.png";
import dsaImg from "../assets/images/projects/data-structure.png";
import chatImg from "../assets/images/projects/chat-app.png";

const projects = [
    {
        id: 1,
        title: "E-Wallet Application",
        description:
            "A secure and scalable digital wallet system that allows users to manage balances, perform transactions, and track payment history with strong emphasis on backend reliability and transactional consistency.",
        features: [
            "Secure user authentication using JWT",
            "Wallet balance management with transactional safety",
            "Transaction history tracking",
            "RESTful APIs for wallet operations",
            "Data consistency handling for financial operations",
        ],
        tech: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "Microservices",
            "MySQL",
            "JWT",
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
