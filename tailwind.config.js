/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This line ensures Tailwind scans all your project's JS/TSX files.
    "./src/**/*.css", // Optionally add this line if you use Tailwind classes inside CSS files.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

