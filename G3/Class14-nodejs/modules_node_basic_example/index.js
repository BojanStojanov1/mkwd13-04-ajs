const sayHello = (name) => {
  console.log(`Hello ${name}`);
};
sayHello("John");

// will throw an error because window object doesn't exist in node runtime environment
// console.log(window);

// The Node.js Global Object is a built-in object that provides global variables and functions accessible throughout the Node.js runtime environment.
// It is analogous to the window object in browsers but tailored for server-side JavaScript.
// These are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module.
// console.log(global);

// The “process” object use to get current Node.js process details & also give control over that process.
// console.log(process);

// console.log(module);
// console.log(process.argv);

setTimeout(() => {
  console.log("Delayed for 1 second");
}, 1000);

process.stdout.write("Enter something: ");

process.stdin.on("data", (input) => {
  const userInput = input.toString().trim();
  console.log(`You entered: ${userInput}`);
  //   process.exit();
});

process.exit();
