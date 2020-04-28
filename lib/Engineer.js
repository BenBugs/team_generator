const employee = require("Employee.js");

class Engineer extends Employee {
    constructor(name , id , email) {
        super(name , id , email , github_username)
        this.github_username = github_username;
      }

      // returns a 'github ID' value from inquirer.prompt array
      getGithub() {

      };

      getRole() {
        return 'Employee';
    }

}

module.exports = Engineer;