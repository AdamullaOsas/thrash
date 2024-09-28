/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    300: "#D0D6F9",
                    900: "#0B0D17",
                },
            },
        },
    },
    plugins: [],
};
