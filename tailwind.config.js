/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mat: {
          DEFAULT: '#1E2E28',
          dark: '#131F1A',
          light: '#2C4038',
        },
        paper: '#FAF8F2',
        ink: '#14171A',
        grid: {
          DEFAULT: '#E3B94E',
          soft: '#F0D48A',
        },
        blade: {
          DEFAULT: '#E15B45',
          soft: '#F0846F',
        },
      },
      boxShadow: {
        soft: '0 2px 12px -2px rgba(20, 23, 26, 0.08)',
        card: '0 4px 24px -6px rgba(20, 23, 26, 0.12)',
        lift: '0 12px 40px -8px rgba(20, 23, 26, 0.22)',
        glow: '0 0 0 1px rgba(227, 185, 78, 0.15), 0 8px 30px -6px rgba(227, 185, 78, 0.25)',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(227,185,78,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(227,185,78,0.10) 1px, transparent 1px)',
        'mat-gradient': 'radial-gradient(120% 120% at 15% 0%, #2C4038 0%, #1E2E28 45%, #131F1A 100%)',
        'card-gradient': 'linear-gradient(155deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [],
}
