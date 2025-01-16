console.log("======================= OBJECTS =======================");
// representation of entities that exist in the real world
// consists of PROPERTIES and METHODS

// 1) created using curly brackets (object literal) {} (anonymous object)
let dog = {
    name: "Sharko",
    color: "grey",
    age: 2,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    favouriteFoods: ["Carrot", "Meat", "Everything"],
    bark: function () {
        console.log(this.name + " says");

        console.log("AW AW AW");
    },
    eat: function (food) {
        // for (const favouriteFood of this.favouriteFoods) {
        //     if (food === favouriteFood) {
        //         console.log("MIAM MIAM ! My favourite");
        //         break;
        //     }
        // }
        // ===> the *this* keyword points to the object's properties and methods
        if (this.favouriteFoods.includes(food)) {
            console.log("MIAM MIAM ! My favourite");
        }
        console.log("The dog is eating " + food);
    }
};

// Accessing objects properties
console.log(dog.name);
console.log(dog["name"]);

// Calling objects methods
dog.bark();
dog.eat("Everything")
dog.eat("Chips")


// 2) created using new Object
let otherDog = new Object();
otherDog.name = "Chapo";
otherDog["isStreetDog"] = true;


// 3) created using Constructor Notation Template (Constructor Function)
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

let bob = new Person("Bob", "Bobsky", 55);
console.log(bob);
let fullName = bob.getFullName();
console.log(fullName);

// Objects in Javascript are DYNAMIC !!!
// => meaning you can add new properties and methods after the objects creation
bob.isStudent = true;
console.log(bob);
