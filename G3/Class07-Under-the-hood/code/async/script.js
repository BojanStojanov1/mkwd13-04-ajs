// ***Synchronous execution***
// code is executed sequentially, one line at a time
// each line of code must be completed before moving on to the next one
// blocking nature

const greetingMessage = "Hello world!";
function firstFunction() {
  console.log("First function!");
}

function secondFunction() {
  console.log("Second function!");
}

// firstFunction();
// secondFunction();
// console.log(greetingMessage);

// console.log("Executed before SetTimeout()");
// setTimeout(() => {
//   console.log("This is printed after");
// }, 3000);
// console.log("This is also executed before SetTimeout()");

// setInterval(() => {
//   console.log("This is printed after 2 seconds");
// }, 2000);

function first() {
  setTimeout(() => {
    console.log("First thing");
  }, 1000);
  console.log("Second thing insinde the first function");
}

function second() {
  console.log("Second thing");
}

// first();
// second();

let elapsedTime = 0;
let stopWatch = null;

function start() {
  if (!stopWatch) {
    stopWatch = setInterval(() => {
      elapsedTime++;
      console.log(`Elapsed time: ${elapsedTime}`);
    }, 1000);
  }
}

function stop() {
  clearInterval(stopWatch);
  stopWatch = null;
}

function reset() {
  stop();
  elapsedTime = 0;
  console.log("Stopwatch reset");
}

document.getElementById("start").addEventListener("click", () => {
  start();
});

document.getElementById("stop").addEventListener("click", () => {
  stop();
});

document.getElementById("reset").addEventListener("click", () => {
  reset();
});
