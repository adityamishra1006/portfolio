import { useCallback } from "react";

/**
 * Optional scroll helper
 * Use ONLY inside pages that actually contain sections
 */
const useScrollToSection = () => {
    const scrollToSection = useCallback((id, options = {}) => {
        if (!id) return;

        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            ...options,
        });
    }, []);

    return { scrollToSection };
};

export default useScrollToSection;
