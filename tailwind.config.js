/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      data: {
        checked: 'li~="checked"',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
