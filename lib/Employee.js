// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
//const jest = require("jest");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName() {
        let name =
        {
            type: 'input',
            name: 'name',
            message: 'Enter full name',
        }
        return inquirer.prompt(name);
    }


    getId() {
        let id =
        {
            type: 'input',
            name: 'id',
            message: 'Enter you I.D.',
        }
        return inquirer.prompt(id);
    }


    getEmail() {
        let email =
        {
            type: 'input',
            name: 'email',
            message: 'Enter you email address',
        }
        return inquirer.prompt(email);
    }


    getRole() {
        let email =
        {
            type: 'input',
            name: 'email',
            message: 'Enter you email address',
        }
        return inquirer.prompt(email);
    }

}

module.exports = Employee;