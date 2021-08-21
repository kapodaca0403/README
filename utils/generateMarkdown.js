// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  //how to return license link, where it returns the actual link of the license

  if (license !== "None") {
    return `![license badge](https://img.shields.io/badge/License-${license}-lightgrey.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* License 
    `;
    // creating my markdwon with template strings , to force out particular string
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 
    This project is licensed under the ${license}license. 
    `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // how can you call function to actual call template string
  //generating markodwn, go back to questions array for the name of object
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  
  ## Table of Contents:
  ${renderLicenseLink(data.license)}
  * [Description](#description)
  * [Installation](#installation)
  * [Test](#test)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Questions](#questions)
  
${renderLicenseSection(data.license)}
  
## Description 
  ${data.description}

## Tests
${data.tests}

## Usage 
${data.usage}

## Contribution
${data.contribution}

## Questions
If you have any questions please contact me at ${
    data.email
  } You can find more of my projects at [${data.github}](https://github.com/${
    data.github
  })

## Installation 
${data.installation}

`;
}

module.exports = generateMarkdown;
