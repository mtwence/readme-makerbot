// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMrkDwn = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "username",
        message: "Enter your GitHub username",
    },
    {
        type: 'input',
        name: "email",
        message: "Enter your professional email address"
    },
    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: "description",
        message: "Enter a brief deescription of your project",
    },
    {
        type: 'input',
        name: "installation",
        message: "Enter installation instructions for your project",
        default: "npm init",
    },
    {
        type: 'input',
        name: "usage",
        message: "Enter a synpopsis of how to use this repository."
    },
    {
        type: 'input',
        name: "contributions",
        message: "Enter guidelines for contribting to this repository",
    },
    {
        type: 'input',
        name: "testing",
        message: "Enter instructions for running test scripts",
        default: "npm run test"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license from the list",
        choices: ["MIT", "BSD 3", "Apache 2.0",]
    },

];