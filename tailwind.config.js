/** @type {import('tailwindcss').Config} */
import pluginTw from 'tw-elements-react/dist/plugin.cjs'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
plugins: [pluginTw]
}

