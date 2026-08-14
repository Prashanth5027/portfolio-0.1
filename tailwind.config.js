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
        cyber: {
          dark: '#0a0d14',
          card: 'rgba(16, 22, 36, 0.75)',
          border: 'rgba(56, 189, 248, 0.2)',
          accent: '#38bdf8',
          neon: '#818cf8',
          cyan: '#06b6d4',
          violet: '#a855f7',
          emerald: '#10b981',
          rose: '#f43f5e',
          amber: '#f59e0b',
        },
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'laser-beam': 'laserBeam 4s linear infinite',
        'cyber-spin': 'spin 12s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'matrix-scan': 'matrixScan 2s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.5))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        laserBeam: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        matrixScan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(16, 185, 129, 0.15) 100%)',
        'laser-gradient': 'linear-gradient(90deg, #38bdf8, #a855f7, #34d399, #38bdf8)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
