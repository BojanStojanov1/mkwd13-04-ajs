console.log("Hello from scope.js");

const globalVariable = "I am accessible everywhere";

function someFunction() {
  console.log(globalVariable); // Works!
}

someFunction();

// Characteristics of global scope:
// Available throughout the program
// Can lead to naming conflicts
// Makes code harder to test
// Can make debugging difficult

// Function scope
// Variables declared inside a function are only accessible within that function (and any nested functions)

const test = "test";

function outer() {
  const message = "Hello from outer!";
  const test = "123";

  function inner() {
    console.log(message); // Can access message
    const innerMessage = "Hello from inner!";
  }

  inner();

  //   console.log(innerMessage); // Error! Not accessible
}

// console.log(message);

outer();

// Benefits of function scope:
/*
    Encapsulation of variables 
    Prevents naming conflicts
    Makes code more maintainable
    Easier to test and debug
*/

// Block scope (let and const)
// Introduced with ES6, block scope limits variable access to the block they're declared in (if, for, while block, etc..)

if (true) {
  console.log(globalVariable);
  let blockScoped = "Only available in this block";
  const alsoBlockScoped = "Same here!";
}

// console.log(blockScoped);

/* Advantages of block scope:
    Prevents variable leaking
    Reduces bugs from hoisting
    Makes code intention cleaner
    Better memory menagament
*/

// Problems with var

// No Block Scope:

if (true) {
  var x = 10;
}

console.log(x); // Prints 10, var leaks outside the if block

for (var i = 0; i < 3; i++) {
  // i leaks outside the loop
}
console.log(i);

function userAccess(role) {
  if (role === "admin") {
    var secretKey = "12345";
    console.log("Key accessed");
  }

  console.log(secretKey);
}

userAccess("admin");
