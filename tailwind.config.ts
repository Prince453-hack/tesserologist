import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "hsl(var(--ink))",
        paper: "hsl(var(--paper))",
        gold: "hsl(var(--gold))",
        bronze: "hsl(var(--bronze))",
        teal: "hsl(var(--teal))",
        rose: "hsl(var(--rose))",
        line: "hsl(var(--line))",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "radial-spot":
          "radial-gradient(circle at top left, rgba(214, 168, 92, 0.22), transparent 32%), radial-gradient(circle at top right, rgba(120, 204, 199, 0.18), transparent 26%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
