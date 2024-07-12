/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        "primary-foreground": "#fff",
        destructive: "#e3342f",
        "destructive-foreground": "#fff",
        secondary: "#ffed4a",
        "secondary-foreground": "#000",
        background: "#f8fafc",
        accent: "#38b2ac",
        "accent-foreground": "#fff",
        ring: "#5a67d8",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg, #DC02C2, #5C53FE)",
      },
    },
  },
  plugins: [],
};
