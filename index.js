// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your project title.",
        name: "title",
    },

    {
        type: "input",
        message: "Describe the project.",
        name: "description",
    },

    {
        type: "input",
        message: "How do you install your application?",
        name: "install",
    },

    {
        type: "input",
        message: "How does one use your application?",
        name: "usage",
    },

    {
        type: "input",
        message: "Who are the contributors to this project?",
        name: "contributors",
    },

    {
        type: "input",
        message: "If there are tests, then please enter instructions here.",
        name: "testInstructions",
    },

    {
        type: "list",
        message: "Select a license for your application. If there is none needed then please select 'none'.",
        name: "license",
        choices: ["APM", "AUR license", "Bower", "MIT", "None"],
    },

    {
        type: "input",
        message: "Enter an email where you can be contacted.",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const mkdn = generateMarkdown(data);
    return fs.writeFileSync(fileName, mkdn);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile("README.md", response);
    });
}

// Function call to initialize app
init();