#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

const SERVER_URL = 'http://localhost:3001';

const questions = [
  {
    type: 'input',
    name: 'key',
    message: "What's your figma file key?",
  },
  {
    type: 'list',
    name: 'framework',
    message: 'What framework do you want tokens exported in?',
    choices: ['Tailwind', 'CSS', 'Mantine'],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

const tailwind_questions = [
  {
    type: 'input',
    name: 'csspath',
    message: "What's the path to your css file?",
  },
  {
    type: 'input',
    name: 'configpath',
    message: "What's the path to your tailwind config file?",
  },
];

program
  .name('flek')
  .description('Flek Design Token Sync')
  .version('1.0.0');

program.command('init')
.description('Initialize the project by selecting framework and filekey')
.action((str, options) => {
  console.log('Hi, welcome to ⬢ Flek Token Sync');
  inquirer.prompt(questions).then((answers) => {
    if (answers.framework === 'tailwind') {
      inquirer.prompt(tailwind_questions).then((tailwind_answers) => {
        answers = { ...answers, ...tailwind_answers };
        fs.writeFile('./flek.json', JSON.stringify(answers, null, '  '), function(err) {
          if (err) console.log(err);
          else console.log('Initialized!!!');
        });
      });
    }
  });
});

program.command('sync')
.description('Sync the tokens from figma file to the code')
.action((str, options) => {
  // console.log('Hi, welcome to ⬢ Flek Token Sync');
  fs.readFile('./flek.json', 'utf8', function(err, data){
    if (err) console.log(err);
    else {
      const configuration = JSON.parse(data);
      axios.get(`${SERVER_URL}/user/config?` + new URLSearchParams({
        key: configuration.key,
        framework: configuration.framework,
      }))
      .then(res => {
        if (configuration.framework === 'tailwind') {
          const { csspath, configpath } = configuration;
          const { css, config } = res.data;

          fs.writeFile(csspath, css, function(err) {
            if (err) console.log(err);
            else console.log('Tailwind CSS file updated!');
          });
          fs.writeFile(configpath, config, function(err) {
            if (err) console.log(err);
            else console.log('Tailwind Config file updated!');
          });
        }
      })
      .catch(err => console.log(err));
    };
  });
});

program.parse();
