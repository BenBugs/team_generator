// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');
//const jest = require("jest");

// parent class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // this function returns 'name' from inquirer.prompt array
    getName() {
        return this.name = name;
    }

    // this function returns an 'ID' value from inquirer.prompt array
    getId() {
        return this.id = id;
    }

    // this function returns 'email' from inquirer.prompt array
    getEmail() {
        return this.email = email;
    }

    // this function returns 'role' based on the employee type selected
    // by the user at the start of the promt session
    getRole() {
        return 'Employee';
    }

}

module.exports = Employee;

