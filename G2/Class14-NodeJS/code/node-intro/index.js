const greetService = require("./modules/greetService.js")
const fileService = require("./modules/fileService.js");
const { log } = require("console");

console.log("================ This is the main JS file ================");

let boban = "Bob";
console.log(boban);

greetService.sayHello(boban);
greetService.sayBye("John");


console.log("");
console.log("=========== Working with File System ===========");

fileService.addText("Hello, this is the first line.\n")
fileService.appendText("This is the second appended line.\n")

const content = fileService.readText();
console.log("The File content: \n", content)