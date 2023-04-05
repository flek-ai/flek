# Flek Tokens Sync Package

Sync tokens from Flek figma plugin to your codebase in one click.

![banner](https://s3-alpha-sig.figma.com/plugins/1214690554806269773/51965/41059075/833e5074-dda6-4da2-952c-e49e767ab005-cover?Expires=1681689600&Signature=Svr33~~xKWh64fMeyYQrPIJwV5n5r6-28PRkT8MZv6vTtQrPYvnLicrkfFe1zXCuB0uxYFZJIopGKVkPbPgKWFBA3Og6G-bbBJw24XVjk7KdWlNoKq5cDR46e8-R4nA0wyY2zDxwfVBqP9m62uzVjaEEhXQclahRXK6X7a8j9vVNH0gmW3o07-WV-Sb7gdmWcPdJbivY2a39UX8YUE3i-G3nljfU2-WX8ecLhAy2NE7~XUZ49h94oshoUvQcoVrLj72gOf6Xm35mwRYDBA8EhQVlW-obp2EmspGIWDN2XNWna3IaTda9N0ly7EhazFKh5n9UVrmGEXv3Ora6Sg2sFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)

## Run an example to quickly get started:
* *The examples already have these steps performes, you can directly run `npm i` and `npm start` in any of them.*
## To initialize the project with new design file, follow:
**Copy file:** Make a copy of [this](https://www.figma.com/file/I8Wd8VeqlBpij2cDWpM5iv/Exhaustive?node-id=66-1710&t=8kep5YqDNYOXvbxE-0) figma file:

**Open plugin:** Open our [Figma Plugin](https://www.figma.com/community/plugin/1214690554806269773/Flek---Create-%26-Sync-your-Design-Tokens) inside the file

**Sync tokens:** Sync from the plugin to flek backend using cloud sync button at the bottom left

**File key:** Copy the file key from profile section of the plugin

*You can skip the next step if you have your own codebase*

**Get Code:**  Clone this repo and navigate to an example of your choice

**Install cli:** To install the flek cli package, run
```sh
npm i -D flek
```
**Initialize Flek:** To initialize the project with design file, run and enter the copied figma file key

```sh
npx flek init
```
Note: This will create a .flek directory in your project root, don't make changes to it

**Flek Sync:** Now to sync the design system, run
```sh
npx flek sync
```
Note: This cycle can be repeated to maintain seamless design-code tokens sync

**Install utils:** We support importing tokens to a wide range of styling libraries like **tailwind**. To install utils, run
```sh
npm i @flek-ui/utils
```

### Tailwind:
To Edit: tailwind.config.js

Imports: `tailwindConfig` to extend tailwind config, `tailwindPlugin` to add typography component classes 
```js
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
```

**Run the example:** to run the example,
```
npm start
```
