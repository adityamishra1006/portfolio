import { create } from "zustand";

const useUIStore = create((set) => ({
    /* ============================= */
    /* MODAL STATE                   */
    /* ============================= */
    activeModal: null,       // e.g. "project"
    activeProject: null,     // project data object

    openModal: (modalType, data = null) =>
        set({
            activeModal: modalType,
            activeProject: data,
        }),

    closeModal: () =>
        set({
            activeModal: null,
            activeProject: null,
        }),
}));

export default useUIStore;
