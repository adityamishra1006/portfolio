import { create } from "zustand";

/**
 * Global UI state store
 * Handles app-wide UI concerns only
 */
const useUIStore = create((set) => ({
    // active navigation item (route id)
    activeNav: null,

    setActiveNav: (navId) =>
        set({
            activeNav: navId,
        }),

    // page transition state (future-proof)
    isTransitioning: false,

    startTransition: () =>
        set({
            isTransitioning: true,
        }),

    endTransition: () =>
        set({
            isTransitioning: false,
        }),

    // generic UI flags (extend later if needed)
    isModalOpen: false,

    openModal: () =>
        set({
            isModalOpen: true,
        }),

    closeModal: () =>
        set({
            isModalOpen: false,
        }),
}));

export default useUIStore;