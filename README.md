# Flek Tokens Sync Package

Sync tokens from Flek Figma plugin to your codebase in one click. 

## Run an example to quickly get started:
The examples provided in this repository already have these steps performed. So, you can directly run `npm i` and `npm start` in any of them.

## To initialize the project with new design file, follow:
**Step 1**: Make a copy of our [example](https://www.figma.com/file/UuIMVaM1tjDURuJZuurA1G/Design-Tokens-Playground-Demo?node-id=0%3A1&t=UeaKUVx05eWmVulN-1) figma file

**Step 2**: Open our [Figma Plugin](https://www.figma.com/community/plugin/1214690554806269773/Flek---Create-%26-Sync-your-Design-Tokens) inside the file

**Step 3**: Sync tokens - Sync from the plugin to flek backend using cloud sync button at the bottom left

**Step 4**: Copy the file key from profile section of the plugin. You can skip the next step if you have your own codebase*

**Step 5** (optional):  Clone this repo and navigate to an example of your choice

**Step 6**: Install the `flek` cli package by running the following command (You need node & npm for this, refer to the last section for instructions to install)


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



## Install node and npm instructions
You just need node and npm to run this example, following tools make it super simple to install
- If you are on mac or linux
```https://github.com/tj/n```
- If you are windown
```https://github.com/coreybutler/nvm-windows```

## If you are installing on OSX or linux using n follow these instructions
### Third Party Installers
- On macOS with Homebrew you can install the n formula.
`brew install n`
- Or on macOS with MacPorts you can install the n port:
`port install n`
- On Linux and macOS, n-install allows installation directly from GitHub; for instance:
`curl -L https://bit.ly/n-install | bash`

## If you are installing on OSX or linux using n follow these instructions
- Go on the release page for the latest version and install using nvm-setup.exe
`https://github.com/coreybutler/nvm-windows/releases`
- For version 1.1.10
`https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe`
