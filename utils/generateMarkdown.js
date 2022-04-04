// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  } 
  else if(license == 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }

  else if(license == 'Mozilla Publice License 2.0' ) {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'

  }
  else {
    return ''
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT License'){
    return 'https://opensource.org/licenses/MIT'

  } 
  else if(license == 'Apache License 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  }

  else if(license == 'Mozilla Publice License 2.0' ) {
    return 'https://www.mozilla.org/en-US/MPL/2.0/'

  }
  else {
    return ''
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT License'){
    return 'This project is covered under the MIT License'

  } 
  else if(license == 'Apache License 2.0') {
    return 'This project is covered under the Apache 2.0 License'
  }

  else if(license == 'Mozilla Publice License 2.0' ) {
    return 'This project is covered under the Mozilla 2.0 License'

  }
  else {
    return ''
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let licenseBadge = renderLicenseBadge(answers.license); 
  let licenseText = renderLicenseSection(answers.license);
  let licenseLink = renderLicenseLink(answers.license)
  return `
  # ${answers.projectTitle}
  ${licenseBadge}
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation 
  ${answers.installation}
  
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${licenseText}
  ${licenseLink}
  
  ## Contribution
  ${answers.contribution}
  The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard that we follow. 
  
  ## Tests
  ${answers.test}
  
  ## Questions
  Email: ${answers.email}
  
  Github: https://github.com/${answers.userName} `;
}

module.exports = generateMarkdown;
