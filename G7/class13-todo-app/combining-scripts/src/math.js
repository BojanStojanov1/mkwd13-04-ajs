export const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;

export const subtractTwoNumbers = (numOne, numTwo) => numOne - numTwo;

const multiplyTwoNumbers = (numOne, numTwo) => numOne * numTwo;

const divideTwoNumbers = (numOne, numTwo) => numOne / numTwo;

export const printFullName = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

export default { multiplyTwoNumbers, divideTwoNumbers };
