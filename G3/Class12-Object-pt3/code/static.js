console.log("We're here");

class Calculator {
  // Instance properties
  operations;
  name;

  constructor(name) {
    this.operations = [];
    this.name = name;
  }

  // instance methods
  addToHistory(operation, result) {
    this.operations.push(`${operation}: ${result}`);
  }

  getHistory() {
    return this.operations;
  }

  static add(a, b) {
    const result = a + b;
    // Note: static methods can't access instance properties directly
    // this.addToHistory() would not work here
    return result;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// using static methods
console.log(Calculator.add(5, 5));
console.log(Calculator.subtract(10, 3));
console.log(Calculator.multiply(5, 5));

// using instance methods
const myCalc = new Calculator("Ivan's Calculator");
const result = Calculator.add(5, 3);
myCalc.addToHistory("addition(5,3)", result);
console.log(myCalc.getHistory());

// const calculator = new Calculator("Test")
// calculator.addToHistory()
