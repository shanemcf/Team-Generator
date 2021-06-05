const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generatedHtmlFilePath = "./TeamFile.html"

const questions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Enter team manager name',
    },
   
    {
        type: 'list',
        name: 'license',
        message: 'what kind of license is your application covered under?',
        choices: ['MIT', 'Apache', 'GPL']

    },
];

// function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.info('Answers:', answers);
            const dataToReadme = generateMarkdown(answers);
            writeToFile('generatedHtmlFilePath', dataToReadme);
        });
}

// function call to initialize program
init();