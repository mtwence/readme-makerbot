// Function to return a license badge based on selection 
function renderLicenseBadge(licenses) {
  if (licenses === '') {
    return '';
   }
   else {return `[![License](https://img.shields.io/badge/License-${licenses}-blue.svg)](http://opensource.org/licenses/${licenses})`;}
 }

// Render license section function 
function renderLicenseSection(licenses) {
  return `This repository is licensed by ${licenses} \n`
}
// Render code prettier
function formatCode(code) {
  return "```ruby \n" + code + "\n``` ";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.licenses)}

## Description
${data.description}

## Table of Contents
[Installation](#installation)\n
[Usage](#usage)\n
[Tests](#tests)\n
[Contributing](#cntributing)\n
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
