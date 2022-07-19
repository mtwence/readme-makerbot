// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  switch(licenses) {
    case "MIT":
      return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "APACHE 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    default:
      return "";
  }  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  return `This repository is licensed by ${licenses} \n`
}

// TODO: Create a function to generate markdown for README
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
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contributing
${data.contributing}

## Questions
#### Contact me at: \n
Email: [${data.email}] \n
GitHub: [${data.github}](https://github.com/${data.username})

## License
${renderLicenseSection(data.license)}
`;
}


module.exports = generateMarkdown;
