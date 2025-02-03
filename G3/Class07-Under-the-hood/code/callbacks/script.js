// Callback function is a function that is passed as an argument to another function and is expected to be executed after some async operation is completed
// Callback functions are used very often during the development process

// HIGHER ORDER FUNCTIONS
let numsArray = [1, 2, 3, 4, 5];
// 1st way
// numsArray.forEach((num) => console.log(num));
// 2nd way
numsArray.forEach(function (num) {
  console.log(num);
});

// HANDLING EVENTS
// 1st
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("The button is clicked");
// });

// 2nd
function logMessage() {
  console.log("The button is clicked");
}
document.getElementById("btn").addEventListener("click", logMessage);

// MAKING API REQUESTS
const API_URL = "https://official-joke-api.appspot.com/jokes/programming/ten";

function getData(url, printFunction) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      printFunction(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function printDataInConsole(data) {
  console.log(data);
}

// getData(API_URL, printDataInConsole);

// getData(API_URL, (data) => {
//   console.log(data);
// });

// getData(API_URL, function (result) {
//   console.log(result);
// });

// console.log itself is passed as a callback.
// Since console.log is a function that takes one argument and logs it, it works the same way as above
// The only difference is that:
// console.log(data) → Executes immediately.
// console.log → Passes the function reference, which gets called later.
// getData(API_URL, console.log);

// ASYNCHRONOUS OPERATIONS
function asyncOperation(callback) {
  console.log("STARTING...");
  setTimeout(() => {
    const result = "COMPLETED";
    callback(result);
  }, 3000);
  console.log("THIS WILL LOG IN CONSOLE");
}
function callbackFunction(str) {
  console.log(str);
}

asyncOperation(callbackFunction);
