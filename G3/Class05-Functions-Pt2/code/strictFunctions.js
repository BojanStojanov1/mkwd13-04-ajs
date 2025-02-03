"use strict";
// delete variables
let person = {
  fisrtName: "Bob",
  lastName: "Bobsky",
};

// cannot delete variables
let num = 10;
// delete num; // will throw an error

// Delete still works in strict mode
delete person.fisrtName;
console.log(person);

// eval (is really EVIL) - DO NOT USE IT
// let result = eval("5 + 3 + 2");
// console.log(result);

// Duplicate parameter
// function example(num1, num2, num1) {
//   console.log(num1);
// }

// Trying to assign a value to an undeclared variable
undeclaredVariable = 42;
