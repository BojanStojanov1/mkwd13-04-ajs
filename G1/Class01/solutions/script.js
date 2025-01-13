function generateAllNumbersDivisableByThree() {
    let arr = [];
    // define counter(i); define condition; increment/decrement
    for(let i = 1; i <= 1000; i++) {
        if(i % 3 === 0) {
            // operator for assingment *** = ***
            // operators for comparison *** == *** *** === ***
            // == compares only values
            // === compares value and type
            // <=, >=, >, <, !

            // Adding value to array
            // arr.push();
            // arr.shift();
            // arr[i] = i;

            arr.push(i);
        }
    }
    return arr;
}

let result = generateAllNumbersDivisableByThree();
console.log(result);

function generateAllNumbersDivisableByFour() {
    let arr = [];

    // define counter for while loop
    let counter = 1;
    // condition for exiting while loop
    while(counter <= 1000){
        if(counter % 4 === 0) {
            arr.push(counter);
        }
        // increment/decrement
        counter++;
    }
    return arr;
}

let result1 = generateAllNumbersDivisableByFour();
console.log(result1);

function generateAllNumbersThatEndsWithOne() {
    let arr = [];
    // define counter
    let i = 0;
    do{
        //101 % 10 = 1
        if(i % 10 === 1) {
            arr.push(i);
        }

        //increment/decrement
        i++;
        // define condition to end loop
    } while(i <= 1000);

    return arr;
}

let result2 = generateAllNumbersThatEndsWithOne();
console.log(result2);


let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function cleanArrayOnlyStrings(arr) {
    let cleanedArray = [];
    for(let item of arr) {
        if(typeof item === 'string') {
            cleanedArray.push(item);
        }
    }
    return cleanedArray;
}

let result3 = cleanArrayOnlyStrings(test);
console.log(result3);

function cleanArrayOnlyNumbers(arr) {
    let cleanedArray = [];
    for(let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if(typeof element === 'number' && !Number.isNaN(element)) {
            cleanedArray.push(element);
        }
    }
    return cleanedArray;
}

let result4 = cleanArrayOnlyNumbers(test);
console.log(result4);

function cleanArrayOnlyThrutyValues(arr) {
    let cleanedArray = [];
    let i = 0;
    while(i < arr.length) {
        let element = arr[i];
        if(element) {
            cleanedArray.push(element);
        }
        i++;
    }
    return cleanedArray;
}

let result5 = cleanArrayOnlyThrutyValues(test);
console.log(result5);


let rgb = Math.floor(Math.random() * 255) // -> 234