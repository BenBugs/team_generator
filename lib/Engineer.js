const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name , id , email , github) {
        super(name , id , email)
        this.github = github;
      }

      // returns a 'github ID' value from inquirer.prompt array
      getGithub() {
        return this.github;
      };

      getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;