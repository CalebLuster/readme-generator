// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseParamter) {
  if (licenseParamter !== "None") {
    return `[license](https://img.shields.io/badge/license-${licenseParamter}-red.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseParamter) {
  if (licenseParamter !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseParamter) {
  if (licenseParamter !== "None") {
    return `### License 
      Licensed under ${licenseParamter}.
      Copyright ${licenseParamter}. All rights reserved.
      `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}


   ${renderLicenseBadge(data.licenseParamter)}


   # GitHub Link


   * [${data.githubUsername}](https://github.com/${data.githubUsername}/)


   # Project Description


   ${data.projectDescription}


   # Table of Contents


   * [Uses](#usageContent)


   * [Installations](#dependenciesPackages)


   ${renderLicenseLink(data.licenseParamter)}


    * [Test](#testingContent)


    # Dependencies


    To make sure you are able to run this application please download the dependencies with the following command;

    
    ${data.dependenciesPackages}
    

    # Uses


    ${data.usageContent}



    ${renderLicenseSection(data.licenseParamter)}


    ## The Great Person/People Behind this project!

    ${data.contributersSection}


    # Questions or Concerns


    You can reach me at: ${data.emailAdress}



    # Testing


    For tests, use the following command;

    
    ${data.testingContent}
    

    
`;
}

module.exports = generateMarkdown;
