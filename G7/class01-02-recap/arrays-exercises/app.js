console.log("array exercises online");

// ## Generating arrays

// - Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// - Generate an array that has all the numbers that are divisible by 4 from 1 to 1000
// - Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

// const divisbleByThree = [];
// const divisbleByFour = [];
// const endingInOne = [];

// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0) divisbleByThree.push(i);

//   if (i % 4 === 0) divisbleByFour.push(i);

//   if (i % 10 === 1) endingInOne.push(i);
// }

// console.log(divisbleByThree, divisbleByFour, endingInOne);

function generateArrays() {
  const divisbleByThree = [];
  const divisbleByFour = [];
  const endingInOne = [];

  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) divisbleByThree.push(i);

    if (i % 4 === 0) divisbleByFour.push(i);

    if (i % 10 === 1) endingInOne.push(i);
  }

  return {
    divisbleByThree,
    divisbleByFour,
    endingInOne,
  };
}

const arrays = generateArrays();

console.log("arrays", arrays);

//maxNumber needs to be dynamic
//divisor needs to be dynamic
//remainder needs to be dynamic
//it will return the output array

function generateNumArray(maxNumber, divisor, remainder = 0) {
  if (divisor === 0) return;

  const resultArr = [];

  for (let i = 1; i <= maxNumber; i++) {
    if (i % divisor === remainder) resultArr.push(i);
  }

  return resultArr;
}

const divisbleByThree = generateNumArray(1000, 3);
const divisbleByFour = generateNumArray(1000, 4);
const endingInOne = generateNumArray(1000, 10, 1);
const randomTest = generateNumArray(20000, 21, 3);

console.log(divisbleByThree, divisbleByFour, endingInOne, randomTest);

// - Create a function that cleans an array of any values and leaves only STRINGS
// - Create a function that cleans an array of any values and leaves only NUMBERS
// - Create a function that cleans undefined, null, NaN, 0 and "" and leaves all other values

const testArr = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

function filterStrings(arr) {
  const filteredArr = [];

  for (let el of arr) {
    if (typeof el === "string") filteredArr.push(el);
  }

  return filteredArr;
}

console.log(filterStrings(testArr));

function filterNumbers(arr) {
  const filteredArr = [];

  for (let el of arr) {
    if (typeof el === "number" && !Number.isNaN(el)) filteredArr.push(el);
  }

  return filteredArr;
}

console.log(filterNumbers(testArr));

function filterTruthy(arr) {
  const filteredArr = [];

  for (let el of arr) {
    if (el) filteredArr.push(el);
  }

  return filteredArr;
}

if (null) console.log("works");

console.log(filterTruthy(testArr));
