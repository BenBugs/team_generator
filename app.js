const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

const teamArr = [];


// selector function to determine which questions to serve
function getType() {
    return inquirer

        .prompt([
            {
                type: 'list',
                choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
                name: 'type',
                message: 'Choose team member',
            },
            {
                type: 'input',
                name: 'name',
                message: 'Team member\'s name?'
            }, 
            {
                type: 'input',
                name: 'ID',
                message: 'ID number?',
            }, {
                type: 'input',
                name: 'email',
                message: 'email address?',
                // TODO validation func here
            }
        ])
};


// asks manager question
function getManager() {
    return inquirer

        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter manager\'s office number?'
            }
        ])
};

// asks Engineer question
function getEngineer() {
    return inquirer

        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Enter engineer\'s github username'
            }
        ])
};

// asks Intern question
function getIntern() {
    return inquirer

        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Enter intern\'s school name'
            }
        ])
};

// want to add another team member?
function toLoopOrNotToLoop() {
    return inquirer

        .prompt([
            {
                type: 'list',
                choices: ['Add another team member', 'Create team chart'],
                name: 'type',
                message: 'What would you like to do?',
            }
        ])
};


// async function calls
async function init() {
    try {
        const questionsObj = await getType();
        //console.log(questionsObj)

        if (questionsObj.type === 'Employee') { 
            let name = questionsObj.name;
            let id = questionsObj.ID;
            let email = questionsObj.email;

        } else if (questionsObj.type === 'Manager') { 
            let getManagerObj = await getManager(); // store function in variable
            let officeNum = getManagerObj.officeNumber; // get value from getManagerObj function
            questionsObj.officeNumber = officeNum; // this adds officeNumber pair to obj
            //console.log({questionsObj}) //console log the new Manager obj
            let name = questionsObj.name;
            let id = questionsObj.ID;
            let email = questionsObj.email;
            let officeNumber = questionsObj.officeNumber; //

            //create the new object
            let newManager = new Manager(name , id , email , officeNumber); //passing arguments to Manager constructor
            console.log(newManager)
            let role = newManager.getRole(); // get role propoerty from Manager class
            newManager.role = role; // this adds officeNumber pair to obj
            teamArr.push(newManager);
            console.log(teamArr)

            
        } else if (questionsObj.type === 'Engineer') { 
            const getEngineerObj = await getEngineer(); // store function in variable
            const github = getEngineerObj.github; // get value from getEngineerObj function
            questionsObj.github_name = github; 

        } else if (questionsObj.type === 'Intern') {
            const getInternObj = await getIntern(); // store function in variable
            const school = getInternObj.school; // get value from getEngineerObj function
            questionsObj.school = school; 

        }

        const runQuestionsAgain = await toLoopOrNotToLoop();
        if (runQuestionsAgain.type === 'Add another team member') {
            init();
        } else if (runQuestionsAgain.type === 'Create team chart') {
            //run generate team chart function
        }


    } catch (err) {
        console.log(err);
    }
}

init()









/* validation script
validate: function (input) {
    // Declare function as asynchronous, and save the done callback
    var done = this.async();

    // Do async stuff
    setTimeout(function() {
      if (typeof input !== 'number') {
        // Pass the return value in the done callback
        done('You need to provide a number');
        return;
      }
    }
}
*/



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