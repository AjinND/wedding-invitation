import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'leJour': ['Le Jour Script', 'sans-serif'], // Add a fallback font
        'gistesy': ['Gistesy', 'sans-serif'],
        'cormorant-garamond-regular': ['CormorantGaramond-Regular', 'sans-serif'],
        'eb-garamond-italic': ['EBGaramond-Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
