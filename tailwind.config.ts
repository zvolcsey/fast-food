import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '128': '8rem',
      }
    },
  },
  plugins: [],
} satisfies Config

