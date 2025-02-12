const obj = {};
console.log(obj.__proto__);
const cat = { name: "Garfield" };
// setting property directly to an object
cat.type = "Orange cat";
// setting method directly to an object
cat.greeting = function () {
  console.log("Hello");
};
console.log(obj);

// In JavaScript, __proto__ and prototype serve different roles in the inheritance system:

// Where it exists:
// The prototype property exists on constructor functions (including classes). It is not available on ordinary objects.
// Purpose:
// It is used to define properties and methods that should be inherited by all instances created by that constructor.
// How it works:
// When you create a new object using a constructor (with the new keyword), the new object’s internal [[Prototype]] is set to the constructor’s prototype object.

function Animal() {}
// const bird = new Animal();
// console.log(bird);
Animal.prototype.speak = function () {
  console.log("Woof!");
};
const dog = new Animal();
// console.log(dog);
// console.log(dog.speak());
console.log(Animal.prototype);

// Here, Animal.prototype is the template for properties/methods that dog inherits.

// __proto__:

// Where it exists:
// The __proto__ property is an accessor (getter/setter) available on all objects. It provides a way to access or modify the object’s internal [[Prototype]].
// Purpose:
// It shows the actual prototype (i.e., the object from which properties are inherited) of that particular instance.
// How it works:
// When you inspect an object’s __proto__, you see the object it delegates to for property lookup. It is essentially the same as what you get from Object.getPrototypeOf(obj).

console.log(dog.__proto__ === Animal.prototype); // true
console.log(dog.__proto__.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

// Summary
// prototype:
// What: A property of constructor functions.
// Use: It defines the blueprint for the objects created by that constructor.

// __proto__:
// What: An accessor property on objects that points to their internal prototype.
// Use: It allows you to see or change the prototype (i.e., the inheritance link) of an individual object.
