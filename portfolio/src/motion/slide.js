export const slideLeft = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.45,
            ease: [0.4, 0.0, 0.2, 1],
        },
    },
};

export const slideRight = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.45,
            ease: [0.4, 0.0, 0.2, 1],
        },
    },
};
