console.log("I'm here");

// Procedural vs OOP

// Procedural
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// OOP Approach
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,

  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

// Constructor Functions

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  // this.year = year ? year : 2022
  // this.year = year || 2022
  this.year = year ?? new Date().getFullYear();

  this.start = function () {
    // console.log(`Starting ${this.make} ${this.model}`)
    return `Starting ${this.make} ${this.model} year: ${this.year}`;
  };
}

const car = new Car("Ford", "Fiesta");
console.log(car.start());

// 3. Understanding the 'this' keyword

// 'this' in regular functions

function showThis() {
  console.log(this); // 'this' refers to the global object (window in browser)
}

showThis();

// 'this' in objects

var name = "Ivan";

const person = {
  name: "John",
  age: 30,
  sayHello() {
    console.log(`Hey my name is ${this.name}`); // 'this' refers to the person object
  },
  sayHelloArrow: () => {
    console.log(this);
    console.log(`Hey my name is ${this.name}`); // 'this' escapes the object scope, and attaches to the next one in line - which is the window object itself
  },
};

person.sayHello();
person.sayHelloArrow();

// 'this' in Event Handlers

const button = {
  addEventListener: function (event, callback) {
    // Simulating an event listener
    callback.call({ type: "click" });
  },
};

button.addEventListener("click", function () {
  console.log(this.type);
});

// 4. Modern JavaScript Features

// Spread operator
const colors = ["red", "green"];
const moreColors = ["blue", ...colors];
console.log("Colors array", colors);
console.log("Colors spreaded", ...colors);

console.log(moreColors);

const carInfo = {
  manufacturer: "Toyota",
  model: "Camry",
};

console.log("Car Info:", carInfo);

const carDetails = {
  ...carInfo,
  year: 2020,
};

console.log("Car Details:", carDetails);

const numArr1 = [1, 2, 3];
const numArr2 = [4, 5, 6];
const combinedArr = [...numArr1, ...numArr2];
console.log(combinedArr);

const numbers = [2, 3, 5];

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(...numbers));

// Destructuring

// Destructuring objects
const { year: carDetailsYear, manufacturer } = carDetails;
console.log(carDetailsYear, manufacturer);

// Destructuring arrays
const [firstColor, secondColor, thirdColor = "blue"] = colors;
// adding thirdColor or trying to destructure a value that doesnt exist, would be the same as creating a new variable
// const thirdColor = "blue"
console.log(firstColor, secondColor, thirdColor);

const rgb = [255, 255, 0];

const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 255, B: 0

// Array destructuring with rest parameters

const [first, second, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(second);
console.log(rest);

// Very very extra: JSDoc documentation
/**
 * @param {string} name - Peron's name
 * @returns {string} Greeting message - string
 */
function greet(name) {
  return `Hello ${name}!`;
}

// 5. Object Methods

// Object.create()

const personPrototype = {
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

const john = Object.create(personPrototype);
john.name = "John";

console.log(john.greet());

// Object.assign()
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

const result = Object.assign(target, source1, source2);
const result2 = { ...target, ...source1, ...source2 };
console.log(result);
console.log(result2);

// Object.keys(), Object.values(), Object.entries()

const sample = { a: 1, b: 2, c: 3 };
console.log(Object.keys(sample)); // we get all the keys of every entry in the object
console.log(Object.values(sample));

const experiment = Object.values(sample).reduce((acc, cur) => acc + cur, 0);
console.log(experiment);

console.log(Object.entries(sample));

const team = {
  john: "developer",
  sarah: "designer",
  mike: "developer",
  lisa: "manager",
  david: "developer",
};

console.log(Object.keys(team));

console.log(Object.entries(team));

function findByRole(role) {
  return Object.entries(team)
    .filter(([_name, jobRole]) => jobRole === role)
    .map(([name]) => name);
}

console.log(findByRole("manager"));

// Object.freeze(), Object.seal()

const frozen = Object.freeze({
  prop: 42,
});
console.log(frozen);

frozen.prop = 44;
console.log(frozen);

const config = {
  theme: "dark",
  api: {
    url: "somethingrandom.com",
    key: "12345",
  },
};

const frozenConfig = Object.freeze(config);

frozenConfig.theme = "light";
console.log(frozenConfig);

// Object.assign(frozenConfig, {
//   theme: "light",
//   api: { url: "something-new.com" },
// });

frozenConfig.api.url = "something-new.com";

console.log(frozenConfig);

const sealed = Object.seal({
  prop: 42,
});

sealed.prop = 33;

console.log(sealed);

sealed.newProp = 123;

console.log(sealed);
