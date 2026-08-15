/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          DEFAULT: "#0B0B0B",
          dark: "#080808",
          card: "#0E0E10",
          light: "#16161A",
          border: "#252525",
        },
        neon: {
          yellow: "#DFFF00",
          lime: "#CCFF00",
          purple: "#6D28FF",
          purpleDeep: "#5416D9",
          cyan: "#20D9E8",
          pink: "#FF2FA8",
          orange: "#FF7A00",
        },
        muted: {
          DEFAULT: "#A3A3A3",
          dark: "#52525B",
          light: "#E4E4E7",
        }
      },
      fontFamily: {
        display: ['"Anton"', '"Bebas Neue"', 'Impact', 'sans-serif'],
        bebas: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'neon-yellow': '0 0 25px rgba(223, 255, 0, 0.35)',
        'neon-purple': '0 0 25px rgba(109, 40, 255, 0.4)',
        'neon-cyan': '0 0 25px rgba(32, 217, 232, 0.35)',
        'neon-pink': '0 0 25px rgba(255, 47, 168, 0.35)',
        'card-glow': '0 10px 30px -10px rgba(0,0,0,0.8)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
