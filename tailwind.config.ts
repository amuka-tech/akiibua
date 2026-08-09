import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        arena: {
          navy: "#082C6B",       // Darker shade for contrast
          gray: "#F6F8FC",       // Soft page background
          dark: "#041533",       // Darkest blue (almost black) for deep elements
          muted: "#64748b",      // Slate muted text to match blue theme
          light: "#e2e8f0",      // Slate borders
          cream: "#ffffff",      // Pure white for cards
          slate: "#e6ecf5",      // Slight blue-gray alternate section background
          primary: "#0D47AA",    // Main brand blue rgb(13, 71, 170)
          red: "#cf2e2e",        // Kept specifically for buttons
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px rgba(21, 66, 132, 0.08)",
        "card-hover": "0 8px 32px rgba(46, 78, 160, 0.12)",
        nav: "0 4px 30px rgba(21, 66, 132, 0.15)",
        section: "0 1px 3px rgba(21, 66, 132, 0.06)",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
