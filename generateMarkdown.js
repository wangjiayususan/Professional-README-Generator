// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else {
    return renderLicenseLink(license);
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "Boost":
      return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    case "The Unlicense":
      return "https://img.shields.io/badge/license-Unlicense-blue.svg";
    case "GNU AGPLv3":
      return "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
    case "GNU GPLv3":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "Mozilla":
      return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return renderLicenseBadge(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  
  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Visual Presentation](#Demo)
  * [License](#license)
  * [Badges](#badges)
  * [Testing](#testing)
  * [Additional-Information](#Additional-Information)
  
  ## Description 

  ${data.description}

  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Contribution
  
  ${data.contribution}

  ## Visual Presentation
  
  ## License
  
  This project is licensed under the ${data.license}
  
  ## Badges
  
  ${renderLicenseSection(data.license)}

  ## Additional-Information
  
  * For any more questions, reach me at [Github](https://github.com/${data.username})
  * For any more questions, reach me at ${data.email}
  
  ## Contributing
  
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

  ## Tests
  
  ${data.testing}
`;
}

module.exports = generateMarkdown;