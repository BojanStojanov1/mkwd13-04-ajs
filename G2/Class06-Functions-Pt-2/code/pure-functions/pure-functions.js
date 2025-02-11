// 'use strict'; // => uncomment if you want to enable strict mode

console.log("================= PURE FUNCTIONS =================");
/*
    What are Pure Functions ?

    1) No External Dependencies
        => A pure function does not depend on variables or state outside its scope that might change over time (e.g., global variables);
    2) No Side Effects
        => does not modify any external state, such as changing global variables, updating DOM elements, or logging to the console
    3) Same input, same output

    => core concept in "Functional Programming" 
*/

// ===> Example: Function for adding element to an array

// => Impure Function
const impureArray = [1, 2, 3];

function addToArrayImpure(array, item) {
    array.push(item);
    return array;
}
let resultImpure = addToArrayImpure(impureArray, 444);
console.log(impureArray);
console.log(resultImpure); // The initial array is modified !

// => Pure Function
const pureArray = [1, 2, 3];
function addToArrayPure(array, item) {
    const result = [];
    for (const element of array) {
        result.push(element);
    }
    result.push(item);
    return result;
}

const pureArrayResult = addToArrayPure(pureArray, 3333);
console.log(pureArray); // New array is created
console.log(pureArrayResult); // Original array is unchanged !


console.log("");
console.log("================= STRICT TYPING IN JAVASCRIPT =================");
// JavaScript is a loosely typed (or dynamically typed) language, meaning variables can hold values of any type
// The `use strict` keyword (directive) enables Strict Mode, which enforces stricter rules for code execution

// 'use strict' // ===> MUST BE PLACED AT THE TOP OF THE SCRIPT

// These lines of code will throw an error if we use strict mode
number = 15; // no declaration
console.log(number);

delete number; // cant delete stuff
function sum(num1, num1) { // same parameter names
    return num1 + num1;
}

let eval = 123; // can't use keyword eval
let arguments = 2; // cant use keyword arguments
