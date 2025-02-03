/* 
 Function that takes a number through a parameter and returns how many digits that number has
2. Function that takes a number through a parameter and returns if its even or odd
3. Function that takes a number through a parameter and returns if its positive or negative */

// 1.
const getDigits = (number) => {
  if (number < 0) return String(number).length - 1;
  return String(number).length;
};

const getDigitsTernary = (number) =>
  number < 0 ? String(number).length - 1 : String(number).length;

// 2.
const isEven = (num) => (num % 2 === 0 ? "even" : "odd");
const isEvenOne = (num) => num % 2 === 0;

// 3.
const isPositive = (num) => {
  if (num > 0) return "positive";
  return "negative";
};

const isPositiveTernary = (num) => (num > 0 ? "positive" : "negative");
