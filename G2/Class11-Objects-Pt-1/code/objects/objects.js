console.log("======================= OBJECTS PART 1 =======================");


// Example: Anonymous object
let dog = {
    name: "Marley",
    "color": "brown",
    age: 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    bark: function () {
        console.log("AW AW AW !");
    },
    printInfo: function () {
        // console.log(`Dog: ${name}. Age: ${age}. Owner ${owner.firstName}`);
        console.log(`Dog: ${this.name}. Age: ${this.age}. Owner ${this.owner.firstName}`);
    },
    // 'this' examples
    getThis: this,
    printThisAnonymous: () => {
        console.log(this);
    },
    printThis: function () {
        console.log(this);
    }
}

dog.printInfo();
console.log(dog.getThis); // window
dog.printThisAnonymous(); // window
dog.printThis(); // dog object


// ===> Example: Created using Constructor Notation Template (Constructor Function)

function Person(firstName, lastName) {
    // if (firstName) {
    //     this.firstName = firstName
    // } else {
    //     this.firstName = "unnamed"
    // }
    this.firstName = firstName ? firstName : "unnamed";
    // this.firstName = firstName || "unnamed";
    // this.firstName = firstName ?? "unnamed";
    this.lastName = lastName;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
    // 'this' examples
    this.getThis = this;
    this.printThisAnonymous = () => {
        console.log(this);
    }
    this.printThis = function () {
        console.log(this);
    }
}

let john = new Person("John", "Doe")
console.log(john.getFullName());
console.log(john.getThis); // current Person instance (john object)
john.printThisAnonymous(); // john object
john.printThis(); // john object

console.log(this === window);
console.log(window);
window.testWindowObject();

function testWindowObject() {
    console.log("Hello this is globaly declared function");
}

var testWindowVar = "test";
console.log(window.testWindowVar);

console.log(window.document);
console.log(document);


console.clear();
console.log("");
console.log("======================= OBJECT BUILT-IN METHODS =======================");






