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

//What does the HOF return (Memorize the ruturn types by practice)
//Does the HOF mutate the orginal array (Not knowing this can lead to very nasty mutability bugs)

//1. forEach (doesn't mutate array, used for mutating the child elements, returns undefined)

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

//2. filter (doesn't mutate, returns new array)

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

//3. map (doesn't mutate, returns new array with exact same number of elements as original)

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

//with reduce (doesn't mutate, returns a new user defined value)

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

//5. find (doesn't mutate, either returns the first found element or returns undefined)

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

//6. some (doesn't mutate, returns boolean)

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(
  "Some Output",
  numArr.some(num => num > 10)
);

//7. every (doesn't mutate, returns boolean)

console.log(
  "Every Output",
  numArr.every(num => num > 0)
);

//8. sort (MUTATE ARRAY)

const numArrThree = [1, 3, 52, 3, 2, 4, 109, 2, 23, 1, 2];

console.log("Numbers before sort", numArrThree);

numArrThree.sort((a, b) => a - b);

console.log("Numbers after sort", numArrThree);

console.log("Students before sort", students);

const studentsCopy = students.map(student => student);
studentsCopy.sort((a, b) => a.age - b.age);

console.log("Students after sort", students);
console.log("Students copy after sort", studentsCopy);

//Method Chaining
const oldButGoodStudents = students
  .filter(student => student.age > 25)
  .map(
    student => `${student.firstName} ${student.lastName}, Age: ${student.age}`
  );

console.log(oldButGoodStudents);

//IIFE

function app() {
  //ENTIRE APPLICATION CODE
  const inAppFunc = () => {
    console.log("do something important");
  };

  inAppFunc();
}

(function () {
  //Important declarations

  app();
  console.log("I am called from an iife");
})();

app();
