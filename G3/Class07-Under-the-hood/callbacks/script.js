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
const URL = "https://official-joke-api.appspot.com/jokes/programming/ten";
