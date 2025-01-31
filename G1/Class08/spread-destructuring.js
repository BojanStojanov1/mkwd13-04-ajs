// destructuring

let numbers = [1, 2, 3, 4, 5, 6];

// usign index
// let first = numbers[0];
// let second = numbers[1];
// ...

// let first = numbers.shift();
// let second = numbers.shift();
// let rest = numbers;

// console.log(first, second, rest);

let [first, second, q, ...rest] = numbers;
// console.log(first, second, q, rest);
// let b = numbers.shift();

let obj = {
    firstName: 'Trajan',
    lastName: 'Stevkovski',
    age: 23
};

// let firstName = obj.firstName;
// let lastName = obj.lastName;
// let age = obj.age;

// destcuturing using property names
let { firstName, lastName, age } = obj;
// destcuturing using new variables "property: <variable name>"
let { firstName: ime, lastName: prezime, age: godini } = obj;
// console.log(ime, prezime, godini);

function returnAritmeticOperations() {
    let operations = [
        (num, num1) => num + num1,
        (num, num1) => num - num1,
    ];
    return operations;
}

// let result = returnAritmeticOperations();
// let sum1 = result[0];
// let substract1 = result[1];
let [sum, substract] = returnAritmeticOperations();
// console.log(sum, substract);

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let [a, b, c, d, e, f, g, h, i, j] = numbers1;
// console.log(a, b, c, d, e, f, g, h, i, j);


// let [z, ...rest1] = numbers1;
let arrA = [1, 2, 3, 4, 5];
let arrB = [6, 7, 8, 9, 0, 1, 2, 3];
let arrC = arrA.concat(arrB);
// console.log(arrC);
let arrD = [...arrA, ...arrB];
// console.log(arrD);

let arrE = [];
arrE.push(...arrB);
// console.log(arrE);
// arrE.push(arrB[0])
// for(let element of arrB) {
//     arrE.push(element);
// }

function recursiveSumOfArray(numbers) {
    if(numbers.length === 0) {
        return 0;
    }
    // let first = numbers.shift();
    // let rest = numbers;
    let [first, ...rest] = numbers;

    return first + recursiveSumOfArray(rest);
}
let result = recursiveSumOfArray(numbers);
// console.log(result);


let person = {
    firstName: 'Trajan',
    lastName: 'Stevkovski'
}

let address = {
    street: 'Temnica',
    number: '1',
    town: 'Skopje'
}

let combined = {
    ...person,
    ...address,
    age: 23
};
// console.log(combined);

let combinedChanged = {
    ...person,
    ...address,
    firstName: 'Filip',
    town: 'Bitola'
}

// console.log(combinedChanged);


let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function flatMatrixToArray(array, currentElement) {
    array.push(...currentElement);
    return array;
}

let flatArray = matrix.reduce(flatMatrixToArray, []);
// console.log(flatArray);


// null coalescing operator
let z = null; // 15
// without null coalesing operator
let x = z;
if(x === null) {
    x = 5;
}

console.log(x);

// with
let y = z ?? 3;
// if null gets the right side of ?? if not left side
console.log(y);
