// When we run a JavaScript file in Node, Node does not (by default) treat .js files as ES modules.
// We need either a package.json with "type": "module", or the .mjs file extension, to let Node know to load the file as an ES module.
let colors = require("colors");

console.log("Hello world".blue);
let getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

let displayNumber = (number) => {
  if (number % 2 === 0) {
    console.log(`The number ${number} is even`.green);
  } else {
    console.log(`The number ${number} is odd`.red);
  }
};

let randomNumber = getRandomNumber();
// console.log("Added new text!");

displayNumber(randomNumber);
