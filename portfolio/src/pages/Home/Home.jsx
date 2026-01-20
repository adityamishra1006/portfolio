import PageTransition from "@/components/animations/PageTransition.jsx";
import Hero from "./Hero";

export default function Home() {
    return (
        <PageTransition>
            <Hero />
            {/*
        Future sections can be added here:
        <AboutPreview />
        <FeaturedProjects />
        <TechStack />
      */}
        </PageTransition>
    );
}
