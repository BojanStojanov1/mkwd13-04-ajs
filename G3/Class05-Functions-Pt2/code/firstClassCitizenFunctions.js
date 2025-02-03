// Storing function as a variable
const sayHello = (userName) => {
  return `Hi there ${userName}`;
};

function add(first, second) {
  return first + second;
}

const sumFunction = add;
console.log(sumFunction(5, 10));

function subtract(first, second) {
  return first - second;
}

function multiply(first, second) {
  return first * second;
}

function divide(first, second) {
  if (second === 0) {
    return "Cannot divide by zero.";
  }
  return first / second;
}

const operations = [add, subtract, multiply, divide];
console.log(operations[0](5, 10));

// Using a function as an argument
function operation(func, firstNumber, secondNumber) {
  return func(firstNumber, secondNumber);
}

console.log(operation(subtract, 20, 10));
console.log(operation(add, 20, 10));
console.log(operation(multiply, 20, 10));

// Returning a function from another function
const greetingGenerator = (language) => {
  switch (language.toLowerCase()) {
    case "english":
      return (name) => {
        console.log(`Hello ${name}`);
      };
    case "spanish":
      return (name) => {
        console.log(`Hola ${name}`);
      };
    case "french":
      return (name) => {
        console.log(`Bonjour ${name}`);
      };
    default:
      console.log("Unsupported language");
      return null;
  }
};

const greetInEnglish = greetingGenerator("english");
const greetInSpanish = greetingGenerator("spanish");
const greetInFrench = greetingGenerator("french");
// console.log(greetInEnglish);
greetInEnglish("Alice");

// *** A function with properties and a method ***
const taskHandler = (taskName) => {
  console.log(`Executing task ${taskName}.`);
  return `Task ${taskName} completed!`;
};

taskHandler.defaultTask = "learn coding";
taskHandler.description = "This is a task handler function.";

// Getting property values from the function
const defaultTaskResult = taskHandler(taskHandler.defaultTask);
console.log(defaultTaskResult);

// Adding the method to the function
taskHandler.customTaskResult = (taskName, customAction) => {
  return `The result fot the task ${taskName}: ${customAction()}`;
};
const customResult = taskHandler.customTaskResult("play soccer", () => {
  return "still in progress.";
});
console.log(customResult);

// *** Function arguments ***
function getLongestString(firstString, secondString, thiedString) {
  console.log(arguments);
  console.log(arguments[0]); // first argument
  console.log(arguments[1]); // second argument
  console.log(arguments[2]); // third argument
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

getLongestString("John", "Doe", "Academy for Programming");
