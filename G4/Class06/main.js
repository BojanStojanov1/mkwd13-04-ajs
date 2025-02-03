// gives some sort of strictness to the script
'use strict';

//  myNumber = 4;	// in strict mode we cannot assign a value to a variable that is not declared

// function myFunction(num1, num1) {	// also we are not allowed to have parameters with same names

// }

// let arguments = 5;	// we cannot define variables with names that are JavaScript reserved keyword
// let eval = 5;

// .reduce() 
const numbers = [5, 2, 4, 3, 1];

// calculate the sum with .reduce()
let sum = numbers.reduce(
	(acc, curr, ind, arr) => {
		// acc -> accumulator, the value that changes on every iteration (this is the value that we build the result value on)
		// curr -> current, the current value of the array for the current iteration
		// ind -> index, the current index of the element, starts from 0
		// arr -> array, the original array

		console.log(`Index: ${ind}, Acc: ${acc}, Curr: ${curr}`);
		acc = acc + curr;

		// rule #1: we ALWAYS must return the accumulator because it is passed to the next iteration
		return acc;
	},
	0	// initial value of the accumulator, if not passed, the first element of the array is automatically given as initial value
);

// .filter() -> returns a new array with elements that satisfy the condition in the callback function
const even = numbers.filter(num => num % 2 === 0);

// .sort() -> sort the array by some criteria
/*
	The compare function takes two elements (a and b) and returns:
		- negative value (a - b < 0): Places a before b
		- zero (a - b === 0): Keeps the order unchanged
		- positive value (a - b > 0): Places b before a
*/
let sortedNumbers = numbers.sort((a, b) => {
	// return a - b;
	return b - a;
});

/*
	.sort() returns a sorted array, BUT it also sorts the original array
	this is different from the previous HOFs (Higher Order Functions) as .map() and .filter() 
	as they returned a new array without modifying the original array
*/

// does not copy the array, because arrays are worked with BY REFERENCE
const numbersCopy = numbers;

// we can use .map() to create an actual copy
const actualCopy = numbers.map(num => num);

// or we can simply create a function that does that
function copyArray(array) {
	// local array initialization is a brand new array in memory
	let copiedArray = [];
	array.forEach(item => copiedArray.push(item));

	// we return that new array
	return copiedArray;
}

// then we simply call the method with the array that we want to copy
const copy2 = copyArray(numbers);

console.log(numbers);
console.log(sortedNumbers);
console.log(numbersCopy);
console.log(actualCopy);

// sorting numbers might be confusing at first
const numbers2 = [1, 2, 3, 11, 12, 9, 111, 10];

/*
	this seems like it should sort the array correctly, but in console we see:
	[1, 10, 11, 111, 12, 2, 3, 9] -> changed a bit, but definitelly not sorted

	this is because .sort() under the hood, changes each value to string and compares the ASCII code of the string
	(remember working with strings and string comparison in JavaScript Basic course?)
*/
numbers2.sort();

// always provide a callback function to sort numbers correctly
numbers2.sort((a, b) => {
	// return a - b;
	return b - a;
});

console.log(numbers2);

// however, if you need to sort strings alphabetically you can do it without callback function, .sort() does it automatically
const names = ['Bob', 'Mel', 'Jill'];
names.sort();
console.log(names)

let students1 = [
	{ firstName: "Bob", lastName: "H", grades: [1, 2, 5], age: 19 },
	{ firstName: "Mel", lastName: "B", grades: [2, 4, 3], age: 33 },
	{ firstName: "Jill", lastName: "M", grades: [3, 2, 3], age: 15 },
	{ firstName: "Lucky", lastName: "J", grades: [5, 5, 4], age: 18 },
	{ firstName: "Strike", lastName: "K", grades: [4, 3, 1], age: 16 },
	{ firstName: "Eric", lastName: "I", grades: [1, 4, 4], age: 17 }
]

// sorting an array of obejcts by some object property
/*
	in this case, we MUST return -1, 0, or 1
	- negative value (a - b < 0): Places a before b
	- zero (a - b === 0): Keeps the order unchanged
	- positive value (a - b > 0): Places b before a
*/

students1.sort((studentA, studentB) => {
	// the if condition is checked against those ASCII codes
	// (remember working with strings and string comparison in JavaScript Basic course?)
	if (studentA.firstName < studentB.firstName) {
		return -1;
	}

	if (studentA.firstName > studentB.firstName) {
		return 1;
	}

	return 0;

	// you can also sort by any other primitive value propery
	// return studentA.age - studentB.age;
});
console.log(students1);

// Exercise: Sort the students array by average grade (lowest to highest average)
const sortedByAvgGrade = students1
	// .reduce() is performed on students1 array and returns a BRAND NEW array
	.reduce(
		(acc, curr) => {
			// 1. Calculate the avg grade for curr student
			let gradesTotal = 0;
			curr.grades.forEach(grade => gradesTotal += grade);
			let avg = gradesTotal / curr.grades.length;

			// 2. Add new property with average grade for the curr student
			curr.averageGrade = avg;

			// 3. Add the changed student object to the acc
			acc.push(curr);

			return acc;
		},
		[]
	)
	// we chain the .sort() HOF to the array that is returned from the .reduce() HOF
	// so, the .sort() is performed on the new array without sorting the original array
	.sort((studA, studB) => {
		return studA.averageGrade - studB.averageGrade;
	})


console.log(sortedByAvgGrade);
console.log(students1);

