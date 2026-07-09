/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF6B00',
          DEFAULT: '#FF8000',
          dark: '#FF8000',
        },
        secondary: {
          light: '#4C1F7A',
          DEFAULT: '#4C1F7A',
          dark: '#A855F7',
        },
        success: {
          light: '#5B913B',
          DEFAULT: '#5B913B',
          dark: '#22C55E',
        },
        background: {
          light: '#F9FAFB',
          dark: '#0F172A',
        },
        text: {
          light: '#111827',
          dark: '#F3F4F6',
        },
        muted: {
          light: '#E5E7EB',
          dark: '#374151',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};