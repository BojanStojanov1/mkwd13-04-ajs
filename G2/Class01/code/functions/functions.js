console.log("======================= FUNCTIONS =======================");
// => reusable piece of code

// Benefits of using functions:
// 1) Reusability
// 2) Modularity (break larger code into smaller manageable parts)
// 3) Readability

// Two-step process
// 1) Function Declaration
// 2) Function Execution

// ============== FUNCTION TYPES ==============

// ======= Function without parameters and return =======
function sayHello() {
    console.log("Hello!");
}
let hello = sayHello();
console.log(hello); // undefined, it does not have a return statement

// ======= Function with parameters, without return =======
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
greet();
greet("Bob", "Bobsky");

// ======= Function without parameters, but with return =======
function getPI() {
    return Math.PI;
}
getPI();
const pi = getPI();
console.log(pi);

// ======= Function with parameters and return =======
function multiply(num1, num2) {
    return num1 * num2;
}
let multiplyResult = multiply(250, 3);
console.log(multiplyResult);

// ======= Function with more complex parameters =======
let students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", },
    { id: 2, firstName: "John", lastName: "Johnsky", },
    { id: 3, firstName: "Jack", lastName: "Jetski", }
]

function printStudents(studentsArray) {
    for (const student of studentsArray) {
        console.log(`${student.id} ${student.firstName}`);
    }
}
// const test = 123;
// test = 32432; // ERROR

printStudents(students);

// ======= Anonymous Function used in event handling =======
document.querySelector("#click-me").addEventListener("click", function () {
    console.log("Button Clicked");
})

// ====== many more... (will be learnt througout this subject) ======


// ============== RETURN KEYWORD ==============
// Use cases:
// 1) Returning a Value
// 2) End function execution

function sum(num1, num2) {
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        return; // end function execution if the arguments aren't valid numbers
    }
    return num1 + num2;
}

console.log(sum(33));
console.log(sum(33, 35));



// THE BIG QUESTION => "WHEN TO PUT SOMETHING IN A FUNCTION ?!?!"

// The sense of what to put into a function improves with experience and lots of coding ...

// However here are some of the cases when you should use a function:

// 1) Code duplication => if you use same code more than once, create a function
let numbersArray = [123, 123, 42, 353, 545, 54];

// ***** WITHOUT FUNCTION => BAD EXAMPLE *****
let sum1 = 0;
for (let number of numbersArray) {
    sum1 += number;
}
let average1 = sum1 / numbersArray.length;

// ... CODE CODE CODE ...
numbersArray.push(423, 343, 434);
// ... CODE CODE CODE ...

let sum2 = 0;
for (let number of numbersArray) {
    sum2 += number;
}
let average2 = sum2 / numbersArray.length;


// ***** WITH FUNCTION => GOOD EXAMPLE *****
function calculateAverage(numbersArray) {
    let sum = 0;
    for (let number of numbersArray) {
        sum += number;
    }
    let average = sum / numbersArray.length;
    return average;
}

calculateAverage(numbersArray);
// ... CODE CODE CODE ...
numbersArray.push(423, 343, 434);
// ... CODE CODE CODE ...
calculateAverage(numbersArray);

// 2) Modularity => breaking down your code into smaller, manageable chunks by separating logical operations in functions 