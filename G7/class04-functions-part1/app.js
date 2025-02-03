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

/*
## Exercise 1 Solution

Make 3 functions:

1. Function that takes a number through a parameter and returns how many digits that number has
2. Function that takes a number through a parameter and returns if its even or odd
3. Function that takes a number through a parameter and returns if its positive or negative

Finally create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

#### Ex:

**Code:** getNumberStats(-25);
**Console:** 2 Digits, Odd, Negative
*/
const countDigits = num => String(Math.abs(num)).length;

const evenOrOdd = num => {
  if (num % 2 === 0) return "Even";

  return "Odd";
};

const positiveOrNegative = num => {
  if (num > 0) return "Positive";

  if (num < 0) return "Negative";

  return "Zero";
};

console.log(countDigits(-100));
console.log(evenOrOdd(2));
console.log(positiveOrNegative(-1));

const getNumberStats = num =>
  `${countDigits(num)} Digits, ${evenOrOdd(num)}, ${positiveOrNegative(num)}`;

console.log(getNumberStats(-239));
console.log(getNumberStats(15));
console.log(getNumberStats(1000000));
console.log(getNumberStats(-232));

//Recursion

function sumTo(num) {
  if (num === 0) {
    return 0;
  }

  return num + sumTo(num - 1);
}

const resultSum = sumTo(50);

console.log(resultSum);

//Scope

// let num = 99;

const scopeFunc = () => {
  let num = 10;

  const childFunc = num => {
    // let num = 50;

    console.log("NUMBER", num);
  };

  childFunc(100);
};

scopeFunc();

const blockScopeFunc = () => {
  let num = 15;

  if (num < 10) {
    const firstName = "Borche";
    // let num = 50;

    console.log(firstName);
  } else {
    const firstName = "John";
    // let num = 100;

    console.log(firstName);
    // console.log(num);
  }

  //   console.log(firstName);

  let test = 0;

  for (let i = 0; i < 100; i++) {
    test += i;

    //Only exists in the for loop code block ( block scoped )
    let current = i + 1;
  }
};

blockScopeFunc();
