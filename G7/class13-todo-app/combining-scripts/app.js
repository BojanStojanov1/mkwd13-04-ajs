//Named exports, we have to use braces and the exact name to import
import {
  addTwoNumbers,
  subtractTwoNumbers,
  printFullName as printName,
} from "./src/math.js";

import mathMethods from "./src/math.js";

console.log("working");

console.log(mathMethods);

const resultOne = addTwoNumbers(10, 20);
const resultTwo = subtractTwoNumbers(30, 20);
const resultThree = mathMethods.multiplyTwoNumbers(30, 20);
const resultFour = mathMethods.divideTwoNumbers(30, 20);

console.log(resultOne, resultTwo, resultThree, resultFour);

printName("John", "Doe");
