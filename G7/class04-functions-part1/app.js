console.log("works");

// Basic way of defining functions
function printFullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

printFullName("Jonh", "Doe");

console.log(addTwoNumbers(10, 20));

function addTwoNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

const resultOne = addTwoNumbers(12, 33);

console.log(resultOne);

function multiplyTwoNumbers(numOne, numTwo) {
  return numOne * numTwo;
}

console.log(multiplyTwoNumbers(10, 2));
console.log(multiplyTwoNumbers);

const subtractTwoNumbers = function (numOne, numTwo) {
  return numOne - numTwo;
};

console.log(subtractTwoNumbers(10, 5));

//Calling one function inside another one

const calculator = function (operator, numOne, numTwo) {
  function divideTwoNumbers(numOne, numTwo) {
    if (numOne === 0 || numTwo === 0) return 0;

    return numOne / numTwo;
  }

  if (!["+", "-", "*", "/"].includes(operator)) return "Invalid Operator";

  if (operator === "+") return addTwoNumbers(numOne, numTwo);

  if (operator === "*") return multiplyTwoNumbers(numOne, numTwo);

  if (operator === "-") return subtractTwoNumbers(numOne, numTwo);

  if (operator === "/") return divideTwoNumbers(numOne, numTwo);
};

console.log(calculator("+", 50, 120));
console.log(calculator("*", 10, 100));
console.log(calculator("-", 999, 998));
console.log(calculator("/", 50, 25));
console.log(calculator("Џ", 50, 25));

//Arrow functions

const sayHello = () => {
  console.log("Hello from the arrow function");
};

sayHello();

const getRemainder = (numOne, numTwo) => numOne % numTwo;

const fullNameArr = (firstName, lastName) => `${firstName} ${lastName}`;

const printMoneyFunc = money => `You have a total of :${money}`;

console.log(getRemainder(10, 8));
console.log(fullNameArr("John", "Doe"));

const clickBtn = document.querySelector("#clickBtn");

console.log(clickBtn);

clickBtn.addEventListener("click", event => {
  console.log(event);

  console.log(event.target);

  console.log("clicked");
});

//Arrow functions as methods in objects

const person = {
  firstName: "Borche",
  lastName: "Borisovski",
  age: 32,

  printFullName() {
    console.log("FULL NAME NORMAL FUNC", this);

    console.log(`${this.firstName} ${this.lastName}`);
  },

  //If you need this or the parent object in a method , never use arrow functions as they don't get the this as normal ones
  printAge: () => {
    console.log("FULL NAME ARROW FUNC", this);

    console.log(`Person is ${this.age} years old`);
  },
};

person.printFullName();
person.printAge();
