import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/preline/preline.js",
        "node_modules/preline/dist/*.js",
        // './node_modules/preline/dist/*.js'
    ],
    // enable dark mode via class strategy
    darkMode: "selector",
    // darkMode: ['variant', [
    //     '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    //     '&:is(.dark *)',
    // ]],

    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("preline/plugin"), require('@tailwindcss/forms'), require("@tailwindcss/typography")],
};
export default config;
