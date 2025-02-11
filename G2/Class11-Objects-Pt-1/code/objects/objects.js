console.log("======================= OBJECTS PART 1 =======================");
// => representation of entities that exist in the real world
// => consists of PROPERTIES and METHODS

// ===> Example: Anonymous object, created using object-literals (curly brackets {})
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
// TIP: when using anonymous objects use 'function' for creating methods


// ===> Example: Created using Constructor Notation Template (Constructor Function)

function Person(firstName, lastName) {
    // if (firstName) {
    //     this.firstName = firstName
    // } else {
    //     this.firstName = "unnamed"
    // }
    // => Ternary Operator => check if `firstName` is truthy, If yes, assigns `firstName`; otherwise, assigns "unnamed".
    this.firstName = firstName ? firstName : "unnamed";
    // => Nullish Coalescing Operator (??), which checks if `firstName` is null or undefined only. 
    // If `firstName` is null or undefined, assigns "unnamed"; otherwise, assigns `firstName` as-is.
    // this.firstName = firstName ?? "unnamed";
    // => Logical OR (||) operator, which assigns "unnamed" if `firstName` is falsy 
    // this.firstName = firstName || "unnamed";
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


console.log("");
console.log("=========== The 'window' object ===========");
// the global object !!!
// variables and functions declared globally become properties and methods of the window object

console.log(this === window);
console.log(window);
window.testWindowObject();

function testWindowObject() {
    console.log("Hello this is globaly declared function");
}

var testWindowVar = "test";
console.log(window.testWindowVar);


console.log("");
console.log("=========== The 'document' object ===========");
// represents the web page (HTML&CSS) loaded in the window and provides methods and properties to interact with the HTML document
console.log(window.document);
console.log(document);


console.clear();
console.log("");
console.log("======================= OBJECT BUILT-IN METHODS =======================");

// ***create***
// => method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument

let person = {
    firstName: "Bob",
    lastName: "Bobsky",
    greet: function () {
        console.log("Hello !");
    }
}
console.log(person);

let bob = Object.create(person);
bob.firstName = "John"
console.log(bob);
console.log(bob.firstName);
console.log(bob.lastName);

let newObject = Object.create(null);
newObject.newProperty = "Nema poenta";


// ***assign***
// => method that can merge two objects into one. It accepts two objects and tries to merge the second object into the first one

let bobsAddress = {
    street: "Bobsky St.",
    city: "Skopje",
    printInfo: function () {
        console.log("Info");
    }
}
let bobsInfo = Object.assign(person, bobsAddress);
// let mergedObjects = {
//     firstName: "Bob",
//     lastName: "Bobsky",
//     greet: function () {
//         console.log("Hello !");
//     },
//     street: "Bobsky St.",
//     city: "Skopje",
//     printInfo: function () {
//         console.log("Info");
//     }
// }
console.log(bobsInfo);
bobsInfo.printInfo();



console.log("");
console.log("============== Exploring the object ==============");

let barnie = {
    name: "Barnie",
    age: 1,
    bark: function () {
        console.log("Aw aw aw");
    }
}

// *** keys ***
// => returns all the property and method names of our object in an array
let barniesKeys = Object.keys(barnie);
console.log(barniesKeys);

// *** values ***
// => returns all values from our properties and methods ( the whole functions ) in an array
let barniesValues = Object.values(barnie);
console.log(barniesValues);

// *** entries ***
// => returns an array of arrays that have a key and value pair
let keyValuePairs = Object.entries(barnie);
console.log(keyValuePairs);


console.log("");
console.log("============== Changing the object accessibility ==============");

// *** freeze ***
// => completely lock our object for any modifications
// => adding new properties/methods is not allowed
// => changing the values of existing is also not allowed
Object.freeze(barnie);
barnie.isGoodDog = true;
barnie.name = "Chapo";
console.log(barnie);

// *** seal ***
// => can't add new properties or methods
// => can change the existing ones
let marley = {
    name: "Marley",
    color: "brown"
}

Object.seal(marley)
marley.color = "grey"; // will change the existing value with the newly assigned
marley.isGoodDog = true; // won't add new property
console.log(marley);
