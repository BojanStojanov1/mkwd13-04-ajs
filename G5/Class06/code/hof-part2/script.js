console.log('Connected');

console.log('*** INCLUDES ***');
// Includes => Boolean
const fruits = ["Pineapple", "Apple", "Banana"];

const isBananaInList = fruits.includes("Banana");
console.log(isBananaInList); // true

const hasPear = fruits.includes('Pear')
console.log(hasPear) // false


console.log("*** EVERY ***"); // Returns Boolean
// WILL RETURN TRUE, ONLY IF ALL ELEMENTS FULLFILL THE CONDITION
const arrOne = [5, 10, 15, 13, 12, 8];

const areBiggerThenTwo = arrOne.every((element) => element > 2);
console.log(areBiggerThenTwo) // true

// if we FORGET to return the expression we will recieve FALSE all the time
const areBiggerThenTen = arrOne.every((element) => { // curly braces if we have multi line expression
    // if(element > 10){
    //     return true
    // }

    // return false



    // Same as above but shorter
    //  return element > 3 && element < 20 // multiple chained expressions
    return element > 10
});
console.log(areBiggerThenTen) // false


console.log("*** SOME ***") // Returns Boolean;
// WILL RETURN TRUE IF ATLEAST ONE ELEMENT FULLFILLS THE CONDITION;

// The functionallity works as same for primitive data types or if it has more complex values
const cars = [{ brand: "Lada Niva", color: "red" }, { brand: "Mercedes", color: "grey" }, { brand: "golf", color: "black" }];


// if we FORGET to return the expression we will recieve FALSE all the time
const hasGreyCar = cars.some((element) => {
    return element.color === "grey"
});

console.log(hasGreyCar); // true

const hasBlueCar = cars.some((element) => {

    return element.color === "blue"
})

console.log(hasBlueCar) // false


// Returns the ELEMENT we search for or it will return UNDEFINED if it was not found
console.log("*** FIND ***");
const users = [
    {id: 1, email: "john@mail.com", status: "BASIC"}, 
    {id: 2, email: "bob@mail.com", status: "PREMIUM"}, 
    {id: 3, email: "lee@mail.com", status: "PREMIUM"}
];

// if we do not return the expression we gonna get undefined
const userFound = users.find((element) => {
   return element.id === 1
});

console.log(userFound);

const fruitFound = fruits.find((element) => {
    return element === "Banana"
});

console.log(fruitFound);

const someUser = users.find((element) => {
    return element.id === 4
});

console.log(someUser) // undefined;

// When searching a value that can be common for all of the elements
// it will return the first one that it gets
const premiumUser = users.find((element) => {
    return element.status === "PREMIUM"
});

console.log(premiumUser);

console.log("*** REDUCE ***");
const numbers = [2, 3, 5, 6, 6, 1];


const sumReduce = numbers.reduce((previousValue, currentValue) => {
    console.log('previous value:', previousValue ); // the value that was returned on the previous iteration
    console.log('current value', currentValue); // the element of the current iteration
 
    // if we don't return a value; previousValue will be undefined on the upcoming iterations

    /**
     * 1st => return 0 + 2
     * 2nd => return 2 + 3
     * 3rd => return 5 + 5
     * 4th => return 10 + 6
     * 5th => return 16 + 6
     * 6th => return 22 + 1
     * 
     * result is 23
     */
    return previousValue += currentValue
}, 0); // initial value (on the first iteration it is the previous value), if we change it to 1, the ending result is going to be 24

console.log(sumReduce);


// **********

const names = ["Stevan", "Bob", "John", "Anna", "Stevan", "Gjorge", "Anna"];
/**
 * {
 * "stevan": 2; 
 * "bob": 1;
 * "john": 1;
 * "anna": 2
 * }
 */

const nameOccurences = names.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue)

    // if the key is existing
    if(previousValue[currentValue]){
        previousValue[currentValue]++
    }else {
        previousValue[currentValue] = 1;
    }

    return previousValue;

}, {})

console.log(nameOccurences)
