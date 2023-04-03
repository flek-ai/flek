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
  .version('1.0.4');

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

          const tailwind = {
            content: [
              "./**/*.{js,jsx,ts,tsx}"
            ],
            theme: {
              extend: config,
            },
            plugins: []
          };

          // const tokens = ['colors', 'spacing', 'borderRadius', 'borderWidth', 'boxShadow'];
          // tokens.forEach((token) => {
          //   if (prev_config.theme[token]) {
          //     prev_config.theme[token] = {
          //       ...prev_config.theme[token],
          //       ...config[token],
          //     };
          //   } else if (prev_config.theme.extend[token]) {
          //     prev_config.theme.extend[token] = {
          //       ...prev_config.theme.extend[token],
          //       ...config[token],
          //     };
          //   } else prev_config.theme.extend[token] = config[token];
          // });

          fs.writeFile(csspath, css, function(err) {
            if (err) console.log(err);
            else console.log('Tailwind CSS file updated!');
          });
          fs.writeFile(configpath, `module.exports = ${JSON.stringify(tailwind, null, 2)}`, function(err) {
            if (err) console.log(err);
            else console.log('Tailwind Config file updated!');
          });
          // const regex = /module.exports = {[\s\S]*}/gm;
          // fs.readFile(configpath, 'utf8', function(err, data) {
          //   if (err) return console.log(err);
          //   const result = data.replace(regex, `module.exports = ${JSON.stringify(prev_config, null, 2)}`);
          //   fs.writeFile(configpath, result, 'utf8', function(err) {
          //     if (err) console.log(err);
          //     else console.log('Tailwind Config file updated!');
          //   });
          // });
        }
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
