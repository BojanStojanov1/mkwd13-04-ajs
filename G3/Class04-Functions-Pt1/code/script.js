console.log("Hello from script.js");
const button = document.getElementById("button");

// Functions are reusable blocks of code that perform specific tasks. They help us
// organize code, avoid repetition, and make programs more maintainable.
// Basic function structure:
function printFullName(firstName = "Ivan", lastName = "Apostolovski") {
  // const firstName = "Ivan"
  //   if (!firstName || !lastName) {
  //     return `Please enter a valid first name and last name`;
  //   }
  return `Hello ${firstName} ${lastName}`;
}

const fullName = printFullName("Petko", "Petkovski");
console.log(fullName);

// Anonymous functions
// Functions without names that are often assigned to variables or passed as arguments.
// These are frequently used in modern JavaScript as callbacks and event handlers.

function clickButton() {
  console.log("The button has been clicked!");
}

// button.addEventListener("click", function () {
//   console.log("The button has been clicked!");
// });
button.addEventListener("click", clickButton);

const calculateArea = function (width, height) {
  return width * height;
};

console.log(calculateArea(500, 400));

// Used as callback

const array = [
  2,
  4,
  5,
  function () {
    return 2 + 5 - 7;
  },
];

console.log(array);
console.log(array[3]());

// Arrow functions
// Modern, concise syntax introduced in ES6.
// They inherit "this" from their surrounding scope.
// They have implicit returns when written in a single line and without curly braces

// function square(x) {
//   return x * x;
// }
const square = (x) => x * x;
console.log(square(2));

// console.log(this);

const add = (a, b) => a + b;
const result = add(5, 10);
console.log(result);

// Multiple lines need curly brackets and explicit return

const calculate = (a, b) => {
  const result = a * b;
  return result * 2;
};

console.log(calculate(5, 5));

const test = {
  name: "Ivan",
  myFunction() {
    console.log(this.name);
    console.log(this);
  },
};

console.log(test.name);
test.myFunction();

const test1 = {
  name: "Ane",
  myFunction: () => {
    console.log(this.name);
    console.log(this);
  },
};

test1.myFunction();

// function createFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const createFullNameOne = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

function isPositive(number) {
  // 1. Solution
  // if (number > 0) {
  //     return true
  // } else {
  //     return false
  // }

  // 2. Solution
  // if (number > 0) return true
  // return false

  // 3. Solution
  //  const result = number > 0;
  //  console.log(result);
  return number > 0;
}

// console.log(isPositive(10));

const isPositiveArrow = (number) => number > 0;

function getWeather(temperature) {
  if (temperature > 25) {
    return "hot";
  }
  return "cold";
}

const getWeatherArrow = (temperature) => {
  if (temperature > 25) return "hot";
  return "cold";
};

console.log(getWeatherArrow(5));

const getWeatherTernaryArrow = (temperature) =>
  temperature >= 25 ? "hot" : "cold";

console.log(getWeatherTernaryArrow(33));

// a function that counts vowels

console.log(countVowels("AEIOU"));

function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("AEIOU"));

// console.log(countVowelsArrow("aaa"));

const countVowelsArrow = (text) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
};

// Self-Invoked Functions (IIFE)
// Immediately invoked function expressions are functions that run as soon as they are defined.
// they create a new scope

(function () {
  console.log("I run immediately");
})();

(() => {
  let result = 5;
  console.log(result);
})();

(function (num1, num2) {
  console.log(num1 + num2);
})(2, 5);

const result2 = (function (num1, num2) {
  return num1 + num2;
})(5, 5);

console.log(result2);

// Recursion is when a function calls itself to solve a larger problem
// breaking it down into smaller instances of the same problem
// It requres:
// 1. A base case to prevent infinite recursion
// 2. A recursive case that moves toward the base case

function factorial(n) {
  // Base case
  if (n <= 1) return 1;

  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// Fibonacci sequence is where each number is the sum of the previous two

function fibonacci(n) {
  // Base case
  if (n <= 1) return n;

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(555));
