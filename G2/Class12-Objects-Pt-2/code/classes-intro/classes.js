console.log("================== INTRO TO CLASSES ==================");

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
    constructor(firstName, lastName, age, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }

    printInfo() {
        console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    }
}

const bob = new Employee("Bob", "Bobsky", 30, 3000);
console.log(bob);
bob.printInfo();
