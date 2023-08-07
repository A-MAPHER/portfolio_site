/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bkg: "hsl(var(--bkg)/ <alpha-value>)",
        textColor: "hsl(var(--textColor)/ <alpha-value>)",
        primary: "hsl(var(--primary)/ <alpha-value>)",
        secondary: "hsl(var(--secondary)/ <alpha-value>)",
        accent: "hsl(var(--accent)/ <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [require("daisyui")],
};
