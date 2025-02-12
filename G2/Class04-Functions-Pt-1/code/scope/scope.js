console.log("=================== SCOPES ===================");

// GLOBAL SCOPE
// => variables and functions declared outside of any function or block have global scope
// => they can be accessed from anywhere within the script

let globalNumber = 12345;

function printGlobalNumber() {
    globalNumber = 5555;
    console.log(globalNumber);
}

printGlobalNumber();


// LOCAL SCOPE  (Function Scope)
// => variables/functions declared within a function have local scope, meaning they can only be accessed within that function

// Example 1
function localScope(number) {
    let localNumber = 100;
    let result = localNumber + number;
    console.log("The result is ", result);
}

localScope(200)
// console.log(localNumber) // ERROR

// Example 2
let greeting = "Hello from Qinshift Academy";
function printGreeting() {
    let greeting = "Happy holidays!"
    console.log(greeting);
}
printGreeting();

// Example 3
function outerFunction() {
    let outerVariable = "I'm from the outer function"
    // for demonstration purposes* => avoid declaring function inside other function !!!
    function innerFunction() {
        let innerVariable = "I'm from the inner function"
        console.log(outerVariable);
        console.log(innerVariable);
    }
    innerFunction();
    // console.log(innerVariable); // ERROR
}
// console.log(outerVariable) // ERROR
outerFunction()
// innerFunction(); // ERROR


// BLOCK SCOPE
// => variables declared with let or const within a block (inside {}) are only accessible within that block

// Example 1
let globalString = "This is string"
if (50 < 100) {
    let blockNumber = 50 + 100;
    console.log(blockNumber);
    // console.log(globalString);

    globalString = "Nesto"
}
// console.log(blockNumber); // ERROR !
console.log(globalString);

// Example 2
let counter = 0;
while (counter <= 10) {
    console.log(counter);
    counter++;
    let testCounter = counter;
    if (testCounter === 10) {
        counter = 1000;
        break;
    }
}
// console.log(testCounter);
console.log(counter); // 11

// Example 3 'var'
if (50 < 100) {
    var varBlockNumber = 50 + 100;
    // 'var' behaves differently... don't use it :)
}
console.log(varBlockNumber);
