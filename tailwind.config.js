/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "animation": {
        "fade-in": "fade-in 0.3s ease"
      },
      "keyframes": {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
    borderRadius: {
      "sm": "0.2rem",
      "lg": "0.75rem"
    }
  },
  plugins: [],
}

