// ** Regular function declaration  **
function multiplyNumbers(a, b){
    return a * b
};

console.log(multiplyNumbers(3, 6)) // Invocation
let result = multiplyNumbers(2, 5) // Store result in variable
console.log(result);

console.log('**** FUNCTION EXPRESSIONS ****');

// ** Anonymous function **
let greet = function(name = "Bob"){
    return `${name} says hi`;
};

console.log(greet())
console.log(greet('John'))
let greeting = greet('Lee Woo');
console.log(greeting);

let fruits = ['Apple', 'Banana', 'Orange'];

let displayFruits = function(items){
    if(items.length === undefined || typeof items === "string"){
        console.error('value is not array')
        return;
    }
    for(let i = 0; i < items.length; i++){
        console.log(items[i])
    }
}

displayFruits(fruits)
// displayFruits(1) // error due to validation
// displayFruits('123') // error due to validation

console.log('** ARROW FUNCTIONS **')
// ** Arrow function **
/**
 * ES6/2015
 */

let costumLogger = function(){
    console.log('Costum logger anonymous function')
} 

costumLogger();

// Anonymous function
let costumLoggerArrow = () => {
    console.log('Logger arrow function')
};

costumLoggerArrow();

console.log('*** ONE PARAMETER, ONE EXPRESSION ***');

let favouriteMovie = (movieName) => {
    return `Favourite movie name is: ${movieName}`
};

let movieOne = favouriteMovie('Shawshank Redemtion');
console.log(movieOne);

/**
 * WHEN WE HAVE ONE EXPRESSION (one line code)
 * THE ERROR FUNCTION WILL RETURN THAT VALUE
 * favouriteFood RETURN THE RESULT DIRECTLY BECAUSE IT IS ONE EXPRESSION
 */
let favouriteFood = (foodName) => `Favourite food is: ${foodName}`

let foodOne = favouriteFood('Sarma');
console.log(foodOne);

let sumNumber = (a , b) => console.log(a + b);
sumNumber(2, 5);

let isBiggerThen = (numberOne, numberTwo) => numberOne > numberTwo;

console.log(isBiggerThen(2, 5));
console.log(isBiggerThen(10, 5));

const arrayOfPeople = [
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'Lee', lastName: 'Clarson'}
];

// IF THE FUNCTION ACCEPTS 1 PARAMETER ONLY
// THEN WE MAY EXCLUDE THE () small brackets
let getFullNames = people => {
    for(let person of people){
        console.log(`${person.firstName} ${person.lastName}`);
    }
};

getFullNames(arrayOfPeople)

// ** ARROW FUNCTIONS IN EVENTS **
const buttons = document.getElementsByTagName('button');

const firstButton = buttons[0];
const secondButton = buttons[1];

firstButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log('Button is clicked');
});

// Same as above but we used arrow function
secondButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log('Button is clicked arrow function');
});

console.log("** IFFE / Imidiently invoked function expression **");

(
    function(){
        console.log('Hello from IFFE');
    }
)();

(
    (name) => {
        console.log(`${name} says hi!`)
    }
)('Bob');

console.log('** HOISTING **');

fullName('Bob', 'Bobski')

function fullName(fName, lName){
    console.log(`${fName} ${lName}`)
};

fullName('John', 'Doe');



// fullNameArrow('Lee', 'Clarson'); // Cannot access 'fullNameArrow' before initialization

let fullNameArrow = (fName, lName) => {
    console.log(`Arror full-name: ${fName, lName}`)
};

fullNameArrow('Lee', 'Clarson');

// fullNameAnonymous('Lee', 'Boo'); // Cannot access 'fullNameAnonymous' before initialization

let fullNameAnonymous = function(fname, lname){
    console.log(`${fname} ${lname}`)
};

fullNameAnonymous('Lee', 'Boo');

console.log('*** HOISTING IN VARIABLES ***');

console.log(movieTwo);
var movieTwo = "Good fellas";
console.log(movieTwo);


// console.log(movieThree) // Cannot access 'movieThree' before initialization
let movieThree = "Squid games 2";
console.log(movieThree);

/**
 * ## Exercise 

1. First arrow function will accept two parameters, one for element and one for color. The function should change the
   given element text color with the color given from the second color parameter. If no parameter is passed for color,
   the default value is **black**.

2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change
   the given element text size to the number given from the second textSize parameter. If no parameter is passed for
   textSize, the default value is 24.

Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text
size and the second for color. When the button is clicked the h1 header should change according to the input values (
change size as the first input value and color as the second input value ). Use the functions that we declared earlier
and use arrow function for the event listener of the button.

#### Ex:

**Input1: ** Person enters 28
**Input2: ** Person enters red
**Result: ** The h1 text should change to size 28 and color red

 */


console.log('*** SCOPE ***');

/**
 * 1. GLOBAL SCOPE
 * 2. FUNCTIONAL SCOPE
 * 3. BLOCK SCOPE => ES6/2015
 */

// GLOBAL SCOPE VARIABLE
const petName = "Buddy"; 

function showFullName(firstName, lastName){
    // FUNCTIONAL SCOPE
    console.log(petName) // VARIABLES DECLARED IN GLOBAL SCOPE CAN BE ACCESSED IN FUNCTIONAL SCOPE
    
    let personAge = 29;
    console.log(personAge)

    if(firstName && lastName){
        // BLOCK SCOPE
        var fullNameVar = `${firstName} ${lastName}`;
        let fullNameLet = `${firstName} ${lastName}`;

        console.log(fullNameVar)
        console.log(fullNameLet)
    }

    console.log('VAR LOG',  fullNameVar);
    // console.log('LET LOG', fullNameLet); // fullNameLet is not defined

}
showFullName('Bob', 'Bobski')
// console.log(personAge) // VARIABLES DECLARED IN FUNCTIONAL SCOPE, CANNOT BE ACCESSED IN GLOBAL SCOPE

// console.log(fullNameVar) // error
// console.log(fullNameLet) // error