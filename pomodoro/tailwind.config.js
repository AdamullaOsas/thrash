/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                red: "#F87070",
                cyan: "#70F3F8",
                purple: "#D881F8",
                grey: "#D7E0FF",
                blue: "#1E213F",
                almostWhite: "#EFF1FA",
                darkBlue: "#161932",
            },
            fontFamily: {
                "Kumbh Sans": ["Kumbh Sans", "sans-serif"],
                "Roboto Slab": ["Roboto Slab", "serif"],
                "Space Mono": ["Space Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
