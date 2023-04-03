# Flek Token Sync Package

Sync tokens from Flek figma token studio to your codebase in one click.

## Run an example to quickly get started:

* Make a copy of [this](https://www.figma.com/file/I8Wd8VeqlBpij2cDWpM5iv/Exhaustive?node-id=66-1710&t=8kep5YqDNYOXvbxE-0) file:

* Open our [Figma Plugin](https://www.figma.com/community/plugin/1214690554806269773/Flek---Create-%26-Sync-your-Design-Tokens) inside that file

* Sync from the plugin to flek backend using sync button at the bottom left
* Copy the file key from profile section of the plugin

* Clone this repo and navigate to an example of your choice
* To install the required packages, run
```
npm i
```
* To initialize the project with newly created design file, run
```
npx flek init
```
* Enter the Copied file key, framework, and associated paths for the specific framework.
* Now sync the design system, run
```
npx flek sync
```

> Below is the workflow to initialize and sync flek.
![tailwind-cli](https://github.com/flek-ai/flek/blob/master/images/tailwind-cli.png?raw=true)

* * Note: For changes in tokens in a figma file, sync tokens to flek and pull from npm package using npx flek sync
* * Note: npx flek init can be run multiple times to initialize using a different figma file

### For further details on config file structure specific to the framework follow:

* [Tailwind(CRA) Example](examples/tailwind-cra)
* Mantine
* CSS
