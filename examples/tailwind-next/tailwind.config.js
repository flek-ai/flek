/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { tailwindConfig, tailwindPlugin } = require("@flek-ui/utils");


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: tailwindConfig(),
  },
  plugins: [plugin(tailwindPlugin)]
}