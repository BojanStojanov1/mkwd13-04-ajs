console.log("Under the hood ready to go");

let x = 1;

let y = 2;

console.log(x + y);

function multiply(num, multiplier) {
  return num * multiplier;
}

function squareNumber(num) {
  return multiply(num, num);
}

console.log(squareNumber(10));

console.log("Before set timeout");

// setTimeout(() => {
//   console.log("Inside set timeout");
//   console.log(squareNumber(52));
// }, 1000);

// setTimeout(() => {
//   console.log("I am the second timeout");
// }, 500);

// console.log("After Set Timeout");

let intervalId = null;

function startCounter() {
  let counter = 0;

  intervalId = setInterval(() => {
    counter++;
    console.log(counter);
  }, 1000);

  console.log("Below interval");
}

function stopCounter() {
  clearInterval(intervalId);
}

// startCounter();

setTimeout(() => {
  stopCounter();
}, 8000);

document.querySelector("#clickBtn").addEventListener("click", () => {
  console.log("click btn");
  stopCounter();
});

const printFirstName = callback => {
  setTimeout(() => {
    console.log("John");
    callback();
  }, 1500);
};

const printLastName = () => {
  setTimeout(() => {
    console.log("Doe");
  }, 1000);
};

printFirstName(printLastName);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => {
    // console.log(res);
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

console.log("After fetch");
