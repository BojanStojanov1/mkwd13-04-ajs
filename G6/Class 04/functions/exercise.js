// Make 3 functions: (we will use full number)

// Function that takes a number through a parameter and returns how many digits that number has
// Function that takes a number through a parameter and returns if its even or odd
// Function that takes a number through a parameter and returns if its positive or negative
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. 
// It should show the results in the console.

// Ex:
// Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative

//1. Function that takes a number through a parameter and returns how many digits that number has
function getNumberOfDigits(number){
    if(number<0){
        return number.toString().length - 1; //-23, the length is 3, but we need 2(without the - sign)
    }
    return number.toString().length; //23 -> the length is 2
}

//2. Function that takes a number through a parameter and returns if its even or odd
function checkOddOrEven(number){
    // let result = number %2==0 ? "even" : "odd";
    // return result;
     return number %2==0 ? "even" : "odd";
}

// 3.Function that takes a number through a parameter and returns if its positive or negative
function checkPositiveOrNegative(number){
    return number<0 ? "negative" : "positive";
}

function getNumberStats(number){
    console.log(`Number ${number} has ${getNumberOfDigits(number)} digits, is ${checkOddOrEven(number)} and is a ${checkPositiveOrNegative(number)} number`)
}

getNumberStats(-123);
getNumberStats(4);
getNumberStats(124324);