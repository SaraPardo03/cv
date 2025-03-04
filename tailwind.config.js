/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#EC6367',
        dark: '#2d3748',
        light: '#EBEEF0',
      },
    },
  },
  plugins: [],
}
