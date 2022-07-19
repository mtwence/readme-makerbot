// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: "username",
        message: "Enter your GitHub username.",
    },
    {
        type: 'input',
        name: "email",
        message: "Enter your professional email address."
    },
    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: "description",
        message: "Enter a brief deescription of your project.",
    },
    {
        type: 'input',
        name: "installation",
        message: "Enter installation instructions for your project.",
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
        message: "Enter guidelines for contribting to this repository.",
    },
    {
        type: 'input',
        name: "tests",
        message: "Enter instructions for running test scripts",
        default: "npm run test"
    },
    {
        type: "list",
        name: "licenses",
        message: "Select a license from the list.",
        choices: ["MIT", "BSD-3-Clause", "Apache-2.0",]
    },

];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Hooray!")
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        const data = generateMarkdown(answers)
        writeToFile('README.md', data);
    })
}

// Function call to initialize app
init();
