//used as variables
let greeting = function(name){
    console.log(`Hello ${name}`);
}
greeting("Tijana");

let anotherGreeting = name => console.log(`Hello ${name} from G6!`);
anotherGreeting("Marko");

// function anotherGreeting(name){
//     console.log(`Hello ${name} from G6!`);
// }

//used as member of an array
let numberStatsFunctions = [
    num => num>0 ? "Positive number" : "Negative number or equal to zero",
    num => num%2==0 ? "Even number" : "Odd number",
    "We can have other types of elements in this array"
]

console.log(numberStatsFunctions[0](25));
console.log(numberStatsFunctions[1](13));

//used as an argument
function sum(num1, num2){
    return num1 + num2;
    //console.log(result);
    //logic with the result
}

function diff(num1, num2){
    return num1 - num2;
    //console.log(result);
     //the same logic with the result
}

function calculator(number1, number2, calculatorFunction){
    let result= calculatorFunction(number1, number2); // sum(3,4), diff(7,3)
    console.log(result);
    //we can have the same logic with the result here, instead of copying the code for sum and for diff
}

calculator(3,4,sum);
calculator(7,3,diff);

//used as return value
function calculate(operator){
    switch(operator){
        case "+":
            return (num1,num2) => num1 + num2;
        case "-":
            return (num1,num2) => num1 - num2;
        default:
            console.log(`${operator} is invalid operator!`);
            return null;
    }
}

let resultFunction = calculate("+"); //resultFunction = (num1,num2) => num1 + num2;
console.log(resultFunction(3,4));

resultFunction = calculate("-");
console.log(resultFunction(7,4));

//functions as objects
function sayHello(name){
    console.log(`Hello ${name}`);
}

sayHello.defaultName = "John";
sayHello.defaultGreeting = function(){
    console.log("Hi");
}

sayHello("G6");
console.log(sayHello.defaultName);
sayHello.defaultGreeting();

//Function arguments
//sayHello("G6", "Tijana", 3, true);
function longestString(){
  console.log(arguments);
  let longest = arguments[0];
  for(let argument of arguments){
    if(argument.length > longest.length){
        longest = argument;
    }
  }
  console.log(`The longest string is ${longest}`);
}

longestString("Bob", "John", "Programming", "Qinshift");
longestString("2025", "Web programming")