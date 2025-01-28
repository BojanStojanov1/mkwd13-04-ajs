console.log("================= HIGHER ORDER FUNCTIONS =================");

// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 21, gender: "Female", isActive: true },
];


console.log("");
console.log("========== forEach ==========");
// => Executes a function for each array element
// => Does NOT return a value (works on the original array)
// => Usecase: logging, iterating over arrays, performing actions on DOM elements, updating objects' properties, etc.

// ===> without forEach
// for (const number of numbers) {
//     console.log(number);
// }

numbers.forEach(num => console.log(num))
// let test = numbers.forEach(num => console.log(num))
// console.log(test); // undefined

students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}`)
    if (student.age < 21) {
        console.log("The student is underaged");
    }
});


console.log("");
console.log("========== filter ==========");
// => Creates a new array with all elements that pass the test
// => Returns the new filtered array
// => Does NOT modify the original array
// => Usecase: filtering data based on conditions, searching in arrays etc.

// Example 1: Even Numbers
// without filter()
const evenNumbersResult = [];
for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbersResult.push(number);
    }
}
console.log(evenNumbersResult);

function checkEvenNumber(number) {
    if (number % 2 === 0) {
        return true
    }
    return false;
}

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// Example 2: Female Students
const femaleStudents = students.filter(student => student.gender === "Female");
console.log(femaleStudents);

const femaleStudents2 = students.filter(function (student) {
    debugger;
    return student.gender === "Female"
})


console.log("");
console.log("========== map ==========");
// => Creates a new array by applying a function to every element in the array
// => Returns the new transformed array
// => Does NOT modify the original array
// => Usecase: transforming data, creating new properties, mapping to specific objects etc.

// Example 1: Squared Numbers
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// Example 2: Get Students full names
const studentFullNames = students.map(s => `${s.firstName} ${s.lastName}`);
console.log(studentFullNames);


// ===> Combining filter() and map()
// EXAMPLE: Get students full names of all the female students
const femaleStudentsFullNames = students.filter(s => s.gender === "Female").map(s => `${s.firstName} ${s.lastName}`);
console.log(femaleStudentsFullNames);

// const femaleStudentsFullNames2 = students.map(s => `${s.firstName} ${s.lastName}`).filter(s => s.gender === "Female");
// console.log(femaleStudentsFullNames2);


console.log("");
console.log("========== reduce ==========");
// => Reduces an array to a single value by applying a function to each of the elements
// => Returns the accumulated value
// => Does NOT modify the original array
// => Usecase: calculating totals, aggregating data, grouping elements, finding extremes, etc.

// Example 1: Get Sum & Average of numbers
const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
// 0 => initial value
// NOTE: Set initial values when using the reduce function !
console.log(sumOfNumbers);
console.log(sumOfNumbers / numbers.length);

// Example 2: Get average age of students
const studentsAverageAge = students.reduce((acc, curr) => acc + curr.age, 0);

// Step by step..
const studentsAvgAge = students.reduce((acc, curr) => {
    debugger;
    // 1) Add the current student's age to the accumulator
    acc += curr.age
    // 2) Return the updated accumulator for the next iteration
    return acc;
}, 0) / students.length;


console.log("");
console.log("========== sort ==========");
// => Sorts the elements of an array in place
// => Returns the sorted array
// => Modifies the original array
// => Usecase: ordering data, sorting by properties, ranking elements, etc.

const sortingNumbersArray = [-5, 3, 20, -300, 1000, 55, 33, 100, 0];

// Example 1: Sorting Numbers
// => Ascending
// const sortedNumbersAsc = sortingNumbersArray.sort((a, b) => a - b); // here we only pass reference to the original array
// console.log(sortedNumbersAsc);

// => Descending
sortingNumbersArray.sort((a, b) => b - a)
console.log(sortingNumbersArray);

// Example 2: Sort students by age 
students.sort((a, b) => a.age - b.age);
students.sort((a, b) => b.age - a.age);
console.log(students);

// Example 3: Sort students by first name
// ===> SORTING WITH STRINGS
students.sort((a, b) => a.firstName.localeCompare(b.firstName))
students.sort((a, b) => b.firstName.localeCompare(a.firstName))

const newArray = students;
newArray.push(123);
console.log(newArray);
console.log(students);
// HMM...? Go see the value & reference types example...
