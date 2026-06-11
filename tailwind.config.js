/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        soft: 'rgb(var(--soft) / <alpha-value>)',
        texto: 'rgb(var(--texto) / <alpha-value>)',
        'texto-suave': 'rgb(var(--texto-suave) / <alpha-value>)',
        borda: 'rgb(var(--borda) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}