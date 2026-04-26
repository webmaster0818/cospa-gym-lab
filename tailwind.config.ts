import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#2E7D32',
          700: '#1B5E20',
          800: '#145218',
          900: '#0D3B10',
        },
        secondary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#1E88E5',
          600: '#1565C0',
          700: '#0D47A1',
          800: '#0A3880',
          900: '#072A60',
        },
        accent: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FF8F00',
          600: '#F57F17',
          700: '#E65100',
          800: '#BF360C',
          900: '#8C2900',
        },
        site: {
          bg: '#F5FFF5',
          card: '#FFFFFF',
          text: '#1A1A2E',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        display: ["var(--font-zen-maru)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
