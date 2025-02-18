console.log("================== CLASSES ==================");

// function Employee(firstName, lastName, age, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.salary = salary;
//     this.printInfo = function () {
//         console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
//     }
// }

class Employee {
    firstName;
    lastName;
    age;
    salary;

    constructor(firstName, lastName, age, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }

    printInfo() {
        console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    }

    greetColleague(name) {
        console.log(`${this.firstName} says hello to ${name}`);
    }
}

const bob = new Employee("Bob", "Bobsky", 30, 3000);
console.log(bob);
bob.printInfo();
bob.greetColleague("John")


console.log("");
console.log("================== INHERITANCE WITH CLASSES ==================");

// function Developer(firstName, lastName, age, salary, programmingLanguages) {
//     // Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
//     Employee.call(this, firstName, lastName, age, salary);
//     this.programmingLanguages = programmingLanguages ?? [];
//     this.code = function () {
//         console.log(`${this.firstName} is doing magic :D`);
//     }
// }

class Developer extends Employee {
    constructor(firstName, lastName, age, salary, programmingLanguages) {
        super(firstName, lastName, age, salary);
        this.programmingLanguages = programmingLanguages;
    }

    code() {
        console.log(`${this.firstName} is doing magic :D`);
    }
}

class Tester extends Employee {
    constructor(firstName, lastName, age, salary, bugsFound) {
        super(firstName, lastName, age, salary);
        this.bugsFound = bugsFound;
    }

    testSoftware() {
        console.log(`${this.firstName} is testing the software and found ${this.bugsFound} bugs.`);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, age, salary, department) {
        super(firstName, lastName, age, salary);
        this.department = department;
    }

    organizeMeeting() {
        console.log(`The Manager ${this.firstName} is organising a meeting for the ${this.department} department`);
    }
}

class AutomationTester extends Tester {
    constructor(firstName, lastName, age, salary, bugsFound, automationFramework) {
        super(firstName, lastName, age, salary, bugsFound);
        this.automationFramework = automationFramework;
    }

    writeAutomationTests() {
        console.log(`${this.firstName} is writing Automation Tests using the ${this.automationFramework} framework`);
    }
}

const dev = new Developer("John", "Smith", 23, 3500, ["C#", "JavaScript"]);
dev.printInfo();
dev.code();
const tester = new Tester("Boban", "Bobanovski", 32, 1000, 5);
tester.testSoftware();
const manager = new Manager("Zvonko", "Zvonkovski", 43, 1500, "Enginering");
manager.organizeMeeting();
const automationTester = new AutomationTester("Test", "Testovski", 32, 3400, 50, "Selenium");
automationTester.writeAutomationTests();

console.log(automationTester.__proto__);
console.log(automationTester.__proto__.__proto__);
console.log(automationTester.__proto__.__proto__.__proto__);


console.log("");
console.log("=========== Check if an object is an instance of a class ===========");

console.log(dev instanceof Developer); // true
console.log(dev instanceof Employee); // true
console.log(dev instanceof Tester); // false

console.log(automationTester instanceof AutomationTester);
console.log(automationTester instanceof Tester);
console.log(automationTester instanceof Employee);
