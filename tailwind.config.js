/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'neon-cyan': '#00f0ff',
        'neon-red': '#ff0040',
        'dark': {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2a2a2a',
        }
      },
      fontFamily: {
        'mono': ['Fira Code', 'JetBrains Mono', 'monospace'],
        'heading': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink .75s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00ff41, 0 0 10px #00ff41' },
          '100%': { textShadow: '0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff41' },
        },
      }
    },
  },
  plugins: [],
}
