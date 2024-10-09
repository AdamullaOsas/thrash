/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enable dark mode via class
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlue: "hsl(209, 23%, 22%)",
                veryDarkBlueBg: "hsl(207, 26%, 17%)",
                veryDarkBlueText: "hsl(200, 15%, 8%)",
                darkGrayInput: "hsl(0, 0%, 52%)",
                veryLightGrayBg: "hsl(0, 0%, 98%)",
                white: "hsl(0, 0%, 100%)",
            },
        },
    },
    plugins: [],
};
