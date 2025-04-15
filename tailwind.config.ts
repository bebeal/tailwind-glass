import type { Config } from 'tailwindcss';
import GlassPlugin from './src/index';

const config: Config = {
  content: ["./demo/**/*.{html,js,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    GlassPlugin,
  ],
};

export default config;
