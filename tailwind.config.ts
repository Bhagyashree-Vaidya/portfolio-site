import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a0a0a",
        "dark-secondary": "#1a1a1a",
        "accent-primary": "#00ff00",
        "accent-secondary": "#ffff00",
        "accent-tertiary": "#00ccff",
        "text-primary": "#ffffff",
        "text-secondary": "#cccccc",
        "text-tertiary": "#999999",
        "border-color": "#333333",
      },
    },
  },
};
export default config;
