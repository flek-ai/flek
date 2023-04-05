const plugin = require("tailwindcss/plugin");
const { tailwindConfig, tailwindPlugin } = require("@flek-ui/utils");

module.exports = {
  "content": [
    "./**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": tailwindConfig(),
  },
  "plugins": [plugin(tailwindPlugin)]
}