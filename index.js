// TODO: Include packages needed for this application
// const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "githubUsername",
    message: "Please enter your Github username.",
  },
  {
    type: "input",
    name: "emailAdress",
    message: "Please enter your email adress.",
  },
  {
    type: "input",
    name: "projectTitle",
    message: "Please enter your project name.",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please describe your project, the more description the better!",
  },
  {
    type: "list",
    name: "licenseParamter",
    message: "Please select your project license.",
    choices: ["MIT", "Boost1.0", "BSD2", "APACHE2.0", "GPL3.0", "BSD3", "None"],
  },
  {
    type: "input",
    name: "dependenciesPackages",
    message: "Would you like to install any dependencies?",
    default: "npm 1",
  },
  {
    type: "input",
    name: "testingContent",
    message: "Please select what command you would like to use to run a test",
    default: "npm test",
  },
  {
    type: "input",
    name: "usageContent",
    message: "What can you use your project for that should be in the readme?",
  },
  {
    type: "input",
    name: "contributersSection",
    message: "Who all helped for this section?",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("loading... this will only take a minute.");
    writeToFile("./fileDump/README.md", generateMarkdown({ ...answers }));
  });
}
// Function call to initialize app
init();
