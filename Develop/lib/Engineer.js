//this pulls in the class Employee, which Engineer inherits data from
const Employee = require("./Employee");

class Engineer extends Employee {
    //the constructor needs all the variables, even the ones that are inherited
    constructor(name, id, email, gitHub) {
        super(name, id, email); //stuff inherited from Employee
        this.github = gitHub; //only Engineers have GitHub
    }
    //functions need to be outside of the constructor
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;