/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lime: "#D8DB2F",
                slate: {
                    900: "#133041",
                    700: "#4E6E7E",
                    500: "#6B94A8",
                    300: "#9ABED5",
                    100: "#E4F4FD",
                },
                red: "#D73328",
            },
        },
    },
    plugins: [],
};
