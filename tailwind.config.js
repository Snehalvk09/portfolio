/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#070b1c', 900: '#0a1026', 800: '#101838', 700: '#1a2450' },
        brand: { blue: '#3b82f6', purple: '#8b5cf6' },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(99,102,241,.55)',
        'glow-lg': '0 0 36px rgba(139,92,246,.7)',
      },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(18px)' }, '100%': { opacity: 1, transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { rise: 'rise .8s ease-out both', float: 'float 7s ease-in-out infinite' },
    },
  },
  plugins: [],
}
