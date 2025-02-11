// const me = {};
// is the same as
const me2 = Object.create({});

// constructor function
// serves as a factory for creating new Person objects
function Person(name) {
  this.name = name;
  this.speak = function () {
    return `${this.name} is speaking`;
  };
}

function NewPerson(name) {
  this.name = name;
  this.talk = function () {
    return `${this.name} is talking`;
  };
}

let greeting = "Hello world!";
let myNum = 10;
// console.log(greeting.prototype); // undefined - we have protype only on constructor functions
// console.log(greeting.__proto__);
// console.log(myNum.__proto__);
// Returns the prototype of an object
console.log(Object.getPrototypeOf(greeting));
console.log(Object.getPrototypeOf(myNum));

const me = new Person("Jill");
me.__proto__ = NewPerson;
console.log(me.__proto__);
const anotherMe = { name: "Jill" };

// will not work because anotherMe was not instantiated from the Person function
// anotherMe.speak();
console.log(me.speak());
me.age = 30;
console.log(me);

const you = new Person("Bob");
console.log(you);

console.log(Person);
console.log(Person.prototype);
console.log(me.__proto__);
console.log(me.__proto__ === Person.prototype); //

// If we change the properties of the constructor function, it won't apply on the instantiated objects
Person.name = "Pink Panther";
console.log(me.name);

function User(name, email) {
  this.name = name;
  this.email = email;
  this.isOnline = false;
  this.login = function () {
    console.log(`${this.name} has logged in.`);
  };
}

let bob = new User("Bob", "bob@email.com");
bob.isAdmin = false;
let jill = Object.create(new User("Jill", "jill@email.com"));
jill.isPremium = true;
console.log(bob.isAdmin);
console.log(bob.isPremium);

// Base object
const vehicle = {
  type: "Generic vehicle",
  start: function () {
    console.log(`${this.type} is starting`);
  },
};

const car = {
  brand: "Toyota",
  model: "Yaris",
};

// Not good way
car.__proto__ = vehicle;
console.log(car.__proto__);

// Better way
Object.setPrototypeOf(car, vehicle);

console.log(car.brand);
console.log(car.type);
console.log(car.start());

Object.getPrototypeOf(vehicle).stop = function () {
  console.log(`${this.type} is stopping`);
};

car.stop();

function Pet(name, sound) {
  this.name = name;
  this.sound = sound;
}

// The speak method is now set to the prototype (Pet) and all the objects that will be created from Pet will have it
Pet.prototype.speak = function () {
  console.log(`The pet says ${this.sound}`);
};

const garfield = new Pet("Garfield", "meow");
const max = new Pet("Max", "woof");
garfield.speak();
max.speak();
