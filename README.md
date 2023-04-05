# Flek Tokens Sync Package

Sync tokens from Flek figma plugin to your codebase in one click.

![banner](https://s3-alpha-sig.figma.com/plugins/1214690554806269773/51965/41059075/833e5074-dda6-4da2-952c-e49e767ab005-cover?Expires=1681689600&Signature=Svr33~~xKWh64fMeyYQrPIJwV5n5r6-28PRkT8MZv6vTtQrPYvnLicrkfFe1zXCuB0uxYFZJIopGKVkPbPgKWFBA3Og6G-bbBJw24XVjk7KdWlNoKq5cDR46e8-R4nA0wyY2zDxwfVBqP9m62uzVjaEEhXQclahRXK6X7a8j9vVNH0gmW3o07-WV-Sb7gdmWcPdJbivY2a39UX8YUE3i-G3nljfU2-WX8ecLhAy2NE7~XUZ49h94oshoUvQcoVrLj72gOf6Xm35mwRYDBA8EhQVlW-obp2EmspGIWDN2XNWna3IaTda9N0ly7EhazFKh5n9UVrmGEXv3Ora6Sg2sFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)

## Run an example to quickly get started:
The examples provided in this repository already have these steps performed. So, you can directly run `npm i` and `npm start` in any of them.

## To initialize the project with new design file, follow:
**Step 1**: Make a copy of our [example](https://www.figma.com/file/UuIMVaM1tjDURuJZuurA1G/Design-Tokens-Playground-Demo?node-id=0%3A1&t=UeaKUVx05eWmVulN-1) figma file

**Step 2**: Open our [Figma Plugin](https://www.figma.com/community/plugin/1214690554806269773/Flek---Create-%26-Sync-your-Design-Tokens) inside the file

**Step 3**: Sync tokens - Sync from the plugin to flek backend using cloud sync button at the bottom left

**Step 4**: Copy the file key from profile section of the plugin. You can skip the next step if you have your own codebase*

**Step 5** (optional):  Clone this repo and navigate to an example of your choice

**Step 6**: Install the `flek` cli package by running the following command
```sh
npm i -D flek
```

**Step 7**: Map the codebase with the design file. Run the following command and enter the copied figma file key. Please note that this will create a `.flek` directory in your project root. Please don't make any changes to it.

```sh
npx flek init
```

**Step 8**: Flek Sync - Now to sync the design system, run the following command. Whenever you need to update your codebase with the design, please follow this step.
```sh
npx flek sync
```

**Step 9**: Install utils - We support importing tokens to a wide range of styling libraries like **tailwind**. To install utils, run
```sh
npm i @flek-ui/utils
```

**Step 10**: Import tokens according to your styling framework. Guidelines are provided [below](#guidelines-for-using-it-with-your-styling-framework).

**Step 11**: Run your app now! Enjoy seamless design sync from here on!

## Guidelines for using it with your styling framework
### Tailwind
To use it with exising project, you can edit the tailwind.config.js file as shown in the example. Here we import `tailwindConfig` to extend tailwind config and `tailwindPlugin` to add typography component classes.

```js
const plugin = require("tailwindcss/plugin");
const { tailwindConfig, tailwindPlugin } = require("@flek-ui/utils");
// if extend already exists, import
// const _ = require('lodash');

module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    // if no extend already
    extend: tailwindConfig(),
    // if extend already exists, write
    // extend: _.merge({
    //   <your extend object>,
    //   tailwindConfig()
    // }),
  },
  plugins: [plugin(tailwindPlugin)]
}
```
