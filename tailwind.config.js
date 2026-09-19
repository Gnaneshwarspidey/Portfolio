/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06080d',
          900: '#0b0f17',
          850: '#111726',
          800: '#172033',
          750: '#1d2a45',
          700: '#263759',
          600: '#3b517d',
        },
        surface: {
          base: '#06080d',
          card: '#0b0f17',
          elevated: '#111726',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(59, 130, 246, 0.35)',
        },
        brand: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          cyan: '#06b6d4',
          emerald: '#10b981',
          violet: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(59, 130, 246, 0.15)',
        'glow-md': '0 0 25px -5px rgba(59, 130, 246, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
