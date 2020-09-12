//this pulls in the class Employee, which Engineer inherits data from
const Employee = require("./Employee");

class Intern extends Employee {
    //the constructor needs all the variables, even the ones that are inherited
    constructor(name, id, email, school) {
        super(name, id, email); //stuff inherited from Employee
        this.school = school; //only interns have a school
    }
    //functions need to be outside of the constructor
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;