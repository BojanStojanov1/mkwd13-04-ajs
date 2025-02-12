console.log("Hey I'm here");

// ES6 Syntax

// Base class: Person
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Using constructor function syntax

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// Employee extends Person
class Employee extends Person {
  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName);
    this.employeeId = employeeId;
  }

  getEmployeeInfo() {
    return `${this.getFullName()} (ID: ${this.employeeId})`;
  }
}

// Employee implementation using constructor function syntax:
// function Employee(firstName, lastName, employeeId) {
//   Person.call(this, firstName, lastName);
//   this.employeeId = employeeId;
// }

// // Set up inheritance chain
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.getEmployeeInfo = function () {
//   return `${this.getFullName()} (ID: ${this.employeeId})`;
// };

// Developer extends Employee
class Developer extends Employee {
  constructor(firstName, lastName, employeeId, programmingLanguage) {
    super(firstName, lastName, employeeId);
    this.programmingLanguage = programmingLanguage;
  }

  code() {
    console.log(
      `${this.getFullName()} is coding in ${this.programmingLanguage}`
    );
  }
}

// Manager extends Employee
// Represents a manager who can oversee a team of developers
class Manager extends Employee {
  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName, employeeId);
    this.team = [];
  }

  // Adds a developer to the manager's team
  // check type safety
  addTeamMember(employee) {
    if (employee instanceof Developer) {
      this.team.push(employee);
      console.log(
        `${employee.getFullName()} added to ${this.getFullName()}'s team`
      );
    } else {
      console.log(
        `Error: ${employee.getFullName()} is not a Developer and cannot be added to the team.`
      );
    }
  }
}

// Creating instances
const john = new Developer("John", "Doe", 101, "JavaScript");
const jane = new Developer("Jane", "Smith", 102, "Python");
const mark = new Manager("Mark", "Johnson", 201);
const lucy = new Employee("Lucy", "Adams", 103);

john.code(); // Works because John is developer
jane.code(); // Works because Jane is developer
// lucy.code(); It throws an error because Lucy is just an Employee

// Adding team members to Mark
mark.addTeamMember(john);
mark.addTeamMember(jane);
mark.addTeamMember(lucy);

// Instanceof checks
console.log(john instanceof Developer); // true
console.log(john instanceof Employee); // true (inheritance chain)
console.log(john instanceof Person); // true
console.log(mark instanceof Developer); // Manager doesnt inerit anything from the Developer class
console.log(mark instanceof Manager); // true
console.log(lucy instanceof Developer); // false
