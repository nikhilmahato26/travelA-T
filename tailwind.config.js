/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#faf6f2',
          100: '#efe4da',
          200: '#dfccbc',
          300: '#c4a48c',
          400: '#a17d65',
          500: '#7d5f4b',
          600: '#5d4637',
          700: '#423227',
          800: '#2e221b',
          900: '#1f1713',
          950: '#140f0c',
        },
        gold: {
          50: '#fef7e5',
          100: '#fde8b5',
          200: '#fbd37f',
          300: '#f4b64d',
          400: '#e89928',
          500: '#d98218',
          600: '#bf6b0e',
          700: '#9c5209',
          800: '#7c4106',
          900: '#5e3205',
        },
        amber: {
          holiday: '#f4b64d',
          warm: '#d97706',
          fire: '#b45309',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e89928 0%, #b5650d 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1f1713 0%, #38281f 100%)',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231f1713' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(217, 130, 24, 0.45)' },
          '50%': { boxShadow: '0 0 0 20px rgba(217, 130, 24, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(217, 130, 24, 0.32)',
        'navy': '0 8px 32px rgba(31, 23, 19, 0.25)',
        'card': '0 2px 16px rgba(31, 23, 19, 0.08)',
        'card-hover': '0 16px 48px rgba(31, 23, 19, 0.16)',
      },
    },
  },
  plugins: [],
}
