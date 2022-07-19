# ReadMe Makerbot

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [User Information](#user-information)
- [Credits](#credits)
- [License](#license)

## Description
A command line based interface using Node that allows you to create a professional ReadMe file based on users' answers to a series of prompts. 

## Technologies Used

- Javascript
- Node.js
- Inquirer.js

## Usage

### Website Demo
[Video Walkthrough](https://drive.google.com/file/d/1Q5NWkKlgh-NzGo59QxAKml9gfZ2vfeS3/view)

### Prompts & Answers
![Prompts](./assets/images/node_prompts.png)

### Result
[Sample ReadMe](./assets/sample_README.md)

### Code Snippets
An array of objects that represent a question prompt.
```ruby
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
        name: "contributing",
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
```
Functions that actually create the README file itself & one that initiates the application to create one, respectively 
```ruby
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}_README.md`, data, (err) => {
        err ? console.error(err) : console.log("Hooray!")
    })
}

function init() {
    inquirer.prompt(questions).then(function (answers) {
        const data = generateMarkdown(answers)
        writeToFile("sample", data);
    })
}
```

Finally this function is what creates the contents of the ReadMe file.
```ruby
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.licenses)}

## Description
${data.description}

## Table of Contents
[Installation](#installation)\n
[Usage](#usage)\n
[Tests](#tests)\n
[Contributing](#contributing)\n
[Questions](#questions)\n
[License](#license)\n

## Installation
To install the required dependencies run the code below: \n
${formatCode(data.installation)}

## Usage
${data.usage}

## Tests
To run unit tests for this reposity run the code below: \n
${formatCode(data.tests)}

## Contributing
${data.contributing}

## Questions
### Contact me at: 
Email: ${data.email} \n
GitHub: [${data.username}](https://github.com/${data.username})

## License
${renderLicenseSection(data.licenses)}
`;
}


module.exports = generateMarkdown;
```

## User Information

### **Michael Wence**
[LinkedIn](https://www.linkedin.com/in/michael-wence/) |
[GitHub](https://github.com/mtwence)

## Credits

UCB - Coding Bootcamp


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

© 2022 Michael Wence. All Rights Reserved.