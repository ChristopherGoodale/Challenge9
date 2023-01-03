// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "What is your email?",
    name: "github"},];   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt( questions)
    .then(response => {
        writeToFile("README_TODO1.md", response)
    })
}

// Function call to initialize app
init();
