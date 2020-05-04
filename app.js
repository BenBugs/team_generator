const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// writeFile conditions stored in variables
//1. if no directory exists and no file exist then create folder and save file called team_sheet.html
// const noDirectoryNoFile = directoryPath !== true && filePath !== true;
//2. if directory exists then check for a file called teamsheets.html. If not present, save a new file called team sheets...
// const directoryNoFile = directoryPath === true && filePath !== true;
//3. if present then check to see if the file has numbers, ParseInt(). then add 1 to the file name and save  
// const directoryAndFile = directoryPath === true && filePath === true;


//store team object array here
const teamArr = [];

// selector function to determine which questions to serve
function getType() {
    return inquirer

        .prompt([
            {
                type: 'list',
                choices: ['Manager', 'Engineer', 'Intern'],
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
            },
            {
                type: 'input',
                name: 'email',
                message: 'email address?',
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

        // CREATE NEW EMPLOYEE OBJECT
        if (questionsObj.type === 'Employee') {
            let name = questionsObj.name;
            let id = questionsObj.ID;
            let email = questionsObj.email;
            //create the new object
            let newEmployee = new Employee(name, id, email); //passing arguments to Manager constructor

            let role = newEmployee.getRole(); // get role propoerty from Manager class
            newEmployee.role = role; // this adds officeNumber pair to obj
            teamArr.push(newEmployee);
            console.log(teamArr)

            // CREATE NEW MANAGER OBJECT
        } else if (questionsObj.type === 'Manager') {
            const getManagerObj = await getManager(); // store function in variable
            let getOfficeNum = getManagerObj.officeNumber; // get value from getEngineerObj function
            questionsObj.officeNumber = getOfficeNum; // this adds officeNumber pair to obj
            //console.log({questionsObj}) //console log the new Manager obj
            let name = questionsObj.name;
            let id = questionsObj.ID;
            let email = questionsObj.email;
            let officeNumber = questionsObj.officeNumber; //

            //create the new object
            let newManager = new Manager(name, id, email, officeNumber); //passing arguments to Manager constructor
            //console.log(newManager)
            let role = newManager.getRole(); // get role propoerty from Manager class
            newManager.role = role; // this adds officeNumber pair to obj
            teamArr.push(newManager);
            console.log(teamArr)


        } else if (questionsObj.type === 'Engineer') {
            const getEngineerObj = await getEngineer(); // store function in variable
            let getUsername = getEngineerObj.github; // get value from getEngineerObj function
            questionsObj.github_username = getUsername; // this adds username pair to obj
            let name = questionsObj.name;
            let id = questionsObj.ID;
            let email = questionsObj.email;
            let github = questionsObj.github_username; //

            //create the new object
            let newEngineer = new Engineer(name, id, email, github); //passing arguments to Manager constructor
            let role = newEngineer.getRole(); // get role propoerty from Manager class
            newEngineer.role = role; // this adds officeNumber pair to obj
            teamArr.push(newEngineer);
            console.log(teamArr)


        } else if (questionsObj.type === 'Intern') {
            const getInternObj = await getIntern(); // store function in variable
            let getSchool = getInternObj.school; // get value from getEngineerObj function
            questionsObj.school_name = getSchool; // this adds username pair to obj
            let name = questionsObj.name;
            let id = questionsObj.ID;
            let email = questionsObj.email;
            let school = questionsObj.school_name; //

            //create the new object
            let newIntern = new Intern(name, id, email, school); //passing arguments to Manager constructor
            let role = newIntern.getRole(); // get role propoerty from Manager class
            newIntern.role = role; // this adds officeNumber pair to obj
            teamArr.push(newIntern);

        }

        const runQuestionsAgain = await toLoopOrNotToLoop();
        if (runQuestionsAgain.type === 'Add another team member') {
            init();
        } else if (runQuestionsAgain.type === 'Create team chart') {

            try {

                let html = render(teamArr);
                console.log(html)



                function renderHTML(data) {
                    fs.writeFile(outputPath, data, (err) => {
                        if (err) throw err;
                        console.log('Your team file has been saved!');
                    })
                }
                renderHTML(html);

            }
            catch (error) {
                console.error(error);
            }


        }


    } catch (err) {
        console.log(err);
    }
}

init();

