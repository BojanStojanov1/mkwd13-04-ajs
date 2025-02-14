console.log("================== PROTOTYPES ==================");

// ===> Example with Object.create();

// => Parent object
const animal = {
    type: "Mamal",
    eat: function () {
        console.log("Nom Nom Nom");
    }
}

// => Creating new object that inherits from 'animal'
const dog = Object.create(animal)
console.log(dog.type); // Mammal - Inherited from 'animal'
dog.eat(); // Inherited method
// Adding a new property to 'dog'
dog.breed = "German Shepard"; // 'dog' object now has its own 'breed' property
console.log(dog);


console.log("");
console.log("========== __proto__ ==========");
// The __proto__ property is a reference to the object's prototype.
// It allows access to properties and methods from the prototype chain.

console.log(dog.type);
console.log(dog.__proto__.type);

// ===> The Prototype Chain
// Every object in JavaScript has a prototype.
// If a property or method is not found on the object, JavaScript looks up the prototype chain

console.log(dog);
console.log(dog.__proto__); // the 'animal' object
console.log(dog.__proto__.__proto__); // Object
console.log(dog.__proto__.__proto__.__proto__); // null
// console.log(dog.__proto__.__proto__.__proto__.__proto__); // ERROR

console.log(dog.prototype); // undefined, only constructor functions (and classes) contain the 'prototype' property


console.log("");
console.log("========== prototype ==========");
// The 'prototype' property exists only on constructor functions and classes
// It is used when creating new instances with the 'new' keyword

function Animal(name) {
    // Each instance of Animal will have its own 'name' property
    this.name = name;
    // This method is assigned directly to the instance, meaning each new Animal object
    // will have its own copy of the 'eat' function 
    this.eat = () => console.log(`${this.name} is eating`)
}

// Setting the prototype of the Animal constructor function
Animal.prototype.makeSound = function () {
    console.log(`The ${this.name} makes sound!`);
}
Animal.prototype.isWild = false;
console.log(Animal.prototype);

const cat = new Animal("Cat");
cat.makeSound();
console.log(cat);
console.log(cat.isWild);  // false, inherited from Animal.prototype


console.log("");
console.log("========== Object.setPrototypeOf ==========");
// Used to change the prototype of an existing object

const swimAbility = {
    isGoodSwimmer: false,
    swim: function () {
        console.log(`${this.name} is swimming. It is a ${this.isGoodSwimmer ? "good" : "bad"} swimmer`);
    }
}
// swimAbility.swim(); we get undefined for name


// ===> Example: Swimming Turtle :)

const turtle = new Animal("Turtle"); // Vodna zelka
turtle.makeSound();
// turtle.swim(); // ERROR

// ===> Problem: by using the method we are completely replacing the prototype of turtle, meaning it loses access to the Animal.prototype methods (makeSound, isWild etc...)
// Object.setPrototypeOf(turtle, swimAbility);
// turtle.isGoodSwimmer = true;
// turtle.swim();
// console.log(turtle);
// turtle.makeSound();

// ===> Solution: first set the Animal.prototype as prototype to swimAbility object
Object.setPrototypeOf(swimAbility, Animal.prototype);
Object.setPrototypeOf(turtle, swimAbility);
turtle.makeSound();
turtle.isGoodSwimmer = true;
turtle.swim();
console.log(turtle);


console.log("");
console.log("========== Object.getPrototypeOf ==========");
// Used to check the prototype of an object

const bird = new Animal("Dove");
bird.makeSound();

// console.log(bird.prototype); // undefined
console.log(Object.getPrototypeOf(bird));
console.log(Object.getPrototypeOf(bird) === Animal.prototype);
