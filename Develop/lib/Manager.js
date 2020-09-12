//this pulls in the class Employee, which Engineer inherits data from
const Employee = require("./Employee");

class Manager extends Employee {
    //the constructor needs all the variables, even the ones that are inherited
    constructor(name, id, email, officeNumber) {
        super(name, id, email); //stuff inherited from Employee
        this.officeNumber = officeNumber; //only the manager has an office
    }
    //functions need to be outside of the constructor
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;