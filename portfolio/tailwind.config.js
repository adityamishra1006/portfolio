/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
                display: ["Clash Display", "sans-serif"],
            },
        },
    },
    plugins: [],
};
