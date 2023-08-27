/** @type {import('tailwindcss').Config} */
import { humbleScrollTailwindPlugin } from '../src'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [
    humbleScrollTailwindPlugin
  ],
}