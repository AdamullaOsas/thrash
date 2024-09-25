/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#5267DF",
                red: "#FA5959",
                navy: "#242A45",
                grey: "#9194A2",
            },
            screens: {
                box: "920px",
            },
        },
    },
    plugins: [],
};
