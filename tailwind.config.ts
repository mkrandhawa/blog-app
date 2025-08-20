import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography' // <-- 1. Import the plugin here

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography, // <-- 2. Use the imported variable here
  ],
}
export default config