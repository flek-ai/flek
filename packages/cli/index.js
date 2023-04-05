#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

const SERVER_URL = 'https://flek.ai/api';

const questions = [
  {
    type: 'input',
    name: 'key',
    message: "What's your figma file key?",
  },
];

program
  .name('flek')
  .description('Flek Design Token Sync')
  .version('1.0.5');

program.command('init')
.description('Initialize the project by selecting framework and filekey')
.action((str, options) => {
  console.log('Hi, welcome to ⬢ Flek Token Sync');
  inquirer.prompt(questions).then((answers) => {
    if (!fs.existsSync('.flek')) fs.mkdirSync('.flek');
    fs.writeFile('.flek/config.json', JSON.stringify(answers, null, '  '), function(err) {
      if (err) console.log(err);
      else console.log('Initialized!!!');
    });
  });
});

program.command('sync')
.description('Sync the tokens from figma file to the code')
.action((str, options) => {
  if (!fs.existsSync('.flek/config.json')) {
    console.log('No flek project found! Run `npx flek init` to initialize the project');
    return;
  }
  fs.readFile('.flek/config.json', 'utf8', function(err, data){
    if (err) console.log(err);
    else {
      const configuration = JSON.parse(data);
      axios.get(`${SERVER_URL}/user/config?` + new URLSearchParams({
        key: configuration.key,
      }))
      .then(res => {
        fs.writeFile('.flek/tokens.json', JSON.stringify(res.data, null, '  '), function(err) {
          if (err) console.log(err);
          else console.log('Tokens Synced!!!');
        });
      })
      .catch(err => {
        if (err.response && err.response.status === 404) {
          console.log('No Design System with given File Key found!\n');
          return;
        }
        throw err;
      });
    };
  });
});

program.parse();
