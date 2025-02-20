// Import greetService module for greetings
const greetService = require("./modules/greetService.js");
// Import fileService module for file operations
const fileService = require("./modules/fileService.js");
// Import the colors module for styling the console output
require("colors")

console.log("================ This is the main JS file ================".america);

let boban = "Bob";
console.log(boban);

greetService.sayHello(boban);
greetService.sayBye("John");


console.log("");
console.log("=========== Working with File System ===========");

// Write new text to the file (overwrites existing content)
// \n => new line
fileService.addText("Hello, this is the first line.\n")

// Append additional text to the file
fileService.appendText("This is the second appended line.\n")

// Read and display the contents of the file
const content = fileService.readText();
console.log("The File content: \n", content)


console.log("")
console.log("=========== Using the 'colors' module (library) ===========".america)

console.log("This is red".red);
console.log("This is green".green);
console.log("This is underlined".underline);
console.log("This is italic".italic);