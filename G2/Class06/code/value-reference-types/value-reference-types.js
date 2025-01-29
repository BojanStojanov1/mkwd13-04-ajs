console.log("=============== VALUE TYPE ===============");
// primitive values (string, number, boolean, null, undefined) are value types
// both *variable* and *value* are stored in the memory STACK
// when you assign a value type to another variable, a copy of the value is made

let valueTypeVariable = "This is a string";
let newValueTypeVariable = valueTypeVariable;
newValueTypeVariable = "This is a NEW string";
console.log(valueTypeVariable); // "This is a string"
console.log(newValueTypeVariable); // "This is a NEW string"


console.log("");
console.log("=============== REFERENCE TYPE ===============");
// complex datatypes (objects, arrays, functions etc..)
// the *variable* is stored in the STACK, the *value* in the HEAP
// when you assign a reference type to another variable, you are copying the reference, not the actual value

// ===> Example with object
let personObject = {
    id: 1,
    firstName: "Bob",
    lastName: "Bobsky",
    printFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let newPersonObject = personObject;
personObject.firstName = "Pink"
newPersonObject.lastName = "Panther"

personObject.printFullName(); // "Pink Panther"
newPersonObject.printFullName(); // "Pink Panther"

// ===> Example with array
let testArray = [1, 2, 3, 4];
let newTestArray = testArray;
newTestArray.push(1000);

newTestArray[0] = 999_999;

console.log(testArray[0]);
console.log(newTestArray[0]);


