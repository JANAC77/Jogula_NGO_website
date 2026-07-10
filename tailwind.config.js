/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Vibrant light blue
          600: '#0284c7', // Original hover blue was similar
          700: '#0369a1', // Trustworthy deep blue
          800: '#075985',
          900: '#0c4a6e',
        },
        surface: {
          light: '#f8fafc',
          dark: '#0f172a',
        }
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'glass': '10px',
      }
    },
  },
  plugins: [],
};
