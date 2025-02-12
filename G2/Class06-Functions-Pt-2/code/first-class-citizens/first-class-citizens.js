// =========== OPTIONAL PARAMETERS ===========
// if we don't pass the value for the parameter, the default value will be used
// it can be a value of any type
function multiply(num1, num2 = 10) {
    console.log(`Result: ${num1 * num2}`);
}

multiply(5, 2);
multiply(7);

console.log("================= FUNCTIONS - FIRST CLASS CITIZENS =================");

// ===> Storing function as a variable
let greet = name => console.log(`Hello ${name}`);
greet("Darko")

// ===> Used as an argument to another function ***
// Example 1
function calculator(calculateFunc, num1, num2) {
    return calculateFunc(num1, num2)
}

function sum(number1, number2) {
    return number1 + number2
}

debugger;
let sumResult = calculator(sum, 5, 10);

let subtractResult = calculator(function (num1, num2) {
    return num1 - num2;
}, 100, 80);

console.log(calculator((x, y) => x * y, 30, 2))

// Example 2
function logFunction(func) {
    func();
}
logFunction(() => console.log("Hello"))


// ===> Used as a return value from another function
function getOperation(operator) {
    switch (operator) {
        case "+":
            return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => num1 - num2;
        case "*":
            return (num1, num2) => num1 * num2;
        case "/":
            return (num1, num2) => num1 / num2;
        case "**":
            // power operator
            return (num1, num2) => num1 ** num2;
        default:
            break;
    }
}

const divide = getOperation("/")
console.log(divide(10, 2));

console.log(getOperation("**")(2, 3));


// ===> Have properties like objects
function greetStudent(name) {
    console.log(`Hello ${name}`);
}

greetStudent.firstName = "Bob";
greetStudent(greetStudent.firstName);

// ===> Have methods like objects
greetStudent.getFullName = lastName => greetStudent.firstName + " " + lastName;
console.log(greetStudent.getFullName("Bobsky"));

// It's so confusing...

// NOTE: Using functions with properties and methods is technically allowed in JavaScript. 
// However, it is *NOT RECOMMENDED* for most use cases in modern JavaScript development


console.log("");
console.log("=========== Function Arguments ===========");
// => keyword 'arguments'
// Useful for functions where the number of arguments is unknown or dynamic

function someFunction() {
    console.log(arguments);
    console.log(arguments.length);
}

someFunction("Bob", "Jane", "Tom", "Jill", "Darko", 123)

function sumOfNumbers() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(sumOfNumbers(10, 20, 30, 40));
console.log(sumOfNumbers(10, 20, 30, 40, 50, 60, 70, 80));

// NOTE: The `arguments` object is NOT available in arrow functions
// const test = () => console.log(arguments)
// test(123, 123) // ERROR!