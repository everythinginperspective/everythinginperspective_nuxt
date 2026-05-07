/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Plantin', 'Georgia', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        // Custom stone palette
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
        // Rainbow accents
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
        // Original colors
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#1a1a1a',
        light: '#F5F5F5',
        muted: '#808080',
        gold: '#D4AF37',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '400' }],
        'heading': ['2.5rem', { lineHeight: '1.2', fontWeight: '400' }],
        'subheading': ['1.75rem', { lineHeight: '1.3', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'gutter': '2rem',
        'column': '3rem',
      },
    },
  },
  plugins: [],
};
