// Test data
const numbers = [2, 5, 8, 10, 15, 3, 7, 12, 17, 34, 53];

const mixedNumbers = [
  5, -3, 12, -8, 9, -4, 7, -1, 20, -15, 6, -10, 18, -2, 11, -13,
];

const users = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    occupation: "Software Engineer",
    gender: "female",
  },
  { id: 2, name: "Bob", age: 35, occupation: "Data Scientist", gender: "male" },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    occupation: "Graphic Designer",
    gender: "male",
  },
  {
    id: 4,
    name: "David",
    age: 42,
    occupation: "Marketing Manager",
    gender: "male",
  },
  {
    id: 5,
    name: "Eva",
    age: 31,
    occupation: "Product Manager",
    gender: "female",
  },
];

const students = ["Pane", "Stefan", "Olgica", "Ilina", "Petar", "Filip"];

// *** forEach ***
// - executes a provided function once for each array element
// - does not return value
// - modifies the original array
// Example 1: using forEach to log each number to the console
numbers.forEach((num) => {
  console.log(num);
});

// Example 2: using forEach to display user information
users.forEach((user) => {
  console.log(`${user.name} - ${user.age} years old - ${user.occupation}`);
});

// *** map ***
// - executes a provided function once for each array element
// - returns a value for each element in the array and stores it in a new array
// - does not modify the original array
// Example 1: using map to square each number

const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);
console.log(numbers);

// *** filter ***
// - executes a provided function once for each array element
// - if the elemets passes the test it is kept in the new result array
// - does not modify the original array
// Example 1: using filter to get only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// Example 2: using filter to get users who are older than 30
const olderUsers = users.filter((user) => user.age > 30);
console.log(olderUsers);

const maleUsers = users.filter((user) => user.gender === "male");
console.log(maleUsers);

// *** reduce ***
// - executes a provided reducer function once for each array element and the result of the calculation on the previous element is passed to the next element
// - returns a single value after running the reducer across all elements
// Example 1: using reduce to calculate the sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product);

let zbir = 0;
for (const num of numbers) {
  zbir += num;
}
console.log(zbir);

// Example 2: using reduce to calculate the average age of users
const averageAge =
  users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log(averageAge);

// *** sort ***
// - sorts the elements of an array in place and returns the reference to the same array, now sorted
const numbersToSort = [
  5, -3, 12, -8, 9, -4, 7, -1, 20, -15, 6, -10, 18, -2, 11, -13,
];

// numbersToSort.sort((a, b) => a - b); // Ascending
// console.log("Ascending", numbersToSort);

numbersToSort.sort((a, b) => b - a); // Descending
console.log("Descending", numbersToSort);
