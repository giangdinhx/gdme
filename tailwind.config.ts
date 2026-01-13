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
        "primary": "#10b981", // Emerald-500
        "background-light": "#ffffff",
        "background-dark": "#0a0a0a",
        "text-main": "#111111",
        "text-muted": "#666666",
        "text-light": "#ffffff",
      },
      fontFamily: {
        "display": ["var(--font-inter)", "Inter", "sans-serif"],
        "body": ["var(--font-noto-sans)", "Noto Sans", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        "mono": ["monospace"],
      },
      borderRadius: { "DEFAULT": "2px", "lg": "12px", "full": "9999px" },
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
