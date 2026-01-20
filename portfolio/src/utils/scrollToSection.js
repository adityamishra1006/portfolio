/**
 * Smoothly scrolls to a section by id
 * @param {string} sectionId - The id of the target section
 * @param {number} offset - Optional offset (useful for fixed navbar)
 */
export function scrollToSection(sectionId, offset = 80) {
    const element = document.getElementById(sectionId);

    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
}
