/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#0a0f1c',      // Deep slate/blue background
        bgCard: 'rgba(17, 24, 39, 0.7)', // Translucent card background
        textMain: '#f8fafc',
        textMuted: '#94a3b8',
        accentCyan: '#00f2fe',
        accentPurple: '#4facfe',
        accentPink: '#f02fc2',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        neonCyan: '0 0 15px rgba(0, 242, 254, 0.5)',
        neonPurple: '0 0 15px rgba(79, 172, 254, 0.5)',
        neonPink: '0 0 15px rgba(240, 47, 194, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, #111827 0%, #0a0f1c 100%)',
        'gradient-cyan-purple': 'linear-gradient(to right, #00f2fe, #4facfe)',
        'gradient-purple-pink': 'linear-gradient(to right, #4facfe, #f02fc2)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
