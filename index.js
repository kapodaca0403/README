// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//inquirer.prompt(questions);
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Project name?",
    name: "title",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this used for?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project use?",
    choices: ["None", "MIT", "BSD", "GPL"], //list name of other licenses]
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for deoendencies?",
    default: "Npi I",
  },
  {
    type: "input",
    name: "contribution",
    message: "How does a user contribute to this project",
    default:
      "We believe code is never finished, and welcome your contributions to enhance the application's functionality. Please adhere to the Code of Conduct for the Contributor Covenant, version 2.0, at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.",
  },
  {
    type: "input",
    name: "test",
    message: "How to run test?",
    default: "npm run test",
  },
];
// what will inqurier return? a promise object so we use a .then
//inquirer.prompt(questions).then((data) => {

//});

// TODO: Create a function to write README file
function writeToFile(readmeFile, data) {
  return fs.writeFileSync(path.join(process.cwd(), readmeFile), data); // giving file name and what to put in that file
}

// TODO: Create a function to initialize app

//try to get to point that data comes back for the readme file . and then trying to markdown function to call slowly gathering the informawtion for the readme

function init() {
  //presents the user with questions
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data), (err) =>
      // try with spread operator
      err ? console.log(err) : console.log("File was written")
    );
  });
}

// Function call to initialize app
init();
