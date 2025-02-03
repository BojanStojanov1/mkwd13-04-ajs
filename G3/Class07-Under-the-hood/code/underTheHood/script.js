// STACK VS HEAP MEMORY
// JavaScript will keep on stack whatever it knows at compile time the size of
// Primitive data types have a fixed size so they can be put on the stack, as well as references to objects -- this is why you have size limitations.

// Objects and functions on the other hand don't have a known fixed size at compilation time so they need to be stored in a dynamic place (heap).
// It allocates as much memory as it's needed.
// The allocated memory can be changed at a runtime - lets say add new property or methid to an object

// The stack will be used to get to the heap as well (remember, refference is kept on the stack).

// When the stack does not contain the function reference or the object reference, it will be garbage collected and the heap will be freed up.

// JavaScript is single-threaded, meaning it can only do one thing at a time. But it feels asynchronous because of the Event Loop.
// Think of JavaScript as a chef in a kitchen:
// Call Stack = The chef’s To-Do List (tasks to complete).
// Web APIs = Kitchen helpers (oven, microwave, timers, etc.).
// Callback Queue = Orders waiting to be processed.
// Event Loop = The manager checking if the chef is free to take another order.

//Chef (JS Engine) checks the To-Do List (Call Stack).
//If there’s a task, he completes it immediately.
console.log("Start cooking"); // Step 1 - Prints immediately because it’s synchronous.
console.log("Put pasta in boiling water"); // Step 2
// If a task needs a helper (Web API), the chef hands it over.
setTimeout(cookPasta, 3000);

// Chef continues with other tasks while waiting for helpers.
console.log("Chop veggies"); // Step 3 - Gets logged before Step 5 because JavaScript doesn’t wait.

// Chef continues with other tasks while waiting for helpers.
console.log("Prepare sauce"); // Step 4 - Gets logged also before Step 5 because JavaScript doesn’t wait.

function cookPasta() {
  console.log("Finish cooking pasta");
}
