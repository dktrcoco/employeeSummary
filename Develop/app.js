const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");
const team = []; //array that will hold the objects created from the prompts
createManager();

function createManager() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "manager",
                message: "What is your manager's name?"
            },
            {
                type: "input",
                name: "managerID",
                message: "What is your manager's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is your manager's office number?"
            },
        ]).then(answers => {
            //creating new instance of manager class, passing in params from prompts
            const manager = new Manager(answers.manager, answers.managerID, answers.managerEmail, answers.managerOffice);
            
            //object you create is added to array
            team.push(manager);
            createTeam();
        })
}

function createTeam() {
    return inquirer
        .prompt([
            {
                type: "list",
                message: "Do you want to add another teammate?",
                name: "choice",
                choices: ["Intern", "Engineer", "I'm done"]
            }
        ]).then(answers => {
            //if or switch statement depending on input
            switch (answers.choice) {
                case "Intern":
                    createIntern();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                default:
                    buildTeam();
            }
        })
}

function createIntern() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of the Intern?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is your Intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your Intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is your Intern's school?"
        }
    ]).then(answers => {
        //creating new instance of intern class, passing in params from prompts
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        
        //object you create is added to array
        team.push(intern);
        createTeam();
    })
}

function createEngineer() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the Engineer?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is your Engineer's id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your Engineer's email?"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is your Engineer's GitHub username?"
        }
    ]).then(answers => {
        //creating new instance of intern class, passing in params from prompts
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        
        //object you create is added to array
        team.push(engineer);
        createTeam();
    })
}

function buildTeam() {
    fs.writeFileSync(outputPath, render(team));
}


//calling render function
//inside the parentheses goes an array that contains all employee objects
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
