/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF8F5',
          subtle: '#F3EFE9',
          card: '#FFFFFF',
          dark: '#111215',
        },
        ink: {
          DEFAULT: '#111215',
          secondary: '#58554E',
          muted: '#8A867E',
          faint: '#D4CEBF',
          inverse: '#FAF8F5',
        },
        border: {
          DEFAULT: '#E6E1D6',
          strong: '#111215',
          subtle: '#EDE8DE',
        },
        electric: {
          DEFAULT: '#1447E6',
          hover: '#0C35B8',
          light: '#EEF2FF',
          glow: 'rgba(20, 71, 230, 0.15)',
        },
        acid: {
          DEFAULT: '#CEF241',
          hover: '#B5DC29',
          light: '#F5FDE0',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Outfit', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 10px 30px -10px rgba(17, 18, 21, 0.08), 0 1px 3px 0 rgba(17, 18, 21, 0.04)',
        'lifted': '0 20px 45px -15px rgba(17, 18, 21, 0.12), 0 0 0 1px rgba(17, 18, 21, 0.06)',
        'hover-pop': '0 30px 60px -20px rgba(20, 71, 230, 0.2), 0 0 0 1px rgba(20, 71, 230, 0.2)',
        'browser': '0 25px 60px -15px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08)',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'wider-tag': '0.12em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
