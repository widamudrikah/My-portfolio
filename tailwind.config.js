/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['tugas/index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#475569',
      },
    },
  },
  plugins: [],
}
