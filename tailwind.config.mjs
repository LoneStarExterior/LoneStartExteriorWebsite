/** @type {import('tailwindcss').Config} */
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
        primary:'#5b99cc',
        primaryLight:'#E8F3F9',
        secondary:'#1b2a51',
      },
      fontSize:{
          'xxs':'10px'
      }
    },
  },
  plugins: [],
};