/* 
	.every()
		- similar to AND logical operator
		- returns boolean
			- true -> if all elements of the array satisfy the condition of the callback function
			- false -> if at least 1 element fails to satisfy the condition
*/
let ages = [18, 16, 30, 42, 9];
let allMature = ages.every((age) => age >= 18);

console.log(allMature);

let userPermissions = [
	{ name: "canOpenDashboard", value: true },
	{ name: "canClickButtons", value: true },
	{ name: "canChangeInputValues", value: true },
	{ name: "canOpenProfilePage", value: true },
];

/*
	this will check the array of permissions to see if every permission is given to the user
	so, if all permissions are true, that means the user can work with the application
*/
let canWorkWithApp = userPermissions.every((permission) => {
	return permission.value;
});

/*
	.some()
		- similar to OR logical operator
		- returns boolean
			- true if at least 1 element satisfies the condition
			- false if no elements satisfy the condition
*/
let ages1 = [18, 16, 30, 42, 9];
let someAreMature = ages1.some((age) => age >= 18);

/*
	.find()
		- finds first element that satisfies the condition
		- returns the actual element
		- returns undefined if no element is found
*/
let cities2 = ['Ohrid', 'Barcelona', 'New York', 'Berlin', 'Paris'];
const cityMatch = cities2.find((city) => {
	return city === 'Skopje';		// returns undefined
	// return city === 'Ohrid';	// returns Ohrid
});

console.log(cityMatch);

// we can also .find() entire objects
let userPermissions1 = [
	{ name: "canOpenDashboard", value: true },
	{ name: "canClickButtons", value: true },
	{ name: "canChangeInputValues", value: true },
	{ name: "canOpenProfilePage", value: true },
];
let permission = userPermissions1.find((permission) => permission.name === 'canClickButtons');
console.log(permission);

/*
	.findIndex()
		- finds the index of the first element that satisfies the condition
		- returns -1 if no element is found
*/
const cityIndex = cities2.findIndex((city) => {
	return city === 'Barcelona';
});
console.log(cityIndex);

/*
	.includes()
		- check if an array includes a string
		- returns boolean
*/
const includesValue = cities2.includes('Ohrid');
console.log(includesValue);

// .includes() can also be used on strings
let name = 'Zhanko';
const doesInclude = name.includes('P');
console.log(doesInclude);

/*
	.flat()
		- flattens an array to a given level
		- flattening means to change a multi-level (nested) array to a single-level array
			- multi-level (nested) array is an array that contains array elements
*/
const myList = [1, 2, 3, [4, 5, [6, 7]]].flat(3);
console.log(myList);

/*
	.flatMap()
		- combination of .map() and .flat()
		- first .map() is performed on each element and then the array is flattened

		- same can be achieved with .flat() and .map() if used separately, this HOF combines both of them
*/
let words = ["apple", "banana", "cherry"];
let characters = words.flatMap(word => word.split(''));
console.log(characters);

/*
	.split()
		- splits a string into an array by a given separator
*/

/*
	.join()
		- joins an array of strings to a single strings with a given separator
*/
let cities3 = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];
let joined = cities3.join(' | ');
console.log(joined);

/*
	.reverse()
		- used to reverse an array
		- reverses the original array as well
*/
const numbers3 = [2, 4, 6, 8];
numbers3.reverse();
console.log(numbers3)

// .split(), .join(), reverse() can be combined to to some useful operations
const dateFromServer = '2025-01-27T12:00:00';

// change the date to be shown in the following format: dd.mm.yyyy
const uiDate = dateFromServer	// '2025-01-27T12:00:00' -> as returned from API for example
	// split the string by some separator 'T' -> creates an array ['2025-01-27', '12:00:00'] 
	// and we take the first element 2025-01-27, which is in yyyy-mm-dd format, still not as we want
	.split('T')[0]
	// now we split the string '2025-01-27' by '-', creating an array of 3 elements ['2025', '01', '27']
	.split('-')
	// then we reverse the array -> ['27', '01', '2025']
	.reverse()
	// then we join the elements of the array with '.' -> '27.01.2025'
	.join('.');

console.log(uiDate);

/*
	.slice()
		- take a slice of an array from a given start index to a given end index
*/
const result = cities3.slice(1, 3);
console.log(result);

/*
	.splice()
		- used remove elements and replace elements in array
		- returns the removed elements
*/

/*
	.splice() - Implementation 1
		- remove element from index 1, and remove 1 element on the right
		- return the deleted element
		- modify the original array
*/
let deletedCity = cities3.splice(1, 1);
console.log(deletedCity)
console.log(cities3)

/*
	.splice() - Implementation 1
		- remove element from index 0, and remove 1 element on the right
		- return the deleted element
		- put 'Ohrid' at the removed element place
		- modify the original array
*/
let deletedCity1 = cities3.splice(0, 1, 'Ohrid');
console.log(deletedCity1)
console.log(cities3);


/*
	pure/impure function
		- pure
			- does not use global variables
			- does not modify the passed parameters
			- we should aim towards pure functions
		- impure
			- uses global variables
			- depends on external values
			- modifies the passed parameters
*/
function myPureFunction(numbers) {
	let newNumbers = [];

	newNumbers = numbers.map(num => num + 1);

	return newNumbers;
}

// impure function (using variable from global scope)
let value = 1;
function myImpureFunction(numbers) {
	let newNumbers = [];

	newNumbers = numbers.map(num => num + value);

	return newNumbers;
}

// impure function (mutating original data)
function myImpureFunction1(numbers) {
	numbers.forEach((num, index) => {
		num[index] = 5;
	});

	return numbers;
}