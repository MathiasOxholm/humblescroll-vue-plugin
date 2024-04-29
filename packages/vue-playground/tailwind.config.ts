import type { Config } from 'tailwindcss'
import { humbleScrollTailwindPlugin } from 'humblescroll-vue'

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
} as Config;