console.log("===================== Arrays =====================");
// one type of JS collection (other existing types: Set, Map..)
// collection of related data
// zero-indexed 

let mixedArray = [true, 234, "String", NaN, undefined, 12_342_131]; // avoid using mixed types in an array
let testArray = [1, 23, 54, 134534534, 134_534_534, 43, 423, 4343];
console.log(testArray[0]);
console.log(testArray.length);


console.log("");
console.log("========= Array built-in methods =========");

// push(item) => adds an item/items at the end of the array
testArray.push(123)
console.log(testArray);
testArray.push(123, 1234, 1235);

// unshift(item) => adds an item at the beginning of the array
testArray.unshift(11111)

// pop( ) => removes an item from the end of the array and returns it
let lastItem = testArray.pop()

// shift() => removes an item from the beginning of the array and returns it
let firstItem = testArray.shift();

// ============= splice & slice =============

// splice() => removes elements from an array and, if necessary, inserts new elements in their place. 
// NOTE: It changes the original array
// testArray.splice(2, 3) // starting from index 2 delete 3 items
// adding new items at the place of the removed ones
testArray.splice(3, 1, 1_000_000);
// delete everything starting from index 4
testArray.splice(4);

// slice() => returns a copy of a section of an array. 
// NOTE: It DOES NOT change the original array
let testArrayTwo = [111, 222, 333, 444, 555]
// extracts elements from index 2 (inclusive) to index 4 (exclusive)
let newArray = testArrayTwo.slice(2, 4)
console.log(newArray);


console.log("");
console.log("========= Storing complex data types in arrays =========");

// Ex. Storing objects (most common scenario)
let objectsArray = [
    { id: 1, firstName: "Bob", lastName: "Bobski" },
    { id: 2, firstName: "Boba", lastName: "Bobski" }
];
console.table(objectsArray); // display data in the console in form of a table 

// Ex. Storing functions (not so common thing to do)
function sum(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
let functionsArray = [
    sum,
    subtract
];
console.log(functionsArray[0](20, 50));


console.log("");
console.log("===================== Loops =====================");
// => repetitive execution of code
// => iterate over collections of data (arrays)

console.log("");
console.log("========= WHILE =========");
let whileTestArray = [1, 2, 3, 4, 5]
let counter = 0;

while (counter < whileTestArray.length) {
    console.log(whileTestArray[counter]);
    counter++;
}

console.log("");
console.log("========= DO WHILE =========");
let input = " "
do {
    // input = prompt("Enter name")
} while (!input); // check wether the input is falsy value
// } while (input === undefined || input === "" || input === null); 

console.log(input);

console.log("");
console.log("========= FOR =========");
let students = ["Simona", "David", "Sandra", "Angel", "Robert"];

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
}

console.log("");
console.log("========= FOR OF =========");

for (let student of students) {
    if (student.startsWith("A")) {
        console.log("The students " + student + " starts with letter A");
        continue;
        // break;
    }
    console.log(student);
}

console.log("");
console.log("========= BREAK & CONTINUE =========");
// BREAK
// => used to terminate the loop immediately when a certain condition is met, regardless of whether the loop condition remains true or not
// CONTINUE
// => skips the current iteration of the loop and proceeds to the next iteration
// => the code after the continue keyword won't be executed during that iteration