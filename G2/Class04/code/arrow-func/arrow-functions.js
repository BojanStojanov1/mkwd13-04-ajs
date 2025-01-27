console.log("===================== ARROW FUNCTIONS =====================");
// => shorter version of the anonymous functions (syntactic sugar*)
// => better readability and cleaner syntax 

// =========== No parameters, no return ===========

// ===> Regular function
function sayHello() {
    console.log("Hello !");
}
// ===> Anonymous function
let sayHelloAnonymous = function () {
    console.log("Hello Anonymous!");
}
// ===> Arrow function
let sayHelloArrow = () => {
    console.log("Hello Arrow!");
}
sayHelloArrow();

// NOTE: when we have only one expression in the body of the function we can use even shorter syntax (without {})
let sayHelloArrowOneLine = () => console.log("Hello Arrow (one liner)!");
sayHelloArrowOneLine();


// =========== No parameters, return ===========

function getRandomNumber() {
    return Math.floor(Math.random() * 100); // gets random number from 1 to 100
}

// const getRandom = () => {
//     return Math.floor(Math.random() * 100)
// };
const getRandom = () => Math.floor(Math.random() * 100);

let randomNum = getRandom();
console.log(randomNum);


// =========== One parameter, one expression (returns value) ===========
function isEven(number) {
    return number % 2 === 0;
}

// NOTE: We don't add 'return' keyword after the arrow '=>' !!!
// const isNumberEven = (number) => return number % 2 === 0; // ERROR
// const isNumberEven = (number) => number % 2 === 0;

// ===> when we have only one parameter we can leave out the parenthesis
const isNumberEven = number => number % 2 === 0;
console.log("The numbere 68 is even : ", isNumberEven(68));


// =========== Multiple parameters, one expression (returns value) ===========

const sum = (num1, num2) => num1 + num2;
console.log(sum(20, 30));


// =========== Multiple parameters, multiple expressions ===========

const getMaxNumber = (num1, num2) => {
    if (num1 > num2) {
        return num1
    }
    return num2;
}
console.log(getMaxNumber(10, 80));


// =========== Arrow function in an event listener ===========");

document.querySelector("button").addEventListener("click", () => {
    console.log("Click");
})


//  =========== Arrow function in a fetch  ===========

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

// ===> Using Anonymous functions
// fetch(postsUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.error("ERROR OCCURED !", error)
//     });

// ===> Using Arrow functions
fetch(postsUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));