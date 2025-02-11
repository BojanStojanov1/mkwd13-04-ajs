// INHERITANCE
function Person(id, first, last, age) {
  this.id = id;
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

function Employee(id, first, last, age, division) {
  Object.setPrototypeOf(this, new Person(id, first, last, age));
  this.division = division;
  this.work = function () {
    console.log(
      `The person ${this.firstName} ${this.lastName} works in ${this.division} division.`
    );
  };
}

let person = new Person(2, "John", "Doe", 25);
let employee1 = new Employee(1, "Ivan", "Ivanovski", 30, "Finance");
let employee2 = new Employee(1, "Ivana", "Ivanovska", 30, "IT");

// INHERITANCE LEVEL 2
function Manager(id, first, last, age, division, team) {
  Object.setPrototypeOf(this, new Employee(id, first, last, age, division));
  this.team = team;
  this.assignTask = function (task) {
    console.log(
      `The manager ${this.firstName} assigned the following task ${task} to the team ${this.team}`
    );
  };
}

let manager = new Manager(6, "Dejan", "Dejanovski", 40, "development", "G3");
console.log(manager);
