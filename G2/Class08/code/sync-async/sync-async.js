console.log("=============== Debugging ===============");
// => the process of identifying, isolating, and fixing errors or bugs in our program 
// => ensure that the program behaves as expected
// => common ways to debug in Javascript
// 1) console.log
// 2) using browsers Developer Tools (Sources tab)
// 3) using keyword debugger;

// console.log("This is before debugger;");
// debugger;
// console.log("This is after debugger;");

console.log("");
console.log("=============== Synchronous and asynchronous executing ===============");
// => JAVASCRIPT IS SINGLE THREADED !!! 
// => the code is executed only on one place in the browser (the Call Stack)
// => at any given point in time, that single JS thread is running at most ONE line of JS code


console.log("");
console.log("=============== Synchronous ===============");
// ***Synchronous execution***
// => code is executed sequentially, one line at a time
// => each line of code must be completed before moving on to the next one
// => blocking nature

function first() {
    console.log("First thing!");
}

function second() {
    console.log("Second thing!");
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

let fibonacciResult = fibonacci(40);
console.log(fibonacciResult);
// Heavy operation, the Call Stack is blocked...
first();
second();


console.log("");
console.log("=============== Asynchronous ===============");
// ***Asynchronous execution***
// => ability of the program to perform tasks 'in the background'
// => started executing some code, but not waiting for it to complete before moving on to the next line of code
// => when one line of code gets executed later on
// => most common examples: 
// 1) making http request with fetch (Fetch API) & handling the responses without freezing the UI
// 2) handling events

// ===> Typical async operation => api call using fetch
fetch("https://dummyjson.com/products/1")
    .then(response => response.json())
    .then(product => console.log("Here is the product", product))

console.log("This is printed after the product ! (or not)");

// Example: Handling Events (asynchronious operation)
document.querySelector("button").addEventListener("click", () => {
    console.log("Button is clicked!");
})


// ===> Built in functions that execute asynchronously

// ***setTimeout***
// => executes a function (first argument) when a given time passes (second argument)
setTimeout(() => {
    console.log("This is printed after 4 seconds!");
}, 4000); // 4000ms = 4s

// ***setInterval***
// => executes a function (first argument) repeatedly on a specified time interval (second argument)
// setInterval(() => {
//     console.log("This is printed every 3 seconds!");
// }, 3000);

// ==> Example of using setInterval
// let intrevalId = setInterval(() => {
//     console.log("This is printed every 3 seconds!");
// }, 3000);
// ... code ...
// ==> Make sure to clear the interval when you no longer need it
// clearInterval(intrevalId)

// Example: function containing setTimeout
function greet(name) {
    setTimeout(() => {
        console.log(`Hello ${name}`)
    }, 3500);
}
greet("Frose");
console.log("This is printed second ?!");


// ===> Synchronous vs Asynchronous execution
// debugger;

console.log(1);
console.log(2);
console.log(3);
// Result
// 1
// 2
// 3

setTimeout(() => console.log(4), 1000);
console.log(5);
setTimeout(() => console.log(6), 2000);
// Result
// 5
// 4
// 6

