const sayHello = (name) => {
  console.log(`Hello ${name}!`);
};

// console.log and setTimeout are both functions that are part of the global objects and depending on the environment where they are execited, a prefix (window/global) is added
sayHello("John");
// The Node.js Global Object is a built-in object that provides global variables and functions accessible throughout the Node.js runtime environment.
// It is analogous to the window object in browsers but tailored for server-side JavaScript.
// These are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module.
// console.log("GLOBAL:", global);

// The “process” object use to get current Node.js process details & also give control over that process.
// console.log("PROCESS:", process);

console.log("MODULE", module);
// console.log(window); // will throw an error because there is no window object in node

// The setTimeout function will not execute if I uncomment the last line
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");

// The process.argv array contains the command-line arguments.
// The first element is the path to Node.js, the second element is the path to the script being run, and subsequent elements are the command-line arguments.
// console.log(process);

// The process.argv in node is used to access and interact with the command-line arguments.
// It is an array that contains the command line arguments and helps user to interact node app using CLI.
// process.argv[0]: is the process execution path
// process.argv[1]: is the path for the js file.
// process.argv[2] and more: other items in the array are the additional arguments passed by the user.
console.log(process.argv);

// This is asynchronous non-blocking operation
process.stdout.write("Enter something: ");

// Process (not winddow/DOM event)
// Node.js has different events than the DOM
process.stdin.on("data", (input) => {
  const userInput = input.toString().trim();
  console.log(`You entered: ${userInput}`);
  process.exit();
});

// process.exit(); // it wont wait us to enter something because process.stdin.on callback function is asynchronous and non blocking
