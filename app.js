const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamFileHTML = require("./teamFileHTML.js");
const createTeam = []; 

// manager questions and prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
    .then(createManager => {
        const  { name, id, email, officeNumber } = createManager; 
        const manager = new Manager (name, id, email, officeNumber);

        createTeam.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
  

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the role of your employee",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of your employee?", 
    
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter that employee's ID",
           
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter this intern's school",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        createTeam.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(createTeam); 
        } else {
            return createTeam;
        }
    })

};



const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        // error handling
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team has been successfully created")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(createTeam => {
    return teamFileHTML(createTeam);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })