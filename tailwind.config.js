/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: { // Added below text
      fontWeight: {
        normal: '400', // Adjust default font weight for body text
        bold: '700',   // Adjust font weight for bold text
      },
    },
  },
  plugins: [],
};
