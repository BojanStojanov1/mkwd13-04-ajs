console.log("=================== STATIC MEMBERS ===================");


class Employee {
    static idCounter = 0;

    constructor(firstName, lastName, age, salary) {
        // this.id = ++this.idCounter; // ERROR
        this.id = ++Employee.idCounter;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }

    printInfo() {
        // console.log(`${this.idCounter}. Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
        console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
    }

    greetColleague(name) {
        console.log(`${this.firstName} says hello to ${name}`);
    }

    static getTotalEmployees() {
        return `Total Employees: ${Employee.idCounter}`;
    }
}

const bob = new Employee("Bob", "Bobsky", 35, 3000);
bob.printInfo();
console.log(bob.id);
console.log(bob);

console.log(bob.idCounter); // undefined
console.log(Employee.idCounter);

// bob.getTotalEmployees(); // ERROR
const employee1 = new Employee();
const employee2 = new Employee();
const employee3 = new Employee();

const totalEmployees = Employee.getTotalEmployees();
console.log(totalEmployees); // 4


// ===> Example: StringHelper - A Utility Class for Common String Operations

class StringHelper {

    static toTitleCase(str = "") {
        let splitString = str.split(" ");
        for (let i = 0; i < splitString.length; i++) {
            let word = splitString[i];
            splitString[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return splitString.join(" ");
    }

    static truncate(str, maxLength) {
        return str.length < maxLength ? str : str.substring(0, maxLength) + "...";
    }

    // more string operations ...
}

console.log(StringHelper.toTitleCase("tHis iS MeSSEd uP teXT"));
// tHis iS MeSSEd uP teXT => This Is Messed Up Text

console.log(StringHelper.truncate("This is very very very very very very very very very long string", 7));
// This is very very very very very very very very very long string => This is...


console.log("");
console.log("============== GET / SET ==============");


class Product {
    static idCounter = 0;

    constructor(name, price) {
        this.id = ++Product.idCounter;
        this.name = name;
        this.price = price;
    }

    get price() {
        console.log("HELLO FROM PRICE PROPERTY GETTER");
        // return this.price;
        return `$${this._price.toFixed(2)}`;
    }

    set price(value) {
        console.log("HELLO FROM PRICE PROPERTY SETTER");
        if (value <= 0) {
            console.error("Price cannot be negative or zero !");
            return;
        }
        this._price = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        if (!this.id) {
            console.log(`Id ${value} added`);
            this._id = value;
        } else {
            console.error("Cannot reassign id value !");
        }
    }
}

const product = new Product("Laptop", 1000);
// console.log(product.name);
// console.log(product.price); // 1000 => $1000.00

product.price = -100;
product.price = 22_222;
// console.log(product.price);
product.name = "New Product";
// console.log(product.name);
product.id = 1000;
console.log(product);
