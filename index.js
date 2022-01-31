// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const fs =require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input, 'Table of contents in generateMarkdown.js'
const questions = [
{
  type: 'input',
  name: 'title',
  message: '1. What is the title of the repository? (Required)',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter your repository title to continue!');
      return false;
    }
  }
},

{ 
  type: 'input',
  name: 'description',
  message: '2. What is the description of your repository? (Required)',
  validate: descriptionInput => {
    if (descriptionInput) {
      return true;
    } else {
      console.log('Please enter a description of your repository to continue!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'installation',
  message: '3. How do you install the project (Required)?',
  validate: installationInput => {
    if (installationInput) {
      return true;
    } else {
      console.log('Please enter your installation Info to continue!');
      return false;
    }
  }
},

{ 
  type: 'input',
  name: 'usage',
  message: '4. How do you use the project? (Required)',
  validate: usageInput => {
    if (usageInput) {
        return true;
    } else {
        console.log('Please provide Info on how to use project!');
        return false;
    }
  }
},

{
  type: 'confirm',
  name: 'confirmContribution',
  message: '5. May other developers contribute to your repository?'
},
{
  type: 'input',
  name: 'contribution',
  message: '6. How should other developers contribute to this project? (Required)',
  when: ({confirmContribution}) => {
    if (confirmContribution) {
      return true;
    } else {
      return false;
    }
  }
},

{
  type: 'confirm',
  name: 'confirmTesting',
  message: '7. Is testing available for this project?'
},
{
  type: 'input',
  name: 'testing',
  message: '8. Please explain how users test to the application. (Required)',
  when: ({confirmTesting}) => {
    if (confirmTesting) {
      return true;
    } else {
      return false;
    }
  }
},

//License Choice
{ 
  type: 'checkbox',
  name: 'license',
  message: '9. Please choose a license for your project (Required).',
  choices: ['Apache', 'MIT', 'Boost Software','The Unlicense','GNU AGPLv3', 'GNU GPLv3','GNU LGPLv3', 'Mozilla Public License 2.0',],
  validate: licenseInput => {
    if (licenseInput) {
      return true;
    } else {
      console.log('Please select a license for the project!');
      return false;
    }
  }
},

//Github Username
{
  type: 'input',
  name: 'username',
  message: '10. What is your GitHub username? (Required)',
  validate: usernameInput => {
    if (usernameInput) {
      return true;
    } else {
      console.log('Please enter your GitHub username!');
      return false;
    }
  }
},

//Email Address
{
  type: 'input',
  name: 'email',
  message: '11. What is your email address? (Required)',
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log('Please enter your email address!');
      return false;
    }
  }
}]; 
//End Questions 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error)
        throw error;
      console.log('Succeed! Info has been transferred to the README.')
      });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();