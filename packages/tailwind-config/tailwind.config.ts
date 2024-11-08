import type { Config } from 'tailwindcss/types/config';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} as Omit<Config, 'content'>;
