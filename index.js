const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide a brief description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please provide installation instructions for your project:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please provide usage information for your project:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please provide contribution guidelines for your project:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Please provide test instructions for your project:',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Please choose a license for your project:',
    name: 'license',
    choices: [
      'MIT',
      'Apache',
      'GPL',
      'BSD',
    ],
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
For additional questions, please contact [${answers.username}](https://github.com/${answers.username}) via email at ${answers.email}.
`;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md file has been created!')
  );
}

function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readme = generateREADME(answers);
      writeToFile('README.md', readme);
    })
    .catch((error) => {
      console.log(error);
    });
}

init();
