/* ============================= */
/* PERSONAL INFO                 */
/* ============================= */
export const PERSONAL_INFO = {
    name: "Aditya Mishra",
    role: "Java Backend Developer",
    email: "adityamishra1006@gmail.com",
    location: "India",
};

/* ============================= */
/* SOCIAL LINKS                  */
/* ============================= */
export const SOCIAL_LINKS = {
    github: "https://github.com/adityamishra1006",
    linkedin: "https://www.linkedin.com/in/adityamishra1006",
    leetcode: "https://leetcode.com/u/adityamishra1006",
};

/* ============================= */
/* NAVIGATION LINKS              */
/* ============================= */
export const NAV_LINKS = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Skills",
        path: "/skills",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Experience",
        path: "/experience",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

/* ============================= */
/* CONTACT DETAILS               */
/* ============================= */
export const CONTACT_INFO = [
    {
        label: "Email",
        value: PERSONAL_INFO.email,
        icon: "/images/logos/gmail.svg",
        link: `mailto:${PERSONAL_INFO.email}`,
    },
    {
        label: "GitHub",
        value: "github.com/adityamishra1006",
        icon: "/images/logos/github.svg",
        link: SOCIAL_LINKS.github,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/adityamishra1006",
        icon: "/images/logos/linkedin.svg",
        link: SOCIAL_LINKS.linkedin,
    },
];

/* ============================= */
/* HERO CTA TEXT                 */
/* ============================= */
export const HERO_CTA = {
    primary: "View Projects",
    secondary: "Contact Me",
};

/* ============================= */
/* META / SEO (future use)       */
/* ============================= */
export const META = {
    title: "Aditya Mishra | Java Backend Developer",
    description:
        "Java Backend Developer specializing in Spring Boot, Microservices, Kafka, and scalable backend systems.",
    ogImage: "/images/og/portfolio.png",
};
