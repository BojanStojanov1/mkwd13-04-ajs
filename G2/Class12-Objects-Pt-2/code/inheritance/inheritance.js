console.log("================== INHERITANCE EXAMPLES ==================");

function Employee(firstName, lastName, age, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
    this.printInfo = function () {
        console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    }
}

function Developer(firstName, lastName, age, salary, programmingLanguages) {
    // Set Developer's prototype to an instance of Employee (establishes inheritance)
    Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.age = age;
    // this.salary = salary;
    // this.printInfo = function () {
    //     console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    // }
    this.programmingLanguages = programmingLanguages ?? [];
    this.code = function () {
        console.log(`${this.firstName} is doing magic :D`);
    }
}

function Manager(firstName, lastName, age, salary, team) {
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.age = age;
    // this.salary = salary;
    // this.printInfo = function () {
    //     console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    // }
    Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
    this.team = team;
    this.organiseMeeting = function () {
        console.log(`The Manager ${this.firstName} is organising meeting for the ${this.team} team.`);
    }
}

function Tester(firstName, lastName, age, salary, bugsFound) {
    // Another way to set prototype of an object
    Employee.call(this, firstName, lastName, age, salary)
    // Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
    this.bugsFound = bugsFound;
    this.testSoftware = function () {
        console.log(`${this.firstName} is testing the software and found ${this.bugsFound} bugs.`);
    }
}

const darko = new Developer("Darko", "Darkovski", 23, 5000, ["JavaScript", "C#"]);
darko.printInfo();
darko.code();
console.log(darko);

const robert = new Manager("Robert", "Robertski", 32, 5500, "G2");
robert.printInfo();
robert.organiseMeeting();

const arian = new Tester("Arian", "Ariansky", 29, 4000, 2);
arian.printInfo();
arian.testSoftware();