console.log("=================== STATIC MEMBERS ===================");
// => created using the keyword *static* before the method/property definition
// => static method is a method that is associated with the class itself, rather than with instances (objects) created from that particular class
// => this means that you can call a static method without creating an instance of the class, simply by typing the syntax: ClassName.methodName()
// Use cases: 
// => Shared functionality that does not depend on a specific instance
// => Utility functions that operate on multiple instances
// => Helpers, Utility classes etc..


class Employee {
    // ===> Example static property
    static idCounter = 0; // accessed only from the Employee class itself, not its instances

    constructor(firstName, lastName, age, salary) {
        // this.id = ++this.idCounter; // ERROR - NaN
        this.id = ++Employee.idCounter; // Assign unique Id
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

    // ===> Example static method
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
// => *GETTER* is a method that is used to get the value of a specific property. It is invoked without the use of parentheses when the property is accessed
// => *SETTER* is a method that is used to set the value of a specific property. It is invoked when the property is assigned a new value

// => GETTER SYNTAX: get propertyName() { return this._propertyName; }
// => SETTER SYNTAX: set propertyName(value) { this._propertyName = value; }
// => NOTE: The internal property name inside getters and setters is usually prefixed with an UNDERSCORE (_) to avoid naming conflicts (example: this._propertyName).

// => Use cases:
// 1) data validation
// 2) encapsulation
// 3) access control etc...

// ***NOTE*** => Get & Set work under the hood without the need for explicitly creating them. We create them ONLY in cases where we want to do some checks, validations, restrict access.. of some of the properties

class Product {
    static idCounter = 0;

    constructor(name, price) {
        this.id = ++Product.idCounter;
        this.name = name;
        this.price = price;
    }

    // ===> Getter for price - returns formatted price string
    get price() {
        console.log("HELLO FROM PRICE PROPERTY GETTER");
        // return this.price; // DON'T FORGET THE UNDERSCORE :D
        return `$${this._price.toFixed(2)}`;
    }

    // Setter for price - ensures price is not negative
    set price(value) {
        console.log("HELLO FROM PRICE PROPERTY SETTER. PRICE TO BE SET =>", value);
        if (value <= 0) {
            console.error("Price cannot be negative or zero !");
            return;
        }
        this._price = value;
    }

    // ===> Making the 'id' property a readonly 
    get id() {
        return this._id;
    }

    set id(value) {
        if (!this.id) {
            console.log(`Id ${value} set in the constructor`);
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
