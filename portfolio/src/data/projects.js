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
            "Arogya Flow is a backend-focused OPD token management system designed to streamline patient flow in hospitals and clinics. The system replaces manual queues with a structured, rule-driven token allocation process, ensuring fair and efficient handling of patients. " +
            "Doctors are assigned time-based slots, and tokens are generated based on availability, priority, and slot capacity. The application is built with clean layered architecture, keeping controllers thin and moving all business rules into dedicated service and allocation layers. Core logic such as slot validation, token capacity checks, priority handling (emergency, walk-in, online), and time-based constraints is centralized to improve maintainability and testability. PostgreSQL is used for persistent storage, while global exception handling ensures consistent and meaningful API responses. The system also supports future extensibility, integration with hospital systems, and smooth handling of high patient volumes. The design closely reflects real-world hospital workflows and is suitable for scalable OPD systems, with flexibility to adapt to different clinic sizes and operational requirements, supporting role-based access for doctors, staff, and administrators, improving operational control and long-term system evolution.",

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
            "This project is a full-stack fitness recommendation system built using a microservices-based architecture. It provides personalized workout suggestions by combining user fitness data with AI-powered recommendations. " +
            "Core functionalities such as user management, workout recommendations, activity tracking, and notifications are implemented as independent microservices, ensuring loose coupling, scalability, and easier maintenance. The frontend is developed using React.js and Material UI to deliver a clean, responsive, and user-friendly interface. " +
            "The backend is designed with a strong focus on scalability, security, and real-time communication. Service discovery is managed using Spring Eureka Server, while Spring Cloud Gateway acts as a centralized entry point for routing and request handling. Authentication and authorization are implemented using Keycloak with OAuth 2.0 to secure user access. Apache Kafka enables event-driven communication between services, while PostgreSQL and MongoDB handle structured and unstructured data. The Google Gemini API enhances intelligent workout recommendations, making the system suitable for real-world fitness platforms, supporting future feature expansion, performance optimization, and seamless integration with wearable devices and third-party health services.",

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
            "This project is a full-stack fitness recommendation system built using a microservices-based architecture. The application provides personalized workout suggestions by combining user fitness data with AI-powered recommendations. Core responsibilities such as user management, workout recommendations, activity tracking, and notifications are implemented as independent microservices, ensuring loose coupling, scalability, and easier maintenance. The frontend is developed using React.js and Material UI to deliver a clean, responsive, and user-friendly interface. " +
            "The backend focuses on scalability, security, and real-time communication. Service discovery is handled using Spring Eureka Server, while Spring Cloud Gateway acts as a centralized entry point for routing and request handling. Authentication and authorization are implemented using Keycloak with OAuth 2.0 to secure user access. Apache Kafka enables event-driven communication between services, while PostgreSQL and MongoDB are used for structured and unstructured data storage. Google Gemini API is integrated to enhance intelligent workout recommendations, making the system suitable for real-world, scalable fitness platforms.",

        features: [
            "Microservices-based system architecture",
            "AI-powered workout recommendations using Gemini",
            "Secure authentication using Keycloak and OAuth 2.0",
            "Service discovery with Spring Eureka Server",
            "Centralized routing via Spring Cloud Gateway",
            "Event-driven communication using Apache Kafka",
            "PostgreSQL and MongoDB data storage",
            "Responsive UI built with React and Material UI",
            "Centralized configuration using Spring Cloud Config"
        ],
        tech: [
            "Spring Boot",
            "React.js",
            "Material UI",
            "Microservices",
            "Spring Eureka Server",
            "Spring Cloud Gateway",
            "Keycloak",
            "OAuth 2.0",
            "Apache Kafka",
            "PostgreSQL",
            "MongoDB",
            "Google Gemini API",
            "Spring Cloud Config",
            "Spring Data JPA",
            "Lombok"
        ],
        image: fitnessImg,
        github:
            "https://github.com/adityamishra1006/fitness-microservices-application.git",
    },


    {
        id: 3,
        title: "Kaizen Project (Coaching Institute Platform)",
        description:
            "This project is a full-stack platform developed for a coaching institute to manage course information, student inquiries, and content delivery using a scalable and maintainable architecture. The system is designed with a real-world deployment mindset, focusing on clear separation of responsibilities between frontend and backend layers. Core functionalities such as course and program management, inquiry handling, and content updates are handled through backend-driven APIs to ensure consistency and reliability. " +
            "The backend is built using Spring Boot with a strong emphasis on clean architecture, modular design, and RESTful API principles. Business logic is centralized in service layers to improve maintainability and ease of future enhancements. The frontend is developed using React and Tailwind CSS to provide a clean, responsive, and modern user interface. MySQL is used for persistent data storage, ensuring reliable handling of course data and inquiries. The overall design supports scalability, smooth frontend-backend integration, and future feature expansion, making it suitable for real-world coaching institute platforms.",

        features: [
            "Course and program management system",
            "Student inquiry submission and handling",
            "Backend-driven content management",
            "Clean and scalable REST API design",
            "Service-layer based business logic",
            "Responsive UI using React and Tailwind",
            "Reliable data storage using PostgreSQL",
            "Frontend and backend integration",
            "Real-world deployment-oriented architecture"
        ],
        tech: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "React",
            "Tailwind CSS",
            "PostgreSQL",
            "Spring Data JPA",
            "Spring Security",
            "Lombok"
        ],
        image: kaizenImg,
        github:
            "https://github.com/adityamishra1006/kaizen-website-project.git",
    },

    {
        id: 4,
        title: "E-Commerce Backend System",
        description:
            "This project is a robust backend system developed for an e-commerce platform to manage products, users, orders, and inventory following real-world business workflows. The system is designed with a clear layered architecture, focusing on separation of concerns between controllers, services, and persistence layers. Core functionalities such as product and category management, user authentication, order processing, and inventory handling are implemented with strong validation and business rules to ensure data consistency and reliability. " +
            "The backend is built using Spring Boot and Spring Data JPA, with Spring Security used to handle authentication and authorization. RESTful APIs are designed to support scalable frontend integration and future extensions. MySQL is used as the primary relational database, while Redis is integrated for caching frequently accessed data to improve performance. Maven is used for dependency management and build automation, and Lombok reduces boilerplate code. The overall design reflects real-world e-commerce use cases and supports scalability, maintainability, and secure operations.",

        features: [
            "Product and category management",
            "User authentication and authorization",
            "Order processing and checkout workflows",
            "Inventory management and stock control",
            "Secure APIs using Spring Security",
            "Relational data modeling with JPA",
            "Caching support using Redis",
            "Clean layered backend architecture",
            "Scalable REST API design"
        ],
        tech: [
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "Spring Security",
            "REST APIs",
            "MySQL",
            "Redis",
            "Maven",
            "Lombok"
        ],
        image: ecommerceImg,
        github:
            "https://github.com/adityamishra1006/e-commerce-backend-system.git",
    },


    {
        id: 5,
        title: "Keyword Analyzer",
        description:
            "This project is a lightweight Java-based application designed to analyze text input and extract meaningful keywords efficiently. The system focuses on processing raw textual data using optimized string manipulation and algorithmic techniques to identify important terms. Core logic includes parsing input text, filtering relevant keywords, and applying rule-based processing to improve accuracy and performance. The application is structured with clean and modular Java code, ensuring readability and ease of enhancement. " +
            "The project emphasizes strong fundamentals in core Java and algorithmic problem-solving. Efficient string processing techniques are used to handle different input sizes while maintaining performance. The design prioritizes simplicity, clarity, and correctness, making it suitable for understanding text-processing logic and practicing data-handling algorithms. This project demonstrates a solid grasp of core Java concepts, logical thinking, and practical implementation of algorithms for real-world text analysis scenarios.",

        features: [
            "Efficient text and string processing",
            "Keyword extraction and filtering logic",
            "Optimized algorithmic implementation",
            "Clean and modular Java codebase",
            "Focus on core Java fundamentals",
            "Rule-based text analysis approach",
            "Performance-oriented data processing",
            "Readable and maintainable design",
            "Algorithm-focused problem solving"
        ],
        tech: [
            "Java",
            "Core Java",
            "Algorithms",
            "Data Processing",
            "String Manipulation"
        ],
        image: keywordImg,
        github:
            "https://github.com/adityamishra1006/MiniProject-01.git",
    },

    {
        id: 6,
        title: "Data Structure Visualizer",
        description:
            "This project is an interactive learning application designed to visually demonstrate the internal working of common data structures and algorithms. The goal of the system is to help learners understand abstract data structure concepts through real-time visual representations and step-by-step execution. Core components such as arrays, stacks, queues, linked lists, and searching algorithms are implemented with clear visual feedback to show how data changes during each operation. " +
            "The application is built with a strong focus on user interaction and conceptual clarity. Users can perform operations like insertion, deletion, and traversal while observing how data flows internally. The frontend is developed using React and JavaScript to provide a responsive and intuitive learning experience. The design emphasizes clean visuals, logical animations, and controlled execution steps, making the tool suitable for beginners and interview preparation. The project demonstrates strong fundamentals in data structures, algorithmic thinking, and frontend-driven visualization techniques.",

        features: [
            "Visualization of core data structures",
            "Step-by-step algorithm execution",
            "Interactive controls for operations",
            "Clear representation of data flow",
            "Real-time visual updates",
            "Beginner-friendly learning interface",
            "Algorithm behavior demonstration",
            "Frontend-driven visual logic",
            "Educational and interview-focused design"
        ],
        tech: [
            "React",
            "JavaScript",
            "Data Structures",
            "Algorithms",
            "HTML",
            "CSS"
        ],
        image: dsaImg,
        github:
            "https://github.com/adityamishra1006/data-structure-visualization.git",
    },


    {
        id: 7,
        title: "Real-Time Chat Application",
        description:
            "This project is a real-time chat application designed to enable instant user-to-user messaging with a strong focus on responsiveness and real-time data synchronization. The system allows users to send and receive messages instantly, ensuring a smooth and interactive communication experience. Core functionalities include real-time message delivery, user-to-user chat handling, and live updates without requiring page refreshes. " +
            "The application is built using React for the frontend, providing a clean and responsive user interface. Firebase is used as the backend to handle real-time data synchronization and message storage through its real-time database capabilities. Modern state management techniques are applied to ensure consistent UI updates and efficient data handling. The project demonstrates practical experience with real-time systems, frontend-driven application logic, and integration with cloud-based real-time databases.",

        features: [
            "Real-time message delivery",
            "User-to-user chat functionality",
            "Live updates without page refresh",
            "Real-time data synchronization",
            "Responsive chat interface",
            "Efficient state management",
            "Firebase-storage used for storing messages.",
            "Firebase-driven real-time logic",
            "Scalable chat application design"
        ],
        tech: [
            "React",
            "JavaScript",
            "Firebase",
            "State Management"
        ],
        image: chatImg,
        github:
            "https://github.com/adityamishra1006/chat-app-react.git",
    },
];

export default projects;
