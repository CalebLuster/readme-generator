// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-red.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `### License 
      Licensed under ${license}.
      Copyright ${license}. All rights reserved.
      `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}


    ${renderLicenseBadge(data.license)}


    # GitHub Link


    [${data.githubUsername}](https://github.com/${data.githubUsername}/)


    # Project Description


    ${data.projectDescription}


    # Table of Contents


    * [Uses](#usage)


    * [Installations](#dependencies)


    ${renderLicenseLink(data.license)}


    * [Test](#test)


    # Dependencies


    To make sure you are able to run this application please download the dependencies with the following command;

    ===============================================
    ${data.dependencies}
    ===============================================

    # Uses


    ${data.usage}



    ${renderLicenseSection(data.license)}


    # Email


    You can reach me at: ${data.emailAdress}



    # Testing


    For tests, use the following command;

    ========================================
    ${data.test}
    ========================================
    
`;
}

module.exports = generateMarkdown;
