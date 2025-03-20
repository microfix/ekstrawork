/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // indigo-600
          dark: '#4338ca', // indigo-700
        },
        gray: {
          800: '#333333', // Override gray-800 to be our specific dark gray
          700: '#444444',
          600: '#555555',
          500: '#666666',
          400: '#777777',
          300: '#888888',
          200: '#e5e7eb', // Keep light gray for borders
          100: '#f3f4f6', // Keep light gray for backgrounds
          50: '#f9fafb',  // Keep light gray for backgrounds
        }
      },
      textColor: {
        DEFAULT: '#333333', // Set the default text color to dark gray
      },
    },
  },
  plugins: [],
};