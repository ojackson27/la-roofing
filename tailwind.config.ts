import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A4E46',
        trust: '#0A1F1C',
        bodyTeal: '#0F8B7F',
        accent: '#15EAC9',
        surface: '#F3F4F6',
        surfaceVariant: '#E1E2E4',
        background: '#F8F9FB',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        lg: '0.5rem',
        full: '9999px',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
