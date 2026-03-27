/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./products.html",
    "./components/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#fbbf24", // Yellow
        "secondary": "#1a227f", // Deep blue
        "accent": "#ec5b13", // Orangeish
        "background-light": "#f8f6f6",
        "background-dark": "#0f172a",
        "brandYellow": "#FFD700",
        "brandRed": "#D92323",
        "brandDark": "#1A1A1A"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ["Public Sans", "Inter", "sans-serif"]
      },
      borderRadius: {
        'eight': '8px',
        DEFAULT: "0.25rem", 
        lg: "0.5rem", 
        xl: "0.75rem", 
        full: "9999px"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
