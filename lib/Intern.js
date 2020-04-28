const employee = require('employee');

class Intern extends Employee {
    constructor(name , id , email , school) {
        super(name , id , email, school)
        this.school = school;
    }

    getSchool() {
        return this.school = school;
    };

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;