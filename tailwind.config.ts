import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Neutral palette (monocle-inspired: cream, grays, black)
        cream: '#FDFCF3',
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F0',
          200: '#E7E5E0',
          300: '#D9D3CA',
          400: '#A8A09F',
          500: '#78746F',
          600: '#5A5652',
          700: '#3D3935',
          800: '#2A2824',
          900: '#1A1814',
        },
        // Rainbow accents (for highlights and visual interest)
        rainbow: {
          red: '#E63946',
          orange: '#F77F00',
          yellow: '#FCBF49',
          green: '#06A77D',
          blue: '#1B7AA1',
          indigo: '#4B4BA8',
          violet: '#9D4EDD',
          pink: '#E91E63',
        },
      },
      fontFamily: {
        // Magazine-style serif for headlines
        serif: ['Georgia', 'Garamond', 'serif'],
        // Clean sans-serif for body
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        // Monospace for code
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        // Magazine typography scale
        xs: ['0.75rem', { lineHeight: '1.125' }],
        sm: ['0.875rem', { lineHeight: '1.375' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.7' }],
        xl: ['1.25rem', { lineHeight: '1.8' }],
        '2xl': ['1.5rem', { lineHeight: '1.9' }],
        '3xl': ['1.875rem', { lineHeight: '2.0' }],
        '4xl': ['2.25rem', { lineHeight: '2.1' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        // Additional spacing for magazine layout
        '128': '32rem',
        '144': '36rem',
      },
      gridTemplateColumns: {
        // Responsive grid system: 4 cols desktop, 2 cols tablet, 1 col mobile
        '4-2': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      aspectRatio: {
        // Magazine image ratios
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '2/3': '2 / 3',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [
    // Typography plugin for prose styling
    require('@tailwindcss/typography'),
  ],
}

export default config
