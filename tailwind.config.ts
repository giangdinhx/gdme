import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#39a3ef",
        "background-light": "#ffffff",
        "background-dark": "#0a0a0a",
        "text-main": "#18181b",
        "text-muted": "#a1a1aa",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      borderRadius: { "DEFAULT": "2px", "lg": "4px", "full": "9999px" },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
