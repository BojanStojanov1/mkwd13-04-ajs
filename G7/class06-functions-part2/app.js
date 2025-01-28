console.log("part2 functions are ready to go");

//Fuctions as first class citizens

//1. Stored in a variable
const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;

const multiplyTwoNumbers = function (numOne, numTwo) {
  return numOne * numTwo;
};

console.log(addTwoNumbers(10, 20));

//2. Stored in an array

const mathFunctions = [
  (numOne, numTwo) => numOne - numTwo,
  addTwoNumbers,
  multiplyTwoNumbers,
];

console.log(mathFunctions);

const subFunc = mathFunctions[0];

console.log(subFunc(20, 15));

console.log(mathFunctions[0](10, 8));

//3. Used as an argument in another function (EXTREMELY COMMON AND VERY IMPORTANT)

const calculator = (operatorFunc, numOne, numTwo) => {
  console.log(operatorFunc);

  const result = operatorFunc(numOne, numTwo);

  return result;
};

const resultOneCalc = calculator(addTwoNumbers, 50, 75);
const resultTwoCalc = calculator(multiplyTwoNumbers, 50, 75);
const resultThreeCalc = calculator((numOne, numTwo) => numOne - numTwo, 50, 75);
const resultFourCalc = calculator((numOne, numTwo) => numOne / numTwo, 50, 80);

console.log(resultOneCalc, resultTwoCalc, resultThreeCalc, resultFourCalc);

document.querySelector("#clickBtn").addEventListener("click", event => {
  console.log("clicked");
  console.log(event);
});

//4. Return a function from another function

const calculatorTwo = operator => {
  if (operator === "+") return (numOne, numTwo) => numOne + numTwo;

  if (operator === "*") return (numOne, numTwo) => numOne * numTwo;

  return () => {
    console.log("Invalid Operator");
  };
};

const crazyArrow = numOne => numTwo => numOne + numTwo;

console.log(crazyArrow(5)(25));

const addFunc = calculatorTwo("+");

console.log(addFunc);

console.log(addFunc(10, 19));

console.log(calculatorTwo("*")(2, 3));

//5. Functions with properties and methods

const printHello = name => {
  console.log(`Hello there ${name}`);
};

printHello("John");

printHello.defaultName = "Bob";

console.log(printHello.defaultName);

printHello(printHello.defaultName);

//Getting all functions arguments

function printFullName(firstName, lastName) {
  console.log(arguments);

  console.log(`${firstName} ${lastName}`);
}

printFullName("John", "Doe", true, 1000, "remainder");

//HIGHER ORDER ARRAY FUNCTIONS

const numsArr = [21, 10, 5, 4, 54, 3, 2];

const arrayMapper = (func, arr) => {
  const resultArr = [];

  for (let el of arr) {
    const result = func(el);

    resultArr.push(result);
    console.log(result);
  }

  return resultArr;
};

const arrMapOne = arrayMapper(num => num * num, numsArr);
const arrMapTwo = arrayMapper(num => `${num}kg`, numsArr);
const arrMapThree = arrayMapper(num => num + 20, numsArr);

console.log(arrMapOne, arrMapTwo, arrMapThree);

const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    averageGrade: 4,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    averageGrade: 3,
  },
  {
    firstName: "Susan",
    lastName: "Sarandon",
    age: 17,
    averageGrade: 3,
  },
  {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 30,
    averageGrade: 2,
  },
  {
    firstName: "Alice",
    lastName: "Ripley",
    age: 18,
    averageGrade: 5,
  },
  {
    firstName: "Robert",
    lastName: "Duvall",
    age: 50,
    averageGrade: 4,
  },
  {
    firstName: "Ricky",
    lastName: "Balboa",
    age: 16,
    averageGrade: 1,
  },
];

//1. forEach

//without forEach
const printStudentInfo = students => {
  for (let student of students) {
    console.log(
      `${student.firstName} ${student.lastName}, Age: ${student.age}`
    );
  }
};

// printStudentInfo(students);

//with forEach
//!forEach doesn't return a value, be careful when using it in code
students.forEach(student => {
  console.log(`${student.firstName} ${student.lastName}, Age: ${student.age}`);
});

//2. filter

//without filter
const filterStudents = students => {
  const resultArr = [];

  for (let student of students) {
    if (student.age < 18) resultArr.push(student);
  }

  return resultArr;
};

// console.log(filterStudents(students));

//with filter
const filteredStudents = students.filter(student => student.age < 18);

console.log(filteredStudents);

//3. map

const numbers = [-100, 3, 4, 1, 6, 5, 4, 7, 8];

//Without map
const multiplyNumbers = numArr => {
  const resultArr = [];

  for (let num of numArr) {
    resultArr.push(num * 8);
  }

  return resultArr;
};

const generateFullNames = students => {
  const resultArr = [];

  for (let student of students) {
    resultArr.push(`${student.firstName} ${student.lastName}`);
  }

  return resultArr;
};

console.log(multiplyNumbers(numbers));
console.log(generateFullNames(students));

//with map
const multipliedNumbers = numbers.map(num => num * 8);
const fullNames = students.map(
  student => `${student.firstName} ${student.lastName}`
);

console.log(multipliedNumbers);
console.log(fullNames);
//4. reduce

const numArrTwo = [-10, 1, 2, 3, 4, 5, 6, 7, 98, 9, 10, 11];

//without reduce
const sumNumbers = numbers => {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
};

// console.log(sumNumbers(numArrTwo));
// console.log(sumNumbers([1, 2, 3, 4]));

//with reduce

const sum = numArrTwo.reduce((acc, el) => acc + el, 0);

const smallNums = [1, 2, 3];

const sumTwo = smallNums.reduce((acc, num) => {
  console.log(`Accumulator: ${acc}`);
  console.log(`Num: ${num}`);
  console.log("========================");

  return acc + num;
}, 0);

console.log("The sums", sum, sumTwo);

const numbersData = numArrTwo.reduce(
  (acc, num) => {
    acc.sum += num;

    if (num % 2 === 0) acc.evens++;
    else acc.odds++;

    if (acc.max < num) acc.max = num;

    if (acc.min > num) acc.min = num;

    return acc;
  },
  { sum: 0, evens: 0, odds: 0, min: Infinity, max: -Infinity }
);

console.log(numbersData);

//5. find

//without find

const findStudent = students => {
  for (let student of students) {
    if (student.firstName === "Ronnie") return student;
  }
};

// console.log(findStudent(students));

//with find

const foundStudent = students.find(student => student.firstName === "Ronnie");

const filterJohn = students.filter(student => student.firstName === "Ronnie");

//6. some

//7. every

//8. sort

//IIFE

//Method Chaining
